import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../blocks/BottomTabScreens/Home';
import Other from '../blocks/BottomTabScreens/Other';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    );
  }
}
