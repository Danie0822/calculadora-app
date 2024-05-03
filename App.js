import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lista from './src/Lista';
import Calculadora from './src/calculadora'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Calculadora">
        <Tab.Screen name="Calculadora" component={Calculadora} />
        <Tab.Screen name="Lista" component={Lista} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Estilos si es necesario
});
