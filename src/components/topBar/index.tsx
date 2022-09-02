import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container} from './styled';
import Icons from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components/native';
import {ColorsThemeType} from '../../themes';

type TopBarProps = {
  onBackPress?: () => void;
  onClosePress?: () => void;
  hideHorizontalPadding?: boolean;
  buttonColor?: keyof ColorsThemeType;
};

export const TopBar: React.FC<TopBarProps> = ({
  onBackPress,
  onClosePress,
  hideHorizontalPadding,
  buttonColor,
}) => {
  const {colors, sizing} = useTheme();

  const hasBackPress = !!onBackPress;
  const hasClosePress = !!onClosePress;

  const getButtonColor = useCallback(() => {
    if (!!buttonColor) return colors[buttonColor];

    return colors.foreground;
  }, [buttonColor]);

  return (
    <Container hideHorizontalPadding={hideHorizontalPadding}>
      <TouchableOpacity onPress={onBackPress} disabled={!hasBackPress}>
        <Icons
          name="left"
          color={hasBackPress ? getButtonColor() : 'transparent'}
          size={sizing.XLG}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onClosePress} disabled={!hasClosePress}>
        <Icons
          name="close"
          color={hasClosePress ? getButtonColor() : 'transparent'}
          size={sizing.XLG}
        />
      </TouchableOpacity>
    </Container>
  );
};
