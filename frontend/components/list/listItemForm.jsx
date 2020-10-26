import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { clearLists, deleteList } from "../../actions/listActions";
import { Link } from "react-router-dom";

const msp = (state) => {
  return {
    errors: state.errors,
    videos: state.entities.videos,
    user: state.entities.user[state.session.id],
    lists: Object.values(state.entities.lists),
  };
};

const mdp = (dispatch) => ({
  clearLists: () => dispatch(clearLists()),
  deleteList: (list) => dispatch(deleteList(list)),
});

const ListItemForm = ({ list, videos, deleteList, user }) => {
  const [activated, updateActivated] = useState(() => {
    return false;
  });

  const showRemoveItem = activated ? "show" : "hide";
  const showListItem = activated ? "show" : "hide";

  return (
    <div
      id={`${list.id}-list-div`}
      onMouseOut={() => updateActivated(false)}
      onMouseOver={() => updateActivated(true)}
      key={list.id}
      className="list-div"
    >
      <Link id="list-li" to={`/player/${videos[list.video_id].id}`}>
        <img src={videos[list.video_id].image_link} />
      </Link>
      <h3 className="list-video-h3">{videos[list.video_id].title}</h3>
      <div id="button-background" className={showListItem}>
        <i
          onClick={() =>
            deleteList({
              video_id: list.video_id,
              user_id: user.id,
              id: list.id,
            })
          }
          id={`${list.video_id}-${list.id}-list-check`}
          className="fas fa-check hidden"
        ></i>
      </div>
      <div id="remove-from-list" className={showRemoveItem}>
        Remove from My List
      </div>
    </div>
  );
};

export default connect(msp, mdp)(ListItemForm);
