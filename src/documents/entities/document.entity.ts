import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Document {
  @Field()
  documentTitle: string;

  @Field()
  documentUrl: string;

  @Field()
  userId: string;
}
