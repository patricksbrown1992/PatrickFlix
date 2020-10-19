import { connect } from "react-redux";
import Player from "./playerForm";
import { clearErrors, logout } from "../../actions/sessionActions";

import { getVideo, getVideos, receiveWatch } from "../../actions/videoActions";

const msp = (state, ownProps) => {
  const video = state.entities.videos[ownProps.match.params.video_id];

  return {
    video: video,
    watching: state.entities.watching,
    videos: state.entities.videos,
  };
};

const mdp = (dispatch) => ({
  getVideo: (id) => dispatch(getVideo(id)),
  getVideos: () => dispatch(getVideos()),
  receiveWatch: (vid) => dispatch(receiveWatch(vid)),
});

export default connect(msp, mdp)(Player);
