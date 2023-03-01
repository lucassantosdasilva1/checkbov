import React from 'react';

import {
  LoadingContainer,
  LoadingCircle,
  LoadingCircleFill,
  LoadingText,
} from './styles';


export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCircle>
        <LoadingCircleFill />
      </LoadingCircle>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};
