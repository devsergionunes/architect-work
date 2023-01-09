import { Reducer } from "redux";

import { UserTypes, UserState } from "./types";

const INITIAL_STATE: UserState = {
  user: {
    id: "",
    name: "",
    email: "",
    typeProfile: 1,
  },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
