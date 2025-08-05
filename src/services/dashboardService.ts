import api from './api';
import type { DashboardSummary } from '../types/Dashboard';

export const getDashboardSummary = async (): Promise<DashboardSummary> => {
    const response = await api.get('/dashboard-summary');
    return response.data;
};
