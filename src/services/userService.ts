import api from './api';
import type {User} from '../types/User';

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

export const getUserUsageHistory = async (id: number): Promise<any[]> => {
    const response = await api.get(`/users/${id}/usage`);
    return response.data;
};

export const getUserBillingHistory = async (id: number): Promise<any[]> => {
    const response = await api.get(`/users/${id}/billing`);
    return response.data;
};
