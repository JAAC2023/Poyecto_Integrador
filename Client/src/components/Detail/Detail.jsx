import { useParams } from "react-router-dom";

export default function Detail({ characters }) {

    const {id} = useParams();
    
    const character = characters?.filter(char => char.id === Number(id))[0];
    
    return (
        <div>
            <h1>DETALLES</h1>
            <h2>Id:      {character.id}</h2>
            <h2>Nombre:  {character.name}</h2>
            <h2>Estado:  {character.status}</h2>
            <h2>Genero:  {character.gender}</h2>
            <h2>Origen:  {character.origin.name}</h2>
            <h2>Especie: {character.species}</h2>
            <img src= {character.image} alt= "" />
        </div>
    )
    
}
