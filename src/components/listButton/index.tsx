import React from 'react';
import {Container, ListItemButton, ListItemLogo, ListItemName} from './styles';

type IProps = {
  isPair?: boolean;
  onPress?: () => void;
  imageUri?: string;
  text?: string;
};

export const ListButton: React.FC<IProps> = ({
  isPair,
  onPress,
  imageUri,
  text,
}) => {
  return (
    <Container isPair={isPair}>
      <ListItemButton onPress={onPress}>
        <ListItemLogo style={{resizeMode: 'center'}} source={{uri: imageUri}} />
        <ListItemName>{text}</ListItemName>
      </ListItemButton>
    </Container>
  );
};
