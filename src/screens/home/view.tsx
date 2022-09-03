import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {DefaultContainer, TopBar} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  ListItemContainer,
  ListItemName,
  ListItemLogo,
  ListItemButton,
} from './styles';
import LeagesMock from './mock.json';
import {StackParamList} from '../../App/routes';

type NavigationProps = NavigationProp<StackParamList, 'Home'>;

export type LeagueItemType = {
  id: number;
  logo: string;
  name: string;
};

export const HomeView: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const data = LeagesMock.response;

  const renderItem: ListRenderItem<LeagueItemType> = ({item, index}) => {
    const isPair = index % 2 == 0;

    const onPress = () => {
      navigate('Teams', {leagueId: item.id, leagueName: item.name});
    };

    return (
      <ListItemContainer isPair={isPair}>
        <ListItemButton onPress={onPress}>
          <ListItemLogo
            style={{resizeMode: 'center'}}
            source={{uri: item.logo}}
          />
          <ListItemName>{item.name}</ListItemName>
        </ListItemButton>
      </ListItemContainer>
    );
  };

  return (
    <DefaultContainer title="Ligas">
      <FlatList
        data={data.map(item => ({
          id: item.league.id,
          logo: item.league.logo,
          name: item.league.name,
        }))}
        numColumns={2}
        renderItem={renderItem}
      />
    </DefaultContainer>
  );
};
