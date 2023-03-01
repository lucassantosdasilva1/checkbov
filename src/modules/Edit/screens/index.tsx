import { IChecklistPut } from '@modules/Home/hook/types';
import { Header } from '@shared/components/Header';
import React from 'react';

import { Alert, ScrollView } from 'react-native';
import { ChecklistPutForm } from '../components/Form';
import { IEditProps, IReturnRegisterFormData } from '../hooks/types';

import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container
} from './styles';
import { useCheckList } from '@modules/Home/hook';
import moment from 'moment';

interface params {
  editValues: IEditProps
}

export function Edit() {
  const { saveNewCheckList } = useCheckList()
  
  const route = useRoute();
  const {editValues}  = route.params as params;

  const navigation = useNavigation();

  const parsePutData = (data: IReturnRegisterFormData): IChecklistPut => {
    //funcao que transforma "false" em false e "true" em true
    const parseBoolean = (value: string) => {
      if (value === "true") {
        return true;
      } else {
        return false;
      }
    }

    return {
      type: data.type,
      amount_of_milk_produced: Number(data.amount_of_milk_produced),
      number_of_cows_head: Number(data.number_of_cows_head),
      had_supervision: parseBoolean(data.had_supervision),
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
    } 
  }
    
  const onSubmitButton = (data: IReturnRegisterFormData) => {
    const parsedData = parsePutData(data);

    const array = [parsedData];

    // updateCheckList(dataCameRoute.id, array)
    // .then(() => {
    //   navigation.navigate('Home');
    // });
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
        <ChecklistPutForm onSubmit={onSubmitButton} data={editValues.data} />
        {/* <Teste /> */}
      </ScrollView>
    </Container>
  );
}

