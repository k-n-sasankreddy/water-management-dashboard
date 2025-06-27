/*
This component:
Fetches and displays alerts such as leaks or high usage
Formats each alert with key details
 */

import React, { useEffect, useState } from 'react';
import { getAlerts } from '../api/alerts';
import type { Alert } from '../types';

const AlertsPage: React.FC = () => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    useEffect(() => {
        getAlerts().then(setAlerts);
    }, []);

    return (
        <div>
            <h2>Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.type}</strong> - {alert.message} (Meter ID: {alert.meterId})<br />
                        <small>{new Date(alert.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertsPage;
