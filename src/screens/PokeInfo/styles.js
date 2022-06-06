import styled from 'styled-components/native';
import {MotiView} from 'moti';

import {StatusBar} from 'react-native';

const Scroll = styled.ScrollView`
  background-color: ${({color}) => color ?? rgba(0, 0, 0)};
`;

const BackPress = styled.Pressable`
  width: 60px;
  height: 20px;
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

const HeaderView = styled(MotiView)`
  height: 305px;
  padding: ${StatusBar.currentHeight}px 20px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: ${({justifyContent}) => justifyContent ?? 'flex-start'};
  margin-bottom: ${({marginBottom}) => marginBottom ?? 0}px;
  left: ${({LeftMove}) => LeftMove ?? 0}px;
  width: ${({width}) => width ?? '100%'};
`;

const StyledIcon = styled.Image`
  width: ${({width}) => width ?? 10}px;
  height: ${({height}) => height ?? 20}px;
`;

const HeaderImage = styled.Image`
  width: 200px;
  height: 200px;
  right: 90px;
  top: 144px;
  align-self: center;
  z-index: 1;
  position: absolute;
`;

const InfoView = styled(MotiView)`
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

const CaracterText = styled.Text`
  font-size: 16px;
  text-align: justify;
  width: 30%;
`;

const CaracterBar = styled.View`
  background-color: #565656;
  height: 3px;
  margin-top: 10px;
  width: 100%;
`;

const ColorBar = styled.View`
  background-color: ${({ColorTest}) => ColorTest ?? 'rgba(25,200,25)'};
  margin-top: 10px;
  height: 3px;
  width: ${({SizeTest}) => SizeTest * 3 ?? 0}px;
  margin-left: -60px;
`;

export default {
  Scroll,
  BackPress,
  StyledIcon,
  HeaderTitle,
  HeaderText,
  HeaderView,
  Row,
  HeaderImage,
  InfoView,
  DescriptionTitle,
  DescriptionText,
  InfoDescription,
  StatsValue,
  StatsView,
  StatsDirection,
  BlockStatsView,
  CaracterTitle,
  CaracterView,
  CaracterText,
  CaracterBar,
  ColorBar,
};
