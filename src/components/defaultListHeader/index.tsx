import React from 'react';
import {Container, LeagueTitle, Title} from './styles';

type IProps = {
  title: string;
  data: string;
};

export const DefaultListHeader: React.FC<IProps> = ({title, data}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <LeagueTitle>{data}</LeagueTitle>
    </Container>
  );
};
