import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RequestDestinationService } from './request-destination.service';
import { RequestDestination } from './entities/request-destination.entity';
import { CreateRequestDestinationInput } from './dto/create-request-destination.input';
import { UpdateRequestDestinationInput } from './dto/update-request-destination.input';

@Resolver(() => RequestDestination)
export class RequestDestinationResolver {
  constructor(private readonly requestDestinationService: RequestDestinationService) {}

  @Mutation(() => RequestDestination)
  createRequestDestination(@Args('createRequestDestinationInput') createRequestDestinationInput: CreateRequestDestinationInput) {
    return this.requestDestinationService.create(createRequestDestinationInput);
  }

  @Query(() => [RequestDestination], { name: 'requestDestination' })
  findAll() {
    return this.requestDestinationService.findAll();
  }

  @Query(() => RequestDestination, { name: 'requestDestination' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestDestinationService.findOne(id);
  }

  @Mutation(() => RequestDestination)
  updateRequestDestination(@Args('updateRequestDestinationInput') updateRequestDestinationInput: UpdateRequestDestinationInput) {
    return this.requestDestinationService.update(updateRequestDestinationInput.id, updateRequestDestinationInput);
  }

  @Mutation(() => RequestDestination)
  removeRequestDestination(@Args('id', { type: () => Int }) id: number) {
    return this.requestDestinationService.remove(id);
  }
}
