import * as VideoAPIUtil from "../util/videoUtil";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const CLEAR_WATCH = "CLEAR_WATCH";

const receiveVideos = (videos) => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video,
});

export const receiveWatch = (video) => {
  return {
    type: RECEIVE_WATCH,
    video,
  };
};

export const clearWatch = () => ({
  type: CLEAR_WATCH,
});

export const getVideos = () => (dispatch) => {
  return VideoAPIUtil.getVideos().then((videos) => {
    dispatch(receiveVideos(videos));
  });
};

export const getVideo = (id) => (dispatch) => {
  return VideoAPIUtil.getVideo(id).then((video) => {
    dispatch(receiveVideo(video));
  });
};
