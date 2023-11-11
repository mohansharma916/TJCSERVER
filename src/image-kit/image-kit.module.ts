import { Module } from '@nestjs/common';
import { ImageKitService } from './image-kit.service';
import { ImageKitController } from './image-kit.controller';

@Module({
  controllers: [ImageKitController],
  providers: [ImageKitService]
})
export class ImageKitModule {}
