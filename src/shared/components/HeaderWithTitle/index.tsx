import React from "react";

import {
  Container,
  InfoText,
  Content
} from "./styles";

export function HeaderWithTitle({name}: {name: string}) {
  return (
    <Container>
      <Content>
        <InfoText>{name}</InfoText>
      </Content>
    </Container>
  );
}