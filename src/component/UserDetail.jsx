import React from "react";
import TodoList from "./TodoList";

export default function UserDetail() {
  return (
    <>
      <div className="row bg-primary d-flex  align-items-center p-5 text-white">
        <img src="/user-icon.png" alt="..." class="rounded-circle w-25 mr-4" />
        <div>
          <h3>Pepe fernandez</h3>
          <span>desiganer</span>
        </div>
      </div>
      <div className="row  text-white ">
        <div className="col-6   p-5 bg-warning d-flex flex-column  align-items-center ">
          <span className="h1  font-weight-light">76</span>
          <span>Pending tasks</span>
        </div>
        <div className="col-6   p-5 bg-success d-flex flex-column  align-items-center">
          <span className="h1  font-weight-light">98</span>
          <span>Completed tasks</span>
        </div>
      </div>

      <TodoList />
    </>
  );
}
