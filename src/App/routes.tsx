import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, TeamDetails, Teams} from '../screens';
import {TeamDetailsType} from '../types';

export type StackParamList = {
  Home: undefined;
  Teams: {leagueId: number; leagueName: string};
  TeamDetails: {teamId: number};
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
