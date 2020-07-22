/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements';
import Login from '@/pages/Login';
import SearchList from '@/pages/SearchList';
import SearchStatus from '@/pages/SearchStatus';
import PenManage from '@/pages/PenManage';
import {name as appName} from './app.json';
import macroStyles from '@/macroStyles.js';

const mainColor = macroStyles.blue9;

const theme = {
  Button: {
    buttonStyle: {
      backgroundColor: mainColor,
    },
  },
  Card: {
    containerStyle: {
      backgroundColor: mainColor,
    },
  },
};

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{
              title: '',
              headerStyle: {
                backgroundColor: mainColor,
              },
            }}
            component={Login}
          />
          <Stack.Screen
            name="SearchStatus"
            options={{title: ''}}
            component={SearchStatus}
          />
          <Stack.Screen
            name="SearchList"
            options={{
              title: '设备列表',
            }}
            component={SearchList}
          />
          <Stack.Screen
            name="PenManage"
            options={{
              title: '录音笔管理',
            }}
            component={PenManage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => Home);
