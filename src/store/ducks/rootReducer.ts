import { combineReducers } from "redux";

import Architects from "./Architects";
import User from "./User";
import Utils from "./Utils";

export default combineReducers({
  Utils,
  User,
  Architects,
});
