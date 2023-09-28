import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionEmail {
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
