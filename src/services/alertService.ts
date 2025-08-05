/*
import api from './api';
import type {Alert} from '../types/Alert';

export const getRecentAlerts = async (): Promise<Alert[]> => {
    const response = await api.get('/alerts/recent');
    return response.data;
};

export const getAllAlerts = async (): Promise<Alert[]> => {
    const response = await api.get('/alerts');
    return response.data;
};

export const getAlertTrends = async (): Promise<any[]> => {
    const response = await api.get('/alerts/trends');
    return response.data;
};

export const getAlertsByZone = async (zoneId: number): Promise<Alert[]> => {
    const response = await api.get(`/zones/${zoneId}/alerts`);
    return response.data;
};


export const getAlertsByMeterId = async (meterId: number): Promise<Alert[]> => {
    const response = await api.get(`/meters/${meterId}/alerts`);
    return response.data;
};

*/

import api from './api';
import type { Alert } from '../types/Alert';

export const getRecentAlerts = async (): Promise<Alert[]> => {
    const response = await api.get('/alerts/recent');
    return response.data;
};
