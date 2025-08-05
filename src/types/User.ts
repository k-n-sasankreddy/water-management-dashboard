export interface User {
    id: number;
    username: string;
    email: string;
    role: 'consumer' | 'admin' | 'operator'; // Adjust roles as needed
    createdAt: string; // ISO date string
    updatedAt: string;
}
