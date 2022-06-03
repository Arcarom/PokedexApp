import React from 'react';
import Styled from './styles';

const PokemonCard = ({onPress}) => {
  return (
    <Styled.Container onPress={onPress}>
      <Styled.PokemonNumber>#001</Styled.PokemonNumber>
      <Styled.PokemonData>
        <Styled.CardTitle>Bulbasaur</Styled.CardTitle>
        <Styled.CardTagContainer>
          <Styled.CardText>Planta</Styled.CardText>
        </Styled.CardTagContainer>
        <Styled.CardTagContainer>
          <Styled.CardText>Venenoso</Styled.CardText>
        </Styled.CardTagContainer>
      </Styled.PokemonData>
      <Styled.Sprite
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        }}
      />
    </Styled.Container>
  );
};

export default PokemonCard;
