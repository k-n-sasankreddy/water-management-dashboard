import React, { useState } from 'react';
import { addUserWithMeter } from '../api/user';

const AddUserPage: React.FC = () => {
    const [formData, setFormData] = useState({
        meterLocation: '',
        meterStatus: 'active',
        role: 'consumer',
        email: '',
        username: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await addUserWithMeter(formData);
        alert('User and Water Meter added successfully!');
    };

    return (
        <div>
            <h2>Add User</h2>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="meterLocation" placeholder="Meter Location" onChange={handleChange} />
            <button onClick={handleSubmit}>Add User</button>
        </div>
    );
};

export default AddUserPage;

