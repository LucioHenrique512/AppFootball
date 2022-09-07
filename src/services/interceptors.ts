import {AxiosRequestConfig} from 'axios';

export const tokenInterceptor = (config: AxiosRequestConfig<any>) => {
  const headers = {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'c9839e9f99e516f136f933c7c2bf6f11',
  };

  config.headers = headers;

  return config;
};


