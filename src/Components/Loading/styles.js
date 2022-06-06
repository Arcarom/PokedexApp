import styled from 'styled-components/native';
import {MotiView, MotiImage} from 'moti';

const TextLoading = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
const Container = styled(MotiView)`
  background-color: '#fffffffff';
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 90px;
`;

const ImageLoading = styled(MotiImage)`
  position: ${({position}) => position ?? 'absolute'};
  width: ${({width}) => width ?? 146}px;
  height: ${({height}) => height ?? 51}px;
  margin-top: ${({marginTop}) => marginTop ?? 0}px;
  left: ${({left}) => left ?? 0}px;
`;

export default {TextLoading, Container, ImageLoading};
