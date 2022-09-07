import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const TeamHeaderContainer = styled.View`
  background-color: ${({theme}) => theme.colors.foreground};
  padding: ${({theme}) => theme.sizing.XS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({theme}) => theme.sizing.MD}px;
`;

const logoSize = RFPercentage(10);

export const Logo = styled.Image`
  width: ${logoSize}px;
  height: ${logoSize}px;
`;

export const DataContainer = styled.View``;

export const TeamName = styled.Text`
  font-size: ${({theme}) => theme.sizing.SM}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
`;

export const TeamHeaderData = styled.Text`
  font-size: ${({theme}) => theme.sizing.XS}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text}85;
`;

export const PlayerContainer = styled.View`
  background-color: ${({theme}) => theme.colors.foreground};
  padding: ${({theme}) => theme.sizing.XS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({theme}) => theme.sizing.MD}px;
`;

const pictureSize = RFPercentage(13);

export const PlayerInfoContainer = styled.View`
  flex: 1;
  margin-left: ${RFPercentage(1)}px; ;
`;

export const PlayerHeader = styled.View``;

export const PlayerPicture = styled.Image`
  height: ${pictureSize}px;
  width: ${pictureSize}px;
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
`;

export const PlayerName = styled.Text`
  font-size: ${({theme}) => theme.sizing.SM}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
`;

export const PlayerInfo = styled.View`
  padding: ${RFPercentage(0.5)}px;
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
`;

export const PlayerInfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PlayerInfoTitle = styled.Text`
  font-size: ${({theme}) => theme.sizing.XXS}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text}85;
`;

export const PlayerInfoData = styled.Text`
  font-size: ${({theme}) => theme.sizing.XXS}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text}85;
`;
