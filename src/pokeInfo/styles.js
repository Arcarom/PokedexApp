import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

const Scroll = styled.ScrollView`
  background-color: #65c7b1;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
`;

const HeaderText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  text-align: center;
`;

const HeaderView = styled.View`
  height: 255px;
  padding: ${StatusBar.currentHeight}px 20px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: ${({justifyContent}) => justifyContent ?? 'flex-start'};
  margin-bottom: ${({marginBottom}) => marginBottom ?? 0}px;
`;

const StyledIcon = styled.Image`
  width: ${({width}) => width ?? 10}px;
  height: 20px;
`;

const Tag = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: ${({isFirstChild}) => (isFirstChild ? 0 : 8)}px;
`;

const HeaderImage = styled.Image`
  width: 200px;
  height: 200px;
  top: 94px;
  align-self: center;
  z-index: 1;
  position: absolute;
`;

const InfoView = styled.View`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

const DescriptionTitle = styled.Text`
  color: rgba(72, 208, 176, 1);
  font-weight: bold;
  font-size: 26px;
  width: 100%;
  margin-bottom: 25px;
`;
const DescriptionText = styled.Text`
  font-size: 19px;
  margin-bottom: 30px;
`;
const StatsValue = styled.Text`
  text-align: center;
  margin-left: 8px;
  font-weight: bold;
  font-size: 16px;
`;
const InfoDescription = styled.Text`
  text-align: center;
  font-size: 14px;
`;
const CaracterTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const StatsView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const StatsDirection = styled.View`
  flex-direction: column;
  align-items: center;
`;
const DivisionBar = styled.Image`
  width: 3px;
  height: 60px;
`;
const WeightIcon = styled.Image`
  width: 16px;
  height: 16px;
`;
const HeightIcon = styled.Image`
  width: 8px;
  height: 16px;
`;
const BlockStatsView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const CaracterView = styled.View`
  flex-direction: column;
  align-self: center;
  text-align: center;
  margin-right: 20px;
`;
const CaracterIcon = styled.Image`
  width: 17px;
  height: 17px;
`;
const CaracterText = styled.Text`
  font-size: 16px;
  margin: 4px 0px 4px 0px;
  text-align: justify;
`;
const CaracterBar = styled.Image`
  background-color: black;
  margin-left: 30px;
  height: 4px;
`;
//HorizontalBar
export default {
  Scroll,
  StyledIcon,
  HeaderTitle,
  HeaderText,
  HeaderView,
  Row,
  Tag,
  HeaderImage,
  InfoView,
  DescriptionTitle,
  DescriptionText,
  InfoDescription,
  StatsValue,
  StatsView,
  StatsDirection,
  DivisionBar,
  WeightIcon,
  HeightIcon,
  BlockStatsView,
  CaracterTitle,
  CaracterView,
  CaracterText,
  CaracterIcon,
  CaracterBar,
};
