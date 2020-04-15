import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setLoading(false);
      });
  });

  if (loading) {
    return <span>Loading ......</span>;
  }


  return (
    <div class="list-group">
      {users.map((user) => (
        <UserListItem  user={user} />
      ))}
    </div>
  );
}
