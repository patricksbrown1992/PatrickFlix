import { RECEIVE_MODAL, CLEAR_MODAL } from "./../actions/modalActions";
import { merge } from "lodash";

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MODAL:
      return action.modal;
    case CLEAR_MODAL:
      return null;

    default:
      return state;
  }
};

export default modalReducer;
