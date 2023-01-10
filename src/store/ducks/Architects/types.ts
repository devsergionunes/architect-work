/**
 * Action types
 */
export enum UserTypes {
  SET_ARCHITECT = "@architect/SET_ARCHITECT",
  GET_ARCHITECT = "@architect/GET_ARCHITECT",
  SET_ARCHITECT_LIST = "@architect/SET_ARCHITECT_LIST",
}

/**
 * valores isolados do objeto de parametros
 */
export type ArchitectObjectTypes = {
  id: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    typeProfile: number;
    createdAt: string;
    updatedAt: string;
  };
};
/**
 * valores do state completo desse redux
 */
export type UserState = {
  readonly architect: ArchitectObjectTypes;
  readonly architectList: ArchitectObjectTypes[];
};
