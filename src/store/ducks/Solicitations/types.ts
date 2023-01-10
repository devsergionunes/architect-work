import { UserObjectTypes } from "../User/types";

/**
 * Action types
 */
export enum UserTypes {
  GET_SOLICITATIONS = "@solicitation/GET_SOLICITATIONS",
  SET_SOLICITATIONS = "@solicitation/SET_SOLICITATIONS",
  SET_SOLICITATIONS_LIST = "@solicitation/SET_SOLICITATIONS_LIST",
}

/**
 * valores isolados do objeto de parametros
 */
export type SolicitationObjectTypes = {
  id: string;
  description: string;
  status: number; // - enviada 1 - aceita 2 - recusada 3
  dtInitial: string;
  createdAt: string;
  updatedAt: string;
  user: UserObjectTypes;
  architect: {
    id: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
};
/**
 * valores do state completo desse redux
 */
export type UserState = {
  readonly solicitation: SolicitationObjectTypes;
  readonly solicitationList: SolicitationObjectTypes[];
};
