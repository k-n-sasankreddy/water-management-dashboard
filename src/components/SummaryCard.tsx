import React from 'react';

interface SummaryCardProps {
    title: string;
    value: string | number | undefined;
    color?: 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'purple' | 'rose' | 'pink' | 'orange' | 'amber'; // Optional color theme
}

const colorMap = {
    blue: 'from-blue-500 to-blue-700',
    green: 'from-green-500 to-green-700',
    red: 'from-red-500 to-red-700',
    yellow: 'from-yellow-500 to-yellow-700',
    indigo: 'from-indigo-500 to-indigo-700',
    purple: 'from-purple-500 to-purple-700',
    rose: 'from-rose-500 to-rose-700',
    pink: 'from-pink-500 to-pink-700',
    orange: 'from-orange-500 to-orange-700',
    amber: 'from-amber-500 to-amber-700',
};

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, color = 'blue' }) => {
    return (
        <div className={`bg-gradient-to-r ${colorMap[color]} text-white rounded-lg shadow-lg p-6 text-center`}>
            <h4 className="text-sm font-medium">{title}</h4>
            <p className="text-3xl font-bold mt-2">{value ?? '—'}</p>
        </div>
    );
};

export default SummaryCard;
