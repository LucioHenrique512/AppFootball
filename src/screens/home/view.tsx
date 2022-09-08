import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {ErrorComponent, ListButton, LoadingComponent} from '../../components';
import {isPair} from '../../utils';
import {DefaultListItemType, LeagueResponseType} from '../../types';

interface IProps {
  onLeaguePress: (league: DefaultListItemType) => void;
  data?: LeagueResponseType[];
  isLoading?: boolean;
  isError?: boolean;
}

export const HomeView: React.FC<IProps> = ({
  onLeaguePress,
  data = [],
  isLoading,
  isError,
}) => {
  if (isError)
    return <ErrorComponent text={'Ocorreu um erro ao carregar as ligas! :('} />;

  if (isLoading) return <LoadingComponent text="Carregando ligas" />;

  const dataToListItem = (itens: typeof data): DefaultListItemType[] =>
    itens.map(item => ({
      id: item.league.id,
      logo: item.league.logo,
      name: item.league.name,
    }));

  const renderItem: ListRenderItem<DefaultListItemType> = ({item, index}) => {
    return (
      <ListButton
        key={`league-btn-${item.id}`}
        isPair={isPair(index)}
        imageUri={item.logo}
        text={item.name}
        onPress={() => onLeaguePress(item)}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={({id}) => `${id}`}
      data={dataToListItem(data)}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};
