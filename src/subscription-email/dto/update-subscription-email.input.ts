import { CreateSubscriptionEmailInput } from './create-subscription-email.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubscriptionEmailInput extends PartialType(CreateSubscriptionEmailInput) {
  @Field(() => Int)
  id: number;
}
