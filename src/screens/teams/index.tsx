import React from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackParamList} from '../../App/routes';

import {DefaultContainer} from '../../components';
import {TeamsView} from './view';
import {useApplicationContext} from '../../context';
import {TeamDetailsType} from '../../types';
import {useTeams} from '../../hooks';
import {TeamResponseType} from '../../types/teamsResponseType';

type NavigationProps = NavigationProp<StackParamList, 'Teams'>;
type RouteProps = RouteProp<StackParamList, 'Teams'>;

export const Teams: React.FC = () => {
  const {setTeamDetails} = useApplicationContext();
  const {goBack, navigate} = useNavigation<NavigationProps>();

  const {params} = useRoute<RouteProps>();

  const {data, isError, isLoading} = useTeams(params.leagueId);

  const teams = data?.data.response as TeamResponseType[];

  const onTeamPress = (item: TeamDetailsType) => {
    setTeamDetails({...item, leagueName: params.leagueName});
    navigate('TeamDetails', {teamId: item.id});
  };

  return (
    <DefaultContainer title="Times" onBackPress={goBack}>
      <TeamsView
        data={teams}
        leagueName={params.leagueName}
        isError={isError}
        isLoading={isLoading}
        onTeamPress={onTeamPress}
      />
    </DefaultContainer>
  );
};
