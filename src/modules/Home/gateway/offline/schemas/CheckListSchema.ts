export const CheckListSchema = {
  name: "checklist",
  properties: {
    ActType: { type: "string", optional: true, default: "" },
    syncStatus: { type: "string", optional: true, default: "" },
    isDeleted: { type: "bool", optional: true, default: false },

    _id: "string",
    type: "string",
    amount_of_milk_produced: "int",
    farmerName: "string",
    farmerCity: "string",
    from: "string",
    to:"string",
    number_of_cows_head: "int",
    had_supervision: "bool",
    latitude: "double",
    longitude: "double",
    created_at: "date",
    updated_at: "date",
    __v: { type: "int", optional: true, default: 0 },
  },
  primaryKey: "_id",
}

export const UpdateApiCheckListSchema = {
  name: "updateApiCheckList",
  properties: {
    _id: "string",
    type: "string",
    amount_of_milk_produced: "int",
    number_of_cows_head: "int",
    had_supervision: "bool",
    farmerName: "string",
    farmerCity: "string",
    from: "string",
    to:"string",
    latitude: "string",
    longitude: "string",
    updated_at: "date",
  },
}

export const DeleteApiCheckListSchema = {
  name: "deleteApiCheckList",
  properties: {
    _id: "string",
  },
}