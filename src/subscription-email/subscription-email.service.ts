import { Injectable } from '@nestjs/common';
import { CreateSubscriptionEmailInput } from './dto/create-subscription-email.input';
import { UpdateSubscriptionEmailInput } from './dto/update-subscription-email.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SubscriptionEmailService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSubscriptionEmailInput: CreateSubscriptionEmailInput) {
    return this.prisma.emailSubscription.create({
      data: { ...createSubscriptionEmailInput },
    });
  }

  findAll() {
    return `This action returns all subscriptionEmail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionEmail`;
  }

  update(
    id: number,
    updateSubscriptionEmailInput: UpdateSubscriptionEmailInput,
  ) {
    return `This action updates a #${id} subscriptionEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionEmail`;
  }
}
