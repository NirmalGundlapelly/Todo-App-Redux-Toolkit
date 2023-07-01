import React, {Component} from 'react';
import {Provider} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <BottomTabNavigator />
        </Provider>
      </NavigationContainer>
    );
  }
}
