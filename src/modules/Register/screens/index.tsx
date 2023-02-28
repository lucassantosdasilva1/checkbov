import { Header } from '@shared/components/Header';
import React from 'react';

import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native';
import { ChecklistPostForm } from '../components/Form';
import { Teste } from '../components/Teste';


import {
  Container
} from './styles';

export function Register() {
  

  return (
    <Container>
      <Header />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChecklistPostForm />
        {/* <Teste /> */}
      </ScrollView>
    </Container>
  );
}

