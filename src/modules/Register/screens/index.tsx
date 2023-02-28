import { IChecklistPost } from '@modules/Home/hook/types';
import { Header } from '@shared/components/Header';
import React from 'react';

import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native';
import { ChecklistPostForm } from '../components/Form';
import { IReturnRegisterFormData } from '../hooks/types';
import UUID from 'react-native-uuid';

import {
  Container
} from './styles';
import { useCheckList } from '@modules/Home/hook';
import moment from 'moment';

export function Register() {
  const { saveNewCheckList } = useCheckList()

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
      number_of_cows_head: Number(data.number_of_cows_head),
      had_supervision: parseBoolean(data.has_supervision),
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

    saveNewCheckList(array);
  }

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
        <ChecklistPostForm onSubmit={onSubmitButton} />
        {/* <Teste /> */}
      </ScrollView>
    </Container>
  );
}

