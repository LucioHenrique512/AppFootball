import React from 'react';

import {
  DefaultListHeader,
  ErrorComponent,
  ListButton,
  LoadingComponent,
} from '../../components';
import {FlatList, ListRenderItem} from 'react-native';
import {isPair} from '../../utils';
import {TeamDetailsType} from '../../types';
import {TeamResponseType} from '../../types/teamsResponseType';

interface IProps {
  data: TeamResponseType[];
  leagueName: string;
  isError?: boolean;
  isLoading?: boolean;
  onTeamPress: (item: TeamDetailsType) => void;
}

export const TeamsView: React.FC<IProps> = ({
  data = [],
  leagueName,
  isError,
  isLoading,
  onTeamPress,
}) => {
  if (isLoading) return <LoadingComponent text="Carregando times" />;

  if (isError)
    return (
      <ErrorComponent text="Ocorreu um erro ao buscar os times dessa liga!" />
    );

  const dataToListItem = (itens: typeof data): TeamDetailsType[] =>
    itens.map(item => item.team);

  const ListHeaderComponent = () => {
    return <DefaultListHeader title="Liga:" data={leagueName} />;
  };

  const renderItem: ListRenderItem<TeamDetailsType> = ({index, item}) => {
    const onPress = () => {
      onTeamPress(item);
    };

    return (
      <ListButton
        key={`team-btn-${item.id}`}
        isPair={isPair(index)}
        text={item.name}
        imageUri={item.logo}
        onPress={onPress}
      />
    );
  };

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      ListHeaderComponent={ListHeaderComponent}
      data={dataToListItem(data)}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};
