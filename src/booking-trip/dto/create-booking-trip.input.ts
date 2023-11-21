import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookingTripInput {
  @Field(() => String, { description: 'Trip Date', nullable: true })
  tripDate?: string;

  @Field(() => String, { description: 'User Id', nullable: true })
  userId?: string;

  @Field(() => Int, { description: 'Trip Id', nullable: true })
  tripId: number;

  @Field(() => Int, { description: 'passengers', nullable: true })
  passengers?: number;
}
