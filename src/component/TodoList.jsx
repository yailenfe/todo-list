import React from "react";
import TodoLisItem from "./TodoLisItem";

export default function TodoList(props) {
    const { todos, title, type } = props;
    return (
        <>
            <ul className="list-group ">
                <li className={`list-group-item bg-${type} text-white pr-5`}>
                    {title}{" "}
                    <span class="badge badge-light badge-pill  ml-4">{todos.length}</span>
                </li>
                {todos.map((todo) => {
                    return <TodoLisItem title={todo.title} />;
                })}
            </ul>
        </>
    );
}
