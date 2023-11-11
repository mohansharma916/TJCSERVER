import { PartialType } from '@nestjs/swagger';
import { CreateImageKitDto } from './create-image-kit.dto';

export class UpdateImageKitDto extends PartialType(CreateImageKitDto) {}
