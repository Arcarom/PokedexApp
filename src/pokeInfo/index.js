import React from 'react';
import {StatusBar} from 'react-native';
import Styled from './styles';

const PokeInfo = () => {
  return (
    <Styled.Scroll>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#rgba(70, 164, 135, 1)"
      />

      <Styled.HeaderView>
        <Styled.Row justifyContent="space-between" marginBottom={8}>
          <Styled.StyledIcon source={require('../Assets/backIcon.png')} />
          <Styled.StyledIcon
            width={20}
            source={require('../Assets/favorito.png')}
          />
        </Styled.Row>
        <Styled.Row justifyContent="space-between" marginBottom={8}>
          <Styled.HeaderTitle>Bulbasaur</Styled.HeaderTitle>
          <Styled.HeaderTitle>#001</Styled.HeaderTitle>
        </Styled.Row>
        <Styled.Row>
          <Styled.Tag isFirstChild>
            <Styled.HeaderText>Planta</Styled.HeaderText>
          </Styled.Tag>
          <Styled.Tag>
            <Styled.HeaderText>Venenoso</Styled.HeaderText>
          </Styled.Tag>
        </Styled.Row>
      </Styled.HeaderView>
      <Styled.HeaderImage
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        }}
      />
      <Styled.InfoView>
        <Styled.DescriptionTitle>Descrição</Styled.DescriptionTitle>
        <Styled.DescriptionText>
          Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente
          nas costas. Ao absorver os raios do sol, a semente cresce
          progressivamente maior.
        </Styled.DescriptionText>

        <Styled.StatsView>
          <Styled.StatsDirection>
            <Styled.BlockStatsView>
              <Styled.WeightIcon source={require('../Assets/Peso.png')} />
              <Styled.StatsValue>6,9KG</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.InfoDescription>Peso</Styled.InfoDescription>
          </Styled.StatsDirection>

          <Styled.DivisionBar source={require('../Assets/Bar.png')} />

          <Styled.StatsDirection>
            <Styled.BlockStatsView>
              <Styled.HeightIcon source={require('../Assets/Altura.png')} />
              <Styled.StatsValue>6,9KG</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.InfoDescription>Altura</Styled.InfoDescription>
          </Styled.StatsDirection>

          <Styled.DivisionBar source={require('../Assets/Bar.png')} />

          <Styled.StatsDirection>
            <Styled.BlockStatsView>
              <Styled.StatsValue>Chicote de Vinha</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.InfoDescription>Poder Principal</Styled.InfoDescription>
          </Styled.StatsDirection>
        </Styled.StatsView>

        <Styled.CaracterTitle>Suas Características</Styled.CaracterTitle>

        <Styled.BlockStatsView>
          <Styled.CaracterView>
            <Styled.CaracterText>Gênero</Styled.CaracterText>
            <Styled.CaracterText>Saúde</Styled.CaracterText>
            <Styled.CaracterText>Ataque</Styled.CaracterText>
            <Styled.CaracterText>Defesa</Styled.CaracterText>
            <Styled.CaracterText>Vl. Ataque</Styled.CaracterText>
            <Styled.CaracterText>Vl. Defesa</Styled.CaracterText>
            <Styled.CaracterText>Velocidade</Styled.CaracterText>
            <Styled.CaracterText>Total</Styled.CaracterText>
          </Styled.CaracterView>

          <Styled.CaracterView>
            <Styled.BlockStatsView>
              <Styled.CaracterIcon source={require('../Assets/M.png')} />
              <Styled.StatsValue>87.5%</Styled.StatsValue>
              <Styled.CaracterIcon source={require('../Assets/F.png')} />
              <Styled.StatsValue>12.5%</Styled.StatsValue>
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>45</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>65</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>49</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>65</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>65</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>45</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
            <Styled.BlockStatsView>
              <Styled.CaracterText>317</Styled.CaracterText>
              <Styled.CaracterBar
                source={require('../Assets/HorizontalBar.png')}
              />
            </Styled.BlockStatsView>
          </Styled.CaracterView>
        </Styled.BlockStatsView>

        <Styled.CaracterTitle>Pontos fortes e fracos.</Styled.CaracterTitle>
        <Styled.DescriptionText>
          Pokémon tipo grama são fortes contra pokémon do tipo Água, Terra,
          Pedra mas eles são fracos contra pokémon do tipo Fogo, Grama, Veneno,
          Voador, Inseto, Dragão. Pokémon tipo veneno são fortes contra pokémon
          do tipo Grama, Inseto, Fada mas eles são fracos contra pokémon do tipo
          Veneno, Terra, Pedra, Fantasma.
        </Styled.DescriptionText>
      </Styled.InfoView>
    </Styled.Scroll>
  );
};

export default PokeInfo;
