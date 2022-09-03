import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StackParamList} from '../../App/routes';
import {DefaultContainer} from '../../components';

type NavigationProps = NavigationProp<StackParamList, 'Teams'>;

export const TeamsView: React.FC = () => {
  const {goBack} = useNavigation<NavigationProps>();

  return (
    <DefaultContainer title="Times" onBackPress={goBack}>
      <></>
    </DefaultContainer>
  );
};
