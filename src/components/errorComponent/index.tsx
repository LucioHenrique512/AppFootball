import React from 'react';
import {View} from 'react-native';
import {Container, Text, Title} from './styles';

interface IProps {
  text?: string;
  title?: string;
}

export const ErrorComponent: React.FC<IProps> = ({text, title}) => {
  return (
    <Container>
      <View>
        <Title>{title ?? 'Ops!'}</Title>
        <Text>{text ?? 'Ocorreu um erro! :('}</Text>
      </View>
    </Container>
  );
};
