import { action } from "typesafe-actions";

import { UserTypes, UserObjectTypes } from "./types";

export const getUserAction = () => action(UserTypes.GET_USER);

export const setUserAction = (user: UserObjectTypes) =>
  action(UserTypes.SET_USER, user);
