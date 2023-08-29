const http = require ("http");
const data = require ("./utils/data");

const PORT = 3001;

//module.exports = 
http.createServer((req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;

    if (url.includes ("/rickandmorty/character") ) {
        let id = Number(url.split("/").pop())
        let character = data.find (char => char.id === id)
        if (character) {
            res.writeHead (200, { "Content-type": "application/json" });
            res.end (JSON.stringify(character));
        } else {
            res.writeHead (400, { "Content-type": "application/json" });
            res.end (JSON.stringify({error: "Not Found"}));
        }
        
    }
}).listen(PORT, "localhost", ()=>{console.log(`servidor corriendo en puerto ${PORT}`)})