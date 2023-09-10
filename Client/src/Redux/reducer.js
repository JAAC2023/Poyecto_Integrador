import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actio-Type"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, 
                myFavorites: payload, 
                allCharacters: payload 
            };
            // return{
            //     ...state,
            //     myFavorites: [...state.myFavorites, payload ],
            //     allCharacters: [...state.allCharacters, payload ]
            // }
            
        case REMOVE_FAV:
            return { ...state, 
                myFavorites: payload,
                allCharacters: payload
            };
            // return{
            //     ...state,
            //     myFavorites: state.myFavorites.filter(char => char.id !== Number(payload)),
            //     allCharacters: state.allCharacters.filter(char => char.id !== Number(payload))
            // }

        case FILTER:
            let filtrados = payload === "Genders" ? state.allCharacters : 
            state.allCharacters.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites: filtrados
            }

        case ORDER:
        let ordenados = state.allCharacters.sort((a, b) => { 
            return payload === "A" ? a.id - b.id : b.id - a.id
        })
            return{
                ...state,
                myFavorites: ordenados
            }
    
        default:
            return {...state}
    }
}

export default reducer