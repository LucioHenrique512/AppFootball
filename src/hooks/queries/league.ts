import {useQuery} from '@tanstack/react-query';
import {getLeagues} from '../../services';

const leaguesDataKey = 'leaguesDataKey';

export const useLeagues = () => {
  return useQuery([leaguesDataKey], getLeagues);
};
