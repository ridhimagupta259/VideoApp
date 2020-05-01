import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/components/login';
import Home from './src/components/home';
import * as React from 'react';
//import {Provider} from 'react-redux';
//import store from './src/services/rootreducer';

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    //  </Provider>
  );
};

export default App;
