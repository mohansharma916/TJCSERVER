import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from '../../common/models/base.model';
import { Role } from '@prisma/client';
import { DocumentModal } from '../../documents/entities/document.entity';
// import { Document } from 'src/documents/entities/document.entity';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => String, { nullable: true })
  mobileNumber?: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [DocumentModal], { nullable: true })
  Documents?: DocumentModal[];

  @HideField()
  password: string;
}
