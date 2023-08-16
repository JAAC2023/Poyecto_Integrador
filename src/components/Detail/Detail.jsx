import CardDetail from "../CardDetail/CardDetail";

export default function Detail({ characters }) {
    return (
        <div>
        <h1>Detalles del personaje</h1>
        {characters.map(
            ({ id, name, status, species, gender, origin, image }) => (
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
            )
        )}
        </div>
    );
}
