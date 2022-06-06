import React from 'react';
import Styled from './styles';

const LoadingScreen = () => {
  return (
    <Styled.Container
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 600,
      }}>
      <Styled.ImageLoading
        position={'relative'}
        source={require('../../Assets/Logo.png')}
      />
      <Styled.Container>
        <Styled.ImageLoading
          left={32}
          marginTop={350}
          position={'absolute'}
          width={120}
          height={130}
          source={require('../../Assets/Gif1.png')}
        />
      </Styled.Container>
      <Styled.TextLoading>Carregando...</Styled.TextLoading>
    </Styled.Container>
  );
};

export default LoadingScreen;
