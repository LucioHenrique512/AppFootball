import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ColorsThemeType, ThemeType} from '../../theme';

type StyledProps = {
  buttonColor?: keyof ColorsThemeType;
  titleColor?: keyof ColorsThemeType;
  disabled?: boolean;
  outline?: boolean;
  link?: boolean;
};

const getContainerColor = (
  theme: ThemeType,
  buttonColor?: keyof ColorsThemeType,
  disabled?: boolean,
  outline?: boolean,
  link?: boolean,
) => {
  if (link) return 'transparent';

  if (outline) return 'transparent';

  if (!!buttonColor)
    return `${theme.colors[buttonColor]}${disabled ? '75' : ''}`;

  return `${theme.colors.primary}${disabled ? '75' : ''}`;
};

const getContainerBorderColor = (
  theme: ThemeType,
  buttonColor?: keyof ColorsThemeType,
  disabled?: boolean,
  outline?: boolean,
) => {
  if (outline)
    return buttonColor
      ? `${theme.colors[buttonColor]}${disabled ? '75' : ''}`
      : theme.colors.primary;

  return `transparent`;
};

const buttonHeight = RFPercentage(7);

export const Container = styled.TouchableOpacity<StyledProps>`
  background: ${({theme, buttonColor, disabled, outline, link}) =>
    getContainerColor(theme, buttonColor, disabled, outline, link)};
  height: ${buttonHeight}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  border-width: 2.5px;
  border-color: ${({theme, buttonColor, disabled, outline}) =>
    getContainerBorderColor(theme, buttonColor, disabled, outline)};
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;

export const Text = styled.Text<StyledProps>`
  font-size: ${({theme}) => theme.sizing.MMD}px;
  font-weight: 500;
  font-weight: bold;
  color: ${({theme, titleColor}) =>
    !!titleColor ? theme.colors[titleColor] : theme.colors.background};
`;

export const IconContainer = styled.View`
  width: ${buttonHeight}px;
  height: ${buttonHeight}px;
  position: absolute;
  left: 0px;
  justify-content: center;
  align-items: center;
`;
