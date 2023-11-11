import { Test, TestingModule } from '@nestjs/testing';
import { ImageKitController } from './image-kit.controller';
import { ImageKitService } from './image-kit.service';

describe('ImageKitController', () => {
  let controller: ImageKitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageKitController],
      providers: [ImageKitService],
    }).compile();

    controller = module.get<ImageKitController>(ImageKitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
