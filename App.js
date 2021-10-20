import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';



import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './Home';
import ProfileScreen from './ProfileScreen';
import AddedGameNigthsScreen from './AddedGameNightsScreen';
import MessagesScreen from './MessagesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#003E63' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: "#003E63",
        tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}/>
      </Stack.Navigator>
  );
}

function AddedGameNightsStack() {
  return (
      <Stack.Navigator
        initialRouteName="AddedGameNigths"
        screenOptions={{
          headerStyle: { backgroundColor: '#003E63' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: "#003E63",
        tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        }}>
        <Stack.Screen
          name="You added game nights!"
          component={AddedGameNigthsScreen}/>
      </Stack.Navigator>
  );
}

function MessagesStack() {
  return (
      <Stack.Navigator
        initialRouteName="Messages"
        screenOptions={{
          headerStyle: { backgroundColor: '#003E63' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: "#003E63",
        tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        }}>
        <Stack.Screen
          name="Your messages"
          component={MessagesScreen}/>
      </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#003E63' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: "#003E63",
        tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}/>
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        >

      <Tab.Screen
          name="Added game nights"
          component={AddedGameNightsStack}
          options={{
            tabBarLabel: 'Game nights',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="checkbox-marked"
                color={color}
                size={size}
              />
            ),
          }}  />
          
        <Tab.Screen
          name="Game Night"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />

<Tab.Screen
          name="Messages"
          component={MessagesStack}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="forum"
                color={color}
                size={size}
              />
            ),
          }}  />

          <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }} />
          </Tab.Navigator>
          
    </NavigationContainer>
    
  );
}
export default App;