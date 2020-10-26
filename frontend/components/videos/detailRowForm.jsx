import React, { useState } from "react";
import { Link } from "react-router-dom";
import IndexItem from "./indexItemContainer";
import HiddenRowContainer from "./hiddenRowContainer";

const DetailRowForm = (props) => {
  const [start, updateStart] = useState(() => {
    return 0;
  });

  const [selectedVideo, updateSelectedVideo] = useState(() => {
    return null;
  });

  function right(e) {
    e.preventDefault();
    if (start < props.vids.length - 4) {
      updateStart(start + 1);
    }
  }

  function left(e) {
    e.preventDefault();
    if (start > 0) {
      updateStart(start - 1);
    }
  }

  let vids = props.vids.map((vid, index) => (
    <IndexItem
      selectedVideo={selectedVideo}
      updateSelectedVideo={updateSelectedVideo}
      key={vid.id}
      video={vid}
    />
  ));

  vids = vids.slice(start, start + 4);

  const hiddenRowDiv =
    selectedVideo !== null ? (
      <HiddenRowContainer vid={props.videos[selectedVideo]} />
    ) : (
      ""
    );

  const toggleVideoRow =
    selectedVideo === null ? "video-row-inner-hide" : "video-row-inner-show";

  const leftArrow = start ? (
    <div onClick={left} className="left-arrow-div">
      <i className="fas fa-chevron-left fa-3x"></i>
    </div>
  ) : (
    ""
  );
  const rightArrow =
    start < props.vids.length - 4 ? (
      <div onClick={right} className="right-arrow-div">
        <i className="fas fa-chevron-right fa-3x"></i>
      </div>
    ) : (
      ""
    );

  return (
    <div key={props.identifier} className={toggleVideoRow}>
      <div className="top-row">
        {leftArrow}
        <div className="links-row">{vids}</div>
        {rightArrow}
      </div>
      {hiddenRowDiv}
    </div>
  );
};
export default DetailRowForm;
