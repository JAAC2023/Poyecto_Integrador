const users = require ('../utils/users')

const login = (req, res) => {
    const {email, password} = req.query;
    // const user = users.find( us => us.email === email && us.password === password)
    // user? res.json({access: true}) : res.status(404).json({access: false})

    users.forEach( user => {
        if (user.email === email && user.password === password) {
            res.status(200).json({access: true})
        }
    })
    res.status(403).json({access: false})
}

module.exports = login;