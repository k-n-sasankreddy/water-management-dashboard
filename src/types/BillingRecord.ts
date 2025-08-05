export interface BillingRecord {
    id: number;
    userId: number;
    periodStart: string; // ISO date string
    periodEnd: string;   // ISO date string
    amount: number;
    status: 'paid' | 'pending' | 'overdue'; // Extend as needed
    createdAt: string;
    updatedAt: string;
}
