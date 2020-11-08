import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationScreenProp } from 'react-navigation';
// @ts-ignore
import styles from './styles.js';

interface iNavigationButton {
  navigationDirectory: string;
  title: string;
  navigation: NavigationScreenProp<any>;
}

const NavigationButton = ({ navigation, title, navigationDirectory }: iNavigationButton) => {
  const handleNavigateTo = useCallback((navigatTo) => {
    navigation.navigate(navigatTo);
  }, []);
  return (
    <View style={styles.button}>
      <TouchableHighlight>
        <Button color="#ccc" title={title} onPress={() => handleNavigateTo(navigationDirectory)} />
      </TouchableHighlight>
    </View>
  );
};

export default NavigationButton;
