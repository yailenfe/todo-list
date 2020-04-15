import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span>Loading ......</span>;
  }


  return (
    <div className="list-group">
      {users.map((user) => (
        <UserListItem  user={user} key={user.id} />
      ))}
    </div>
  );
}
