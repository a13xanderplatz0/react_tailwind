// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqlATvaYrY8WSJARkwveLEgeSu4sUJ1e4",
    authDomain: "studyhub-b5d24.firebaseapp.com",
    projectId: "studyhub-b5d24",
    storageBucket: "studyhub-b5d24.firebasestorage.app",
    messagingSenderId: "296129047493",
    appId: "1:296129047493:web:36175edf2fae55d4fcf9ac",
    measurementId: "G-445WKH9M4W"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;

<<<<<<< HEAD
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

  const togglePasswordIcons = document.querySelectorAll(".toggle-password");

  togglePasswordIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      const targetId = icon.getAttribute("data-target");
      const passwordField = document.getElementById(targetId);

      if (passwordField) {
        const isPassword = passwordField.type === "password";
        passwordField.type = isPassword ? "text" : "password";

        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
      }
=======
            if (passwordInput && (passwordInput.type === 'password' || passwordInput.type === 'text')) {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                this.classList.toggle('fa-eye', isPassword);
                this.classList.toggle('fa-eye-slash', !isPassword);
            }
        });
>>>>>>> e63f51e27327c41bc77a70051dc4082df31a8910
    });

    ['loginForm', 'signupForm'].forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log(`${formId.replace('Form', '')} attempt:`);
                window.location.href = "index.html";
            });
        }
    });

    // Manejar inicio de sesión con Google
    document.getElementById('google-sign-up').addEventListener('click', () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // Usuario autenticado
                const user = result.user;
                console.log('Usuario autenticado:', user);

                // Redirigir al usuario o mostrar un mensaje
                window.location.href = "dashboard.html"; // Cambia a la página que desees
            })
            .catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
            });
    });
});