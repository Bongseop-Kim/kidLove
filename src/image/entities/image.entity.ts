import { ApiProperty } from '@nestjs/swagger';
import { Image } from '@prisma/client';

export class ImageEntity implements Image {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  childId: number;

  @ApiProperty()
  hospitalId: string;
}