const { User } = require ("../DB_connection")

const postUser = async (req, res) => {

    const { email, password } =  req.body;
    
    try {
        if(!email) return res.status(400).send("Falta el correo")
        if(!password) return res.status(400).send("Falta la contraseña")

        const userName = await User.findOne({where: {email}})

        if (userName) return res.status(400).send("Este email ya se encuentra registrado en la aplicación")
    
        const user = await User.findOrCreate({where: {email, password}})

        res.status(200).json({message: 'Usuario registrado correctamente'})

    } catch (error) {
        res.status(500).json({error: "upssss"})
    }
}

module.exports = postUser;