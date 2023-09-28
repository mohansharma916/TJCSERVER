import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionEmailService } from './subscription-email.service';

describe('SubscriptionEmailService', () => {
  let service: SubscriptionEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionEmailService],
    }).compile();

    service = module.get<SubscriptionEmailService>(SubscriptionEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
