import React, { useState } from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";

const IndexItemForm = ({ lists, list, deleteList, videos }) => {
  const [activated, updateActivated] = useState(() => {
    return false;
  });

  const toggleTextShow = activated
    ? "add-remove-div show"
    : "add-remove-div hide";
  const toggleTitleShow = activated
    ? "index-item-title show"
    : "index-item-title hide";

  return (
    <li
      onMouseOver={() => updateActivated(true)}
      onMouseOut={() => updateActivated(false)}
      className="my-list-item"
      key={list.id}
    >
      <Link to={`/player/${list.video_id}`}>
        <img src={videos[list.video_id].image_link} alt="" />
      </Link>

      <div
        onClick={() =>
          deleteList({
            id: list.id,
            video_id: list.video_id,
            user_id: list.user_id,
          })
        }
        id="index-button-background"
      >
        <i className="fas fa-check index-check"></i>
      </div>
      <div className={toggleTextShow}>Remove from My List</div>
      <h4 className={toggleTitleShow}>{videos[list.video_id].title}</h4>
    </li>
  );
};
export default IndexItemForm;
