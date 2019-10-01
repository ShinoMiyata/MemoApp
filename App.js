import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';


const App = createStackNavigator({
  Home:          { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:    { screen: MemoEditScreen },
  Signup:         { screen: MemoListScreen },
  Login:           { screen: MemoListScreen },
},{
    defaultNavigationOptions: {
      title: `Memot`,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
});

export default createAppContainer(App);