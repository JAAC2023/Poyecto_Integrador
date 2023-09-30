const { User } = require ("../DB_connection")

const login = async (req, res) => {
    try {
        
    const { email, password } = req.query;

    if(!email || !password) return res.status(400).send("Faltan datos")

        const userName = await User.findOne({where: {email}})

        if (!userName) return res.status(404).send("Usuario no encontrado")
        
        return userName.password === password ? 
        res.status(202).json({access: true}) :
        res.status(403).send("Contraseña incorrecta")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = login;





// require ("dotenv").config()
// const { SERVER_EMAIL, SERVER_PASSWORD } = process.env;

// const login = (req, res) => {
//     const { email, password } = req.query;

//     if (SERVER_EMAIL === email && SERVER_PASSWORD === password) {
//         res.status(200).json({access: true})
//     }
    
//     res.status(403).json({access: false})
// }

// module.exports = login;