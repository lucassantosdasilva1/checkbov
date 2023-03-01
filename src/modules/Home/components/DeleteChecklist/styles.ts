import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 15px;

  justify-content: center;
  align-items:center;

  background-color: 'rgba(52, 52, 52, 0.5)';
`;

export const Body = styled.View`
  justify-content: space-between;

  height: 120px;
  width: 100%;

  padding: 15px;

  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.primary_button};

  background-color: ${({theme}) => theme.colors.secondary_background};
`;
export const QuestionContainer = styled.View`
    
`;

export const ConfirmDelete = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.primary_text};
`;

export const ButtonContainer = styled.View`

  flex-direction: row;
  justify-content: flex-end;
`;

export const YesButton = styled(TouchableOpacity)`
  height: 30px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.secondary_text};
  border-width: 1px;

  margin-right: 15px;
`;

export const YesText = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.primary_background};
`;

export const NoButton = styled(TouchableOpacity)`
  height: 30px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.primary_background};
  border-width: 1px;

  margin-right: 15px;
`;

export const NoText = styled.Text`
  color: ${({theme}) => theme.colors.primary_text};
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;