export interface Meter {
    id: number;
    location: string;
    userId: number;
    zoneId?: number;
    status: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}
