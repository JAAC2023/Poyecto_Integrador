const express = require("express");
const server = require('./app')
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Servidor se esta leyendo en el puerto: ${PORT}`);
});
