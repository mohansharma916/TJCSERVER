import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocumentInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  documentTitle: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  documentUrl: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  userId: string;
}
