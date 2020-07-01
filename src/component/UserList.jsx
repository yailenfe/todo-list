import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

export default function UserList(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { filter } = props;
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
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
            <a
                href="#"
                className="list-group-item list-group-item-action bg-secondary text-white"
            >
                Users{" "}
                <span className="badge badge-light badge-pill  ml-4">
                    {filteredUsers.length}
                </span>
            </a>
            {filteredUsers.length === 0 &&  (
                <li className="list-group-item text-secondary" >No users</li>
            )}
            {filteredUsers.map((user) => (
                <UserListItem user={user} key={user.id} />
            ))}
        </div>
    );
}
