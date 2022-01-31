import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Pages/Home';
import Chat from './src/Pages/Chat';
import StarredMessage from './src/Pages/StarredMessage';
import Account from './src/Pages/Account';
import Notifications from './src/Pages/Notifications';
import Payments from './src/Pages/Payments';
import LinkedMessages from './src/Pages/LinkedMessages';
import StorageData from './src/Pages/StorageData';
import Help from './src/Pages/Help';
import TellFriend from './src/Pages/TellFriend';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StarredMessage" component={StarredMessage} />
        <Stack.Screen name="LinkedMessages" component={LinkedMessages} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="StorageData" component={StorageData} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="TellFriend" component={TellFriend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;