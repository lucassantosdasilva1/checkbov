import { SwipeAction } from "@ant-design/react-native";
import { IChecklistGet, IChecklistPut } from "@modules/Home/hook/types";
import React, { useState } from "react";
import { Alert, Modal } from "react-native";
import theme from "@shared/theme";

import { useNavigation } from "@react-navigation/native";

import { Container, CardWrapper, Label, RowWrapper, Value } from "./styles";
import { DeleteCheckList } from "../../DeleteChecklist";

export function Card({ checklist }) {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

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

  const right = [
    {
      text: "Edit",
      onPress: () => handleEdit(),
      backgroundColor: `${theme.colors.secondary_text}`,
      color: "white",
    },
    {
      text: "Delet",
      onPress: () => handleModalDeleteOpen(),
      backgroundColor: "red",
      color: "white",
    },
  ];

  const dataEdit: IChecklistPut = {
    type,
    amount_of_milk_produced,
    farmer,
    from,
    to,
    number_of_cows_head,
    had_supervision,
    location,
  };

  const editValues = {
    _id,
    data: dataEdit,
  };

  const navigation = useNavigation();

  function handleModalDeleteOpen() {
    setVisibleDeleteModal(true);
  }

  function handleModalDeleteClose() {
    setVisibleDeleteModal(false);
  }

  const handleEdit = () => {
    navigation.navigate("Edit", { editValues });
  };

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
      <Modal visible={visibleDeleteModal} transparent={true}>
        <DeleteCheckList closeModal={handleModalDeleteClose} id={_id} />
      </Modal>

    </Container>
  );
}
