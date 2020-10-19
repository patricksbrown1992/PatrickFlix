import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer/entitiesReducer";
import sessionReducer from "./sessionReducer";
import errorsReducer from "./errors/sessionErrorsReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  modal: modalReducer,
});

export default rootReducer;
