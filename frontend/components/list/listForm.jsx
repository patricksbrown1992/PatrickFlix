import React, { useState, useEffect } from "react";
import { merge } from "lodash";
import { Link } from "react-router-dom";
import NavForm from "../nav/navContainer";
import ListItemForm from "./listItemForm";

const ListForm = (props) => {
  useEffect(() => {
    props.getVideos().then(() => props.getLists(props.user));
  }, []);

  const lists = props.lists.map((list) => {
    return <ListItemForm key={list.id} list={list} />;
  });

  return (
    <div id="my-list-div">
      <NavForm />
      <div id="list-body">
        <h1 className="list-h1">My List</h1>
        {lists}
      </div>
    </div>
  );
};
export default ListForm;
