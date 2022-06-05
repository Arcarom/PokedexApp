import styled from 'styled-components/native';

const Tag = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: ${({isFirstChild}) => (isFirstChild ? 0 : 8)}px;
`;
const TagText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  text-align: center;
`;

export default {Tag, TagText};
