import api from './api';
import type {BillingRecord} from '../types/BillingRecord.ts';

export const getAllBillingRecords = async (): Promise<BillingRecord[]> => {
    const response = await api.get('/billing');
    return response.data;
};

export const getPendingPayments = async (): Promise<BillingRecord[]> => {
    const response = await api.get('/billing/pending');
    return response.data;
};

export const getBillingByUserId = async (userId: number): Promise<BillingRecord[]> => {
    const response = await api.get(`/users/${userId}/billing`);
    return response.data;
};

export const getInvoiceById = async (billingId: number): Promise<BillingRecord> => {
    const response = await api.get(`/billing/${billingId}/invoice`);
    return response.data;
};
