// File: /api/config.js

// This serverless function runs securely on the backend.
export default function handler(request, response) {
  
    // It builds the config object from environment variables
    // that are stored securely on your hosting platform (e.g., Vercel).
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };
  
    // It sends the config to the frontend as a JSON response.
    response.status(200).json(firebaseConfig);
  }