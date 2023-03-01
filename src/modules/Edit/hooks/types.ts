import { IChecklistPut } from "@modules/Home/hook/types";

export interface IReturnRegisterFormData {
  amount_of_milk_produced: string;
  farmerCity: string;
  farmerName: string;
  from: string;
  latitude: string;
  longitude: string;
  number_of_cows_head: string;
  to: string;
  type: string;
  had_supervision: string;
}  

export interface IEditProps {
  _id: string;
  data: IChecklistPut;
}