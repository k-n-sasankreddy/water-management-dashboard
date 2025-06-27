import api from './axios';



export const getAllUsage = async () => {
    const response = await api.get('/monitoring/usage');
    return response.data;
};

export const getUsageByMeterId = async (meterId: number) => {
    const response = await api.get(`/monitoring/usage/${meterId}`);
    return response.data;
};

export const getUsageByLocation = async () => {
    const response = await api.get('/monitoring/usage/location');
    return response.data;
};
