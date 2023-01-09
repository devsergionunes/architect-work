import { Reducer } from "redux";

import { UtilsTypes, UtilsState } from "./types";

const INITIAL_STATE: UtilsState = {
  loading: false,
  toast: {
    type: "info",
    message: "",
  },
  device: "desktop",
};

const reducer: Reducer<UtilsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UtilsTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case UtilsTypes.SET_TOAST:
      return { ...state, toast: action.payload };

    case UtilsTypes.DEVICE_TYPE:
      return { ...state, device: action.payload };

    default:
      return state;
  }
};

export default reducer;
