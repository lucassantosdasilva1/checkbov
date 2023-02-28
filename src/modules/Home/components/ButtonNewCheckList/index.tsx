import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  Container,
  CreateChecklistButton,
  CreateChecklistButtonText,
  CreateChecklistButtonIcon,
} from "./styles";

export function ButtonNewCheckList() {
  const navigation = useNavigation();
  
  const goRegister = () => navigation.navigate("Register")

  return (
    <Container>
      <CreateChecklistButton onPress={goRegister}>
        <CreateChecklistButtonIcon/>
        <CreateChecklistButtonText>New CheckList</CreateChecklistButtonText>
      </CreateChecklistButton>
    </Container>
  );
}
