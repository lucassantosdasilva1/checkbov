import React from "react";
import { Children } from "./globalTypes";
import { CheckListProvider } from "@modules/Home/hook";

export default function HookProvider({ children }: Children) {

  
  return <CheckListProvider>{children}</CheckListProvider>;
}
