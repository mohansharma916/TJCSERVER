import { Test, TestingModule } from '@nestjs/testing';
import { RequestDestinationService } from './request-destination.service';

describe('RequestDestinationService', () => {
  let service: RequestDestinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestDestinationService],
    }).compile();

    service = module.get<RequestDestinationService>(RequestDestinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
