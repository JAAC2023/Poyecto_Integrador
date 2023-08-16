
export default function CardDetail({id, name, image, status, species, gender, origin}) {

    return (
        <div key={id}>
            <h2>Id: {id}</h2>
            <h2>Nombre: {name}</h2>
            <h2>Estado: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <h2>Origen: {origin}</h2>
            <img src={image} alt=''/>
        </div>
    )
}