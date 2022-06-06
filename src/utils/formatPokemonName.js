const formatPokemonName = name => {
  const nameArray = name.split('');
  nameArray[0] = nameArray[0].toUpperCase();
  return nameArray.join('');
};

export default formatPokemonName;
