const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 3020

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error))

// Define the User Registration schema
const userRegistrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  agreeToTerms: {
    type: Boolean,
    required: true,
  },
  agreeToPrivacy: {
    type: Boolean,
    required: true,
  },
  subscribeNewsletter: {
    type: Boolean,
    default: false,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
})

// Define the Contact Form schema
const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: "",
  },
  urgency: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
})

// Create models
const UserRegistration = mongoose.model("UserRegistration", userRegistrationSchema)
const ContactForm = mongoose.model("ContactForm", contactFormSchema)

// Handle user registration
app.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, age, agreeToTerms, agreeToPrivacy, subscribeNewsletter } = req.body

    // Check if user already exists
    const existingUser = await UserRegistration.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered. Please use a different email.",
      })
    }

    // Create a new user registration
    const userRegistration = new UserRegistration({
      firstName,
      lastName,
      email,
      password, // In production, hash this password
      age,
      agreeToTerms,
      agreeToPrivacy,
      subscribeNewsletter,
    })

    // Save the user registration to the database
    await userRegistration.save()
    console.log("New user registered:", email)

    // Return success response
    res.status(201).json({
      success: true,
      message: "Account created successfully! Welcome to BrightMind.",
      data: {
        id: userRegistration._id,
        firstName: userRegistration.firstName,
        lastName: userRegistration.lastName,
        email: userRegistration.email,
      },
    })
  } catch (error) {
    console.error("Error registering user:", error)
    res.status(500).json({
      success: false,
      message: "An error occurred during registration. Please try again later.",
    })
  }
})

// Handle contact form submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, urgency, message } = req.body

    // Create a new contact form submission
    const contactSubmission = new ContactForm({
      name,
      email,
      phone: phone || "",
      urgency,
      message,
    })

    // Save the contact form to the database
    await contactSubmission.save()
    console.log("New contact form submitted:", email)

    // Return success response
    res.status(201).json({
      success: true,
      message: "Message sent successfully! We'll get back to you within 24 hours.",
      data: {
        id: contactSubmission._id,
        name: contactSubmission.name,
        email: contactSubmission.email,
        urgency: contactSubmission.urgency,
      },
    })
  } catch (error) {
    console.error("Error submitting contact form:", error)
    res.status(500).json({
      success: false,
      message: "An error occurred while sending your message. Please try again later.",
    })
  }
})

// Get all user registrations (for admin purposes)
app.get("/api/users", async (req, res) => {
  try {
    const users = await UserRegistration.find({}, "-password") // Exclude password field
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    })
  } catch (error) {
    console.error("Error fetching users:", error)
    res.status(500).json({
      success: false,
      message: "Error fetching users",
    })
  }
})

// Get all contact form submissions (for admin purposes)
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await ContactForm.find({})
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    })
  } catch (error) {
    console.error("Error fetching contact forms:", error)
    res.status(500).json({
      success: false,
      message: "Error fetching contact forms",
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BrightMind API is running",
    timestamp: new Date().toISOString(),
  })
})

// Start the server
app.listen(port, () => {
  console.log(`BrightMind API server started on http://localhost:${port}`)
  console.log("MongoDB connection: mongodb://localhost:27017/brightmind")
  console.log("Available endpoints:")
  console.log("- POST /api/register - User registration")
  console.log("- POST /api/contact - Contact form submission")
  console.log("- GET /api/users - Get all users (admin)")
  console.log("- GET /api/contacts - Get all contact forms (admin)")
  console.log("- GET /api/health - Health check")
})
