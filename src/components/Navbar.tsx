import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h2>Water Dashboard</h2>
            <ul>
                <li><NavLink to="/" end>Dashboard</NavLink></li>
                <li><NavLink to="/usage">Usage</NavLink></li>
                <li><NavLink to="/alerts">Alerts</NavLink></li>
                <li><NavLink to="/billing">Billing</NavLink></li>
                <li><NavLink to="/add-user">Add User</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
