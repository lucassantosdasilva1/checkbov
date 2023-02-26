import React from 'react';
import { Text } from 'react-native';
import { Content } from '../components/Content';
import { Header } from '../components/Header';

import {
  Container
} from './styles';

export function Home() {
  return (
    
    <Container>
      <Header/>
      <Content/>
      {/*<Footer/> */}
    </Container>
  );
}