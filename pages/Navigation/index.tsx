import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import NavigationButton from '../../components/NavigationButton';

interface iNavigation {
  navigation: NavigationScreenProp<any>;
}

const Navigation = ({ navigation }: iNavigation) => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputCointer}>
        <NavigationButton
          navigation={navigation}
          title="Your best result"
          navigationDirectory="BestResult"
        />
        <NavigationButton
          navigation={navigation}
          title="Your last result"
          navigationDirectory="LastResult"
        />
        <NavigationButton
          navigation={navigation}
          title="Go to flashcards"
          navigationDirectory="Flashcards"
        />
        <NavigationButton navigation={navigation} title="About" navigationDirectory="About" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputCointer: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  button: {
    padding: 10,
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Navigation;
