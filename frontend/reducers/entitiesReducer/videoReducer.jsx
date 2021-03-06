import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from "../../actions/videoActions";
import { merge } from "lodash";

const videoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return merge({}, state, { [action.video.id]: action.video });
    default:
      return state;
  }
};

export default videoReducer;
