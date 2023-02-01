import { combineReducers } from "redux";

const rootReducer = combineReducers({
  company: () => ({ name: "myCoI" }),
});

export default rootReducer;
