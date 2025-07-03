# BrightMind Backend Setup

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)
- npm or yarn

## Installation

1. Create a new directory for the backend:
\`\`\`bash
mkdir brightmind-backend
cd brightmind-backend
\`\`\`

2. Initialize npm and install dependencies:
\`\`\`bash
npm init -y
npm install express mongoose cors bcryptjs dotenv
npm install -D nodemon
\`\`\`

3. Copy the server.js file to your backend directory

4. Start MongoDB:
\`\`\`bash
# On Windows
net start MongoDB

# On macOS (with Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
\`\`\`

5. Start the backend server:
\`\`\`bash
# Development mode with auto-restart
npm run dev

# Or production mode
npm start
\`\`\`

## API Endpoints

### User Registration
- **POST** `/api/register`
- Body: `{ firstName, lastName, email, password, age, agreeToTerms, agreeToPrivacy, subscribeNewsletter }`

### Contact Form
- **POST** `/api/contact`
- Body: `{ name, email, phone, urgency, message }`

### Admin Endpoints
- **GET** `/api/users` - Get all registered users
- **GET** `/api/contacts` - Get all contact form submissions
- **GET** `/api/health` - Health check

## MongoDB Collections

The server will create two collections:
1. `userregistrations` - Stores user registration data
2. `contactforms` - Stores contact form submissions

## Testing

You can test the API using tools like Postman or curl:

\`\`\`bash
# Test user registration
curl -X POST http://localhost:3020/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "age": "25-34",
    "agreeToTerms": true,
    "agreeToPrivacy": true,
    "subscribeNewsletter": false
  }'

# Test contact form
curl -X POST http://localhost:3020/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "555-1234",
    "urgency": "medium",
    "message": "I need help with anxiety management."
  }'
\`\`\`

## MongoDB Compass

To view the data in MongoDB Compass:
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Navigate to the `brightmind` database
4. View the `userregistrations` and `contactforms` collections
