import React from "react";

import {
  Container,
  CreateChecklistButton,
  CreateChecklistButtonText,
  CreateChecklistButtonIcon,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <CreateChecklistButton>
        <CreateChecklistButtonIcon/>
        <CreateChecklistButtonText>New CheckList</CreateChecklistButtonText>
      </CreateChecklistButton>
    </Container>
  );
}
