import {useQuery} from '@tanstack/react-query';
import { getPlayers } from '../../services';


const playersDataKey = 'playersDataKey';

export const usePlayers = (teamId: number) => {
  const requestFn = () => getPlayers(teamId);
  return useQuery([playersDataKey], requestFn);
};
