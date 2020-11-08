import { createStackNavigator } from 'react-navigation-stack';
import {
  createAppContainer,
  NavigationProp,
  NavigationState,
  NavigationNavigator,
} from 'react-navigation';
import Navigation from '../pages/Navigation';
import BestResult from '../pages/BestResult';
import Flashcards from '../pages/Flashcards';
import LastResult from '../pages/LastResult';
import About from '../pages/About';

const screens = {
  Home: {
    screen: Navigation,
  },
  BestResult: {
    screen: BestResult,
  },
  Flashcards: {
    screen: Flashcards,
  },
  LastResult: {
    screen: LastResult,
  },
  About: {
    screen: About,
  },
};

const HomeStack: NavigationNavigator<any, NavigationProp<NavigationState>> = createStackNavigator(
  screens
);

export default createAppContainer(HomeStack);
