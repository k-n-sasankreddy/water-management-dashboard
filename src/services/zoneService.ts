import api from './api';
import type {Zone} from '../types/Zone';

export const getZones = async (): Promise<Zone[]> => {
    const response = await api.get('/zones');
    return response.data;
};

export const getZoneById = async (zoneId: number): Promise<Zone> => {
    const response = await api.get(`/zones/${zoneId}`);
    return response.data;
};

export const createZone = async (zone: Partial<Zone>): Promise<Zone> => {
    const response = await api.post('/zones', zone);
    return response.data;
};

export const updateZone = async (zoneId: number, zone: Partial<Zone>): Promise<Zone> => {
    const response = await api.put(`/zones/${zoneId}`, zone);
    return response.data;
};

export const deleteZone = async (zoneId: number): Promise<void> => {
    await api.delete(`/zones/${zoneId}`);
};
