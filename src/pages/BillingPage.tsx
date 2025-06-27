import React, { useState } from 'react';
import { generateBill, payBill } from '../api/billing';
import type { Billing } from '../types';

const BillingPage: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [billing, setBilling] = useState<Billing | null>(null);

    const handleGenerate = async () => {
        const bill = await generateBill({
            userId: parseInt(userId),
            periodStart: '2025-06-01T00:00:00Z',
            periodEnd: '2025-06-30T23:59:59Z',
        });
        setBilling(bill);
    };

    const handlePay = async () => {
        if (billing) {
            await payBill({
                userId: billing.userId,
                billingId: billing.billingId,
                status: 'PAID',
            });
            alert('Payment successful!');
        }
    };

    return (
        <div>
            <h2>Billing</h2>
            <input
                type="number"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleGenerate}>Generate Bill</button>

            {billing && (
                <div>
                    <p>Amount: ₹{billing.amount.toFixed(2)}</p>
                    <p>Status: {billing.status}</p>
                    <button onClick={handlePay}>Pay Bill</button>
                </div>
            )}
        </div>
    );
};

export default BillingPage;
