import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DocumentsService } from './documents.service';
import { DocumentModal } from './entities/document.entity';
import { CreateDocumentInput } from './dto/create-document.input';
import { UpdateDocumentInput } from './dto/update-document.input';

@Resolver(() => DocumentModal)
export class DocumentsResolver {
  constructor(private readonly documentsService: DocumentsService) {}

  @Mutation(() => DocumentModal)
  createDocument(@Args('data') createDocumentInput: CreateDocumentInput) {
    return this.documentsService.create(createDocumentInput);
  }

  @Query(() => [DocumentModal], { name: 'documents' })
  findAll(@Args('userId', { type: () => String }) userId: string) {
    return this.documentsService.findAll(userId);
  }

  @Query(() => DocumentModal, { name: 'document' })
  findOne(@Args('userd', { type: () => Int }) id: number) {
    return this.documentsService.findOne(id);
  }

  @Mutation(() => DocumentModal)
  updateDocument(
    @Args('updateDocumentInput') updateDocumentInput: UpdateDocumentInput,
  ) {
    return this.documentsService.update(
      updateDocumentInput.id,
      updateDocumentInput,
    );
  }

  @Mutation(() => DocumentModal)
  removeDocument(@Args('id', { type: () => Int }) id: number) {
    return this.documentsService.remove(id);
  }
}
