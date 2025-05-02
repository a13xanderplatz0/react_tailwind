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
});