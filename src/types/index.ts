export interface UsageData {
    meterId: number;
    timestamp: string;
    consumptionLiters: number;
    costInRupees: number;
}

export interface Alert {
    meterId: number;
    type: string;
    message: string;
    createdAt: string;
}

export interface LocationUsage {
    location: string;
    totalConsumption: number;
}

export interface Billing {
    billingId: number;
    userId: number;
    periodStart: string;
    periodEnd: string;
    amount: number;
    status: string;
    createdAt: string;
}
