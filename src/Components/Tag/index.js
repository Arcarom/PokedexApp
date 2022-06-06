import React from 'react';
import Styled from './styles';

const Tag = ({label, isFirstChild}) => {
  return (
    <Styled.Tag isFirstChild={isFirstChild}>
      <Styled.TagText>{label}</Styled.TagText>
    </Styled.Tag>
  );
};

export default Tag;
