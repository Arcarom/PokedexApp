import React, {useState, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
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
import LoadingScreen from '../../components/Loading';
import PokemonCard from '../../components/pokemonCard';
import api from '../../utils/api';
import colors from '../../utils/colors';
import formatPokemonName from '../../utils/formatPokemonName';

const HomeApp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [pokemonsData, setPokemonsData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const {data} = await api.get('pokemon?limit=8&offset=0');
      const pokemons = [];

      data.results.map(async item => {
        const {data: pokemon} = await api.get(`pokemon/${item.name}`);
        pokemons.push({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          color: colors[pokemon.types[0].type.name],
        });
      });

      setPokemonsData(pokemons);
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <ImagePerfil source={require('../../Assets/Perfil.jpg')} />
          <Pokeball source={require('../../Assets/CompletePokeball.png')} />
        </HeaderContainer>
        <SectionTitle>Qual pokémon você escolheria ?</SectionTitle>
      </>
    );
  };
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#494949" />
      <Container
        data={pokemonsData}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeaderComponent}
        numColumns={'2'}
        ListFooterComponent={() => (
          <Image source={require('../../Assets/Logo.png')} />
        )}
        renderItem={({item}) => {
          return (
            <PokemonCard
              onPress={() => {
                navigation.navigate('PokeInfo', {id: item.id});
              }}
              id={item.id}
              name={formatPokemonName(item.name)}
              types={item.types}
              sprite={item.sprite}
              color={item.color}
            />
          );
        }}
      />
    </>
  );
};

export default HomeApp;
