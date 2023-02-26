import { useState } from "react";
// import { Modal } from "../components/modal";
import { Children } from "@core/hooks/globalTypes";
import { IChecklistGet, CheckListContext } from "./types";
import { checkListService } from "../services/Repo.service";
import { useNetInfo } from "@react-native-community/netinfo";
import React, { createContext, useEffect, useContext } from "react";

const Context = createContext<CheckListContext>({} as CheckListContext);

export const CheckListProvider = ({ children }: Children) => {
  const { isConnected } = useNetInfo();
  const [showModal, setShowModal] = useState(false);
  const [checkLists, setCheckLists] = useState<IChecklistGet[]>([]);

  const toggleModalOfSelectCheckList = () => setShowModal((value) => !value);

  const getAllCheckListsOnline = async () => {
    try {
      const { data } = await checkListService.http.getAll();

      //set checlist to offline
      // await checkListService.offline.addRepository("repositories", repos);

      setCheckLists(data);
    } catch (error: any) {
      console.log("ERROR: GET ALL CHECKLIST ONLINE =>", error);
    }
  };

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
      if (isConnected) getAllCheckListsOnline();
      else getAllCheckListsOffline();
    })();
  }, [isConnected]);

  return (
    <Context.Provider
      value={{
        checkLists,
        getAllCheckListsOnline,
        getAllCheckListsOffline,
        toggleModalOfSelectCheckList
      }}
    >
      {children}
      {/* <Modal visible={showModal} onClose={() => setShowModal(false)} /> */}
    </Context.Provider>
  );
};

export const useCheckList = () => useContext(Context);
