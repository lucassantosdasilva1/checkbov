import styled from 'styled-components/native';
import { Radio } from '@ant-design/react-native';
import { RadioProps } from '@ant-design/react-native/lib/radio/Radio';

export const Container = styled(Radio)<RadioProps>`
  color: ${({ theme }) => theme.colors.primary_button};

  margin-bottom: 8px;
`;