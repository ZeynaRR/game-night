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
import Swipe from './Swipe';
import games from './data';
import Background from './Background';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Home extends Component{

    renderCards = (game) => {
        return (
          <Card title={game.gameTitle}  titleStyle={{ fontSize: 14 }} containerStyle = {{overflow:'hidden'}, {height: SCREEN_HEIGHT/2}} borderRadius={25}>
            <View style={{ height: 200}}>
              <Image
                source={require('./assets/ludo.png')}
                style={{ width: '100%', height: 200 }}
              />
            </View>
            <View style={styles.detailWrapper}>
              <Text>{game.day}</Text>
              <Text>{game.time}</Text>
              <Text> {game.numberOfPlayers} players</Text>
             
            </View>
            <Text numberOfLines={4}>
              {game.description.replace(/<b>/g, '').replace(/<\/b>/g, '')}
            </Text>
          </Card>
        );
      }
      renderNoMoreCards = () => {
        return (
          <Card title="No More cards">
            <Button
              title="You've swipe through all the game nights !"
              large
              icon={{ name: 'my-location' }}
              backgroundColor="#03A9F4"
            />
    
          <Image
            source={require('./assets/waiting-cards.gif')}
            style={{ width: '100%', height: 200 }}
              />
          </Card>
        );
      };

      render() {
        return (
            <Background>
            <Swipe
          keyProp="gameId"
          data={games}
          renderCard={this.renderCards}
          renderNoMoreCards={this.renderNoMoreCards}
        />
        </Background>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
     
  
    },
    detailWrapper: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      
    }
  });

export default Home;
