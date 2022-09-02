import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.sizing.MD}px;
`;

