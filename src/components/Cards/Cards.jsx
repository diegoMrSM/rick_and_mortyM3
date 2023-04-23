import Card from '../Card/Card.jsx';
import styled from "styled-components" // otra forma de usar estilos css que no es module

const Div = styled.div`
display:flex;
justify-content: space-evenly
`

export default function Cards(props) {
   const { characters } = props;
   return <Div>
      {characters.map((character, index ) =>( 
         <Card
            id = {character.id}
            key = {index}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
         />
         ))}
   </Div>;
}
