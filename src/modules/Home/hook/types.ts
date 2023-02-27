export interface IChecklistGet {
  _id?: string;
  type: "BPA" | "BPF" | "Antibiotic";
  amount_of_milk_produced: number;
  farmer: {
    name: string;
    city: string;
  };
  from: {
    name: string;
  };
  to: {
    name: string;
  };
  number_of_cows_head: number;
  had_supervision: boolean;
  location: {
    latitude: string;
    longitude: string;
  };
  created_at: Date;
  updated_at: Date;
  __v: number;
}

export interface IChecklistPost { 
  _id: string;
  type: "BPA" | "BPF" | "Antibiotic";
  amount_of_milk_produced: number;
  farmer: {
    name: string;
    city: string;
  };
  from: {
    name: string;
  };
  to: {
    name: string;
  };
  number_of_cows_head: number;
  had_supervision: boolean;
  location: {
    latitude: string;
    longitude: string;
  };
  created_at: Date;
  updated_at: Date;
}

export interface IChecklistPut {
  type: "BPA" | "BPF" | "Antibiotic";
  amount_of_milk_produced: number;
  number_of_cows_head: number;
  had_supervision: boolean;
  farmer: {
    name: string;
    city: string;
  };
  from: {
    name: string;
  };
  to: {
    name: string;
  };
  location: {
    latitude: string;
    longitude: string;
  };
}

export type CheckListContext = {
  checkLists: IChecklistGet[];
  getAllCheckListsOnline: () => Promise<void>;
  getAllCheckListsOffline: () => Promise<void>;
  toggleModalOfSelectCheckList: () => void;
};

export type IDataBaseCheckListGet = {
  _id: string;
  id?: number;
  type: "BPA" | "BPF" | "Antibiotic";
  amount_of_milk_produced: number;
  farmerName: string;
  farmerCity: string;
  from: string;
  to: string;
  number_of_cows_head: number;
  had_supervision: boolean;
  latitude: string;
  longitude: string;
  created_at: Date;
  updated_at: Date;
  __v: number;
};