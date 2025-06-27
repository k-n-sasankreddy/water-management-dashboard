import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UsagePage from './pages/UsagePage';
import AlertsPage from './pages/AlertsPage';
import BillingPage from './pages/BillingPage';
import AddUserPage from './pages/AddUserPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="usage" element={<UsagePage />} />
                <Route path="alerts" element={<AlertsPage />} />
                <Route path="billing" element={<BillingPage />} />
                <Route path="add-user" element={<AddUserPage />} />
            </Route>
        </Routes>
    );
};

export default App;


