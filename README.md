Women Safety Project
This is a web-based application aimed at enhancing women’s safety by allowing them to take a photo of a suspect, input a Google Maps destination marker, and receive OTPs every 30 minutes during their journey. If the user fails to fill the OTP within 30 seconds, their live location and suspect image are sent to the nearest police station.

Project Links
Video Demo: Link to video demo (Upload the video and add the actual link)
Live Project: Link to live project (Add the link if deployed)
Folder Structure
bash
Copy code
women-safety-project/
│
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   ├── controllers/
│   │   ├── imageController.js   # Handle suspect image capturing
│   │   ├── otp.js               # OTP generation and validation
│   │   └── location.js          # Handle live location and Google Maps
│   ├── models/
│   │   ├── user.js              # User model (authentication)
│   │   ├── journey.js           # Journey model (tracks OTP, suspect image, location)
│   ├── routes/
│   │   ├── authRoutes.js        # Authentication routes (login, register)
│   │   ├── otpRoutes.js         # OTP routes (send/verify)
│   │   ├── imageRoutes.js       # Image upload routes
│   │   └── locationRoutes.js    # Routes for location updates
│   ├── server.js                # Express server setup
│   └── package.json             # Dependencies for backend
│
├── frontend/
│   ├── css/
│   │   └── style.css            # Custom CSS (with Tailwind integrated)
│   ├── js/
│   │   ├── otp.js               # OTP handling logic on frontend
│   │   ├── imageCapture.js      # Capture and upload suspect image
│   │   └── location.js          # Google Maps destination marker input
│   ├── index.html               # Main HTML page
│   ├── auth.html                # Authentication (login/signup) page
│   └── journey.html             # Journey page (with OTP input and image capture)
│
├── .env                         # Environment variables (MongoDB URI, Google API key)
└── README.md                    # Instructions to run the project
Dependencies
To run this project, you need to install the following dependencies:

Backend Dependencies (Node.js)
Express - Web framework for Node.js
Mongoose - MongoDB object modeling tool
Multer - For handling file uploads (suspect images)
Nodemailer - For sending OTP emails
dotenv - For environment variables
Tailwind CSS - For frontend styling
Frontend Dependencies (via CDN)
Tailwind CDN - Include via link in HTML.
Google Maps API - For location input.
Firebase Genkit - For Firebase integration.
MongoDB Atlas Vector Search - For storing user, image, and location data.
Google Gemini AI - For additional AI functionalities.
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/women-safety-project.git
cd women-safety-project
Install Node.js dependencies:

bash
Copy code
cd backend
npm install
Configure environment variables:
Create a .env file in the root of the backend/ directory and include the following:

bash
Copy code
MONGO_URI=<Your MongoDB URI>
EMAIL_USER=<Your email address>
EMAIL_PASS=<Your email password>
GOOGLE_MAPS_API_KEY=<Your Google Maps API key>
Run the backend:

bash
Copy code
npm start
Serve the frontend: Open frontend/index.html in a browser or use a local server:

bash
Copy code
npx serve frontend
