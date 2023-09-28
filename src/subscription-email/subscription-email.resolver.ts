import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubscriptionEmailService } from './subscription-email.service';
import { SubscriptionEmail } from './entities/subscription-email.entity';
import { CreateSubscriptionEmailInput } from './dto/create-subscription-email.input';
import { UpdateSubscriptionEmailInput } from './dto/update-subscription-email.input';

@Resolver(() => SubscriptionEmail)
export class SubscriptionEmailResolver {
  constructor(private readonly subscriptionEmailService: SubscriptionEmailService) {}

  @Mutation(() => SubscriptionEmail)
  createSubscriptionEmail(@Args('createSubscriptionEmailInput') createSubscriptionEmailInput: CreateSubscriptionEmailInput) {
    return this.subscriptionEmailService.create(createSubscriptionEmailInput);
  }

  @Query(() => [SubscriptionEmail], { name: 'subscriptionEmail' })
  findAll() {
    return this.subscriptionEmailService.findAll();
  }

  @Query(() => SubscriptionEmail, { name: 'subscriptionEmail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subscriptionEmailService.findOne(id);
  }

  @Mutation(() => SubscriptionEmail)
  updateSubscriptionEmail(@Args('updateSubscriptionEmailInput') updateSubscriptionEmailInput: UpdateSubscriptionEmailInput) {
    return this.subscriptionEmailService.update(updateSubscriptionEmailInput.id, updateSubscriptionEmailInput);
  }

  @Mutation(() => SubscriptionEmail)
  removeSubscriptionEmail(@Args('id', { type: () => Int }) id: number) {
    return this.subscriptionEmailService.remove(id);
  }
}
