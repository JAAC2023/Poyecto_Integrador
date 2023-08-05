import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardDetail from "./CardDetail";

export default function Detail({characters, onSearch}) {

    const {id} = useParams();
    console.log (id)

    // useEffect(()=>{
    //     return () => {id && onSearch(id)}
    // },[id])

    return(
        <div>
            <h1>Detalles del personaje</h1>
            {characters.map( ({id, name, status, species, gender, origin, image}) => (
                    <CardDetail
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                />
                
            ))}
            
        </div>
    )
}