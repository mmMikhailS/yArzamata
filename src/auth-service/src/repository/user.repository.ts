import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findUserById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async updateUser(email: string, password: string) {
    return this.prisma.user.update({
      where: {
        email,
      },
      data: {
        password,
      },
      select: {
        id: true,
        isAdmin: true,
        fullName: true,
      },
    });
  }

  async createUser(email: string, password: string, fullName: string) {
    return this.prisma.user.create({
      data: {
        email,
        password,
        fullName,
      },
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
