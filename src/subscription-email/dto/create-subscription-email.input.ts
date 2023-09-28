import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubscriptionEmailInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
