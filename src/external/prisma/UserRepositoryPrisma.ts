import { PrismaClient } from "@prisma/client";
import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/interfaces/UserRepository";

export default class UserRepositoryPrisma implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  findByEmail(email: string): Promise<Nullable<User>> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findById(id: number): Promise<Nullable<User>> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
