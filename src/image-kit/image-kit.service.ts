// import { Injectable } from '@nestjs/common';
// import { CreateImageKitDto } from './dto/create-image-kit.dto';
// import { UpdateImageKitDto } from './dto/update-image-kit.dto';

import { Injectable } from '@nestjs/common';
import ImageKit from 'imagekit';

@Injectable()
export class ImageKitService {
  private imagekit = new ImageKit({
    urlEndpoint: 'https://ik.imagekit.io/agp8nuqpn',
    publicKey: 'public_8anjxSMpbiBoJFTE5qveHXKt6Lg=',
    privateKey: 'private_jmZnjGsUdwgZ6/yFKbFFRzOMpVY=',
  });

  getAuthenticationParameters() {
    return this.imagekit.getAuthenticationParameters();
  }
}
