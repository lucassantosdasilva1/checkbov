import { useState } from "react";
// import { Modal } from "../components/modal";
import { Children } from "@core/hooks/globalTypes";
import {
  IChecklistGet,
  CheckListContext,
  IChecklistPost,
  IChecklistPut,
} from "./types";
import { checkListService } from "../services/Repo.service";
import { useNetInfo } from "@react-native-community/netinfo";
import React, { createContext, useEffect, useContext } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { Toast } from "@ant-design/react-native";

const Context = createContext<CheckListContext>({} as CheckListContext);

export const CheckListProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [checkLists, setCheckLists] = useState<IChecklistGet[]>([]);

  const parseChecklistAddingCHECKLISTonObject = (data: IChecklistPost[]) => {
    const parsedTypeAPI = {
      checklists: [...data],
    };
    return parsedTypeAPI;
  };

  const { isConnected, isInternetReachable, details } = useNetInfo();

  //adicione um listener para verificar se o usuário está online

  const toggleModalOfSelectCheckList = () => setShowModal((value) => !value);

  //  =======    ======= instructions =======    =======  //
  // functions with initial up are functions that upload data to the server
  // functions with initial down are functions that download data from the server

  const upOfflineDeletedCheckLists = async () => {
    const checkListOffline = await checkListService.offline.getDeleteds();

    try {
      checkListOffline.map(async (checklist) => {
        axios
          .delete(
            `http://challenge-front-end.bovcontrol.com/v1/checklist/${checklist._id}`
          )
          .then(() => {
            checkListService.offline.deleteById(checklist._id);
          });
      });
      return true;
    } catch (error: any) {
      console.log("ERROR: ON UPLOAD DELETE-CHECKLISTS OFFLINE =>", error);
      return false;
    }
  };

  const upOfflineUpdatedCheckLists = async () => {
    const checkListOffline = await checkListService.offline.getUpdates();

    try {
      checkListOffline.map(async (checklist) => {
        await axios
          .put(
            `http://challenge-front-end.bovcontrol.com/v1/checklist/${checklist._id}`,
            checklist
          )
          .then(() => {
            checkListService.offline.setChangeStatus(checklist._id, "synced");
          });
      });
      return true;
    } catch (error: any) {
      console.log("ERROR: ON UPLOAD UPDATE-CHECKLIST OFFLINE =>", error);
      return false;
    }
  };

  const upOfflineCreatedCheckLists = async () => {
    const checkListOffline = await checkListService.offline.getCreates();

    try {
      checkListOffline.map(async (checklist) => {
        const parsedTypeAPI = parseChecklistAddingCHECKLISTonObject([
          checklist,
        ]);
        await axios
          .post(
            "http://challenge-front-end.bovcontrol.com/v1/checklist",
            parsedTypeAPI
          )
          .then(() => {
            checkListService.offline.setChangeStatus(
              String(checklist._id),
              "synced"
            );
          });
      });
      return true;
    } catch (error: any) {
      console.log("ERROR: ON UPLOAD CREATE-CHECKLIST OFFLINE =>", error);
      return false;
    }
  };

  const downAddCheckListsHTTPtoDB = async (CheckListsHTTP: IChecklistGet[]) => {
    const checkListOffline = await checkListService.offline.getAll();

    // Filter the checklists that are in the server but not in the offline database and save then in the offline database
    const filteredArray = CheckListsHTTP.filter((item1) =>
      checkListOffline.some((item2) => item1._id === item2._id)
    );

    filteredArray.map(async (checklist) => {
      Alert.alert("dadosFiltrados", checklist._id);
    });
    if (filteredArray.length > 0) {
      await checkListService.offline
        .addCheckListsHttp(filteredArray)
        .then(() => {
          console.log("ADDED CHECKLISTS HTTP TO DB");
        });
    } else {
      console.log("NO CHECKLISTS HTTP TO ADD TO DB");
    }

    // TODO Filter the checklists that was update in the server but not in the offline database and save then in the offline database
    // TODO Filter the checklists that was delete in the server but not in the offline database and delete then in the offline database
  };

  // When the app is connected to the internet, it will to do 3 upload Functions
  // and then it will download all the data from the server and save it in the offline database, if the 3 upload functions are successful
  async function onConectJob() {
    if (isConnected && isInternetReachable) {
      Alert.alert("Sincronizando");
      const resultUp1 = await upOfflineDeletedCheckLists();
      const resultUp2 = await upOfflineUpdatedCheckLists();
      const resultUp3 = await upOfflineCreatedCheckLists();

      if (resultUp1 && resultUp2 && resultUp3) {
        checkListService.http.getAll().then(({ data }) => {
          setCheckLists(data);
          try {
            (async () => {
              await downAddCheckListsHTTPtoDB(data);
            })();
          } catch (error: any) {
            console.log("ERROR: ADD EXISTING CHECKLIST OFFLINE =>", error);
          }
        });
      } else {
        Alert.alert("Error", "Nao foi possível sincronizar");
      }
    } else {
      Toast.fail("Sem conexão", 5);
      checkListService.offline.getAll().then((data) => {
        setCheckLists(data);
      });
    }
  }

  async function saveNewCheckList(data: IChecklistPost[]) {
    //this parse is to add the key "checklists" to the object
    const parsedTypeAPI = parseChecklistAddingCHECKLISTonObject(data);

    if (isConnected && isInternetReachable) {
      try {
        await axios
          .post(
            "http://challenge-front-end.bovcontrol.com/v1/checklist",
            parsedTypeAPI
          )
          .then(async () => {
            // await checkListService.http.post(parsedTypeAPI).then(async () => {
            console.log("SUCCESS NEW CHECKLIST SAVE ONLINE");
            await onConectJob();
          });
      } catch (error: any) {
        console.log("ERROR: CREATE NEW CHECKLIST ONLINE =>", error.response);
      }
    } else {
      try {
        await checkListService.offline.create(data[0]).then(async () => {
          await onConectJob();
          Alert.alert("Salvo offline");
        });
      } catch (error: any) {
        console.log(
          "ERROR: CREATE NEW CHECKLIST OFFLINE =>",
          error.response.message
        );
      }
    }
  }

  async function updateCheckList(id: string, data: IChecklistPut) {

    if (isConnected && isInternetReachable) {
      try {
        await axios
          .put(
            `http://challenge-front-end.bovcontrol.com/v1/checklist/${id}`,
            data
          )
          .then(async () => {
            // await checkListService.http.post(parsedTypeAPI).then(async () => {
              console.log("SUCCESS NEW CHECKLIST UPDATED ONLINE");
            await onConectJob();
          });
      } catch (error: any) {
        console.log("ERROR: UPDATE CHECKLIST ONLINE =>", error.response);
      }
    } else {
      try {
        await checkListService.offline.update(id, data).then(async () => {
          await onConectJob();
          Alert.alert("Salvo offline");
        });
      } catch (error: any) {
        console.log(
          "ERROR: CREATE NEW CHECKLIST OFFLINE =>",
          error.response.message
        );
      }
    }
  }

  async function deleteCheckList(id: string) {
    if (isConnected && isInternetReachable) {
      try {
        await axios
          .delete(
            `http://challenge-front-end.bovcontrol.com/v1/checklist/${id}`
          )
          .then(async () => {
            await onConectJob();
            console.log("SUCCESS NEW CHECKLIST DELETED ONLINE");
          });
      } catch (error: any) {
        console.log("ERROR: DELETE CHECKLIST ONLINE =>", error.response);
      }
    } else {
      try {
        await checkListService.offline.deleteById(id).then(async () => {
          await onConectJob();
          console.log("SUCCESS NEW CHECKLIST DELETED OFFLINE");
        });
      } catch (error: any) {
        console.log(
          "ERROR: DELETE CHECKLIST OFFLINE =>",
          error.response.message
        );
      }
    }
  }

  useEffect(() => {
    (async () => {
      await onConectJob();
    })();
  }, [isConnected, isInternetReachable]);

  return (
    <Context.Provider
      value={{
        checkLists,
        saveNewCheckList,
        updateCheckList,
        deleteCheckList,
        toggleModalOfSelectCheckList,
      }}
    >
      {children}
      {/* <Modal visible={showModal} onClose={() => setShowModal(false)} /> */}
    </Context.Provider>
  );
};

export const useCheckList = () => useContext(Context);
