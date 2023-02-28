import React, { useEffect, useState } from "react";
import { checklistYupResolver } from "@modules/Register/utils/yupValidation";
import { useForm, Controller } from "react-hook-form";

import {
  Container,
  Input,
  Label,
  ErrorMessage,
  SubmitButton,
  RadioItem,
  TextRadio,
} from "./styles";
import { Button } from "react-native";
import { CustomTextInput } from "../CustomTextInput";
import { Radio } from "@ant-design/react-native";

interface IChecklistPostFormProps {
  onSubmit: (data: any) => void;
}

const options = ["BPA", "BPF", "Antibiotic"];

function RenderRadioItem({ onChange, ...props }: any) {
  return (
    <>
      {options.map((option, index) => {
        console.log("option", option);
        return (
          <Radio key={index} {...props} onChange={onChange} value={option}>
            {option}
          </Radio>
        );
      })}
    </>
  );
}

export const ChecklistPostForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: checklistYupResolver,
  });
  const [selectedOptionType, setSelectedOptionType] = useState("BPA");
  const [selectedOptionHadSuper, setSelectedOptionHadSuper] = useState(false);

  const handleTypeRadioChange = (value: string) => {
    setSelectedOptionType(value);
  };

  const handleHadSupervisionRadioChange = (value: boolean) => {
    setSelectedOptionHadSuper(value);
  };

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    // Register all form fields here
  }, []);

  return (
    <Container>
      {/* <Label>Type</Label>
      <RadioItem
        checked={selectedOptionType === "BPA"}
        onChange={() => handleTypeRadioChange("BPA")}
      >
        <TextRadio>BPA</TextRadio>
      </RadioItem>
      <RadioItem
        checked={selectedOptionType === "BPF"}
        onChange={() => handleTypeRadioChange("BPF")}
      >
        <TextRadio>BPF</TextRadio>
      </RadioItem>
      <RadioItem
        checked={selectedOptionType === "Antibiotic"}
        onChange={() => handleTypeRadioChange("Antibiotic")}
      >
        <TextRadio>Antibiotic</TextRadio>
      </RadioItem> */}
      <Label>Type CheckList</Label>
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
            placeholder="Ex.: 'BPA' or 'BPF' or 'Antibiotic'"
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
        defaultValue={0}
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
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value.toString()}
            placeholder="Ex.: 'true' or 'false'"
          />
        )}
        name="type"
      />

      {/* <Label>Had Supervision</Label>
      <RadioItem
        checked={selectedOptionHadSuper === true}
        onChange={() => handleHadSupervisionRadioChange(true)}
      >
        <TextRadio>YES</TextRadio>
      </RadioItem>
      <RadioItem
        checked={selectedOptionHadSuper === false}
        onChange={() => handleHadSupervisionRadioChange(false)}
      >
        <TextRadio>NO</TextRadio>
      </RadioItem>
      {errors.had_supervision && (
        <ErrorMessage>{errors.had_supervision.message?.toString()}</ErrorMessage>
      )} */}

      <Label>Latitude</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={0}
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
        defaultValue={0}
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
