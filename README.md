Preview : https://bright-mind-1-hwtn.vercel.app/

# BrightMind Backend Setup

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)
- npm or yarn

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
