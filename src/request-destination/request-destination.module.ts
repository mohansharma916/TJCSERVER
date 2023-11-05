import { Module } from '@nestjs/common';
import { RequestDestinationService } from './request-destination.service';
import { RequestDestinationResolver } from './request-destination.resolver';

@Module({
  providers: [RequestDestinationResolver, RequestDestinationService]
})
export class RequestDestinationModule {}
