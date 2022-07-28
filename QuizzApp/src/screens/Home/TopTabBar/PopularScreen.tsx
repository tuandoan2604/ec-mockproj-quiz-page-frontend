import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {baseURL} from '../../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PopularScreen = () => {
  //call api refresh token to get new accesstoken
  const getAccessUsingRefresh = () => {
    const refreshToken = useSelector(
      state => state.Auth.payload.tokens.refresh.token,
    );
    axios
      .post(baseURL + `/v1/auth/refresh-tokens`, {
        refreshToken,
      })
      .then(res => {
        console.log('ref token', res.data);
        AsyncStorage.setItem(
          'access_token',
          JSON.stringify(res.data.access.token),
        );
      });
  };

  getAccessUsingRefresh();
  return (
    <View style={{flex: 1}}>
      <Text></Text>
    </View>
  );
};

export default PopularScreen;

const styles = StyleSheet.create({});
