import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {TopBar} from '../../components';
import {
  Container,
  ContentContainer,
  ListItemContainer,
  ListItemName,
  ListItemLogo,
  ListItemButton,
} from './styles';

import LeagesMock from './mock.json';

export type LeagueItemType = {
  id: number;
  logo: string;
  name: string;
};

export const HomeView: React.FC = () => {
  const data = LeagesMock.response;

  const renderItem: ListRenderItem<LeagueItemType> = ({item, index}) => {
    const isPair = index % 2 == 0;
    return (
      <ListItemContainer isPair={isPair}>
        <ListItemButton>
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
    <Container>
      <TopBar title="Ligas" />
      <ContentContainer>
        <FlatList
          data={data.map(item => ({
            id: item.league.id,
            logo: item.league.logo,
            name: item.league.name,
          }))}
          numColumns={2}
          renderItem={renderItem}
        />
      </ContentContainer>
    </Container>
  );
};
