import React from 'react';
import Styled from './styles';

const Tag = ({label}) => {
  return (
    <Styled.Tag isFirstChild>
      <Styled.TagText>{label}</Styled.TagText>
    </Styled.Tag>
  );
};

export default Tag;
