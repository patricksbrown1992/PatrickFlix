import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

const PlayerForm = (props) => {
  const [volume, updateVolume] = useState(() => {
    return 1;
  });

  const [time, updateTime] = useState(() => {
    return "00:00";
  });

  const [mouseMoved, updateMouseMoved] = useState(() => {
    return false;
  });

  const [playing, updatePlaying] = useState(() => {
    return true;
  });

  const [seek, updateSeek] = useState(() => {
    return 0;
  });

  function mouseMove(e) {
    e.preventDefault();
    if (!mouseMoved) {
      updateMouseMoved(true);
      setTimeout(function () {
        updateMouseMoved(false);
      }, 4000);
    }
  }

  function keyHandler(e) {
    e.preventDefault();
    const video = document.getElementById("video-player");
    if (e.keyCode === 77) {
      if (video.muted) {
        video.muted = false;
        updateVolume(1);
      } else {
        video.muted = true;
        updateVolume(0);
      }
    }
    if (e.keyCode === 37) {
      updateSeek(video.currentTime - 10);
    }

    if (e.keyCode === 39) {
      updateSeek(video.currentTime + 10);
    }

    if (e.keyCode === 32) {
      if (playing === true) {
        video.pause();
        updatePlaying(false);
      } else {
        video.play();
        updatePlaying(true);
      }
    }
  }

  function toggleFullScreen(e) {
    e.preventDefault();
    debugger;
    const video = document.getElementById("video-player");

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    }
  }

  function jump10(change) {
    const video = document.getElementById("video-player");
    return (e) => {
      e.preventDefault();
      video.currentTime += change;
    };
  }

  function toggleMute(e) {
    e.preventDefault();
    const video = document.getElementById("video-player");
    if (video.muted) {
      video.muted = false;
      updateVolume(1);
    } else {
      video.muted = true;
      updateVolume(0);
    }
  }

  function toggleVolume(e) {
    e.preventDefault();
    const video = document.getElementById("video-player");
    const change = parseFloat(e.target.value);
    video.volume = change;
    updateVolume(change);
  }

  function changeTime() {
    const video = document.getElementById("video-player");
    const timer = Math.floor(video.duration) - Math.floor(video.currentTime);
    let minutes = Math.floor(timer / 60);
    let seconds = Math.floor(timer % 60);

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const newTime = `${minutes}:${seconds}`;

    updateTime(newTime);
  }

  function changeSeek() {
    const video = document.getElementById("video-player");

    updateSeek(video.currentTime);
  }

  function togglePlay() {
    const video = document.getElementById("video-player");
    if (video.currentTime === 0) {
      video.play();
      updatePlaying(true);
    } else {
      if (playing === true) {
        video.pause();
        updatePlaying(false);
      } else {
        video.play();
        updatePlaying(true);
      }
    }
  }

  function toggleSeek(e) {
    e.preventDefault();
    const video = document.getElementById("video-player");
    const change = video.duration * (e.target.value / video.duration);
    video.currentTime = change;
    updateSeek(change);
  }

  useEffect(() => {
    props.getVideos();
    const seekCheck = setInterval(changeSeek, 1000);
    const timeCheck = setInterval(changeTime, 1000);
    document.addEventListener("keydown", keyHandler, false);

    return () => {
      clearInterval(seekCheck);
      clearInterval(timeCheck);
    };
  }, []);

  const video = document.getElementById("video-player");

  let videoTime;
  videoTime = time === "NaN:NaN" ? "" : time;
  const max = video ? `${Math.floor(video.duration)}` : "1";
  let volumeButtonRender;

  if (volume > 0.6) {
    volumeButtonRender = "vol fas fa-volume-up";
  } else if (volume > 0.3 && volume <= 0.6) {
    volumeButtonRender = "voltwo fas fa-volume-down";
  } else if (volume > 0 && volume <= 0.3) {
    volumeButtonRender = "voltwo fas fa-volume-off";
  } else {
    volumeButtonRender = "vol fas fa-volume-mute";
  }
  let playPauseButton;
  if (!video) {
  } else {
    if (video.readyState < 3) {
      playPauseButton = <div className="loader"></div>;
    } else {
      if (video.currentTime == 0) {
        playPauseButton = (
          <i className="fas fa-play" id="play-button" onClick={togglePlay}></i>
        );
      } else {
        if (playing === true) {
          playPauseButton = (
            <i
              className="fas fa-pause"
              id="play-button"
              onClick={togglePlay}
            ></i>
          );
        } else if (playing === false) {
          playPauseButton = (
            <i
              className="fas fa-play"
              id="play-button"
              onClick={togglePlay}
            ></i>
          );
        }
      }
    }
  }

  let vid;

  if (props.video) {
    vid = props.video;
  } else if (props.videos[parseInt(props.match.params.video_id)]) {
    vid = props.videos[parseInt(props.match.params.video_id)];
  } else {
    vid = {
      video_link: "",
    };
  }

  const toggleBackToBrowse = mouseMoved
    ? "back-to-browse-show"
    : "back-to-browse-hide";
  const toggleBottomRow = mouseMoved ? "bottom-row-show" : "bottom-row-hide";

  return (
    <div onMouseMove={mouseMove} className="video-player-div">
      <div className="video-player-div-top">
        <Link to={"/videos"}>
          <div id="back-to-browse" className={toggleBackToBrowse}>
            <i className="fas fa-arrow-left fa-2x" id="back-arrow-icon"></i>
            <h1 id="back-arrow-font" className="back-arrow-font">
              Back to Browse
            </h1>
          </div>
        </Link>
      </div>

      <div className="video-player-div-bottom">
        <video
          onClick={togglePlay}
          id="video-player"
          className="video-player"
          src={vid.video_link}
          poster={vid.image_link}
          preload="meta"
          loop
          autoPlay
        ></video>
        <div id="bottom-row" className={toggleBottomRow}>
          <div className="scroll-bar-container center">
            <input
              id="scroll-bar"
              type="range"
              min="0"
              max={max}
              step="1"
              value={Math.floor(seek)}
              onChange={toggleSeek}
            />
            <h1 className="duration" id="duration">
              {videoTime}
            </h1>
          </div>
          <div id="controls">
            <h2 className="center">{playPauseButton}</h2>
            <img
              onClick={jump10(-10)}
              id="reverse-button"
              className="reverse-button"
              src={window.forward_arrow}
            />
            <img
              onClick={jump10(10)}
              id="forward-button"
              className="forward-button"
              src={window.back_arrow}
            />
            <h4 className="featured-video-h4">{vid.title}</h4>
            <div className="center">
              <input
                type="range"
                id="volume-bar"
                min="0"
                max="1"
                step="0.01"
                onChange={toggleVolume}
                value={volume}
              />
              <i
                className={volumeButtonRender}
                id="volume-button"
                onClick={toggleMute}
              ></i>
            </div>
            <i
              className="fas fa-compress"
              id="full-screen"
              onClick={toggleFullScreen}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;
