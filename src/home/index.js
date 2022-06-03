import React from 'react';
import {StatusBar, View, TouchableOpacity} from 'react-native';
import {
  Container,
  HeaderDetail,
  Pokeball,
  Image,
  HeaderContainer,
  HeaderTitle,
  ImagePerfil,
  SectionTitle,
  BoldText,
} from './Style';
import PokemonCard from '../Components/pokemonCard';

const HomeApp = ({navigation}) => {
  const ListHeaderComponent = () => {
    return (
      <>
        <HeaderContainer>
          <View>
            <HeaderTitle>
              Olá,<BoldText> Ash Ketchum</BoldText>
            </HeaderTitle>
            <HeaderDetail>Bem Vindo! 😊</HeaderDetail>
          </View>
          <ImagePerfil source={require('../Assets/Perfil.jpg')} />
          <Pokeball source={require('../Assets/CompletePokeball.png')} />
        </HeaderContainer>
        <SectionTitle>Qual pokémon você escolheria ?</SectionTitle>
      </>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#494949" />
      <Container
        data={[{id: '1'}]}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={() => (
          <Image source={require('../Assets/Logo.png')} />
        )}
        renderItem={({item}) => {
          return (
            <PokemonCard onPress={() => navigation.navigate('PokeInfo')} />
          );
        }}
      />
    </>
  );
};

export default HomeApp;

//1 4 7 25 6 9
