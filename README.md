# cosmocloud-women-safety
 Women safety project, which uses Firebase Genkit, MongoDB Atlas Vector Search, Google Gemini AI, and a frontend in HTML with Tailwind CDN.

1. Folder Structure
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






