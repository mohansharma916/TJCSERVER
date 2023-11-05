import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRequestDestinationInput {
  @Field(() => String, { description: 'Name' })
  name: string;
  @Field(() => String, { description: 'Email' })
  email: string;
  @Field(() => String, { description: 'mobileNumber' })
  mobileNumber: string;
  @Field(() => String, { description: 'destination' })
  destination: string;
}
