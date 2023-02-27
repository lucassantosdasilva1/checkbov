import { IChecklistGet, IChecklistGetOffline, IChecklistPost, IChecklistPut } from '@modules/Home/hook/types';

export default interface CheckListOfflineRepository {
  // conectionRealm: () => Promise<void>;
  getAll: () => Promise<IChecklistGet[]>;
  getById: (id: string) => Promise<IChecklistGet>;
  getDeleteds: () => Promise<IChecklistGetOffline[]>;
  addCheckListsHttp: (checkList: IChecklistGet[]) => Promise<void>;
  create: (checkList: IChecklistPost) => Promise<void>;
  update: (id: string, checkList: IChecklistPut) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
}
