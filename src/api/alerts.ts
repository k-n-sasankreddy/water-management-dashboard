import api from './axios';

/*
This function:

Retrieves a list of alerts from the backend
Can be used to display leak warnings or abnormal usage notifications
 */

// Fetch all alerts (e.g., leaks, anomalies)
/*
export const getAlerts = () => api.get('/monitoring/alerts');
*/


export const getAlerts = async () => {
    const response = await api.get('/monitoring/alerts');
    return response.data;
};
