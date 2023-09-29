//! ASYNC AWAIT

const axios = require ('axios');

//const URL =  "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        if(data){
            const {name, gender, species, origin = origin.name, image, status} = data;
            res.status(201).json({name, gender, species, origin, id, image, status})
        } else {
            res.status(404).json({message: "Not Found"})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getCharById;

//!     EXPRESS

// const axios = require ('axios');

// //const URL =  "https://rickandmortyapi.com/api/character";

// const getCharById = (req, res) => {

//     const {id} = req.params;

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)

//     .then(({data}) => {
//         if(data){
//             const {name, gender, species, origin = origin.name, image, status} = data;
//             const character = {name, gender, species, origin, id, image, status};
//             res.status(201).json(character)
//         } else {
//             res.status(404).json({message: "Not Found"})
//         }
//     })
//     .catch(error => {
//         res.status(500).json({message: error})
//     })
// }

// module.exports = getCharById;



//!     WEB SERVER
// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) =>{
//         const {name, gender, species, origin = origin.name, image, status} = data;
//         const character = {name, gender, species, origin, id, image, status};
//         res.writeHead(200, {"Content-type" : "application/json"});
//         res.end (JSON.stringify(character))
//     })
//     .catch((reason) => {
//         res.writeHead(500, {"Content-type" : "text/plain"});
//         res.end(reason.message)
//     })
// }

// module.exports = getCharById;

