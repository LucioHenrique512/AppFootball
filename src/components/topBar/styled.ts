import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type StyledProps = {
  hideHorizontalPadding?: boolean;
};

export const Container = styled.View<StyledProps>`
  height: ${RFPercentage(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px
    ${({theme, hideHorizontalPadding}) =>
      hideHorizontalPadding ? 0 : theme.sizing.SM}px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.sizing.SM}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text};
`;
