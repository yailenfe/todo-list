import React from "react";
import {Link} from "react-router-dom";

export default function UserListItem() {
  return (
    <>
      <Link to="/user/1/todos"  class="list-group-item list-group-item-action ">
        Juan
      </Link>
    </>
  );
}
