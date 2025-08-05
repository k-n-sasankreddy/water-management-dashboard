import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend,
    LineChart, Line, CartesianGrid
} from 'recharts';

interface ChartCardProps {
    title: string;
    type: 'bar' | 'pie' | 'line';
    data: { label: string; value: number }[];
}

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#6366F1'];

const ChartCard: React.FC<ChartCardProps> = ({ title, type, data }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
            <ResponsiveContainer width="100%" height={300}>
                {type === 'bar' ? (
                    <BarChart data={data}>
                        <XAxis dataKey="label" stroke="#4B5563" />
                        <YAxis stroke="#4B5563" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                ) : type === 'line' ? (
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="label" stroke="#4B5563" />
                        <YAxis stroke="#4B5563" />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} />
                    </LineChart>
                ) : (
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="label"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                )}
            </ResponsiveContainer>
        </div>
    );
};

export default ChartCard;

