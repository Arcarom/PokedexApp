import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Styled from './styles';
import api from '../../utils/api';
import colors from '../../utils/colors';
import formatPokemonNumber from '../../utils/formatPokemonNumber';
import Tag from '../../components/Tag';

const PokeInfo = ({route, navigation}) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  const fetchData = async () => {
    try {
      const {data} = await api.get(`pokemon/${route.params.id}`);
      const {data: characteristicData} = await api.get(
        `characteristic/${route.params.id}`,
      );
      const {data: PokeGen} = await api.get(
        `pokemon-species/${route.params.id}`,
      );
      let description;
      let gender = PokeGen.gender_rate;

      characteristicData.descriptions.map(item => {
        if (item.language.name === 'en') {
          description = item.description;
        }
      });

      setPokemon({
        name: data.species.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        types: data.types,
        special_ability: data.moves[16].move.name,
        height: data.height / 10,
        weight: data.weight / 10,
        color: colors[data.types[0].type.name] ?? '#fff',
        description,
        gender,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const strengthsAndWeaknesses = type => {
    if (type === 'fire') {
      return 'Fire-type Pokémon are strong against Bug, Plant, Ice, and Steel-type Pokémon, but they are weak against Dragon, Fire, Rock, and Water-type Pokémon.';
    } else if (type === 'grass') {
      return 'Grass type pokémon are strong against Water, Earth, Stone pokémon but they are weak against Fire, Grass, Poison, Flying, Insect, Dragon pokémon.';
    } else if (type === 'water') {
      return 'Water type pokémon are strong against Fire, Rock and Earth type pokémon but they are weak against Water, Grass and Dragon type pokémon.';
    } else {
      return 'N/A';
    }
  };

  const PokeGender = Gen => {
    if (Gen >= 0) {
      return ['87.5%', '12.5%'];
    } else if (Gen >= 3) {
      return ['75.0% ', '25.0%'];
    } else if (Gen >= 7) {
      return ['50.0% ', '50.0%'];
    } else if (Gen >= 11) {
      return ['25.0% ', '75.0%'];
    } else if (Gen >= 15) {
      return ['0.0%', '100.0%'];
    } else {
      return ['100.0%', ' 0.0%'];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return null;
  }
  const total =
    pokemon.hp +
    pokemon.attack +
    pokemon.defense +
    pokemon.special_attack +
    pokemon.special_defense +
    pokemon.speed;

  return (
    <Styled.Scroll color={pokemon.color ?? '#fff'}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={pokemon.color ?? '#fff'}
      />
      <Styled.HeaderView
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1200,
        }}>
        <Styled.Row justifyContent="space-between" marginBottom={8}>
          <Styled.BackPress onPress={() => navigation.goBack()}>
            <Styled.StyledIcon source={require('../../Assets/backIcon.png')} />
          </Styled.BackPress>
          <Styled.StyledIcon
            width={20}
            source={require('../../Assets/favorito.png')}
          />
        </Styled.Row>
        <Styled.Row justifyContent="space-between" marginBottom={8}>
          <Styled.HeaderTitle>{pokemon.name}</Styled.HeaderTitle>
          <Styled.HeaderTitle>
            {formatPokemonNumber(route.params.id)}
          </Styled.HeaderTitle>
        </Styled.Row>
        <Styled.Row>
          {pokemon.types.map(item => {
            return <Tag key={item.slot} label={item.type.name} />;
          })}
        </Styled.Row>
      </Styled.HeaderView>
      <Styled.HeaderImage
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.id}.png`,
        }}
      />
      <Styled.InfoView
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1200,
        }}>
        <Styled.DescriptionTitle>Description</Styled.DescriptionTitle>
        <Styled.DescriptionText>{pokemon.description}</Styled.DescriptionText>
        <Styled.StatsView>
          <Styled.StatsDirection>
            <Styled.BlockStatsView>
              <Styled.StyledIcon
                width={16}
                height={16}
                source={require('../../Assets/Peso.png')}
              />
              <Styled.StatsValue>{pokemon.weight} KG</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.InfoDescription>Weight</Styled.InfoDescription>
          </Styled.StatsDirection>

          <Styled.StyledIcon
            width={3}
            height={60}
            source={require('../../Assets/Bar.png')}
          />
          <Styled.StatsDirection>
            <Styled.BlockStatsView>
              <Styled.StyledIcon
                width={8}
                height={16}
                source={require('../../Assets/Altura.png')}
              />

              <Styled.StatsValue>{pokemon.height} m</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.InfoDescription>Height</Styled.InfoDescription>
          </Styled.StatsDirection>

          <Styled.StyledIcon
            width={3}
            height={60}
            source={require('../../Assets/Bar.png')}
          />
          <Styled.StatsDirection>
            <Styled.BlockStatsView>
              <Styled.StatsValue>{pokemon.special_ability}</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.InfoDescription>Main Skill</Styled.InfoDescription>
          </Styled.StatsDirection>
        </Styled.StatsView>

        <Styled.CaracterTitle>Characteristics</Styled.CaracterTitle>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Gender</Styled.CaracterText>
          <Styled.Row LeftMove={-100} justifyContent="space-between">
            <Styled.StyledIcon
              width={17}
              height={17}
              source={require('../../Assets/M.png')}
            />
            <Styled.StatsValue>
              {' '}
              {PokeGender(pokemon.gender)[0]}
            </Styled.StatsValue>
            <Styled.StyledIcon source={require('../../Assets/F.png')} />
            <Styled.StatsValue>
              {' '}
              {PokeGender(pokemon.gender)[1]}
            </Styled.StatsValue>
          </Styled.Row>
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Health</Styled.CaracterText>
          <Styled.CaracterText marginLeft={27}>
            {pokemon.hp}
          </Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              pokemon.hp >= 50
                ? 'rgba(75, 192, 122, 1)'
                : pokemon.hp >= 30
                ? '#ffbe47'
                : pokemon.hp >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={pokemon.hp / 2}
          />
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Attack</Styled.CaracterText>
          <Styled.CaracterText marginLeft={27}>
            {pokemon.attack}
          </Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              pokemon.attack >= 50
                ? 'rgba(75, 192, 122, 1)'
                : pokemon.attack >= 30
                ? '#ffbe47'
                : pokemon.attack >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={pokemon.attack / 2}
          />
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Defense</Styled.CaracterText>
          <Styled.CaracterText marginLeft={12}>
            {pokemon.defense}
          </Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              pokemon.defense >= 50
                ? 'rgba(75, 192, 122, 1)'
                : pokemon.defense >= 30
                ? '#ffbe47'
                : pokemon.defense >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={pokemon.defense / 2}
          />
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Vl. Attack</Styled.CaracterText>
          <Styled.CaracterText marginRight={0}>
            {pokemon.special_attack}
          </Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              pokemon.special_attack >= 50
                ? 'rgba(75, 192, 122, 1)'
                : pokemon.special_attack >= 40
                ? '#ffbe47'
                : pokemon.special_attack >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={pokemon.special_attack / 2}
          />
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Vl. Defense</Styled.CaracterText>
          <Styled.CaracterText marginRight={14}>
            {pokemon.special_defense}
          </Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              pokemon.special_defense >= 50
                ? 'rgba(75, 192, 122, 1)'
                : pokemon.special_defense >= 30
                ? '#ffbe47'
                : pokemon.special_defense >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={pokemon.special_defense / 2}
          />
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Speed</Styled.CaracterText>
          <Styled.CaracterText marginLeft={20}>
            {pokemon.speed}
          </Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              pokemon.speed >= 50
                ? 'rgba(75, 192, 122, 1)'
                : pokemon.speed >= 30
                ? '#ffbe47'
                : pokemon.speed >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={pokemon.speed / 2}
          />
        </Styled.Row>

        <Styled.Row justifyContent="space-between" marginBottom={10}>
          <Styled.CaracterText>Total</Styled.CaracterText>
          <Styled.CaracterText marginLeft={30}>{total}</Styled.CaracterText>
          <Styled.CaracterBar
            source={require('../../Assets/HorizontalBar.png')}
          />
          <Styled.ColorBar
            ColorTest={
              total / 2 >= 200
                ? 'rgba(75, 192, 122, 1)'
                : total / 2 >= 100
                ? '#ffbe47'
                : total / 2 >= 0
                ? 'rgba(251, 108, 108, 1)'
                : 0
            }
            SizeTest={total / 9}
          />
        </Styled.Row>

        <Styled.CaracterTitle>Strengths and weaknesses.</Styled.CaracterTitle>
        <Styled.DescriptionText>
          {strengthsAndWeaknesses(pokemon.types[0].type.name)}
        </Styled.DescriptionText>
      </Styled.InfoView>
    </Styled.Scroll>
  );
};

export default PokeInfo;
