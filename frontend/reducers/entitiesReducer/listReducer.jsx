import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  DESTROY_LIST,
  CLEAR_LISTS,
} from "../../actions/listActions";
import { REMOVE_USER } from "../../actions/sessionActions";
import { merge } from "lodash";

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      const lists = {};

      action.lists.forEach((list) => {
        lists[list.video_id] = list;
      });

      return merge({}, state, lists);
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.video_id]: action.list });
    case CLEAR_LISTS:
      return {};
    case DESTROY_LIST:
      const newState = merge({}, state);
      delete newState[action.list.video_id];
      return newState;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};
export default listsReducer;
