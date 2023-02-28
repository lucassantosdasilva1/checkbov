import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary_background};
  `;

export const Body = styled.View`
  flex: 1;
  padding: 0 15px;
  `;