// const http = require ("http");
// const getCharById = require("./controllers/getCharById");
// const PORT = 3001;

// //module.exports =
// http.createServer((req, res)=>{

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url} = req;

//     if (url.includes ("/rickandmorty/character") ) {
//         let id = Number(url.split("/").pop())
//         getCharById(res, id)

//     } else {
//         res.writeHead (400, { "Content-type": "application/json" });
//         res.end (JSON.stringify({error: "Not Found"}));
//     }

// }).listen(PORT, "localhost", ()=>{console.log(`servidor corriendo en puerto ${PORT}`)})

const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");

//libreria dotenv -> guardar nuestras variables de entorno

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});
