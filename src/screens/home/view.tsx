import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {DefaultContainer, ListButton, TopBar} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LeagesMock from './mock.json';
import {StackParamList} from '../../App/routes';
import {isPair} from '../../utils';
import {DefaultListItemType} from '../../types';

type NavigationProps = NavigationProp<StackParamList, 'Home'>;

export const HomeView: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const data = LeagesMock.response;

  const dataToListItem = (itens: typeof data): DefaultListItemType[] =>
    itens.map(item => ({
      id: item.league.id,
      logo: item.league.logo,
      name: item.league.name,
    }));

  const renderItem: ListRenderItem<DefaultListItemType> = ({item, index}) => {
    const onPress = () => {
      navigate('Teams', {leagueId: item.id, leagueName: item.name});
    };

    return (
      <ListButton
        key={`league-btn-${item.id}`}
        isPair={isPair(index)}
        imageUri={item.logo}
        text={item.name}
        onPress={onPress}
      />
    );
  };

  return (
    <DefaultContainer title="Ligas">
      <FlatList
        keyExtractor={({id}) => `${id}`}
        data={dataToListItem(data)}
        numColumns={2}
        renderItem={renderItem}
      />
    </DefaultContainer>
  );
};
