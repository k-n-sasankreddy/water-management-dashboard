import api from './api';
import type {Meter} from '../types/Meter';

export const getAllMeters = async (): Promise<Meter[]> => {
    const response = await api.get('/meters');
    return response.data;
};

export const getMeterById = async (meterId: number): Promise<Meter> => {
    const response = await api.get(`/meters/${meterId}`);
    return response.data;
};

export const getMetersByUserId = async (userId: number): Promise<Meter[]> => {
    const response = await api.get(`/users/${userId}/meters`);
    return response.data;
};

export const getMetersByZoneId = async (zoneId: number): Promise<Meter[]> => {
    const response = await api.get(`/zones/${zoneId}/meters`);
    return response.data;
};

export const createMeter = async (meter: Partial<Meter>): Promise<Meter> => {
    const response = await api.post('/meters', meter);
    return response.data;
};

export const updateMeter = async (meterId: number, meter: Partial<Meter>): Promise<Meter> => {
    const response = await api.put(`/meters/${meterId}`, meter);
    return response.data;
};

export const deleteMeter = async (meterId: number): Promise<void> => {
    await api.delete(`/meters/${meterId}`);
};
