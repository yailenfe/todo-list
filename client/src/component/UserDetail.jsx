import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { useParams } from "react-router-dom";

export default function UserDetail(props) {
    const [user, setUser] = useState([]);
    const [todos, setTodos] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const { filter } = props;

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => res.json())
            .then((res) => {
                setUser(res);
                setLoading(false);
            });

        fetch("https://jsonplaceholder.typicode.com/todos?userId=" + id)
            .then((res) => res.json())
            .then((res) => {
                setTodos(res);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <span>Loading ......</span>;
    }

    const pendingTasks = todos.filter((todo) => todo.completed === false && todo.title.toLowerCase().includes(filter.toLowerCase()));
    const completedTasks = todos.filter((todo) => todo.completed === true && todo.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <div className="row d-flex  align-items-center p-5 border bg-light">
                <img
                    src="/user-icon.png"
                    alt="..."
                    className="rounded-circle w-25 mr-4"
                />
                <div>
                    <h3>{user.name}</h3>
                    <a href={"http://" + user.website} target="blank">
                        {user.website}
                    </a>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-6">
                    <TodoList
                        todos={pendingTasks}
                        title="Pending Task"
                        type="primary"
                    />
                </div>
                <div className="col-6">
                    <TodoList
                        todos={completedTasks}
                        title="Completed Task"
                        type="success"
                    />
                </div>
            </div>
        </>
    );
}
