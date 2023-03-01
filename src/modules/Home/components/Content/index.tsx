import { SwipeAction } from "@ant-design/react-native";
import { useCheckList } from "@modules/Home/hook";
import { IChecklistGet } from "@modules/Home/hook/types";
import React from "react";
import { Card } from "./Card";

import { Container, FlatList } from "./styles";

export function Content() {
  const { checkLists } = useCheckList();

  return (
    <Container>
      <FlatList
        data={checkLists}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card checklist={item as IChecklistGet} key={index} />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={isLoading} onRefresh={getProductsAPI} />
        // }
      />
    </Container>
  );
}
