import { IChecklistGet } from "@modules/Home/hook/types";
import React from "react";
import { Alert } from "react-native";

import { CardWrapper, Label, RowWrapper, Value } from "./styles";

export function Card({checklist}) {
  const {
    type,
    amount_of_milk_produced,
    farmer,
    from,
    to,
    number_of_cows_head,
    created_at,
    updated_at,
  } = checklist;

  return (
    <CardWrapper onPress={() => { return Alert.alert("Abre Modal de editar")}}>
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
  );
}
