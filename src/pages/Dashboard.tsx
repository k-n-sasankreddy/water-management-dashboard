// ...existing code...
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
        return (
            <div className="p-6 text-center text-blue-400 animate-pulse">
                <span className="text-2xl">💧 Loading Water Dashboard...</span>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-10 bg-gradient-to-br from-blue-200 via-cyan-200 to-blue-400 min-h-screen relative overflow-x-hidden">
            {/* Decorative Water Waves */}
            <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-0">
                <svg viewBox="0 0 1440 320" className="w-full h-full">
                    <path fill="#38bdf8" fillOpacity="0.5" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,197.3C840,181,960,107,1080,101.3C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>

            {/* Dashboard Title */}
            <div className="relative z-10 flex flex-col items-center mb-2">
                <h1 className="text-4xl font-extrabold text-blue-900 drop-shadow-lg flex items-center gap-2">
                    <span className="animate-bounce">💧</span>
                    Water Management Dashboard
                </h1>
                <p className="text-lg text-cyan-700 mt-2 font-medium">Monitor, analyze, and optimize your water resources</p>
            </div>

            {/* Summary Cards */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <SummaryCard title="👥 Users" value={summary.totalUsers} color="blue" />
                <SummaryCard title="🌍 Zones" value={summary.totalZones} color="cyan" />
                <SummaryCard title="📟 Meters" value={summary.activeMeters} color="teal" />
                <SummaryCard title="💧 Consumption" value={`${summary.totalConsumption.toFixed(2)} L`} color="sky" />
                <SummaryCard title="💸 Pending Bills" value={summary.pendingBills} color="amber" />
                <SummaryCard title="🚨 Alerts Today" value={summary.alertsToday} color="rose" />
            </div>

            {/* Monthly Usage and Consumption Charts */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl shadow-lg bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 p-4 border-2 border-blue-300">
                    <ChartCard
                        title="Monthly Usage per Zone"
                        type="bar"
                        data={zoneUsage.map(zone => ({
                            label: zone.zoneName ?? 'Unknown',
                            value: zone.totalConsumption,
                        }))}
                    />
                </div>
                <div className="rounded-xl shadow-lg bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-200 p-4 border-2 border-cyan-300">
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
            </div>

            {/* Anomalies and Efficiency Scores */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-xl shadow-lg bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 p-4 border-2 border-blue-200">
                    <ChartCard
                        title="High Usage Anomalies"
                        type="pie"
                        data={anomalies.map(a => ({
                            label: a.username,
                            value: a.consumptionLiters
                        }))}
                    />
                </div>
                <div className="rounded-xl shadow-lg bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 p-4 border-2 border-cyan-200">
                    <ChartCard
                        title="Efficiency Scores"
                        type="line"
                        data={efficiencyScores.map(e => ({
                            label: e.username,
                            value: e.efficiencyScore
                        }))}
                    />
                </div>
                <div className="rounded-xl shadow-lg bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 p-4 border-2 border-blue-200 flex flex-col items-center justify-center">
                    <span className="text-6xl mb-2 animate-pulse">💦</span>
                    <span className="text-lg text-blue-700 font-semibold">Stay efficient, save water!</span>
                </div>
            </div>

            {/* Recent Alerts Table */}
            <div className="relative z-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 rounded-xl shadow-lg p-6 border-2 border-blue-200">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <span className="animate-pulse">⚠️</span>
                    Recent Alerts
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-blue-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-100 text-blue-800">
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
                            <tr key={index} className="border-t hover:bg-blue-50 transition">
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
// ...existing code...