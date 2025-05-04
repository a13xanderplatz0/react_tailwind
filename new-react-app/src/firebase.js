// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Agregar SDK para los productos de Firebase que desea utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de su aplicación web
// Para Firebase JS SDK v7.20.0 y posteriores, MeasurementId es opcional
const firebaseConfig = {
  apiKey: 'AIzaSyCqlATvaYrY8WSJARkwveLEgeSu4sUJ1e4',
  authDomain: 'studyhub-b5d24.firebaseapp.com',
  projectId: 'studyhub-b5d24',
  storageBucket: 'studyhub-b5d24.firebasestorage.app',
  messagingSenderId: '296129047493',
  appId: '1:296129047493:web:36175edf2fae55d4fcf9ac',
  measurementId: 'G-445WKH9M4W'
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;