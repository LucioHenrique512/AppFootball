import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0px ${({theme}) => theme.sizing.MD}px;
`;

type ListItemContainerProps = {
  isPair?: boolean;
};

export const ListItemContainer = styled.View<ListItemContainerProps>`
  flex: 1;
  margin: 0px
    ${({theme, isPair}) => (isPair ? theme.sizing.MD / 2 : theme.sizing.MD)}px
    ${({theme}) => theme.sizing.MD}px
    ${({theme, isPair}) => (isPair ? theme.sizing.MD : theme.sizing.MD / 2)}px;
`;

const ItemSize = RFPercentage(19);

export const ListItemButton = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.foreground};
  margin-bottom: ${({theme}) => theme.sizing.MD}px;
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
  align-items: center;
  padding: ${({theme}) => theme.sizing.SM}px;
  width: ${ItemSize}px;
  height: ${ItemSize}px;
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
