import { IChecklistPost } from '@modules/Home/hook/types';
import { Header } from '@shared/components/Header';
import React from 'react';

import { ScrollView } from 'react-native';
import { ChecklistPostForm } from '../components/Form';
import { IReturnRegisterFormData } from '../hooks/types';

import { useNavigation } from '@react-navigation/native';

import {
  Container
} from './styles';
import { useCheckList } from '@modules/Home/hook';
import moment from 'moment';
import { Toast } from '@ant-design/react-native';
import { HeaderWithTitle } from '@shared/components/HeaderWithTitle';

export function Register() {
  const { saveNewCheckList } = useCheckList()

  const navigation = useNavigation();

  const parsePostData = (data: IReturnRegisterFormData): IChecklistPost => {
    //funcao que transforma "false" em false e "true" em true
    const parseBoolean = (value: string) => {
      if (value === "true") {
        return true;
      } else {
        return false;
      }
    }
    const numberId = Math.floor(Math.random() * 100000000000000000000) + 1;
    return {
      _id: String(numberId),
      type: data.type,
      amount_of_milk_produced: Number(data.amount_of_milk_produced),
      number_of_cows_head: Number(data.number_of_cows_head),
      had_supervision: parseBoolean(data.has_supervision),
      farmer: {
        name: data.farmerName,
        city: data.farmerCity,
      },
      from: {
        name: data.from,
      },
      to: {
        name: data.to,
      },
      location: {
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
      },
      created_at: moment().format(),
      updated_at: moment().format(),
    } 
  }
    
  const onSubmitButton = (data: IReturnRegisterFormData) => {
    const parsedData = parsePostData(data);

    const array = [parsedData];

    saveNewCheckList(array).then(() => {
      navigation.navigate('Home');
    });
  }

  return (
    <Container>
      <HeaderWithTitle name='New CheckList' />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChecklistPostForm onSubmit={onSubmitButton} />
        {/* <Teste /> */}
      </ScrollView>
    </Container>
  );
}

