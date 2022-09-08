import {useQuery} from '@tanstack/react-query';
import {getTeams} from '../../services';

const teamsDataKey = 'teamsDataKey';

export const useTeams = (leagueId: number) => {
  const requestFn = () => getTeams(leagueId);
  return useQuery([teamsDataKey], requestFn);
};
