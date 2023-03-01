import React from "react";
import { View } from "react-native";

// refresh fontAwesome @expo/vector-icons
import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Profile,
  Content,
  Hello,
  Greetings,
  InfoText,
  RefreshIcon,
  RefreshButton,
} from "./styles";
import { useCheckList } from "@modules/Home/hook";

export function Header() {
  const { onRefresh } = useCheckList();

  return (
    <Container>
      <Content>
        <Profile />
        <Greetings>
          <InfoText>Hello Farmer</InfoText>
          <Hello>Have a good day</Hello>
        </Greetings>
        <RefreshButton onPress={onRefresh}>
          <RefreshIcon />
        </RefreshButton>
      </Content>
    </Container>
  );
}
