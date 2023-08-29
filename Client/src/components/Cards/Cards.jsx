import styles from "../Cards/Cards.module.css"
import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {

   return (
      <div className={styles.cards}>
         <h1 className={styles.HOME}>HOME</h1>
         {characters?.map(({ id, name, image, gender, status }) => (
         <Card
            key={id}
            id={id}
            name={name}
            image={image}
            gender={gender}
            status={status}
            onClose={onClose}
         />
         ))}
      </div>
   );
}