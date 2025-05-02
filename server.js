<<<<<<< HEAD
const express = require("express");
const authRoutes = require("./authRoutes");

console.log("authRoutes:", authRoutes); // Depuración

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
console.log("Iniciando servidor...");
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
=======
// Archivo: server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro servidor
    user: 'root', // Usuario de MySQL
    password: '', // Contraseña de MySQL
    database: 'studyhub' // Nombre de tu base de datos
});

// Conectar a MySQL
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para guardar datos del usuario
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al registrar el usuario');
            return;
        }
        res.status(200).send('Usuario registrado exitosamente');
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
>>>>>>> e63f51e27327c41bc77a70051dc4082df31a8910
});