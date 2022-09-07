import React from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackParamList} from '../../App/routes';
import {
  DefaultContainer,
  DefaultListHeader,
  ListButton,
} from '../../components';
import {FlatList, ListRenderItem} from 'react-native';
import mock from './mock.json';
import {isPair} from '../../utils';
import {TeamDetailsType} from '../../types';
import {useApplicationContext} from '../../context';

type NavigationProps = NavigationProp<StackParamList, 'Teams'>;
type RouteProps = RouteProp<StackParamList, 'Teams'>;

export const TeamsView: React.FC = () => {
  const {setTeamDetails} = useApplicationContext();

  const {goBack, navigate} = useNavigation<NavigationProps>();
  const {params} = useRoute<RouteProps>();

  const data = mock.response;

  const dataToListItem = (itens: typeof data): TeamDetailsType[] =>
    itens.map(item => item.team);

  const ListHeaderComponent = () => {
    return <DefaultListHeader title="Liga:" data={params.leagueName} />;
  };

  const renderItem: ListRenderItem<TeamDetailsType> = ({index, item}) => {
    const onPress = () => {
      setTeamDetails({...item, leagueName: params.leagueName});
      navigate('TeamDetails');
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
    <DefaultContainer title="Times" onBackPress={goBack}>
      <FlatList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        data={dataToListItem(data)}
        renderItem={renderItem}
        numColumns={2}
      />
    </DefaultContainer>
  );
};
