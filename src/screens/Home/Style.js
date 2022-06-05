import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Container = styled.FlatList`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${StatusBar.currentHeight}px 20px 20px;
  width: 100%;
  align-items: flex-end;
  background-color: #494949;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const HeaderTitle = styled.Text`
  color: white;
  font-size: 25px;
`;
export const HeaderDetail = styled.Text`
  color: white;
  font-size: 16px;
`;
export const BoldText = styled.Text`
  font-weight: bold;
`;
export const SectionTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  width: 80%;
  margin: 20px;
`;
export const Pokeball = styled.Image`
  width: 170px;
  height: 170px;
  opacity: 0.3;
  position: absolute;
  right: -20px;
  top: -20px;
`;
export const ImagePerfil = styled.Image`
  width: 80px;
  height: 80px;
  border-width: 3px;
  border-color: white;
  border-radius: 10px;
`;
export const Image = styled.Image`
  align-self: center;
  margin-top: 20px;
`;
