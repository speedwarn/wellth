# wellth
a wealth and wellness app
Overview
Wellth is a cross-platform mobile application designed to provide users with daily, actionable tips for improving their financial and personal well-being. The app features a lovable mascot and engaging animations to create a fun and motivating user experience. Tips are inspired by principles from popular and highly-regarded books on success and personal finance, providing a curated source of daily wisdom.

Key Features
Daily Tips: Receive a new, unique tip every day focused on financial literacy or personal growth.

Customizable Notifications: Set a specific time to receive your daily tip via a push notification.

Tip Upvoting: "Upvote" tips that resonate with you the most, helping to personalize content over time.

Engaging Mascot: A cute, animated mascot provides a friendly face and celebratory animations for a delightful user experience.

Derivative Content: Tips are based on the core principles of New York Times bestseller books to provide high-quality, actionable advice without violating copyright.

Technology Stack
Frontend: React Native (with Expo)

Backend: Firebase Firestore

State Management: React Hooks

Navigation: React Navigation

Notifications: expo-notifications

Animations: Lottie or react-native-reanimated (for mascot animations)

Installation
Follow these steps to set up and run the project locally.

1. Clone the repository:

Bash

git clone https://github.com/speedwarn/wellth.git
cd wellth-app
2. Install dependencies:

Bash

npm install
3. Configure Firebase:

Create a new project in the Firebase Console.

Enable Firestore and create a tips collection.

In the project directory, create a new file at src/api/firebaseConfig.ts.

Copy your Firebase project's configuration snippet into this file:

TypeScript

// src/api/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
4. Run the app:

Bash

npm start
This will start the Expo development server. You can then run the app on your mobile device by scanning the QR code with the Expo Go app, or on a simulator.

Contributing
We welcome contributions! If you have suggestions for new features, bug reports, or want to contribute code, please feel free to open an issue or pull request.

License
This project is licensed under the MIT License.
