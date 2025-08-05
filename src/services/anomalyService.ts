import api from './api';
import type { HighUsageAnomaly } from '../types/Anomaly';

export const getHighUsageAnomalies = async (): Promise<HighUsageAnomaly[]> => {
    const response = await api.get('/anomalies/high-usage');
    return response.data;
};
