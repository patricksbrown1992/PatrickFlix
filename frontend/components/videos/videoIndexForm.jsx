import React, { useState, useEffect } from "react";
import DetailRow from "./detailRowContainer";
import FeaturedVideo from "./featuredVideoContainer";
import MyListContainer from "./myListContainer";
import NavForm from "../nav/navContainer";

const VideoIndexForm = (props) => {
  useEffect(() => {
    props.getVideos().then(() => props.getLists(props.user));
    return () => {
      props.receiveModal(null);
    };
  }, []);

  if (!Object.values(props.videos).length) {
    return null;
  }

  const vids = Object.values(props.videos);
  const stewart = vids.slice(0, 7);
  const swayze = vids.slice(7, 13);
  const harris = vids.slice(13, 19);
  const wilson = vids.slice(19, 25);
  const dempsey = vids.slice(25);

  return (
    <div className="videos-index">
      <NavForm />
      {/* <div className="videos-index-header">
        <div className="videos-index-header-left">
          <img src={window.logo} />
          <div>
            <Link to={`lists/${props.user.id}`}>
              <h3>My List</h3>
            </Link>
          </div>
        </div>
        <div className="right-nav">
          <div id="search-form">
            <div id="search-div">
              <i onClick={searchClick} className="fas fa-search fa-2x"></i>
              <input
                className={activated ? "show-search" : "hide-search"}
                id="search-input"
                type="text"
                name="search"
                value={search}
                onChange={(e) => updateSearch(e.target.value)}
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
      </div> */}

      <div className="videos-index-body">
        <FeaturedVideo />

        {props.lists.length ? (
          <div className="video-row" id="video-row-6">
            <h1 className="index-h1">My List</h1>

            <MyListContainer lists={props.lists} />
          </div>
        ) : (
          ""
        )}
        <div className="video-row" id="video-row-1">
          <h1 className="index-h1">Patrick Stewart</h1>

          <DetailRow vids={stewart} />
        </div>

        <div className="video-row" id="video-row-2">
          <h1 className="index-h1">Patrick Swayze</h1>

          <DetailRow vids={swayze} />
        </div>

        <div className="video-row" id="video-row-3">
          <h1 className="index-h1">Neil Patrick Harris</h1>

          <DetailRow vids={harris} />
        </div>

        <div className="video-row" id="video-row-4">
          <h1 className="index-h1">Patrick Wilson</h1>

          <DetailRow vids={wilson} />
        </div>

        <div className="video-row" id="video-row-5">
          <h1 className="index-h1">Patrick Dempsey</h1>

          <DetailRow vids={dempsey} />
        </div>

        <div className="links-index-div">
          <ul>
            <a
              href="https://www.linkedin.com/in/patricksbrown1992/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/patricksbrown1992" target="_blank">
              Github
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default VideoIndexForm;
