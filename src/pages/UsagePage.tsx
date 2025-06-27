import React, { useEffect, useState } from 'react';
import { getAllUsage } from '../api/usage';
import type { UsageData } from '../types';

const UsagePage: React.FC = () => {
    const [usageData, setUsageData] = useState<UsageData[]>([]);

    useEffect(() => {
        getAllUsage().then(setUsageData);
    }, []);

    return (
        <div>
            <h2>Water Usage</h2>
            <table>
                <thead>
                <tr>
                    <th>Meter ID</th>
                    <th>Timestamp</th>
                    <th>Consumption (Liters)</th>
                    <th>Cost (₹)</th>
                </tr>
                </thead>
                <tbody>
                {usageData.map((item) => (
                    <tr key={item.meterId}>
                        <td>{item.meterId}</td>
                        <td>{new Date(item.timestamp).toLocaleString()}</td>
                        <td>{item.consumptionLiters.toFixed(2)}</td>
                        <td>{item.costInRupees.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsagePage;

