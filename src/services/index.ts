import axios from 'axios';
import {BaseApiResponse, LeagueResponseType} from '../types';
import {tokenInterceptor} from './interceptors';

const api = axios.create({baseURL: 'https://v3.football.api-sports.io/'});

api.interceptors.response.use(config => {
  const errors = config.data.errors;
  const hasError = errors.length !== 0;
  if (hasError) throw new Error('Ocorreu um erro ao buscar os dados!');

  return config;
});

api.interceptors.request.use(tokenInterceptor);

export const getLeagues = () =>
  api.get<BaseApiResponse<LeagueResponseType>>('/leagues?country=Brazil');
