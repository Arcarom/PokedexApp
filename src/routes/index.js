import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoadingScreen from '../components/Loading';
import HomeApp from '../screens/Home';
import PokeInfo from '../screens/PokeInfo';

const stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="HomeApp"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="HomeApp" component={HomeApp} />
        <stack.Screen name="PokeInfo" component={PokeInfo} />
        <stack.Screen name="LoadingScreen" component={LoadingScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
