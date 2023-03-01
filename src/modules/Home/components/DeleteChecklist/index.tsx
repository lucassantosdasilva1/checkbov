import React from "react";
import { useCheckList } from "@modules/Home/hook";
import { Alert } from "react-native";

import {
  Container,
  Body,
  QuestionContainer,
  ConfirmDelete,
  ButtonContainer,
  YesButton,
  YesText,
  NoButton,
  NoText,
} from "./styles";
import { Toast } from "@ant-design/react-native";

interface DeleteProps {
  id: string;
  closeModal: () => void;
}

export function DeleteCheckList({ id, closeModal }: DeleteProps) {
  const { deleteCheckList } = useCheckList();

  async function handleDelete() {
    try {
      console.log("id------------: ", id);
      await deleteCheckList(id);
      Alert.alert("Checklist deleted successfully");
    } catch (error) {
      throw error;
    } finally {
      closeModal();
    }
  }

  function handleNoDelete() {
    closeModal();
  }

  return (
    <Container>
      <Body>
        <QuestionContainer>
          <ConfirmDelete>
            Are you shure that you wish delete this checklist?
          </ConfirmDelete>
        </QuestionContainer>

        <ButtonContainer>
          <YesButton onPress={handleDelete}>
            <YesText>YES</YesText>
          </YesButton>
          <NoButton onPress={handleNoDelete}>
            <NoText>NO</NoText>
          </NoButton>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
