import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title} from './styled';
import Icons from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components/native';
import {ColorsThemeType} from '../../themes';

export type TopBarProps = {
  onBackPress?: () => void;
  onClosePress?: () => void;
  hideHorizontalPadding?: boolean;
  buttonColor?: keyof ColorsThemeType;
  title?: string;
};

export const TopBar: React.FC<TopBarProps> = ({
  onBackPress,
  onClosePress,
  hideHorizontalPadding,
  buttonColor,
  title,
}) => {
  const {colors, sizing} = useTheme();

  const hasBackPress = !!onBackPress;
  const hasClosePress = !!onClosePress;

  const getButtonColor = useCallback(() => {
    if (!!buttonColor) return colors[buttonColor];

    return colors.text;
  }, [buttonColor]);

  return (
    <Container hideHorizontalPadding={hideHorizontalPadding}>
      <TouchableOpacity onPress={onBackPress} disabled={!hasBackPress}>
        <Icons
          name="left"
          color={hasBackPress ? getButtonColor() : 'transparent'}
          size={sizing.LG}
        />
      </TouchableOpacity>
      {Boolean(title) && <Title>{title}</Title>}
      <TouchableOpacity onPress={onClosePress} disabled={!hasClosePress}>
        <Icons
          name="close"
          color={hasClosePress ? getButtonColor() : 'transparent'}
          size={sizing.LG}
        />
      </TouchableOpacity>
    </Container>
  );
};
