  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA7WZTGlyXpGNSrvQc5KSjDAsjSktC7Ss8",
    authDomain: "lumingjing-com.firebaseapp.com",
    projectId: "lumingjing-com",
    storageBucket: "lumingjing-com.appspot.com",
    messagingSenderId: "762603726112",
    appId: "1:762603726112:web:2e1cb5871e12d7b528e345",
    measurementId: "G-YSNBF76N59"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);