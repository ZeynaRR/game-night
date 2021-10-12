// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import React, { Component }  from 'react';
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
import Background from './Background';
import profiles from './dataProfile';

const SCREEN_HEIGHT = Dimensions.get('window').height;


  const ProfileDisplay = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Card containerStyle = {{overflow:'hidden'}, {height: SCREEN_HEIGHT/1.5}} borderRadius={25}>
            <View style={{ height: 200}}>
              <Image
                source={require('./assets/profilePicture.png')}
                style={{ width: 150, height: 150, alignSelf:'center', justifyContent:'center', borderRadius:85}}
              />
            </View>
            <Text> {props.name}</Text>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
            <View style={{ flex: 1}}>
              <Text>{props.location}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text>{props.age}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text> {props.language}</Text>
            </View>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
            <Text>{props.description}</Text>
          </Card>
      
    </SafeAreaView>
  );
}

const ProfileScreen = () => {
  return (
    <Background>
      <View>
    <ProfileDisplay
  name = "Kelly"
  pronouns = "They/Them"
  location = "Gothenburg, Sweden"
  age = "24 years old"
  language = "English"
  description = "Hey y'all! Kelly here :) I'm an exchange student at Chalmers University of Technology, studying Interaction Design. I'm a grandmaster at chess and grandnoob at any other game 😭"
/>
</View>
</Background>

);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   

  }
});

export default ProfileScreen;