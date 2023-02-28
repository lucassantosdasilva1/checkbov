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
          <InfoText>Hello Farmer</InfoText>
          <Hello>Have a good day</Hello>
        </Greetings>
      </Content>
    </Container>
  );
}
