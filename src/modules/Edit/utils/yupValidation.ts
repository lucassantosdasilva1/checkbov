import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const checklistPostYupSchema = Yup.object({
  type: Yup.mixed<"BPA" | "BPF" | "Antibiotic">()
    .oneOf(
      ["BPA", "BPF", "Antibiotic"],
      "The field 'type' must be one of the allowed values: 'BPA', 'BPF', or 'Antibiotic'"
    )
    .required("The field 'type' is required"),
  amount_of_milk_produced: Yup.number().required(
    "The field 'amount_of_milk_produced' is required"
  ),
  farmerName: Yup.string().required("The field 'farmerName' is required"),
  farmerCity: Yup.string().required("The field 'farmerCity' is required"),
  from: Yup.string().required("The field 'from.name' is required"),
  to: Yup.string().required("The field 'to.name' is required"),
  number_of_cows_head: Yup.number().required(
    "The field 'number_of_cows_head' is required"
  ),
  had_supervision: Yup.boolean().required("The field 'had_supervision' is required"),
  latitude: Yup.string().required("The field 'location.latitude' is required"),
  longitude: Yup.string().required(
    "The field 'location.longitude' is required"
  ),
  created_at: Yup.date().required("The field 'created_at' is required"),
});

export const checklistYupResolver = yupResolver(checklistPostYupSchema);
