import { action } from "typesafe-actions";

import { UserTypes, ArchitectObjectTypes } from "./types";

export const getArchitectAction = () => action(UserTypes.GET_ARCHITECT);

export const setArchitectAction = (architect: ArchitectObjectTypes) =>
  action(UserTypes.SET_ARCHITECT, architect);

export const setArchitectListAction = (architectList: ArchitectObjectTypes[]) =>
  action(UserTypes.SET_ARCHITECT_LIST, architectList);
