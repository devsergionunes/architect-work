import { Reducer } from "redux";

import { UserTypes, UserState } from "./types";

const INITIAL_STATE: UserState = {
  solicitation: {
    id: "",
    description: "",
    status: 0,
    dtInitial: "",
    createdAt: "",
    updatedAt: "",
    user: {
      id: "",
      name: "",
      email: "",
      typeProfile: 0,
    },
    architect: {
      id: "",
      description: "",
      type: "",
      createdAt: "",
      updatedAt: "",
    },
  },
  solicitationList: [],
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_SOLICITATIONS:
      return { ...state, solicitation: action.payload };

    case UserTypes.SET_SOLICITATIONS_LIST:
      return { ...state, solicitationList: action.payload };

    default:
      return state;
  }
};

export default reducer;
