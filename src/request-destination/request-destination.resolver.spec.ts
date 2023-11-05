import { Test, TestingModule } from '@nestjs/testing';
import { RequestDestinationResolver } from './request-destination.resolver';
import { RequestDestinationService } from './request-destination.service';

describe('RequestDestinationResolver', () => {
  let resolver: RequestDestinationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestDestinationResolver, RequestDestinationService],
    }).compile();

    resolver = module.get<RequestDestinationResolver>(RequestDestinationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
