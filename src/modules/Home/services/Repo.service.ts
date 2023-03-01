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
    getById: CheckListOfflineService.getById,
    getAll: CheckListOfflineService.getAll,
    create: CheckListOfflineService.create,
    update: CheckListOfflineService.update,
    deleteById: CheckListOfflineService.deleteById,
    addCheckListsHttp: CheckListOfflineService.addCheckListsHttp, 
    getCreates: CheckListOfflineService.getCreates,
    getUpdates: CheckListOfflineService.getUpdates,
    getDeleteds: CheckListOfflineService.getDeleteds,
    setChangeStatus: CheckListOfflineService.setChangeStatus,
    createThenCreateOnline: CheckListOfflineService.createThenCreateOnline,
    updateThenCreateOnline: CheckListOfflineService.updateThenCreateOnline,
  },
};

export { checkListService };