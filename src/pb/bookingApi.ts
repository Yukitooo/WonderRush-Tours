import PocketBase from 'pocketbase';
import { BookingData } from '../datas/types';

class BookingAPI {
  private pb: PocketBase;
  private collection: string;

  constructor(url: string = 'http://127.0.0.1:8090') {
    this.pb = new PocketBase(url);
    this.collection = 'bookings';
  }

  async createBooking(data: BookingData) {
    // Ensure status is set to 'pending' by default if not provided
    const bookingData = { ...data, status: data.status ?? "pending" };
    const response = await this.pb.collection(this.collection).create(bookingData);
    console.log("Booking created:", response);
    return response;
  }

  async getBookings() {
    return await this.pb.collection(this.collection).getFullList();
  }

  async getBookingById(id: string) {
    return await this.pb.collection(this.collection).getOne(id);
  }

  async updateBooking(id: string, data: Partial<BookingData>) {
    return await this.pb.collection(this.collection).update(id, data);
  }

  async deleteBooking(id: string) {
    return await this.pb.collection(this.collection).delete(id);
  }
}

export const pb = new BookingAPI();
export default BookingAPI;
