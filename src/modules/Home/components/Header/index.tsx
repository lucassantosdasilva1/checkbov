import React from "react";
import { View } from "react-native";

import {
  Container,
  Profile,
  Content,
  Hello,
  Greetings,
  InfoText,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Profile />
        <Greetings>
          <Hello>Hello Farmer</Hello>
          <InfoText>You are 3 checks unfilled</InfoText>
        </Greetings>
      </Content>
    </Container>
  );
}
