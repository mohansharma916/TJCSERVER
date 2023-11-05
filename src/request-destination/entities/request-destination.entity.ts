import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RequestDestination {
  @Field(() => String, { description: 'Name' })
  name: string;
  @Field(() => String, { description: 'Email' })
  email: string;
  @Field(() => String, { description: 'mobileNumber' })
  mobileNumber: string;
  @Field(() => String, { description: 'destination' })
  destination: string;
}
