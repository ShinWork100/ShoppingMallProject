import React, { useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('api/make-api-call/');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    }

    return (
        <div>
            <button onClick={fetchUsers}>Get All Users</button>
            {users.map(user => (
                <div key={user.accountId}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default UserComponent;
