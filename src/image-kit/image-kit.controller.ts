import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImageKitService } from './image-kit.service';
import { CreateImageKitDto } from './dto/create-image-kit.dto';
import { UpdateImageKitDto } from './dto/update-image-kit.dto';

@Controller('image-kit')
export class ImageKitController {
  constructor(private readonly imageKitService: ImageKitService) {}

  // @Post()
  // create(@Body() createImageKitDto: CreateImageKitDto) {
  //   return this.imageKitService.create(createImageKitDto);
  // }

  @Get('auth')
  async getAuthParams() {
    const result = this.imageKitService.getAuthenticationParameters();
    return result;
  }

  // @Get()
  // findAll() {
  //   return this.imageKitService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.imageKitService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateImageKitDto: UpdateImageKitDto) {
  //   return this.imageKitService.update(+id, updateImageKitDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.imageKitService.remove(+id);
  // }
}
