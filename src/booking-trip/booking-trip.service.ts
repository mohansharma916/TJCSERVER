import { Injectable } from '@nestjs/common';
import { CreateBookingTripInput } from './dto/create-booking-trip.input';
import { UpdateBookingTripInput } from './dto/update-booking-trip.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BookingTripService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookingTripInput: CreateBookingTripInput) {
    const TripBooking = await this.prisma.booking.create({
      data: {
        userId: createBookingTripInput.userId,
        tripId: createBookingTripInput.tripId,
        tripDate: createBookingTripInput.tripDate,
      },
    });
    return TripBooking;
  }

  findAll() {
    return this.prisma.booking.findMany({});
  }

  async findAllTripsOfUser(userId: string) {
    const tripsOfuser = await this.prisma.booking.findMany({
      where: {
        userId,
      },
    });
    return tripsOfuser;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookingTrip`;
  }

  update(id: number, updateBookingTripInput: UpdateBookingTripInput) {
    return `This action updates a #${id} bookingTrip`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookingTrip`;
  }
}
