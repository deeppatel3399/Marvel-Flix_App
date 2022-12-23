import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginscreen/LoginScreen';
import HomeScreen from './src/screens/homescreen/HomeScreen';
import SearchScreen from './src/screens/searchscreen/SearchScreen';
import MovieInfo from './src/screens/Infoscreen/MovieInfo';
import SeriesInfo from './src/screens/Infoscreen/SeriesInfo';
import WatchScreen from './src/screens/WatchScreen/WatchScreen';
import BottomTab from './src/components/BottomTab';



const App =  () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>

      <Stack.Navigator 
              screenOptions={{
            headerStyle:{
              backgroundColor: '#323232'
            },
            headerTintColor: '#ffffff'
          }}
      initialRouteName='tabs'>
          <Stack.Screen name='login' component={LoginScreen}/>
          <Stack.Screen name='movieinfo' component={MovieInfo}/>
          <Stack.Screen name='seriesinfo' component={SeriesInfo}/>
          <Stack.Screen name='watchscreen' component={WatchScreen}/>
          <Stack.Screen name='tabs' options={{headerShown: false}} component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
