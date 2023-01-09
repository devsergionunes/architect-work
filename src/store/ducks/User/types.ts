/**
 * Action types
 */
export enum UserTypes {
  SET_USER = "@user/SET_USER",
  GET_USER = "@user/GET_USER",
}

/**
 * valores isolados do objeto de parametros
 */
export type UserObjectTypes = {
  id: string;
  name: string;
  email: string;
  typeProfile: number;
};

/**
 * valores do state completo desse redux
 */
export type UserState = {
  readonly user: UserObjectTypes;
};
