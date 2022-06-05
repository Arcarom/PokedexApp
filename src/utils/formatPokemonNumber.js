const formatPokemonNumber = pokemonId => {
  if (pokemonId.toString().length === 1) {
    return `#00${pokemonId}`;
  } else if (pokemonId.toString().length === 2) {
    return `#0${pokemonId}`;
  } else {
    return `#${pokemonId}`;
  }
};

export default formatPokemonNumber;
