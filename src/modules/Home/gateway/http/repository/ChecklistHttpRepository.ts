import { IChecklistGet, IChecklistPost, IChecklistPut } from "@modules/Home/hook/types";
import { AxiosPromise } from "axios";

export default interface IChecklistHttpRepository {
  getAll: () => AxiosPromise<IChecklistGet[]>;
  get: (id: string) => AxiosPromise<IChecklistGet>;
  post: (data: IChecklistPost) => AxiosPromise;
  put: (id: string, data: IChecklistPut) => AxiosPromise;
  delete: (id: string) => AxiosPromise;
}
