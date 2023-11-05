import { CreateRequestDestinationInput } from './create-request-destination.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRequestDestinationInput extends PartialType(CreateRequestDestinationInput) {
  @Field(() => Int)
  id: number;
}
