import { resolve } from "dns";
import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/interfaces/UserRepository";

export default class UserRepositoryMemory implements UserRepository {
  private readonly users: User[] = [];

  async findByEmail(email: string): Promise<Nullable<User>> {
    return this.users.find((user) => user.email === email) ?? null;
  }

  async create(user: User): Promise<User> {
    const newUser = { id: Math.random(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number): Promise<Nullable<User>> {
    return this.users.find((user) => user.id === id) ?? null;
  }
}
