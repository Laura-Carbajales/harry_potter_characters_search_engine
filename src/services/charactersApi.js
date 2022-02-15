const getApiData = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: index,
          name: character.name,
          alive: character.alive,
          species: character.species,
          gender: character.gender,
          house: character.house,
          image: character.image,
          alternate: character.alternate_names,
          ancestry: character.ancestry,
        };
      });
      return cleanData;
    });
};
export default getApiData;
