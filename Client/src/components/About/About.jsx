import styles from "../About/About.module.css"
import foto from "../../img/Yo.jpg"

export default function About () {

    return(
        <div className={styles.div}>
            <h1 className={styles.ABOUT}>ABOUT</h1>
            <h1 className={styles.nombre}>Hola! mi nombre es Jose Abel</h1>
            <img src={foto} alt="foto" className={styles.foto}/>
            <p className={styles.p}>Tengo 27 años de edad, estoy en la etapa final de mi juventud 😅, pero aun así no pierdo
                mi motivación y la alegría de vivir. Aprender constantemente y poner en práctica el 
                nuevo conocimiento adquirido es unos de mis hobbies, al igual que viajar y pescar.

                La programación ha sido para mi la entrada a una nueva etapa que viene en mi vida,
                es un tema que encarreta y disfruto mucho, espero llevar el rumbo de mi destino
                y los de mi familia a un futuro próspero donde no exista la "necesidad" y sobren las opciones, y se que esto lo lograré con Henry.
                </p>
        </div>
        )
}