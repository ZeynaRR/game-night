import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from './Swipe';
import games from './data';

export default class App extends Component {

  renderCards = (game) => {
    return (
      <Card title={game.gameTitle} titleStyle={{ fontSize: 14 }}>
        <View style={{ height: 200 }}>
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
          title="Do something"
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
      <SafeAreaView style={styles.container}>
        <Swipe
          data={games}
          keyProp="gameId"
          renderCard={this.renderCards}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  detailWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});