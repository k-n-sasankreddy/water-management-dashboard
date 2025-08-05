export interface Alert {
    meterId: number;
    zone: string;
    type: string;
    message: string;
    date: string; // ISO timestamp
}
