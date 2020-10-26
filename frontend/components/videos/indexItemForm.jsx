import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";

const IndexItemForm = ({
  video,
  lists,
  deleteList,
  createList,
  user,
  updateSelectedVideo,
  selectedVideo,
}) => {
  const [activated, updateActivated] = useState(() => {
    return false;
  });

  function handleSelectedMovie(e) {
    e.preventDefault();
    if (selectedVideo === null) {
      updateSelectedVideo(video.id);
    } else {
      updateSelectedVideo(null);
    }
  }

  function handleMouseOver(e) {
    e.preventDefault();
    updateActivated(true);
    if (selectedVideo !== null) {
      updateSelectedVideo(video.id);
    }
  }

  function updateList(e) {
    e.preventDefault();
    const list = lists[video.id];
    if (list) {
      deleteList({
        id: list.id,
        video_id: list.video_id,
        user_id: list.user_id,
      });
    } else {
      createList({ user_id: user.id, video_id: video.id });
    }
  }

  const plusOrCheck = lists[video.id]
    ? "fas fa-check index-check"
    : "fas fa-plus index-check";
  const text = lists[video.id] ? "Remove from My List" : "Add to My List";
  const toggleTextShow = activated
    ? "add-remove-div show"
    : "add-remove-div hide";
  const toggleTitleShow = activated
    ? "index-item-title show"
    : "index-item-title hide";
  const movieArrow = activated ? "movie-arrow show" : "movie-arrow hide";

  return (
    <li
      onMouseOver={handleMouseOver}
      onMouseOut={() => updateActivated(false)}
      className="index-item"
      key={video.id}
    >
      <Link to={`/player/${video.id}`}>
        <img src={video.image_link} alt="poster for video" />
      </Link>
      <i
        onClick={handleSelectedMovie}
        className={`${movieArrow} fas fa-caret-down fa-2x`}
      ></i>
      <div id="index-button-background">
        <i onClick={updateList} className={plusOrCheck}></i>
      </div>
      <div className={toggleTextShow}>{text}</div>
      <h4 className={toggleTitleShow}>{video.title}</h4>
    </li>
  );
};

export default IndexItemForm;
