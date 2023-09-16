let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push (req.body);
    //console.log(myFavorites)
    res.json (myFavorites)
}

const deleteFav = (req, res) => {
    const {id}= req.params

    const eliminado = myFavorites.filter (fav => fav.id !== Number(id))

    console.log(eliminado)
    
    res.json (eliminado)
}

module.exports = {
    postFav,
    deleteFav,
}