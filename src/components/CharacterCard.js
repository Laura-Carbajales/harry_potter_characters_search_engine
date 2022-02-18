import '../styles/components/CharacterCard.scss';
import DefaultImage from '../images/default_img.jpg';
import { Link } from 'react-router-dom';
import getSpecies from '../services/translateSpecies';

const CharacterCard = (props) => {
  const image = props.character.image ? props.character.image : DefaultImage;
  return (
    <Link
      to={`/character/${props.character.house}/${props.character.id}`}
      className='card'
      href='#'
    >
      <article className='card__article'>
        <div className='card__article--frame'>
          <img
            className='card__article--img'
            src={image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
        </div>
        <h4 className='card__article--title'>{props.character.name}</h4>
        <p className='card__article--text'>{getSpecies(props.character)}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
