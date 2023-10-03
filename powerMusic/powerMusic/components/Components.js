import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Musicas from './Musicas';
import Artistas from './Artistas';
import Informacoes from './Informacoes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Descrição da Música" component={Musicas} />
        <Tab.Screen name="Descrição do Autor" component={Artistas} />
        <Tab.Screen name="Informações" component={Informacoes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
