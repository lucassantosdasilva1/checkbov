import { IChecklistGet, IChecklistGetOffline, IChecklistPost, IChecklistPut, IChecklistPutOffline } from '@modules/Home/hook/types';

export default interface CheckListOfflineRepository {
  // conectionRealm: () => Promise<void>;
  create: (checkList: IChecklistPost) => Promise<void>;
  getAll: () => Promise<IChecklistGet[]>;
  getById: (id: string) => Promise<IChecklistGet>;
  update: (id: string, checkList: IChecklistPut) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  deleteAll: () => Promise<void>;
  
  addCheckListsHttp: (checkList: IChecklistGet[]) => Promise<void>;
  getCreates: () => Promise<IChecklistPost[]>;
  getUpdates: () => Promise<IChecklistPutOffline[]>;
  getDeleteds: () => Promise<IChecklistGetOffline[]>;
  setChangeStatus: (id: string, syncStatus: 'synced' | 'waiting' | 'error') => Promise<void>;

  createThenCreateOnline: (checkList: IChecklistPost) => Promise<void>;
  updateThenUpdateOnline: (id: string, checkList: IChecklistPut, updateDate?: string) => Promise<void>;
  deleteThenDeleteOnline: (id: string) => Promise<void>;
}
