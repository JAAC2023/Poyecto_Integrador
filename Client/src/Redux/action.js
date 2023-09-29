import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actio-Type";

const endpoint = 'http://localhost:3001/rickandmorty/fav';

//export const addFav = (character) => {return {type: ADD_FAV, payload: character}}

//!______________________ASYNC AWAIT_________________________

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch ({type: ADD_FAV, payload: data});
        } catch (error) {
            console.log(error.message)
        }
    };
};

//export const removeFav = (id) => {return {type: REMOVE_FAV, payload: id}}

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endpoint}/${id}`);
            return dispatch({type: REMOVE_FAV, payload: data});
        } catch (error) {
            console.log(error.message)
        }
    };
};

export const filterCards = (gender) => {return {type: FILTER, payload: gender}}

export const orderCards = (order) => {return {type: ORDER, payload: order}}


//!_________________________EXPRESS_________________________
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character)
//         .then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAV,
//                 payload: data,
//             });
//         });
//     };
// };


// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint)
//         .then(({ data }) => {
//             return dispatch({
//                 type: REMOVE_FAV,
//                 payload: data,
//             });
//         });
//     };
// };
