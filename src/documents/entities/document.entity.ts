import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DocumentModal {
  @Field(() => String)
  documentTitle: string;

  @Field(() => String)
  documentUrl: string;

  @Field(() => String)
  userId: string;

  @Field(() => Int)
  id: number;
}
