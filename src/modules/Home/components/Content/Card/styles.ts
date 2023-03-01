import { View } from 'react-native';
// import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  margin: 8px 0 8px 0;
  `;

export const CardWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
  elevation: 5,
})`
  flex-direction: column;
  background-color: ${ ({ theme }) => theme.colors.secondary_background };
  border-radius: 4px;
  padding: 16px;

  width: 100%;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  
  color: ${({ theme }) => theme.colors.secondary_text};
  font-family:  ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 8px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.primary_text};
  font-family:  ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  margin-right: 8px;
`;