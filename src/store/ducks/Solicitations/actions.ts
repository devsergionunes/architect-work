import { action } from "typesafe-actions";

import { UserTypes, SolicitationObjectTypes } from "./types";

export const getSolicitationAction = () => action(UserTypes.GET_SOLICITATIONS);

export const setSolicitationAction = (solicitation: SolicitationObjectTypes) =>
  action(UserTypes.SET_SOLICITATIONS, solicitation);

export const setSolicitationListAction = (
  solicitations: SolicitationObjectTypes[]
) => action(UserTypes.SET_SOLICITATIONS_LIST, solicitations);
