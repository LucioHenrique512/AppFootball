import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  margin-top: ${({theme}) => theme.sizing.SM}px;
  font-size: ${({theme}) => theme.sizing.SM}px;
  color: ${({theme}) => theme.colors.text}95;
`;
