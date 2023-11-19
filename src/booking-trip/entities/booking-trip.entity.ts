import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BookingTrip {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
