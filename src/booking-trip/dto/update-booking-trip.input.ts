import { CreateBookingTripInput } from './create-booking-trip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookingTripInput extends PartialType(CreateBookingTripInput) {
  @Field(() => Int)
  id: number;
}
