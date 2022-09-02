import React from 'react';
import {TopBar} from '../../components';
import {Container, ContentContainer} from './styles';

export const HomeView: React.FC = () => {
  return (
    <Container>
      <TopBar title="Ligas" />
      <ContentContainer></ContentContainer>
    </Container>
  );
};
