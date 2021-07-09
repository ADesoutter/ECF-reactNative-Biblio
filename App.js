import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeBooks">
          <Stack.Screen name="HomeBooks" component={SplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="Library" component={LibraryScreen} />
          <Stack.Screen name="Details" component={BookScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


