import {StyleSheet} from 'react-native';
// @ts-ignore
import React, {useEffect} from 'react';
import RootStack from './src/nav/RootStack';
import store from './src/store';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
