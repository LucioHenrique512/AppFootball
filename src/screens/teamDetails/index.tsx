import React from 'react';
import {DefaultContainer} from '../../components';
import {TeamDetailView} from './view';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackParamList} from '../../App/routes';
import {usePlayers} from '../../hooks/queries/players';
import {PlayersResponseType} from '../../types/playersResponseType';

type NavigationProps = NavigationProp<StackParamList, 'TeamDetails'>;
type RouteProps = RouteProp<StackParamList, 'TeamDetails'>;

export const TeamDetails: React.FC = () => {
  const {goBack} = useNavigation<NavigationProps>();
  const {params} = useRoute<RouteProps>();

  const {data, isError, isLoading} = usePlayers(params.teamId);

  const players = data?.data.response as PlayersResponseType[];

  return (
    <DefaultContainer onBackPress={goBack} title="Cruzeiro">
      <TeamDetailView data={players} isError={isError} isLoading={isLoading} />
    </DefaultContainer>
  );
};
