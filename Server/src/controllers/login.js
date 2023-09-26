require ("dotenv").config()
const { SERVER_EMAIL, SERVER_PASSWORD } = process.env;

const login = (req, res) => {
    const { email, password } = req.query;
    // const user = users.find( us => us.email === email && us.password === password)
    // user? res.json({access: true}) : res.status(404).json({access: false})

    if (SERVER_EMAIL === email && SERVER_PASSWORD === password) {
        res.status(200).json({access: true})
    }
    
    res.status(403).json({access: false})
}

module.exports = login;