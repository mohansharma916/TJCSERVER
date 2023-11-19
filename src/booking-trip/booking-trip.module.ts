import { Module } from '@nestjs/common';
import { BookingTripService } from './booking-trip.service';
import { BookingTripResolver } from './booking-trip.resolver';

@Module({
  providers: [BookingTripResolver, BookingTripService]
})
export class BookingTripModule {}
