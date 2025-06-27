
import api from './axios';

export const generateBill = async (billingData: {
    userId: number;
    periodStart: string;
    periodEnd: string;
}) => {
    const response = await api.post('/billing/generate', billingData);
    return response.data;
};

export const payBill = async (paymentData: {
    userId: number;
    billingId: number;
    status: string;
}) => {
    const response = await api.put('/billing/pay', paymentData);
    return response.data;
};

