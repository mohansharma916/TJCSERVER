import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookingTripService } from './booking-trip.service';
import { BookingTrip } from './entities/booking-trip.entity';
import { CreateBookingTripInput } from './dto/create-booking-trip.input';
import { UpdateBookingTripInput } from './dto/update-booking-trip.input';

@Resolver(() => BookingTrip)
export class BookingTripResolver {
  constructor(private readonly bookingTripService: BookingTripService) {}

  @Mutation(() => BookingTrip)
  createBookingTrip(
    @Args('createBookingTripInput')
    createBookingTripInput: CreateBookingTripInput,
  ) {
    return this.bookingTripService.create(createBookingTripInput);
  }

  @Query(() => [BookingTrip], { name: 'bookingTrip' })
  findAll() {
    return this.bookingTripService.findAll();
  }

  @Query(() => [BookingTrip], { name: 'bookingTripsOfUser' })
  findAllTripsOfUser(@Args('UserId', { type: () => String }) userId: string) {
    return this.bookingTripService.findAllTripsOfUser(userId);
  }

  @Query(() => BookingTrip, { name: 'bookingTrip' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookingTripService.findOne(id);
  }

  @Mutation(() => BookingTrip)
  updateBookingTrip(
    @Args('updateBookingTripInput')
    updateBookingTripInput: UpdateBookingTripInput,
  ) {
    return this.bookingTripService.update(
      updateBookingTripInput.id,
      updateBookingTripInput,
    );
  }

  @Mutation(() => BookingTrip)
  removeBookingTrip(@Args('id', { type: () => Int }) id: number) {
    return this.bookingTripService.remove(id);
  }
}
