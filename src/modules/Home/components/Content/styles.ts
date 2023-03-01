import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_background};
  /* padding: ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px; */
`;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: RFValue(4),
  },
})``;
