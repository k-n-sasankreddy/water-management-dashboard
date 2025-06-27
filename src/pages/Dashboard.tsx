/*
This component:
Fetches all usage data on mount
Displays a line chart of water consumption using react-chartjs-2
 */

import React, { useEffect, useState } from 'react';
import { getAllUsage, getUsageByLocation } from '../api/usage';
import type { UsageData, LocationUsage } from '../types';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
    LineChart, Line, Legend
} from 'recharts';

const Dashboard: React.FC = () => {
    const [usageData, setUsageData] = useState<UsageData[]>([]);
    const [locationData, setLocationData] = useState<LocationUsage[]>([]);

    useEffect(() => {
        getAllUsage().then(setUsageData);
        getUsageByLocation().then(setLocationData);
    }, []);

    return (
        <div>
            <h1>Dashboard Overview</h1>

            <h2>Water Usage by Location</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={locationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="location" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalConsumption" fill="#8884d8" name="Total Consumption (L)" />
                </BarChart>
            </ResponsiveContainer>

            <h2>Recent Meter Usage</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="meterId" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="consumptionLiters" stroke="#82ca9d" name="Consumption (L)" />
                    <Line type="monotone" dataKey="costInRupees" stroke="#ff7300" name="Cost (₹)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;


