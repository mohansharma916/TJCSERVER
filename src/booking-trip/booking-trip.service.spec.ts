import { Test, TestingModule } from '@nestjs/testing';
import { BookingTripService } from './booking-trip.service';

describe('BookingTripService', () => {
  let service: BookingTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingTripService],
    }).compile();

    service = module.get<BookingTripService>(BookingTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
