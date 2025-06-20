import { pb } from '../pb/bookingApi';
import { BookingData } from './types';


const testBooking1: BookingData = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  numberOfPax: 2,
  pickupLocation: 'Bangkok Airport',
  tourPackage: 'Bangkok Tour',
  date_pickup: '2025-07-01',
  date_drop: '2025-07-02',
  specialRequests: 'Vegetarian meal',
  status: 'pending'
};

const testBooking2: BookingData = {
  name: 'Maria Garcia',
  email: 'maria.garcia@example.com',
  numberOfPax: 4,
  pickupLocation: 'Hotel',
  tourPackage: 'Kanchanaburi and Pattaya (2 Day Tour)',
  date_pickup: '2025-07-15',
  date_drop: '2025-07-16',
  specialRequests: 'Need wheelchair accessible transport',
  status: 'pending'
};

const testBooking3: BookingData = {
  name: 'David Chen',
  email: 'david.chen@example.com',
  numberOfPax: 1,
  pickupLocation: 'Bangkok Airport',
  tourPackage: 'Grand Tour: Pattaya, Bangkok, Ratchaburi, Kanchanaburi (5 Day Tour)',
  date_pickup: '2025-08-01',
  date_drop: '2025-08-05',
  status: 'pending'
};

async function createTestBookings() {
    await pb.createBooking(testBooking1);
    await pb.createBooking(testBooking2);
    await pb.createBooking(testBooking3);
}

createTestBookings()
  .then(() => {
    console.log('Test bookings created successfully');
  })
  .catch((error) => {
    console.error('Error creating test bookings:', error);
  });