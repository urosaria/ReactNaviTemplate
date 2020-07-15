import React from 'react';
import {Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './home';
import SettingScreen from './setting';

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Home',
      headerRight: () => (
        <Button onPress = {()=> navigation.navigate('SettingScreen')} title="Setting" />
      ),
    }),
  }
);
const SettingStack = createStackNavigator(
  {
    SettingScreen,
    HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Setting',
    }),
    initialRouteName: 'SettingScreen',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Setting: SettingStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOnPress: ({ defaultHandler }) => {
        const {routeName} = navigation.state;

        if (navigation && navigation.isFocused()) {
          const screenFunctions = getScreenRegisteredFunctions(navigation.state);

          if (screenFunctions && typeof screenFunctions.tapOnTabNavigator === 'function') {
            screenFunctions.tapOnTabNavigator()
          }
        }
        defaultHandler();
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "#888",
    },
  }
);

const AppStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => ({
        title : 'test',
      }),
    },
  }
);

export default createAppContainer(TabNavigator);
