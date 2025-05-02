// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqlATvaYrY8WSJARkwveLEgeSu4sUJ1e4",
  authDomain: "studyhub-b5d24.firebaseapp.com",
  projectId: "studyhub-b5d24",
  storageBucket: "studyhub-b5d24.firebasestorage.app",
  messagingSenderId: "296129047493",
  appId: "1:296129047493:web:36175edf2fae55d4fcf9ac",
  measurementId: "G-445WKH9M4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

function googleSignIn() {
  signInWithPopup(auth, googleProvider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("User signed in:", user);
    window.location.href = "profile.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error signing in:", errorCode, errorMessage);
  });
}

function handleAuthStateChanged(user) {
  user ? console.log("User is signed in:", user) : (console.log("User is signed out"), window.location.href = "index.html");
}

onAuthStateChanged(auth, handleAuthStateChanged);

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    document.getElementById("google-sign-in")?.addEventListener("click", googleSignIn);
  }

  const toggleButtons = document.querySelectorAll('.toggle-password');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const passwordInput = this.previousElementSibling;

      if (passwordInput) {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
      }
    });
  });

  ['loginForm', 'signupForm'].forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(`${formId.replace('Form', '')} attempt:`, data);
        alert(`${formId.replace('Form', '')} functionality would be implemented here`);
      });
    }
  });
});