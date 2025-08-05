import api from './api';
import type { EfficiencyScore } from '../types/Efficiency';

export const getEfficiencyScores = async (): Promise<EfficiencyScore[]> => {
    const response = await api.get('/efficiency-scores');
    return response.data;
};
