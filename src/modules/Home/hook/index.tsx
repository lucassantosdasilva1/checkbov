import { useState } from "react";
// import { Modal } from "../components/modal";
import { Children } from "@core/hooks/globalTypes";
import { IChecklistGet, CheckListContext, IChecklistPost } from "./types";
import { checkListService } from "../services/Repo.service";
import { useNetInfo, addEventListener } from "@react-native-community/netinfo";
import React, { createContext, useEffect, useContext } from "react";
import { ToastAndroid } from "react-native";
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Context = createContext<CheckListContext>({} as CheckListContext);

export const CheckListProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [checkLists, setCheckLists] = useState<IChecklistGet[]>([]);

  const navigation = useNavigation();

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
        checkListService.http.delete(checklist._id).then(() => {
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
        checkListService.http.put(checklist._id, checklist).then(() => {
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
        const parsedTypeAPI = {
          checkLists: [
            {
              ...checklist,
            },
          ],
        };
        checkListService.http.post(parsedTypeAPI).then(() => {
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
      Alert.alert("Conectado", "Sincronizando");
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
      Alert.alert("Error", "Sem conexao com a internet");
      checkListService.offline.getAll().then((data) => {
        setCheckLists(data);
      });
    }
  }

  async function saveNewCheckList(data: IChecklistPost[]) {
    console.log("entrou aqui")
    let checklists = [{}];
    checklists = [data]
    let parsedTypeAPI = [checkLists];

    let tentarne = {
      "checklists": [
        {
          "_id": "123213122223123",
          "type": "BPA",
          "amount_of_milk_produced": 300,
          "number_of_cows_head": 17,
          "had_supervision": true,
          "farmer": {
            "name": "Fazenda São Rock",
            "city": "São Rock"
          },
          "from": {
            "name": "Fílip"
          },
          "to": {
            "name": "Fernando Siqueira"
          },
          "location": {
            "latitude": -23.5,
            "longitude": -46.6
          },
          "created_at": "2023-02-28T17:24:59-03:00",
          "updated_at": "2023-02-28T17:24:59-03:00"
        }
      ]
    }
    // parsedTypeAPI = [checklists: [{
    //       _id: data._id,
    //       type: data.type,
    //       amount_of_milk_produced: data.amount_of_milk_produced,
    //       farmer: {
    //         name: data.farmer.name,
    //         city: data.farmer.city,
    //       },
    //       from: {
    //         name: data.from.name,
    //       },
    //       to: {
    //         name: data.to.name,
    //       },
    //       number_of_cows_head: data.number_of_cows_head,
    //       had_supervision: data.had_supervision,
    //       location: {
    //         latitude: data.location.latitude,
    //         longitude: data.location.longitude,
    //       },
    //       created_at: data.created_at,
    //       updated_at: data.updated_at,
    //     },],
    //   ]

    if (isConnected && isInternetReachable) {
      try {
        await axios.post("http://challenge-front-end.bovcontrol.com/v1/checklist",
        {
          "checklists": [
            {
              "_id": "144554554545244544545",
              "type": "BPA",
              "amount_of_milk_produced": 300,
              "number_of_cows_head": 17,
              "had_supervision": true,
              "farmer": {
                "name": "Fazenda São Rock",
                "city": "São Rock"
              },
              "from": {
                "name": "FULANO"
              },
              "to": {
                "name": "Fernando Siqueira"
              },
              "location": {
                "latitude": -23.5,
                "longitude": -46.6
              },
              "created_at": "2022-02-01T10:10:21.748Z",
              "updated_at": "2022-02-01T10:10:21.748Z"
            }
          ]
        }
        ).then(async () => {  
        // await checkListService.http.post(tentarne).then(async () => {
          console.log("Deu foi certo pai")
          return true
          
          await onConectJob();
        });
      } catch (error: any) {
        console.log(
          "ERROR: CREATE NEW CHECKLIST ONLINE =>",
          error.response
        );
      }
    } else {
      try {
        await checkListService.offline.create(data[0]).then(async () => {
          await onConectJob();
        });
      } catch (error: any) {
        console.log("ERROR: CREATE NEW CHECKLIST OFFLINE =>", error);
      }
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
      await onConectJob();
      // await getAllCheckLists().then(() => {
      //   console.log("StateCHECKLISTS =>", checkLists);
      // });
    })();
    // (() => {
    //   const unsubscribe = addEventListener(state => {
    //     if (state.isConnected && state.isInternetReachable) {
    //       console.log("online");
    //       // fazer alguma coisa aqui quando estiver online
    //     } else {
    //       console.log("offline");
    //       Toast.show(
    //         {
    //           type: "error",
    //           text1: "Error",
    //           text2: "Error al sincronizar",
    //           visibilityTime: 4000,
    //           autoHide: true,
    //           topOffset: 30,
    //           bottomOffset: 40,
    //         }
    //       )
    //       // fazer alguma coisa aqui quando estiver offline
    //     }
    //   });

    //   return () => {
    //     unsubscribe();
    //   };
    // })();
  }, [isConnected, isInternetReachable]);

  return (
    <Context.Provider
      value={{
        checkLists,
        saveNewCheckList,
        toggleModalOfSelectCheckList,
      }}
    >
      {children}
      {/* <Modal visible={showModal} onClose={() => setShowModal(false)} /> */}
    </Context.Provider>
  );
};

export const useCheckList = () => useContext(Context);
