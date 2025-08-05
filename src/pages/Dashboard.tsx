import React, { useEffect, useState } from 'react';
import SummaryCard from '../components/SummaryCard';
import ChartCard from '../components/ChartCard';
import { getDashboardSummary } from '../services/dashboardService';
import { getMonthlyUsageByZone } from '../services/usageService';
import { getRecentAlerts } from '../services/alertService';
import { getHighUsageAnomalies } from '../services/anomalyService';
import { getEfficiencyScores } from '../services/efficiencyService';
import type { DashboardSummary } from '../types/Dashboard';
import type { Usage } from '../types/Usage';
import type { Alert } from '../types/Alert';
import type { HighUsageAnomaly } from '../types/Anomaly';
import type { EfficiencyScore } from '../types/Efficiency';

const Dashboard: React.FC = () => {
    const [summary, setSummary] = useState<DashboardSummary | null>(null);
    const [zoneUsage, setZoneUsage] = useState<Usage[]>([]);
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [anomalies, setAnomalies] = useState<HighUsageAnomaly[]>([]);
    const [efficiencyScores, setEfficiencyScores] = useState<EfficiencyScore[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            getDashboardSummary(),
            getMonthlyUsageByZone(),
            getRecentAlerts(),
            getHighUsageAnomalies(),
            getEfficiencyScores()
        ])
            .then(([summaryData, usageData, alertsData, anomaliesData, efficiencyData]) => {
                setSummary(summaryData);
                setZoneUsage(usageData);
                setAlerts(alertsData);
                setAnomalies(anomaliesData);
                setEfficiencyScores(efficiencyData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading dashboard data:', error);
                setLoading(false);
            });
    }, []);

    if (loading || !summary) {
        return <div className="p-6 text-center text-gray-300">Loading dashboard...</div>;
    }

    return (
        <div className="p-6 space-y-8 bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white min-h-screen">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <SummaryCard title="👥 Total Users" value={summary.totalUsers} color="red" />
                <SummaryCard title="🌍 Total Zones" value={summary.totalZones} color="rose" />
                <SummaryCard title="📟 Active Meters" value={summary.activeMeters} color="pink" />
                <SummaryCard title="💧 Total Consumption" value={`${summary.totalConsumption.toFixed(2)} L`} color="yellow" />
                <SummaryCard title="💸 Pending Bills" value={summary.pendingBills} color="orange" />
                <SummaryCard title="🚨 Alerts Today" value={summary.alertsToday} color="amber" />
            </div>

            {/* Monthly Usage and Consumption Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartCard
                    title="Monthly Usage per Zone"
                    type="bar"
                    data={zoneUsage.map(zone => ({
                        label: zone.zoneName ?? 'Unknown',
                        value: zone.totalConsumption,
                    }))}
                />
                <ChartCard
                    title="Consumption by User Type"
                    type="pie"
                    data={[
                        { label: 'Residential', value: 18 },
                        { label: 'Commercial', value: 25 },
                        { label: 'Industrial', value: 57 },
                    ]}
                />
            </div>

            {/* Anomalies and Efficiency Scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/*<div className="border border-red-600 rounded-lg p-4 bg-white text-black">
                    <ChartCard
                        title="High Usage Anomalies"
                        type="line"
                        data={anomalies.map(a => ({
                            label: a.username,
                            value: a.consumptionLiters
                        }))}
                    />
                </div>*/}
                <div className="border border-red-600 rounded-lg p-4 bg-white text-black">
                    <ChartCard
                        title="High Usage Anomalies"
                        type="pie"
                        data={anomalies.map(a => ({
                            label: a.username,
                            value: a.consumptionLiters
                        }))}
                    />
                </div>
                <div className="border border-red-600 rounded-lg p-4 bg-white text-black">
                    <ChartCard
                        title="Efficiency Scores"
                        type="line"
                        data={efficiencyScores.map(e => ({
                            label: e.username,
                            value: e.efficiencyScore
                        }))}
                    />
                </div>
            </div>

            {/* Recent Alerts Table */}
            <div className="bg-white rounded-lg shadow-md p-6 text-black">
                <h2 className="text-xl font-bold text-red-800 mb-4">Recent Alerts</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-red-300">
                        <thead className="bg-red-100 text-red-800">
                        <tr>
                            <th className="px-4 py-2 text-left border">Meter ID</th>
                            <th className="px-4 py-2 text-left border">Zone</th>
                            <th className="px-4 py-2 text-left border">Type</th>
                            <th className="px-4 py-2 text-left border">Message</th>
                            <th className="px-4 py-2 text-left border">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {alerts.map((alert, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2 border">{alert.meterId}</td>
                                <td className="px-4 py-2 border">{alert.zone}</td>
                                <td className="px-4 py-2 border">{alert.type}</td>
                                <td className="px-4 py-2 border">{alert.message}</td>
                                <td className="px-4 py-2 border">{new Date(alert.date).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

