import Card from './Card';

export default function Cards({characters, onClose}) {

   return (
      <div>
         {characters?.map( ({id, name, image}) => (
            <Card
               key={id}
               id={id}
               name={name}
               image={image}
               onClose={onClose}
            />
         ))}
      </div>
   )
}
