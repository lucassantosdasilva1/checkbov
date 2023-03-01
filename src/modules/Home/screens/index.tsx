import React, { useEffect } from "react";
import { Text } from "react-native";
import { Content } from "../components/Content";
import { Header } from "@shared/components/Header";

import Realm from "realm";
import UUID from "react-native-uuid";
import { CheckListSchema } from "../gateway/offline/schemas/CheckListSchema";

import { Body, Container } from "./styles";
import CheckListOfflineService from "../gateway/offline/service/CheckListOfflineService";
import { IChecklistPost, IChecklistPut } from "../hook/types";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ButtonNewCheckList } from "../components/ButtonNewCheckList";

export function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <Content />
        <ButtonNewCheckList/>
      </Body>
    </Container>
  );
}
