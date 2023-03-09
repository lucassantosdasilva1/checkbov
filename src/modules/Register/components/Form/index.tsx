import React, { useEffect, useState } from "react";
import { checklistYupResolver } from "@modules/Register/utils/yupValidation";
import { useForm, Controller } from "react-hook-form";

import { Container, Label, ErrorMessage } from "./styles";
import { Button } from "react-native";
import { CustomTextInput } from "../CustomTextInput";
import { IReturnRegisterFormData } from "@modules/Register/hooks/types";
import RadioForm from "react-native-simple-radio-button";
interface IChecklistPostFormProps {
  onSubmit: (data: IReturnRegisterFormData) => void;
}

export const ChecklistPostForm = ({ onSubmit }: IChecklistPostFormProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IReturnRegisterFormData>({
    // resolver: checklistYupResolver,
  });

  const options = [
    {
      label: "Yes",
      value: "true",
    },
    {
      label: "No",
      value: "false",
    },
  ];

  const optionsChecklist = [
    {
      label: "BPA",
      value: "BPA",
    },
    {
      label: "BPF",
      value: "BPF",
    },
    {
      label: "Antibiotic",
      value: "Antibiotic",
    },
  ];

  useEffect(() => {
    setValue("has_supervision", `${true}`);
    setValue("type", `BPA`);
  }, []);

  // const onSubmit = (data: any) => console.log(data);
  return (
    <Container>
      <Label>Type CheckList</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue="BPA"
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioForm
            radio_props={optionsChecklist}
            initial={0}
            animation={false}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={"#FFF"}
            selectedButtonColor={"#FFF"}
            labelColor={"#FFF"}
            selectedLabelColor={"#FFF"}
            buttonSize={10}
            buttonOuterSize={20}
            labelStyle={{ fontSize: 12, marginRight: 10 }}
            onBlur={onBlur}
            value={value}
            // ref={value}
            onPress={onChange}
          />
        )}
        name="type"
      />

      <Label>Amount of Milk Produced</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value.toString()}
          />
        )}
        name="amount_of_milk_produced"
      />
      {errors.amount_of_milk_produced && (
        <ErrorMessage>
          {errors.amount_of_milk_produced.message?.toString()}
        </ErrorMessage>
      )}

      <Label>Farmer Name</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            autoCapitalize="words"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="farmerName"
      />
      {errors.farmerName && (
        <ErrorMessage>{errors.farmerName.message?.toString()}</ErrorMessage>
      )}

      <Label>Farmer City</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            autoCapitalize="words"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="farmerCity"
      />
      {errors.farmerCity && (
        <ErrorMessage>{errors.farmerCity.message?.toString()}</ErrorMessage>
      )}

      <Label>From Name</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            autoCapitalize="words"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="from"
      />
      {errors.from && (
        <ErrorMessage>{errors.from.message?.toString()}</ErrorMessage>
      )}

      <Label>To Name</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            autoCapitalize="words"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="to"
      />
      {errors.to && (
        <ErrorMessage>{errors.to?.message?.toString()}</ErrorMessage>
      )}

      <Label>Number of Cows Head</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={"0"}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            keyboardType="numeric"
            onChangeText={onChange}
            onBlur={onBlur}
            value={String(value)}
          />
        )}
        name="number_of_cows_head"
      />
      {errors.number_of_cows_head && (
        <ErrorMessage>
          {errors.number_of_cows_head.message?.toString()}
        </ErrorMessage>
      )}

      <Label>Has Supervision?</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue="true"
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioForm
            radio_props={options}
            initial={0}
            animation={false}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={"#FFF"}
            selectedButtonColor={"#FFF"}
            labelColor={"#FFF"}
            selectedLabelColor={"#FFF"}
            buttonSize={10}
            buttonOuterSize={20}
            labelStyle={{ fontSize: 12, marginRight: 10 }}
            onBlur={onBlur}
            value={value}
            // ref={value}
            onPress={onChange}
          />
        )}
        name="has_supervision"
      />
      <Label>Latitude</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={"0"}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            keyboardType="numeric"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value.toString()}
          />
        )}
        name="latitude"
      />
      {errors.latitude && (
        <ErrorMessage>{errors.latitude.message?.toString()}</ErrorMessage>
      )}

      <Label>Longitude</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={"0"}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            keyboardType="numeric"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value.toString()}
          />
        )}
        name="longitude"
      />
      {errors.longitude && (
        <ErrorMessage>{errors.longitude.message?.toString()}</ErrorMessage>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
};
