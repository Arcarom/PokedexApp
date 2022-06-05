import React from 'react';
import {View} from 'react-native';
import Styled from './styles';
import formatPokemonNumber from '../../utils/formatPokemonNumber';

const PokemonCard = ({id, onPress, name, types, sprite, color}) => {
  return (
    <Styled.Container onPress={onPress} color={color}>
      <Styled.PokemonNumber>{formatPokemonNumber(id)}</Styled.PokemonNumber>
      <Styled.PokemonData>
        <Styled.CardTitle>{name}</Styled.CardTitle>
        {types.map((item, index) => {
          return (
            <View key={index}>
              <Styled.CardTagContainer>
                <Styled.CardText>{item.type.name}</Styled.CardText>
              </Styled.CardTagContainer>
            </View>
          );
        })}
      </Styled.PokemonData>
      <Styled.Sprite
        source={{
          uri: sprite,
        }}
      />
    </Styled.Container>
  );
};

export default PokemonCard;
