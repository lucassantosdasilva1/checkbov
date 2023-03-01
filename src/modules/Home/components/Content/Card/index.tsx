import { SwipeAction } from "@ant-design/react-native";
import { IChecklistGet, IChecklistPut } from "@modules/Home/hook/types";
import React from "react";
import { Alert } from "react-native";
import theme from "@shared/theme";

import { useNavigation } from "@react-navigation/native";

import { Container, CardWrapper, Label, RowWrapper, Value } from "./styles";

export function Card({ checklist }) {
  const {
    _id,
    type,
    amount_of_milk_produced,
    farmer,
    from,
    to,
    number_of_cows_head,
    created_at,
    updated_at,
    had_supervision,
    location,
  } = checklist as IChecklistGet;

  const dataEdit: IChecklistPut = {
    type,
    amount_of_milk_produced,
    farmer,
    from,
    to,
    number_of_cows_head,
    had_supervision,
    location
  }

  const editValues  = {
    _id,
    data: dataEdit
  }

  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('Edit', {editValues})
  }

  const right = [
    {
      text: 'Edit',
      onPress: () => handleEdit(),
      backgroundColor: `${theme.colors.secondary_text}`,
      color: 'white',

    },
    {
      text: 'Delet',
      onPress: () => Alert.alert('delete'),
      backgroundColor: 'red',
      color: 'white',
    },
  ]

  return (
    <Container>
    <SwipeAction right={right}>
    <CardWrapper
      onPress={() => {
        return Alert.alert("Abre Modal de editar");
      }}
    >
        <RowWrapper>
          <Label>Type:</Label>
          <Value>{type}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>Amount of Milk Produced:</Label>
          <Value>{amount_of_milk_produced}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>Farmer:</Label>
          <Value>{farmer.name}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>From:</Label>
          <Value>{from.name}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>To:</Label>
          <Value>{to.name}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>Number of Cows Head:</Label>
          <Value>{number_of_cows_head}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>Created At:</Label>
          <Value>{String(created_at)}</Value>
        </RowWrapper>
        <RowWrapper>
          <Label>Updated At:</Label>
          <Value>{String(updated_at)}</Value>
        </RowWrapper>
    </CardWrapper>
      </SwipeAction>
      </Container>
  );
}
