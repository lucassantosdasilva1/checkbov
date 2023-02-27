import { useState } from "react";
// import { Modal } from "../components/modal";
import { Children } from "@core/hooks/globalTypes";
import { IChecklistGet, CheckListContext } from "./types";
import { checkListService } from "../services/Repo.service";
import { useNetInfo } from "@react-native-community/netinfo";
import React, { createContext, useEffect, useContext } from "react";
import CheckListOfflineService from "../gateway/offline/service/CheckListOfflineService";
import ChecklistHttpService from "../gateway/http/service/ChecklistHttpService";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Context = createContext<CheckListContext>({} as CheckListContext);

export const CheckListProvider = ({ children }: Children) => {
  const { isConnected } = useNetInfo();
  const [showModal, setShowModal] = useState(false);
  const [checkLists, setCheckLists] = useState<IChecklistGet[]>([]);

  const toggleModalOfSelectCheckList = () => setShowModal((value) => !value);

  const upOfflineDeletedCheckLists = async () => {
    const checkListOffline = await CheckListOfflineService.getDeleteds();

    try {
      checkListOffline.map(async (checklist) => {
        ChecklistHttpService.delete(checklist._id).then(() => {
          CheckListOfflineService.deleteById(checklist._id);
        });
      });
      return true;
    } catch (error: any) {
      console.log("ERROR: DELETE CHECKLIST OFFLINE =>", error);
      return false;
    }
  };

  const addCheckListsHTTPtoDB = async (CheckListsHTTP: IChecklistGet[]) => {
    const checkListOffline = await CheckListOfflineService.getAll();
    const filteredArray = CheckListsHTTP.filter(
      (item1) => !checkListOffline.some((item2) => item1._id === item2._id)
    );

    await CheckListOfflineService.addCheckListsHttp(filteredArray).then(() => {
      console.log("ADDED CHECKLISTS HTTP TO DB");
    });
  };

  async function onConectJob() {
    if (isConnected) {
      const resultUp1 = await upOfflineDeletedCheckLists();
      // upOfflineUpdatedCheckLists();
      // upOfflineCreatedCheckLists();

      ChecklistHttpService.getAll().then(({ data }) => {
        setCheckLists(data);
        addCheckListsHTTPtoDB(data);
      });
    } else {
      CheckListOfflineService.getAll().then((data) => {
        setCheckLists(data);
      });
    }
  }

  // const getAllCheckLists = async () => {
  //   if (isConnected) {
  //     try {
  //       const { data } = await checkListService.http.getAll();
  //       setCheckLists(data);
  //       //set checlist to offline
  //       data.map(async (checklist) => {
  //         try {
  //           await CheckListOfflineService.addCheckListsHttp(checklist);
  //         } catch (error: any) {
  //           console.log("ERROR: ADD EXISTING CHECKLIST OFFLINE =>", error);
  //         }
  //       });
  //     } catch (error: any) {
  //       console.log("ERROR: GET ALL CHECKLIST ONLINE =>", error);
  //     }
  //   } else {
  //     try {
  //       const checklists = await checkListService.offline.getAll();
  //       setCheckLists(checklists);
  //     } catch (error: any) {
  //       console.log("ERROR: GET ALL CHECKLISTS OFFLINE =>", error);
  //     }
  //   }
  // };

  const getAllCheckListsOffline = async () => {
    // try {
    //   const checklists = await checkListService.offline.getChecklists("repositories");
    //   setCheckLists(checklists);
    // } catch (error: any) {
    //   console.log("ERROR: GET ALL CHECKLISTS OFFLINE =>", error);
    // }
  };

  useEffect(() => {
    (async () => {
      // await getAllCheckLists().then(() => {
      //   console.log("StateCHECKLISTS =>", checkLists);
      // });
    })();
  }, [isConnected]);

  return (
    <Context.Provider
      value={{
        checkLists,
        toggleModalOfSelectCheckList,
      }}
    >
      {children}
      {/* <Modal visible={showModal} onClose={() => setShowModal(false)} /> */}
    </Context.Provider>
  );
};

export const useCheckList = () => useContext(Context);
