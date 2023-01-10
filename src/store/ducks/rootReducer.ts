import { combineReducers } from "redux";

import Architects from "./Architects";
import Solicitations from "./Solicitations";
import User from "./User";
import Utils from "./Utils";

export default combineReducers({
  Utils,
  User,
  Architects,
  Solicitations,
});
