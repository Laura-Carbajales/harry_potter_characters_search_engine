import '../styles/components/CharacterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = () => {
    if (props.characters.length > 0) {
      return props.characters.map((character) => {
        return (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        );
      });
    }
    return (
      <p className='container__text'>
        No hay ningún personaje que coincida con la palabra "{props.filterName}".
      </p>
    );
  };
  return (
    <section className='container'>
      <ul className='container__list'>{characterElements()}</ul>
    </section>
  );
};
export default CharacterList;
