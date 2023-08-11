import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { removeFav } from "../Redux/action";


function Favorites({myFavorites, removeFavorite}) {
    return(
        <div>
            {myFavorites?.map(({id, name, image})=>{
                return <Card key={id} name={name} image={image} onClose={() => removeFavorite(id)} />
            })}
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFavorite: (id) => {dispatch(removeFav(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)