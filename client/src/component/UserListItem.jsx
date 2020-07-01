import React from "react";
import { Link } from "react-router-dom";

export default function UserListItem(props) {
  return (
    <>
      <Link to={"/user/"+props.user.id } className="list-group-item list-group-item-action p-3">
        {props.user.name}
      </Link>
    </>
  );
}
