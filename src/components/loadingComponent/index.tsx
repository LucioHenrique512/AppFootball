import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Container, Text} from './styles';

interface IProps {
  text?: string;
}

export const LoadingComponent: React.FC<IProps> = ({text}) => {
  const {colors, sizing} = useTheme();
  return (
    <Container>
      <View>
        <ActivityIndicator size={sizing.XLG} color={colors.primary} />
        <Text>{text ?? 'Carregando'}</Text>
      </View>
    </Container>
  );
};
