import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const ItemSize = RFPercentage(19);

type ListItemContainerProps = {
  isPair?: boolean;
};

export const Container = styled.View<ListItemContainerProps>`
  width: ${ItemSize}px;
  height: ${ItemSize}px;
  flex: 1;
  margin: 0px
    ${({theme, isPair}) => (isPair ? theme.sizing.MD / 2 : theme.sizing.MD)}px
    ${({theme}) => theme.sizing.MD}px
    ${({theme, isPair}) => (isPair ? theme.sizing.MD : theme.sizing.MD / 2)}px;
`;



export const ListItemButton = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.foreground};
  margin-bottom: ${({theme}) => theme.sizing.MD}px;
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
  align-items: center;
  padding: ${({theme}) => theme.sizing.SM}px;
  justify-content: space-between;
`;

export const ListItemName = styled.Text`
  font-size: ${({theme}) => theme.sizing.SM}px;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
`;

export const ListItemLogo = styled.Image`
  width: ${RFPercentage(9)}px;
  height: ${RFPercentage(9)}px;
`;
