import {
  IChecklistGet,
  IChecklistPost,
  IChecklistPut,
  IChecklistGetOffline,
  IChecklistSetDataOffline,
  IChecklistPostOffline,
  IChecklistPutOffline,
} from "@modules/Home/hook/types";
import CheckListOfflineRepository from "../repository/CheckListOfflineRepository";
import Realm from "realm";
import { CheckListSchema, DeleteApiCheckListSchema, UpdateApiCheckListSchema } from "../schemas/CheckListSchema";
import UUID from 'react-native-uuid';
import IChecklistHttpRepository from "../../http/repository/ChecklistHttpRepository";

const conectionChecklistRealm = async () =>
  await Realm.open({
    path: "checklist",
    schema: [CheckListSchema],
  });

// const conectionUpdateListRealm = async () =>
//   await Realm.open({
//     path: "checklist",
//     schema: [UpdateApiCheckListSchema],
//   });

// const conectionDeleteListRealm = async () =>
//   await Realm.open({
//     path: "checklist",
//     schema: [DeleteApiCheckListSchema],
//   });

const CheckListOfflineService: CheckListOfflineRepository = {
  getById: async (_id: string) => {
    const realm = await conectionChecklistRealm();
    const checkListDB: any = realm
      .objectForPrimaryKey("checklist", _id)
      ?.toJSON();

    if (!checkListDB) {
      throw new Error("CheckList not found");
    } else {
      const checkList: IChecklistGet = {
        _id: checkListDB._id,
        type: checkListDB.type,
        amount_of_milk_produced: checkListDB.amount_of_milk_produced,
        farmer: {
          name: checkListDB.farmerName,
          city: checkListDB.farmerCity,
        },
        from: {
          name: checkListDB.from,
        },
        to: {
          name: checkListDB.to,
        },
        number_of_cows_head: checkListDB.number_of_cows_head,
        had_supervision: checkListDB.had_supervision,
        location: {
          latitude: checkListDB.latitude,
          longitude: checkListDB.longitude,
        },
        created_at: checkListDB.created_at,
        updated_at: checkListDB.updated_at,
        __v: checkListDB.__v,
      };
      return checkList;
    }
  },

  getAll: async () => {
    const realm = await conectionChecklistRealm();
    const data = realm.objects<IChecklistGetOffline>("checklist").filtered("isDeleted = false");

    const result: IChecklistGet[] = data.map((checkList: any) => {
      return {
        _id: checkList._id,
        type: checkList.type,
        amount_of_milk_produced: checkList.amount_of_milk_produced,
        farmer: {
          name: checkList.farmerName,
          city: checkList.farmerCity,
        },
        from: {
          name: checkList.from,
        },
        to: {
          name: checkList.to,
        },
        number_of_cows_head: checkList.number_of_cows_head,
        had_supervision: checkList.had_supervision,
        location: {
          latitude: checkList.latitude,
          longitude: checkList.longitude,
        },
        created_at: checkList.created_at,
        updated_at: checkList.updated_at,
        __v: checkList.__v,
      };
    });

    return result;
  },

  getDeleteds: async () => {
    const realm = await conectionChecklistRealm();
    const data = realm.objects<IChecklistGetOffline>("checklist").filtered("isDeleted = true");

    const result: IChecklistGetOffline[] = data.map((checkList: any) => {
      return checkList;
    });
    
    return result;
  },

  getUpdates: async () => {
    const realm = await conectionChecklistRealm();
    const data = realm.objects<IChecklistGetOffline>("checklist").filtered( "syncStatus = 'waiting'" && "isDeleted = false" && "ActType = 'update'");

    const result: IChecklistPutOffline[] = data.map((checkList: any) => {
      return {
        _id: checkList._id,
        ActType: checkList.ActType,
        syncStatus: checkList.syncStatus,


        type: checkList.type,
        amount_of_milk_produced: checkList.amount_of_milk_produced,
        number_of_cows_head: checkList.number_of_cows_head,
        had_supervision: checkList.had_supervision,
        farmer: {
          name: checkList.farmerName,
          city: checkList.farmerCity,
        },
        from: {
          name: checkList.from,
        },
        to: {
          name: checkList.to,
        },
        location: {
          latitude: checkList.latitude,
          longitude: checkList.longitude,
        },
      };
    });

    return result;
  },

  getCreates: async () => {
    const realm = await conectionChecklistRealm();
    const data = realm.objects<IChecklistGetOffline>("checklist").filtered( "syncStatus = 'waiting'" && "isDeleted = false" && "ActType = 'create'");

    const result: IChecklistPost[] = data.map((checkList: any) => {
      return {
        _id: checkList._id,
        type: checkList.type,
        amount_of_milk_produced: checkList.amount_of_milk_produced,
        farmer: {
          name: checkList.farmerName,
          city: checkList.farmerCity,
        },
        from: {
          name: checkList.from,
        },
        to: {
          name: checkList.to,
        },
        number_of_cows_head: checkList.number_of_cows_head,
        had_supervision: checkList.had_supervision,
        location: {
          latitude: checkList.latitude,
          longitude: checkList.longitude,
        },
        created_at: checkList.created_at,
      };
    });

    return result;
  },

  addCheckListsHttp: async (checkList: IChecklistGet[]) => {
    const realm = await conectionChecklistRealm();

    checkList.map((checkList: IChecklistGet) => {
      const checklist: IChecklistSetDataOffline = {
        _id: String(checkList._id),
        type: checkList.type,
        amount_of_milk_produced: Number(checkList.amount_of_milk_produced),
        farmerName: checkList.farmer.name,
        farmerCity: checkList.farmer.city,
        from: checkList.from.name,
        to: checkList.to.name,
        number_of_cows_head: Number(checkList.number_of_cows_head),
        had_supervision: checkList.had_supervision,
        latitude: checkList.location.latitude,
        longitude: checkList.location.longitude,
        created_at: checkList.created_at,
        updated_at: checkList.updated_at,
        __v: checkList.__v,
      };
      realm.write(() => {
        realm.create("checklist", checklist);
      });
    })

  },

  setChangeStatus: async (_id: string, syncStatus: 'synced' | 'waiting' | 'error' ) => {
    const realm = await conectionChecklistRealm();
    const data = realm.objects<IChecklistGetOffline>("checklist").filtered(`_id = "${_id}"`);

    realm.write(() => {
      data[0].syncStatus = `${syncStatus}`
    });
  },

  create: async (checkList: IChecklistPost) => {
    const realm = await conectionChecklistRealm();
    const persistedCheckList = {
      ActType: 'create',
      syncStatus: 'waiting',
      _id: UUID.v1(),
      type: checkList.type,
      amount_of_milk_produced: checkList.amount_of_milk_produced,
      farmerName: checkList.farmer.name,
      farmerCity: checkList.farmer.city,
      from: checkList.from.name,
      to: checkList.to.name,
      number_of_cows_head: checkList.number_of_cows_head,
      had_supervision: checkList.had_supervision,
      latitude: checkList.location.latitude,
      longitude: checkList.location.longitude,
      created_at: new Date(),
      updated_at: new Date(),
    }
    realm.write(() => {
      realm.create("checklist", persistedCheckList);
    });
  },

  update: async (_id: string, checkList: IChecklistPut) => {
    const realm = await conectionChecklistRealm();

    const data: any = realm.objectForPrimaryKey("checklist", _id);

    // VOU DEIXAR PRONTO CASO EU QUEIRA USAR A ABORDAGEM DE SALVAR AS ALTERAÇÕES EM UMA TABELA DIFERENTE AO INVÉS DE FILTRAR PELO UPDATE_AT
    // const persistedCheckList = {
    //   _id: data._id,
    //   type: checkList.type,
    //   amount_of_milk_produced: checkList.amount_of_milk_produced,
    //   farmerName: checkList.farmer.name,
    //   farmerCity: checkList.farmer.city,
    //   from: checkList.from.name,
    //   to: checkList.to.name,
    //   number_of_cows_head: checkList.number_of_cows_head,
    //   had_supervision: checkList.had_supervision,
    //   latitude: checkList.location.latitude,
    //   longitude: checkList.location.longitude,
    //   created_at: data.created_at,
    //   updated_at: new Date(),
    //   __v: data.__v,
    // };

    realm.write(() => {
      //faz parte da abordagem de salvar as alterações em uma tabela diferente ao invés de filtrar pelo update_at
      // realm.create("checklist", persistedCheckList);
      data.ActType = 'update';
      data.syncStatus = 'waiting';
      data.type = checkList.type;
      data.amount_of_milk_produced = checkList.amount_of_milk_produced;
      data.farmerName = checkList.farmer.name;
      data.farmerCity = checkList.farmer.city;
      data.from = checkList.from.name;
      data.to = checkList.to.name;
      data.number_of_cows_head = checkList.number_of_cows_head;
      data.had_supervision = checkList.had_supervision;
      data.latitude = checkList.location.latitude;
      data.longitude = checkList.location.longitude;
      data.updated_at = new Date();
    });
  },

  deleteById: async (_id: string) => {
    const realm = await conectionChecklistRealm();
    const data: any = realm.objectForPrimaryKey("checklist", _id);

    realm.write(() => {
      data.isDeleted = true;
      data.ActType = 'delete';
      data.syncStatus = 'waiting';
    });
  },
};

export default CheckListOfflineService;
