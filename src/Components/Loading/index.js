import React from 'react';
import {useAnimationState} from 'moti';

import Styled from './styles';

const LoadingScreen = () => {
  /*
  const PokeAnimation = useAnimationState({
    open: {
      height: 170,
    },
    closed: {
      height: 70,
    },
  });
  state={PokeAnimation}
  */

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
          left={90}
          marginTop={352}
          position={'absolute'}
          width={85}
          height={130}
          source={require('../../Assets/PokeballDown.png')}
        />
        <Styled.ImageLoading
          left={1}
          marginTop={234}
          position={'relative'}
          width={85}
          height={130}
          source={require('../../Assets/PokeballUp.png')}
        />
      </Styled.Container>
      <Styled.TextLoading>Carregando...</Styled.TextLoading>
    </Styled.Container>
  );
};

export default LoadingScreen;

/*
 from={{
            rotate: '10deg',
            opacity: 1,
          }}
          animate={{
            rotate: '-10deg',
            opacity: 1,
          }}
          transition={{
            type: 'timing',
            duration: 1000,
            repeat: 4,
          }}
*/
