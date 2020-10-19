import usersReducer from "./usersReducer";
import videoReducer from "./videoReducer";
import { combineReducers } from "redux";
import watchingReducer from "./watchingReducer";
import listReducer from "./listReducer";

const entitiesReducer = combineReducers({
  user: usersReducer,
  videos: videoReducer,
  watching: watchingReducer,
  lists: listReducer,
});

export default entitiesReducer;
