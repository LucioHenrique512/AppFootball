import React from 'react';
import {ColorsThemeType} from '../../themes';
import {Container, IconContainer, Text} from './styles';

type ButtonProps = {
  onPress?: () => void;
  buttonColor?: keyof ColorsThemeType;
  titleColor?: keyof ColorsThemeType;
  title?: string;
  disabled?: boolean;
  outline?: boolean;
  link?: boolean;
  iconComponent?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  buttonColor,
  disabled,
  onPress,
  title,
  titleColor,
  outline,
  link,
  iconComponent,
}) => {
  return (
    <Container
      disabled={disabled}
      onPress={onPress}
      buttonColor={buttonColor}
      outline={outline}
      link={link}>
      {!!iconComponent && <IconContainer>{iconComponent}</IconContainer>}
      <Text titleColor={titleColor}>{title}</Text>
    </Container>
  );
};
