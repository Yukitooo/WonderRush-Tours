export interface BookingData {
  name: string;
  email: string;
  numberOfPax: number;
  pickupLocation: string; // e.g. "Bangkok Airport"
  tourPackage: string;
  date_pickup: string; // ISO format, e.g. "2025-07-01"
  date_drop: string; // ISO format, e.g. "2025-07-10"
  specialRequests?: string; // Optional field for any special requests
  status: 'pending'; // Booking status
}
