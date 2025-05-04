import React from 'react';
import app from '../firebase'; // Importa tu configuración de Firebase
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    //Obtener el auth de la aplicacion de firebase
    const auth = getAuth(app);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider(); // Crea un proveedor de Google
        signInWithPopup(auth, provider) // Abre la ventana emergente para iniciar sesión
            .then((result) => {
                // Éxito: Se obtiene el token y las credenciales
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log('Usuario autenticado:', user);
                console.log("Token:", token)
            }).catch((error) => {
                // Error
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("Error: ", errorCode, errorMessage, email, credential)
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSignIn}>Iniciar sesión con Google</button>
        </div>
    );
};

export default Login;