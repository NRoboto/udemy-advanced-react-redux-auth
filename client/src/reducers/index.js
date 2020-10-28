import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./auth";

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
});
