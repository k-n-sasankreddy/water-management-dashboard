import React from 'react';
import type { Alert } from '../types/Alert';
import { FaExclamationTriangle } from 'react-icons/fa';

interface AlertFeedProps {
    alerts: Alert[];
}

const AlertFeed: React.FC<AlertFeedProps> = ({ alerts }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                <FaExclamationTriangle className="text-red-500" />
                Recent Alerts
            </h3>
            <div className="space-y-4 max-h-80 overflow-y-auto">
                {alerts.length === 0 ? (
                    <p className="text-gray-500 text-sm">No alerts found.</p>
                ) : (
                    alerts.map((alert, index) => (
                        <div
                            key={index}
                            className="border-l-4 border-red-500 bg-red-50 p-4 rounded hover:bg-red-100 transition"
                        >
                            <p className="text-sm font-medium text-gray-800">
                                <strong>Meter {alert.meterId}</strong> ({alert.zone}) – {alert.type}
                            </p>
                            <p className="text-sm text-gray-700">{alert.message}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(alert.date).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AlertFeed;
