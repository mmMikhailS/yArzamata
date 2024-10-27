import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TokenRepository {
  constructor(private prisma: PrismaService) {}

  async findUserByToken(refreshToken: string) {
    return this.prisma.token.findFirst({
      where: {
        refreshToken,
      },
    });
  }

  async deleteAllTokens(userId: number) {
    return this.prisma.token.deleteMany({
      where: {
        userId,
      },
    });
  }

  async create(refreshToken: string, userId: number) {
    return this.prisma.token.create({
      data: {
        refreshToken,
        userId,
      },
    });
  }

  async update(refreshToken: string, id: number) {
    return this.prisma.token.update({
      where: {
        id,
      },
      data: {
        refreshToken,
      },
    });
  }
}
