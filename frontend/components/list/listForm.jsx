import React, { useState, useEffect } from "react";
import { merge } from "lodash";
import { Link } from "react-router-dom";

const ListForm = (props) => {
  const [search, updateSearch] = useState(() => {
    return "";
  });

  const [activated, updateActivated] = useState(() => {
    return false;
  });

  function changeUpdate(e) {
    e.preventDefault();
    updateSearch(e.target.value);
  }

  function removeList(e) {
    e.preventDefault();
    let video_id = parseInt(e.target.id.split("-")[0]);
    let user_id = props.user.id;
    let id = parseInt(e.target.id.split("-")[1]);
    props.deleteList({ video_id, user_id, id });
  }

  function handleSubmitLogOut(e) {
    e.preventDefault();
    props.logout();
  }

  function searchClick(e) {
    e.preventDefault();
    let search_res = document.getElementById("search-results");
    let search_form = document.getElementById("search-form");
    if (search_res.style.opacity == "1") {
      search_res.style.opacity = "0";
      search_res.style.height = 0;
      search_form.style.height = "auto";
      search_form.style.width = "45px";
    } else {
      search_res.style.opacity = "1";
      search_form.style.width = "auto";
    }
    updateActivated(!activated);
  }

  function hideButton(e) {
    e.preventDefault();
    let kids = e.currentTarget.children;
    let background = kids[2];
    let check = background.children[0];
    background.style.opacity = "0";
    check.style.opacity = "0";
    let remove = kids[3];
    remove.style.opacity = "0";
  }

  function showButton(e) {
    e.preventDefault();
    let kids = e.currentTarget.children;
    let background = kids[2];
    let check = background.children[0];
    background.style.opacity = "1";
    check.style.opacity = "1";
    let remove = kids[3];
    remove.style.opacity = "1";
  }

  function duplicateArray(array) {
    // deep dupes objects

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let newObject = merge({}, array[i]);
      newArray.push(newObject);
    }
    return newArray;
  }

  function showLogOut(e) {
    e.preventDefault();
    const modal = document.getElementById("log-out-modal");

    if (modal.style.opacity == "1") {
      modal.style.opacity = "0";
      modal.style.zIndex = 1;
    } else {
      modal.style.opacity = "1.0";
      modal.style.zIndex = 5;
    }
  }

  useEffect(() => {
    props.getVideos().then(() => props.getLists(props.user));
  }, []);

  let searchClass;
  let list_heigth_id;

  if (activated) {
    searchClass = "show-search";
  } else {
    searchClass = "hide-search";
  }

  let videos = props.videos;
  let lists = duplicateArray(props.lists);
  lists = lists.map((list) => {
    return (
      <div
        id={`${list.id}-list-div`}
        onMouseOut={hideButton}
        onMouseOver={showButton}
        key={list.id}
        className="list-div"
      >
        <Link id="list-li" to={`/player/${videos[list.video_id].id}`}>
          <img src={videos[list.video_id].image_link} />
        </Link>
        <h3 className="list-video-h3">{videos[list.video_id].title}</h3>
        <div id="button-background">
          <i
            onClick={removeList}
            id={`${list.video_id}-${list.id}-list-check`}
            className="fas fa-check hidden"
          ></i>
        </div>
        <div id="remove-from-list">Remove from My List</div>
      </div>
    );
  });

  let search_arr;
  let search_form = document.getElementById("search-form");
  if (search.length && activated) {
    let search_res = document.getElementById("search-results");

    let search_div = document.getElementById("search-div");
    search_res.style.height = "150px";
    search_form.style.height = "350px";
    search_div.style.height = "35px";
    search_form.style.justifyContent = "flex-end";
    // search_form.style.top = '0';
    search_arr = duplicateArray(Object.values(props.videos));

    search_arr = search_arr.filter((video) =>
      video.title.toUpperCase().includes(search.toUpperCase())
    );

    search_arr = search_arr.map((video) => {
      return (
        <li key={video.id} id="search-li">
          {" "}
          <Link to={`/player/${video.id}`}>{video.title}</Link>
          <hr />
        </li>
      );
    });
  } else {
    search_arr = "";
  }

  return (
    <div id="my-list-div">
      <div className="videos-index-header">
        <div className="videos-index-header-left">
          <Link to="/videos">
            <img src={window.logo} />
          </Link>
        </div>
        <div className="right-nav">
          <div id="search-form">
            <div id="search-div">
              <i onClick={searchClick} className="fas fa-search fa-2x"></i>
              <input
                className={searchClass}
                input="search-input"
                type="text"
                name="search"
                value={search}
                onChange={changeUpdate}
                placeholder="Titles"
              />
            </div>
            <div id="search-results">{search_arr}</div>
          </div>

          <img onClick={showLogOut} src={window.icon} />
          <button onClick={showLogOut} id="log-out-arrow">
            <i className="fas fa-caret-down fa-2x"></i>
          </button>
          <div id="log-out-modal">
            <button id="log-out-button" onClick={handleSubmitLogOut}>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div id="list-body">
        <h1 className="list-h1">My List</h1>
        {lists}
      </div>
    </div>
  );
};
export default ListForm;
