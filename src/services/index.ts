import axios from 'axios';
import {BaseApiResponse, LeagueResponseType} from '../types';
import {PlayersResponseType} from '../types/playersResponseType';
import {TeamResponseType} from '../types/teamsResponseType';
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
  api.get<BaseApiResponse<LeagueResponseType>>('/leagues', {
    params: {country: 'Brazil'},
  });

const year = new Date().getFullYear();

export const getTeams = (leagueId: number) =>
  api.get<BaseApiResponse<TeamResponseType>>('/teams', {
    params: {league: leagueId, season: year},
  });

export const getPlayers = (teamId: number) =>
  api.get<BaseApiResponse<PlayersResponseType>>('/players', {
    params: {
      season: year,
      team: teamId,
    },
  });
