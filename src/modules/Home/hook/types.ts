export interface IChecklistGet {
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
    latitude: number;
    longitude: number;
  };
  created_at: Date;
  updated_at: Date;
  __v: number;
}

export interface IChecklistPostArray {
  checklist: IChecklistPost[];
}

export interface IChecklistPost { 
  _id?: string;
  type: string;
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
    latitude: number;
    longitude: number;
  };
  created_at: string;
  updated_at: string;
}

export interface IChecklistPut {
  type: string;
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
    latitude: number;
    longitude: number;
  };
}

export interface IChecklistPostOffline { 
  ActType?: 'create',
  syncStatus?: 'synced' | 'waiting' | 'error',

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
}
export interface IChecklistPutOffline {
  _id: string,
  ActType?: 'update' | 'create' | 'delete',
  syncStatus?: 'synced' | 'waiting' | 'error',
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

export interface IChecklistDeleteOffline {
  ActType: 'delete',
  syncStatus: 'synced' | 'waiting' | 'error'
}

export type IChecklistGetOffline = {
  ActType: string;
  syncStatus: string;
  isDeleted: boolean;
  _id: string;
  type: "BPA" | "BPF" | "Antibiotic";
  amount_of_milk_produced: number;
  farmerName: string;
  farmerCity: string;
  from: string;
  to: string;
  number_of_cows_head: number;
  had_supervision: boolean;
  latitude: number;
  longitude: number
  created_at: Date;
  updated_at: Date;
  __v: number;
};

export type IChecklistSetDataOffline = {
  _id: string;
  type: "BPA" | "BPF" | "Antibiotic";
  amount_of_milk_produced: number;
  farmerName: string;
  farmerCity: string;
  from: string;
  to: string;
  number_of_cows_head: number;
  had_supervision: boolean;
  latitude: number;
  longitude: number
  created_at: Date;
  updated_at: Date;
  __v: number;
};

export type CheckListContext = {
  checkLists: IChecklistGet[];
  saveNewCheckList: (data: IChecklistPost[]) => Promise<void>;
  updateCheckList: (id: string, data: IChecklistPut) => Promise<void>;
  deleteCheckList: (id: string) => Promise<void>;
  // getAllCheckListsOffline: () => Promise<void>;
  toggleModalOfSelectCheckList: () => void;
  onRefresh: () => void;
};