import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import type {User} from '../types/User';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">👤 Users</h2>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <table className="w-full table-auto bg-white shadow rounded">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Username</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Role</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.username}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2 capitalize">{user.role}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button className="text-blue-600 hover:underline">View Usage</button>
                                <button className="text-green-600 hover:underline">View Billing</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Users;
