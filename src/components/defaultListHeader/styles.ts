import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.foreground};
  margin-bottom: ${({theme}) => theme.sizing.MD}px;
  border-radius: ${({theme}) => theme.sizing.BORDER_RADIUS}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderColor};
  align-items: center;
  padding: ${({theme}) => theme.sizing.SM}px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizing.XS}px;
`;
export const LeagueTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizing.SM}px;
  font-weight: 500;
`;
