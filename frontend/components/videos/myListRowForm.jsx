import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItemContainer from "./myListItemContainer";

const MyListForm = (props) => {
  const [start, updateStart] = useState(() => {
    return 0;
  });

  function right(e) {
    e.preventDefault();
    if (start < props.lists.length - 4) {
      updateStart(start + 1);
    }
  }

  function left(e) {
    e.preventDefault();
    if (start > 0) {
      updateStart(start - 1);
    }
  }

  const left_arrow =
    start !== 0 ? (
      <div onClick={left} className="left-arrow-div">
        <i className="fas fa-chevron-left fa-3x"></i>
      </div>
    ) : (
      ""
    );
  const right_arrow =
    start < props.lists.length - 4 ? (
      <div onClick={right} className="right-arrow-div">
        <i className="fas fa-chevron-right fa-3x"></i>
      </div>
    ) : (
      ""
    );

  let lists = props.lists.map((list, index) => (
    <ListItemContainer key={index} list={list} />
  ));

  lists = lists.slice(start, start + 4);

  return (
    <div className="my-lists-row">
      {left_arrow}
      <div className="lists-links-row">{lists}</div>
      {right_arrow}
    </div>
  );
};
export default MyListForm;
