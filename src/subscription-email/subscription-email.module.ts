import { Module } from '@nestjs/common';
import { SubscriptionEmailService } from './subscription-email.service';
import { SubscriptionEmailResolver } from './subscription-email.resolver';

@Module({
  providers: [SubscriptionEmailResolver, SubscriptionEmailService]
})
export class SubscriptionEmailModule {}
