import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookingTripInput {
  @Field(() => String, { description: 'Trip Date' })
  tripDate: string;

  @Field(() => String, { description: 'User Id' })
  userId: string;

  @Field(() => Int, { description: 'Trip Id' })
  tripId: number;

  @Field(() => Int, { description: 'passengers', nullable: true })
  passengers?: number;
}
