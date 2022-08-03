import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {refreshToken} from './authAPI/authAPI';

axios.defaults.baseURL = 'http://137.184.207.13:5000/v1/';

axios.interceptors.request.use(
  async config => {
    const TOKEN = localStorage.getItem('token');
    const expires = Number(new Date(AsyncStorage.getItem('expires')));
    const current = Number(new Date());
    document.body.classList.add('loading');

    if (expires <= current) {
      await refreshToken(
        localStorage.getItem('refresh'),
        'deviceId-xx@gmail.com',
      )
        .then(res => {
          AsyncStorage.setItem('token', res.data.data.access.token);
          AsyncStorage.setItem('expires', res.data.data.access.expires);
          AsyncStorage.setItem('refresh', res.data.data.refresh.token);
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${res.data.data.access.token}`,
          };

          return config;
        })
        .catch(err => console.log(err));
    }

    config.headers = {
      ...config.headers,
      Authorization: 'Bearer ' + TOKEN,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  config => {
    document.body.classList.remove('loading');
    return config;
  },
  function (error) {
    document.body.classList.remove('loading');
    return Promise.reject(error);
  },
);
