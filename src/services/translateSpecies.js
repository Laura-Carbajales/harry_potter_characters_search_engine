const getSpecies = (character) => {
  if (character.species === 'human') {
    return 'Humano';
  } else if (character.species === 'half-giant') {
    return 'Medio-gigante';
  } else if (character.species === 'werewolf') {
    return 'Hombre-lobo';
  } else if (character.species === 'ghost') {
    return 'Fantasma';
  }
};
export default getSpecies;
