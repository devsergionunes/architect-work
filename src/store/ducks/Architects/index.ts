import { Reducer } from "redux";

import { UserTypes, UserState } from "./types";

const INITIAL_STATE: UserState = {
  architect: {
    id: "",
    description: "",
    type: "",
    createdAt: "",
    updatedAt: "",
    user: {
      id: "",
      name: "",
      email: "",
      typeProfile: 0,
      createdAt: "",
      updatedAt: "",
    },
  },
  architectList: [],
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_ARCHITECT:
      return { ...state, architect: action.payload };

    case UserTypes.SET_ARCHITECT_LIST:
      return { ...state, architectList: action.payload };

    default:
      return state;
  }
};

export default reducer;
