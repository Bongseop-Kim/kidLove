import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class KidRepository {
  constructor(private prisma: PrismaService) {}

  /*async existByParent(@CurrentUser() User): Promise<any> {
    try {
      const kids = await this.prisma.kid.findMany({
        where: {
          parentId: User.id,
        },
      });
      return kids;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }*/

  registKid(User) {
    const { parentId } = User
    const kid = this.prisma.kid.create({
      data: {
        parent: {
          connect: {
            id: parentId,
          },
        },
      },
    });
    return kid;
  }

  getKids(User){
    return this.prisma.kid.findMany({
      where: { parentId : User.id },
      include: { image: true }
    })
  }

  updateKid(id: string, body: UpdateKidDto) {
    return this.prisma.kid.update({
      where: { id: Number(id) },
      data: body,
    });
  }

  deleteKid(id: string) {
    return this.prisma.kid.delete({
      where: { id: Number(id) },
    });
  }
}
