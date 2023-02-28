import React from "react";

import { TextInputBase, TextInputProps } from "react-native";

import { Container } from "./styles";

interface ICustomTextInputProps extends TextInputProps {
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
}

import theme from "@shared/theme";

export function CustomTextInput({
  keyboardType,
  onBlur,
  onChangeText,
  value,
  ...rest
}: ICustomTextInputProps) {
  return (
    <Container
      keyboardType={keyboardType}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={theme.colors.terciary_text}
      {...rest}
    ></Container>
  );
}
