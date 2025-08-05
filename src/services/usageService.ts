import api from './api';
import type { Usage } from '../types/Usage';

export const getMonthlyUsageByUser = async (): Promise<Usage[]> => {
    const response = await api.get('/monthly-usage/user');
    return response.data;
};

export const getMonthlyUsageByZone = async (): Promise<Usage[]> => {
    const response = await api.get('/monthly-usage/zone');
    return response.data;
};
