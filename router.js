import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './src/components/login';

import Home from './src/components/home';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Livetv from './src/components/livetv';
import Tvshows from './src/components/tvshows';
import Movies from './src/components/movies';
import Sports from './src/components/sports';
import Kids from './src/components/kids';
import Set from './src/components/settings';
import store from './src/services/rootreducer';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function myDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c6cbef',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Live tv" component={Livetv} />
      <Drawer.Screen name="movies" component={Movies} />
      <Drawer.Screen name="TV Shows" component={Tvshows} />
      <Drawer.Screen name="Sports" component={Sports} />
      <Drawer.Screen name="Kids" component={Kids} />
      <Drawer.Screen name="Settings" component={Set} />
    </Drawer.Navigator>
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="MyDrawer"
        component={myDrawer}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
