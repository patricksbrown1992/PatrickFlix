import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedVideo = (props) => {
  const [volume, updateVolume] = useState(() => {
    return 1;
  });

  function handleFeatured() {
    const featuredVideo = document.getElementById("featured-video");

    if (window.scrollY > 300) {
      featuredVideo.pause();
    } else if (window.scrollY === 0) {
      featuredVideo.play();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleFeatured);

    return () => {
      window.removeEventListener("scroll", handleFeatured);
    };
  }, []);

  function volumeToggle(e) {
    e.preventDefault();
    const featuredVideo = document.getElementById("featured-video");
    if (featuredVideo.muted) {
      featuredVideo.muted = false;
      updateVolume(1);
    } else {
      featuredVideo.muted = true;
      updateVolume(0);
    }
  }

  const chooseButton =
    volume === 0 ? "fas fa-volume-mute fa-1x" : "fas fa-volume-up fa-1x";

  return (
    <div className="featured-video-div">
      <video
        id="featured-video"
        className="featured-video"
        src={props.videos[19].video_link}
        autoPlay
        loop
      ></video>
      <div className="featured-video-title-div">
        <h1 className="featured-video-h1">{props.videos[19].title}</h1>
        <button className="aquaman-button">
          <Link to={`player/${props.videos[19].id}`}>
            <i className="fas fa-play" id="play-featured-button"></i> Play
          </Link>
        </button>
      </div>
      <div className="featured-mute-div">
        <i onClick={volumeToggle} className={chooseButton}></i>
      </div>
    </div>
  );
};

export default FeaturedVideo;
