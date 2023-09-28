import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionEmailResolver } from './subscription-email.resolver';
import { SubscriptionEmailService } from './subscription-email.service';

describe('SubscriptionEmailResolver', () => {
  let resolver: SubscriptionEmailResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionEmailResolver, SubscriptionEmailService],
    }).compile();

    resolver = module.get<SubscriptionEmailResolver>(SubscriptionEmailResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
