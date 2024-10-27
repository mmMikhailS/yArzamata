import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ActivateRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    return this.prisma.activateUser.findUnique({
      where: {
        id,
      },
    });
  }

  async updateActivate(id: number) {
    return this.prisma.activateUser.update({
      where: {
        id,
      },
      data: {
        isActivated: true,
        activationCode: '',
      },
    });
  }

  async create(activationLink: string, activationCode: string, userId: number) {
    return this.prisma.activateUser.create({
      data: {
        activationLink,
        activationCode,
        userId,
      },
    });
  }

  async deleteById(id: number) {
    return this.prisma.activateUser.delete({
      where: {
        id,
      },
    });
  }
}
