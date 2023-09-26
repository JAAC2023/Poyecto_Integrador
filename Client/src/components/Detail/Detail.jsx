import styles from "../Detail/Detail.module.css"
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react";


export default function Detail({ characters }) {

    const { id } = useParams();
    
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({data}) => {
            if (data.name) {
                    setCharacter(data);
                } else{
                    window.alert ("No existe personaje")
                } 
            }) 
            return setCharacter({})
    },[id])
    
    return (
        <div className={styles.detail}>
            <h1 className={styles.titulo}>DETAIL</h1>

            <div className={styles.texto}>
                <h2 >Id........{character?.id}</h2>
                <hr />
                <h2>Nombre....{character?.name}</h2>
                <hr />
                <h2>Estado....{character?.status}</h2>
                <hr />
                <h2>Genero....{character?.gender}</h2>
                <hr />
                <h2>Origen....{character?.origin?.name}</h2>
                <hr />
                <h2>Especie...{character?.species}</h2>
            </div>
                <img className={styles.imagen} src= {character?.image} alt= "" />
            
        </div>
    )
    
}
