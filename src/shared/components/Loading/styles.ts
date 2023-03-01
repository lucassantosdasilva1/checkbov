import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1A1A2F;
`;

export const LoadingText = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const LoadingCircle = styled.View`
  border-radius: 50;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  animation: loading-spin 1s linear infinite;
`;

export const LoadingCircleFill = styled.View`
  position: absolute;
  left: -5px;
  top: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50;
  border: 5px solid transparent;
  border-top-color: #3498db;
  animation: loading-spin 0.5s linear infinite;
  transform-origin: center center;
`;