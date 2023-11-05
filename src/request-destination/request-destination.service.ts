import { Injectable } from '@nestjs/common';
import { CreateRequestDestinationInput } from './dto/create-request-destination.input';
import { UpdateRequestDestinationInput } from './dto/update-request-destination.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RequestDestinationService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRequestDestinationInput: CreateRequestDestinationInput) {
    return this.prisma.queryDestination.create({
      data: {
        emailId: createRequestDestinationInput.email,
        name: createRequestDestinationInput.name,
        mobileNumber: createRequestDestinationInput.mobileNumber,
        destination: createRequestDestinationInput.destination,
      },
    });
  }

  findAll() {
    return `This action returns all requestDestination`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestDestination`;
  }

  update(
    id: number,
    updateRequestDestinationInput: UpdateRequestDestinationInput,
  ) {
    return `This action updates a #${id} requestDestination`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestDestination`;
  }
}
