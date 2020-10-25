import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavForm = (props) => {
  const [search, updateSearch] = useState(() => {
    return "";
  });

  const [modal, updateModal] = useState(() => {
    return false;
  });

  const [activated, updateActivated] = useState(() => {
    return false;
  });

  function searchClick(e) {
    e.preventDefault();
    updateActivated(!activated);
  }

  function handleSubmitLogOut(e) {
    e.preventDefault();
    props.logout();
  }

  const searchClass = activated ? "show-search" : "hide-search";

  let search_arr = Object.values(props.videos).filter((video) =>
    video.title.toUpperCase().includes(search.toUpperCase())
  );
  const searchRes = activated ? "search-results-show" : "search-results-hide";
  const searchDiv = activated ? "search-div-show" : "search-div-hide";
  const modalShow = modal ? "log-out-modal-show" : "log-out-modal-hide";

  return (
    <div className="videos-index-header">
      <div className="videos-index-header-left">
        <Link to="/videos">
          <img src={window.logo} />
        </Link>
        <div>
          {props.match.params.user_id ? (
            ""
          ) : (
            <Link to={`lists/${props.user.id}`}>
              <h3>My List</h3>
            </Link>
          )}
        </div>
      </div>
      <div className="right-nav">
        <div id={searchDiv}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <i onClick={searchClick} className="fas fa-search fa-2x"></i>
            <input
              className={searchClass}
              input="search-input"
              type="text"
              name="search"
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
              placeholder="Titles"
            />
          </div>

          <div id={searchRes}>
            {activated
              ? search_arr.map((video) => {
                  return (
                    <li key={video.id} id="search-li">
                      {" "}
                      <Link to={`/player/${video.id}`}>{video.title}</Link>
                      <hr />
                    </li>
                  );
                })
              : ""}
          </div>
        </div>

        <img onClick={() => updateModal(!modal)} src={window.icon} />
        <button onClick={() => updateModal(!modal)} id="log-out-arrow">
          <i className="fas fa-caret-down fa-2x"></i>
        </button>
        <div id={modalShow}>
          <button id="log-out-button" onClick={handleSubmitLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavForm;
