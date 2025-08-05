import React, { useEffect, useState } from 'react';
import { getBillingByUserId } from '../services/billingService';
import type { BillingRecord } from '../types/BillingRecord.ts';

const Billing: React.FC = () => {
    const [billing, setBilling] = useState<BillingRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBilling() {
            try {
                const data = await getBillingByUserId(1); // Replace with dynamic user ID
                setBilling(data);
            } catch (error) {
                console.error('Failed to fetch billing:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchBilling();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">💳 Billing</h2>
            {loading ? (
                <p>Loading billing data...</p>
            ) : (
                <table className="w-full table-auto bg-white shadow rounded">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Period</th>
                        <th className="px-4 py-2 text-left">Amount</th>
                        <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {billing.map((bill) => (
                        <tr key={bill.id} className="border-t">
                            <td className="px-4 py-2">{bill.periodStart} - {bill.periodEnd}</td>
                            <td className="px-4 py-2">₹{bill.amount}</td>
                            <td className="px-4 py-2">{bill.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Billing;
