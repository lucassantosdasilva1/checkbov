import styled from 'styled-components/native';
import profile from "@assets/images/profile.png";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FontAwesome } from "@expo/vector-icons";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(80)}px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary_background};
  margin-top: ${getStatusBarHeight()}px;

  border-bottom-width: 2px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-color: ${({ theme }) => theme.colors.primary_button};
  
`;

export const Content = styled.View`
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  margin-top: ${RFValue(20)}px;
`;

export const Greetings = styled.View`
  flex: 1;

  margin-left: 16px;

  justify-content: center;
`;

export const Hello = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Profile = styled.Image.attrs({
  source: profile,
})`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;

export const RefreshIcon = styled(FontAwesome).attrs({
  name: "refresh",
  size: RFValue(20),
  color: "#fff",
})``;

export const RefreshButton = styled.TouchableOpacity`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;

  align-items: center;
  justify-content: center;
  border-radius: 25px;

  margin-right: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.secondary_button};
`;