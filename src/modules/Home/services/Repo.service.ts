import IChecklistHttpRepository from "../gateway/http/repository/ChecklistHttpRepository";
import ChecklistHttpService from "../gateway/http/service/ChecklistHttpService";
import IRepoOfflineRepository from "../gateway/offline/repository/CheckListOfflineRepository";
import RepoOfflineService from "../gateway/offline/service/CheckListOfflineService";

interface IRepoService {
  http: IChecklistHttpRepository;
  offline: IRepoOfflineRepository;
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
    // getRepository: RepoOfflineService.getRepository,
    // addRepository: RepoOfflineService.addRepository,
    // addOwner: RepoOfflineService.addOwner,
    // getOwner: RepoOfflineService.getOwner,
  },
};

export { checkListService };
