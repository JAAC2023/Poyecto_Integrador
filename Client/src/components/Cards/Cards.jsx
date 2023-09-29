import styles from "../Cards/Cards.module.css"
import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {

   return (
      <div>
         <h1 className={styles.HOME}>HOME</h1>
         
         {characters?.map(({ id, name, image, gender, status, species, origin }) => (
         <Card
            key={id}
            id={id}
            name={name}
            image={image}
            gender={gender}
            status={status}
            species={species}
            origin={origin}
            onClose={onClose}
         />
         ))}
      </div>
   );
}
