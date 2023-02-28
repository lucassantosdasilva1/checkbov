import React, { useEffect } from "react";
import { Text } from "react-native";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

import Realm from "realm";
import UUID from "react-native-uuid";
import { CheckListSchema } from "../gateway/offline/schemas/CheckListSchema";

import { Container } from "./styles";
import CheckListOfflineService from "../gateway/offline/service/CheckListOfflineService";
import { IChecklistPost, IChecklistPut } from "../hook/types";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function Home() {
  const conectionRealm = async () =>
    await Realm.open({
      path: "checklist",
      schema: [CheckListSchema],
    });

  async function handlnewOrder() {
    const Checklist: IChecklistPost = {
      _id: UUID.v1().toString(),
      type: "BPA",
      amount_of_milk_produced: 5000,
      farmer: {
        name: "Segunda Fazenda",
        city: "Sao Luis Gonzaga",
      },
      from: { name: "Lorena" },
      to: { name: "BoVControl" },
      number_of_cows_head: 50000,
      had_supervision: true,
      location: {
        latitude: "10.000-412",
        longitude: "10.000-412",
      },
      created_at: new Date(),
    };
    try {
      CheckListOfflineService.create(Checklist);
    } catch (error) {
      console.log("==================================================", error);
    } finally {
    }
  }

  async function handleGetOrderByID() {
    // const outro = await CheckListOfflineService.getAll();
    const outro = await CheckListOfflineService.getById("60009977-b659-11ed-9c51-5d6c1217f376");
    return outro;
  }

  async function handleGetOrder() {
    const outro = await CheckListOfflineService.getAll();
    // const outro = await CheckListOfflineService.getById("60009977-b659-11ed-9c51-5d6c1217f376");
    return outro;
  }
  
  async function handleEditOrder(id: string, checklist: IChecklistPut) {
      await CheckListOfflineService.update(id, checklist);
  ///falta testar a funcção de deletar
  ///façta testar a funcao de editar
  }

  async function handleDeleteOrder(id: string){
    await CheckListOfflineService.deleteById(id);
  }

  // useEffect(() => {
  //   //CRIANDO UMA NOVO CHECKLIST
  //   // try {
  //   //   //funcao auto executavel async
  //   //   (async () => {
  //   //     const data = await handlnewOrder();
  //   //     console.log("Order created");
  //   //   })();
  //   // } catch (error) {
  //   //   console.log("Error", error);
  //   // }

  //   //EDITANDO UM CHECKLIST
  //   // try {
  //   //   //funcao auto executavel async atualizacao
  //   //   (async () => {
  //   //     const Checklist: IChecklistPut = {
  //   //       type: "BPA",
  //   //       amount_of_milk_produced: 1000,
  //   //       farmer: {
  //   //         name: "Segunda Fazenda",
  //   //         city: "Sao Luis Gonzaga",
  //   //       },
  //   //       from: { name: "Lorena" },
  //   //       to: { name: "BoVControl" },
  //   //       number_of_cows_head: 10000,
  //   //       had_supervision: true,
  //   //       location: {
  //   //         latitude: "10.000-412",
  //   //         longitude: "10.000-412",
  //   //       },
  //   //     };
  //   //     const data = await handleEditOrder("60009977-b659-11ed-9c51-5d6c1217f376", Checklist);
  //   //     console.log("Order created");
  //   //   })();
  //   // } catch (error) {
  //   //   console.log("Error", error);
  //   // }



  //   //DELETANDO UM CHECKLIST
  //   // try {
  //   //   //funcao auto executavel async
  //   //   (async () => {
  //   //     await handleDeleteOrder("60009977-b659-11ed-9c51-5d6c1217f376");
  //   //     console.log("OrderDeleted");
  //   //   })();
  //   // } catch (error) {
  //   //   console.log("Error", error);
  //   // }

  //     //BUSCANDO UM CHECKLIST
  //   try {
  //     //funcao auto executavel async
  //     (async () => {
  //       const data = await handleGetOrder();
  //       console.log("GetOrder", data);
  //     })();
  //   } catch (error) {
  //     console.log("Error", error);
  //   }

  //   //DELETANDO TODOS OS CHECKLISTS
  //   // try {
  //   //   //funcao auto executavel async
  //   //   //drop database
  //   //   (async () => {
  //   //     const realm = await conectionRealm();
  //   //     realm.write(() => {
  //   //       realm.deleteAll();
  //   //     });
  //   //     console.log("Deleted");
  //   //     realm.close();
  //   //   })()
  //   // } catch (error) {
  //   //   console.log("Error", error);
  //   // } finally {
  //   // }

  // }, []);

  return (
    <Container>
      <Header />
      <Content />
      {/*<Footer/> */}
    </Container>
  );
}
