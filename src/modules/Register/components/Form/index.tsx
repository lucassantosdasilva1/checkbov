import React, { useEffect, useState } from "react";
import { checklistYupResolver } from "@modules/Register/utils/yupValidation";
import { useForm, Controller } from "react-hook-form";

import { Container, Label, ErrorMessage } from "./styles";
import { Button, PermissionsAndroid } from "react-native";
import { CustomTextInput } from "../CustomTextInput";
import { IReturnRegisterFormData } from "@modules/Register/hooks/types";
import RadioForm from "react-native-simple-radio-button";

import * as Location from 'expo-location';
import MapView from 'react-native-maps';
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

  const [region, setRegion] = useState({
    latitude: -2.5459376,
    longitude: -44.2531554,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    setValue("has_supervision", `${true}`);
    setValue("type", `BPA`);

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setValue("latitude", String(location.coords.latitude));
      setValue("longitude", String(location.coords.longitude));
    })();

// (async () => {
//   const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     {
//       title: "Permissão de Acesso à Localização",
//       message: "Este aplicativo precisa acessar sua localização.",
//       buttonNeutral: "Pergunte-me depois",
//       buttonNegative: "Cancelar",
//       buttonPositive: "OK",
//     }
//   );
//   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setValue("latitude", String(position.coords.latitude));
//         setValue("longitude", String(position.coords.longitude));
//       }
//       // (error) => console.log(error),
//       // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   } else {
//     alert("Permissão de Localização negada");
//   }
// })()
    
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
          editable={false}
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
          editable={false}
          />
          )}
        name="longitude"
      />
      {errors.longitude && (
        <ErrorMessage>{errors.longitude.message?.toString()}</ErrorMessage>
        )}

      <MapView style={{height: 300, width: "100%", marginBottom: 25}} region={region} showsUserLocation/>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
};
