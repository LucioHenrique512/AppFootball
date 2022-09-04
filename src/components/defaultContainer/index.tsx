import React from 'react';
import {TopBar, TopBarProps} from '../topBar';
import {Container, ContentContainer} from './styles';

interface IProps extends TopBarProps {
  children: React.ReactNode;
  hideTopBar?: boolean;
}

export const DefaultContainer: React.FC<IProps> = props => {
  return (
    <Container>
      {!Boolean(props.hideTopBar) && <TopBar {...props} />}
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  );
};
