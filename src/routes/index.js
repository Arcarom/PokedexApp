import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeApp from '../home/index';
import PokeInfo from '../pokeInfo';

const stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="HomeApp"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="HomeApp" component={HomeApp} />
        <stack.Screen name="PokeInfo" component={PokeInfo} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
