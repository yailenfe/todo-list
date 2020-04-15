import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3004/users/" + id)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <span>Loading ......</span>;
  }

  return (
    <>
      <div className="row bg-primary d-flex  align-items-center p-5 text-white">
        <img
          src="/user-icon.png"
          alt="..."
          className="rounded-circle w-25 mr-4"
        />
        <div>
          <h3>{user.name}</h3>
          <a href={"http://" + user.website} target="blank" className="text-white">{user.website}</a>
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
