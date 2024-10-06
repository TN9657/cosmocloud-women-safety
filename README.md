```
# Women Safety Website

This website is designed for women's safety, allowing users to capture and store a suspect's image, mark a Google Map destination, and send OTPs every 30 minutes during the journey. If the user fails to input the OTP within 30 seconds, the live location and image of the suspect are automatically sent to the nearest police station.

## 📂 Folder Structure

```
/women-safety-app │
├── /backend │ 
├── index.js # Main server file │
├── /config │
│ └── db.js # MongoDB connection │
├── /controllers │
│ └── userController.js # Controller for user-related actions │
└── /models │
└── userModel.js # MongoDB user schema │
├── /frontend │
├── index.html # Main HTML file │
├── style.css # Tailwind styles (CDN) │
├── /assets │
│ └── suspect.png # Placeholder for the suspect image │
└── app.js # JavaScript for frontend interactivity │
├── package.json # Dependencies and scripts
└── README.md # Project documentation
```

## 🌐 Live Project Link

You can access the live version of this project [here](https://your-live-project-link.com).

## 📽️ Project Video Demo

A demo video showcasing the project can be found [here](https://your-video-demo-link.com).

## 🚀 How to Set Up

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/women-safety-app.git
    ```

2. Navigate to the project folder:
    ```bash
    cd women-safety-app
    ```

3. Install backend dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    MONGO_URI=your-mongodb-connection-string
    ```

5. Run the backend server:
    ```bash
    npm start
    ```

6. Open the `index.html` file in the `frontend` directory to run the frontend.

## 📦 Dependencies

The following dependencies are required to set up this project:

- **Backend**: 
  - Node.js
  - Express
  - MongoDB Atlas (with Vector Search)
  
- **Frontend**:
  - HTML/CSS (Tailwind CSS CDN)
  - JavaScript

- **Other**:
  - Google Maps API
  - Google Gemini AI (Optional for future)

## 💻 How to Deploy

- Make sure MongoDB is set up correctly.
- Host the frontend on any static web hosting service.
- For the backend, use services like Heroku, AWS, or DigitalOcean.

---

## Steps to Add Project to GitHub (from the web):

### **Creating a GitHub Repository and Pushing Your Code:**

1. **Create a new repository on GitHub:**
    - Go to [GitHub](https://github.com/).
    - Sign in and click on the "+" icon in the top-right corner, then click **"New repository"**.
    - Name your repository (e.g., `women-safety-app`), add a description, and click **"Create repository"**.

2. **Push your local code to GitHub:**

    Assuming you have the code on your local machine, follow these steps using the terminal/bash:

    ```bash
    # Initialize the local repository
    git init
    
    # Add the remote repository
    git remote add origin https://github.com/your-username/women-safety-app.git

    # Stage all files for the first commit
    git add .

    # Commit the files
    git commit -m "Initial commit for women safety website"

    # Push the code to GitHub
    git push -u origin master
    ```

3. **Alternatively, if you are using GitHub's web interface:**
    - Go to your repository page.
    - Click on **Add File** -> **Upload Files**.
    - Drag and drop all your project files or manually upload them.
    - Click **Commit Changes**.

This will upload your code to GitHub. You can then access your repository, view the code, and share it with others.

---

Let me know if you need any changes or further instructions!
