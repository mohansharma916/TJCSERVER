import { Injectable } from '@nestjs/common';
import { CreateDocumentInput } from './dto/create-document.input';
import { UpdateDocumentInput } from './dto/update-document.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDocumentInput) {
    return this.prisma.documents.create({
      data: {
        documentTitle: data.documentTitle,
        documentUrl: data.documentUrl,
        userId: data.userId,
      },
    });
  }

  findAll(userID: string) {
    return this.prisma.documents.findMany({
      where: {
        userId: userID,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.documents.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateDocumentInput: UpdateDocumentInput) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
