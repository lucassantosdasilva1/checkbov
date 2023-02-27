import IChecklistHttpRepository from "../gateway/http/repository/ChecklistHttpRepository";
import ChecklistHttpService from "../gateway/http/service/ChecklistHttpService";
import CheckListOfflineRepository from "../gateway/offline/repository/CheckListOfflineRepository";
import CheckListOfflineService from "../gateway/offline/service/CheckListOfflineService";

interface IRepoService {
  http: IChecklistHttpRepository;
  offline: CheckListOfflineRepository;
}

const checkListService: IRepoService = {
  http: {
    get: ChecklistHttpService.get,
    getAll: ChecklistHttpService.getAll,
    post: ChecklistHttpService.post,
    put: ChecklistHttpService.put,
    delete: ChecklistHttpService.delete,
  },
  offline: {
    getAll: CheckListOfflineService.getAll,
    getById: CheckListOfflineService.getById,
    getDeleteds: CheckListOfflineService.getDeleteds,
    addCheckListsHttp: CheckListOfflineService.addCheckListsHttp,
    create: CheckListOfflineService.create,
    update: CheckListOfflineService.update,
    deleteById: CheckListOfflineService.deleteById,
  },
};

export { checkListService };