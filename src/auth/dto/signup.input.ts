import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsEmail()
  mobileNumber: string;

  @Field()
  firstname: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
