const { Favorite } = require ("../DB_connection")

const postFav = async (req, res) => {

    try {

    const { id, name, origin, status, image, species, gender } =  req.body;

        if(![id, name, origin, status, image, species, gender].every(Boolean)) {
            return res.status(401).json({error: "Faltan datos"})
        }
        await Favorite.findOrCreate({
            where: { name },
            defaults: { id, origin:origin.name, status, image, species, gender}
        })
        const favorite = await Favorite.findAll()
        return res.status(200).json(favorite)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postFav