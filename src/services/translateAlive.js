const getAlive = (character) => {
  if (character.alive && character.gender === 'female') {
    return 'Viva';
  } else if (character.alive && character.gender === 'male') {
    return 'Vivo';
  } else if (!character.alive && character.gender === 'female') {
    return 'Muerta';
  } else if (!character.alive && character.gender === 'male') {
    return 'Muerto';
  }
};
export default getAlive;
