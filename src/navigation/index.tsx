import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Search} from '../screens';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
