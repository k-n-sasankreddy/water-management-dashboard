
/*
This function:
Sends a POST request to add a new user and associate a water meter
Accepts a userData object with all required fields
 */

// Add a new user along with a water meter
/*
export const addUserWithMeter = (userData: {
    meterLocation: string;
    meterStatus: string;
    role: string;
    email: string;
    username: string;
}) => api.post('/users/addWithMeter', userData);
*/

import api from './axios';

export const addUserWithMeter = async (userData: {
    meterLocation: string;
    meterStatus: string;
    role: string;
    email: string;
    username: string;
}) => {
    const response = await api.post('/users/addWithMeter', userData);
    return response.data;
};
