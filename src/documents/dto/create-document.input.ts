import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocumentInput {
  @Field(() => String, { description: 'Document Title' })
  documentTitle: string;

  @Field(() => String, { description: 'Document URl' })
  documentUrl: string;

  @Field(() => String, { description: 'User Id' })
  userId: string;
}
