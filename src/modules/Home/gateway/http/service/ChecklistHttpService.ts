import { IChecklistPost, IChecklistPostArray, IChecklistPut } from "@modules/Home/hook/types";
import { api } from "@service/index";
import IChecklistHttp from "../repository/ChecklistHttpRepository";

const ChecklistHttpService: IChecklistHttp = {
  getAll: () => api.get("/checkList"),
  get: (id: string) => api.get(`/checkList/${id}`),
  post: (data: IChecklistPostArray[]) =>
    api.post("/checkList", {
      data,
      config: {
        headers: { "Content-Type": "application/json" },
      },
    }),
  put: (id: string, data: IChecklistPut) => api.put(`/checkList/${id}`, data),
  delete: (id: string) => api.delete(`/checkList/${id}`),
};

export default ChecklistHttpService;
