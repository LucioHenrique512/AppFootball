import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useApplicationContext} from '../../context';
import * as Style from './styles';
import {PlayerType} from '../../types';
import {PlayersResponseType} from '../../types/playersResponseType';
import { ErrorComponent, LoadingComponent } from '../../components';

interface IProps {
  data?: PlayersResponseType[];
  isError?: boolean;
  isLoading?: boolean;
}

export const TeamDetailView: React.FC<IProps> = ({
  data = [],
  isError,
  isLoading,
}) => {
  
  if (isError)
  return <ErrorComponent text={'Ocorreu um erro ao carregar os jogadores! :('} />;
  
  
  if (isLoading) return <LoadingComponent text="Carregando jogadores" />;

  const {teamDetails} = useApplicationContext();

  const dataToListItem = (items: typeof data): PlayerType[] =>
    items.map(item => item.player);

  const ListHeaderComponent = () => {
    return (
      <Style.TeamHeaderContainer>
        <Style.Logo
          style={{resizeMode: 'center'}}
          source={{uri: teamDetails?.logo}}
        />
        <Style.DataContainer>
          <Style.TeamName>{teamDetails?.name}</Style.TeamName>
          <Style.TeamHeaderData>{teamDetails?.leagueName}</Style.TeamHeaderData>
          <Style.TeamHeaderData>
            Fundação:{teamDetails?.founded}
          </Style.TeamHeaderData>
        </Style.DataContainer>
      </Style.TeamHeaderContainer>
    );
  };

  const renderItem: ListRenderItem<PlayerType> = ({item, index}) => {
    return (
      <Style.PlayerContainer>
        <Style.PlayerPicture source={{uri: item.photo}} />
        <Style.PlayerInfoContainer>
          <Style.PlayerHeader>
            <Style.PlayerName>{item.name}</Style.PlayerName>
            <Style.PlayerInfoData>Idade: {item.age}</Style.PlayerInfoData>
          </Style.PlayerHeader>
          <Style.PlayerInfo>
            <Style.PlayerInfoTitle>Informações:</Style.PlayerInfoTitle>
            <Style.PlayerInfoRow>
              <Style.PlayerInfoTitle>Nacionalidade:</Style.PlayerInfoTitle>
              <Style.PlayerInfoData>{item.nationality}</Style.PlayerInfoData>
            </Style.PlayerInfoRow>
            <Style.PlayerInfoRow>
              <Style.PlayerInfoTitle>Altura:</Style.PlayerInfoTitle>
              <Style.PlayerInfoData>{item.height}</Style.PlayerInfoData>
            </Style.PlayerInfoRow>
            <Style.PlayerInfoRow>
              <Style.PlayerInfoTitle>Peso:</Style.PlayerInfoTitle>
              <Style.PlayerInfoData>{item.weight}</Style.PlayerInfoData>
            </Style.PlayerInfoRow>
          </Style.PlayerInfo>
        </Style.PlayerInfoContainer>
      </Style.PlayerContainer>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      data={dataToListItem(data)}
      renderItem={renderItem}
    />
  );
};
