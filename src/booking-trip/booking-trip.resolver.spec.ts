import { Test, TestingModule } from '@nestjs/testing';
import { BookingTripResolver } from './booking-trip.resolver';
import { BookingTripService } from './booking-trip.service';

describe('BookingTripResolver', () => {
  let resolver: BookingTripResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingTripResolver, BookingTripService],
    }).compile();

    resolver = module.get<BookingTripResolver>(BookingTripResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
