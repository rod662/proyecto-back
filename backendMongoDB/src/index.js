const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = 5000;

// Habilitar CORS antes de definir las rutas
app.use(cors());
app.use(express.json());

// Rutas de los módulos
app.use('/apli/clientes', require('../routes/routescliente'));
app.use('/apli/productos', require('../routes/routesproducto'));

// Enlazamos conexión base de datos
conectarBD();

app.listen(port, () => console.log("El servidor se conectó", port));

app.get('/', (req, res) => {
    res.send("Bienvenido, el servidor está configurado");
});