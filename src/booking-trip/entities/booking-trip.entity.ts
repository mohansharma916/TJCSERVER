import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BookingTrip {
  @Field(() => String, { description: 'Trip Date', nullable: true })
  tripDate?: string;

  @Field(() => String, { description: 'User Id', nullable: true })
  userId?: string;

  @Field(() => Int, { description: 'Trip Id', nullable: true })
  tripId: number;
}
