export const getVideos = () => {
  return $.ajax({
    method: "GET",
    url: `api/videos`,
  });
};

export const getVideo = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/videos/${id}`,
  });
};
