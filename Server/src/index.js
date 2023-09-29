//const express = require("express");
require('dotenv').config();
const { SERVER_PORT } = process.env;
const server = require('./app')
const { conn } = require("./DB_connection")


conn.sync({ alter: true })
.then(() => {
    server.listen(SERVER_PORT, () => {
        console.log(`Servidor leyendose en el puerto: ${SERVER_PORT}`);
    });
})
.catch(err => window.alert(err.message))

    // server.listen(SERVER_PORT, async () => {
    //     await conn.sync({ force: false })
    //     console.log(`Servidor leyendose en el puerto: ${SERVER_PORT}`);
    // });

