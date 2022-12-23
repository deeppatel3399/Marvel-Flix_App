import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homescreen/HomeScreen';
import SearchScreen from '../screens/searchscreen/SearchScreen';
import ComingSoon from '../screens/comingsoonscreen/ComingSoon';
import Downloads from '../screens/downloadScreen/Downloads';
import More from '../screens/morescreen/More';

import { Entypo, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  return (
    <Tab.Navigator 
    initialRouteName='home'
    screenOptions={{
      tabBarStyle:{backgroundColor:'#171717',
      height: 63,
      position: 'absolute',
      paddingBottom: 10,
      paddingTop: 10
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'grey',
      headerShown: false    
    }}>
        <Tab.Screen name='home' component={HomeScreen} 
        options={{tabBarIcon: ({focused})=>{return <Entypo name="home" size={28} color={focused ? 'white' : 'grey'}/>},tabBarLabel:'Home'}}
        />

        <Tab.Screen name='search' component={SearchScreen} 
        options={{tabBarIcon:({focused})=>{return <FontAwesome name="search" size={28} color={focused ? 'white' : 'grey'}/>},tabBarLabel:'Search'}}
        />

        <Tab.Screen name='comingsoon' component={ComingSoon} options={{tabBarIcon:({focused})=>{return <Foundation name="page-multiple" size={28} color={focused ? 'white' : 'grey'}/>},tabBarLabel:'Coming Soon'}}/>

        <Tab.Screen name='download' component={Downloads} options={{tabBarIcon:({focused})=>{return <AntDesign name="download" size={28} color={focused ? 'white' : 'grey'} />},tabBarLabel:'Downloads'}}/>

        <Tab.Screen name='more' component={More} options={{tabBarIcon:({focused})=>{return <SimpleLineIcons name="menu" size={28} color={focused ? 'white' : 'grey'} />},tabBarLabel:'More'}}/>
    </Tab.Navigator>
  )
}

export default BottomTab;