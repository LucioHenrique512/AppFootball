import React from 'react';
import {HomeView} from './view';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../App/routes';
import {DefaultListItemType, LeagueResponseType} from '../../types';
import {getLeagues} from '../../services';
import {useLeagues} from '../../hooks';
import {DefaultContainer} from '../../components';

type NavigationProps = NavigationProp<StackParamList, 'Home'>;

export const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {data, isError, isLoading} = useLeagues();

  const leagues = data?.data.response as LeagueResponseType[];

  const onLeaguePress = (item: DefaultListItemType) => {
    navigate('Teams', {leagueId: item.id, leagueName: item.name});
  };

  return (
    <DefaultContainer title="Ligas">
      <HomeView
        data={leagues}
        onLeaguePress={onLeaguePress}
        isLoading={isLoading}
        isError={isError}
      />
    </DefaultContainer>
  );
};
