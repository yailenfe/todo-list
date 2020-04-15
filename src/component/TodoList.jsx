import React from "react";
import TodoLisItem from "./TodoLisItem";

export default function TodoList() {
  return (
    <>
      <ul class= "list-group list-group-flush">
          <TodoLisItem/>
          <TodoLisItem/>
          <TodoLisItem/>
          <TodoLisItem/>
          <TodoLisItem/>
      </ul>
    </>
  );
}
