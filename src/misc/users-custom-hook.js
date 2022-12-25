import React from "react";
import useUsers from './usersHook';

export default function UsersCustomHook(){

    const [usersData] = useUsers();

    return (
        <div>
            {usersData.map((user) => (
                <li key={user.id}>
                   {user.firstName} {user.lastName} {user.email}     
                </li>
            ))}
        </div>
    );
}