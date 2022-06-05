/* eslint-disable no-undef */
import styled from 'styled-components/native';

const Container = styled.Pressable`
  width: 45%;
  height: 125px;
  background-color: ${({color}) => color ?? '#000'};
  border-radius: 15px;
  padding: 18px 15px;
  flex-direction: row;
  justify-content: space-between;
  left: 7px;
  margin: 7px;
`;

const CardTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
`;
const CardText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  text-align: center;
`;

const PokemonData = styled.View``;

const CardTagContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 4px;
  border-radius: 38px;
  margin-top: 12px;
`;

const Sprite = styled.Image`
  width: 90px;
  height: 90px;
  align-self: flex-end;
  margin-bottom: -20px;
`;

const PokemonNumber = styled.Text`
  position: absolute;
  font-size: 18px;
  font-weight: 500;
  right: 15px;
  top: 15px;
  opacity: 0.7;
`;

export default {
  Container,
  CardTitle,
  CardTagContainer,
  Sprite,
  PokemonData,
  PokemonNumber,
  CardText,
};
