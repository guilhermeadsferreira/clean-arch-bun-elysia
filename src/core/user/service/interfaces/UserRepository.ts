import User from "../../model/User";

export default interface UserRepository {
  findById(id: number): Promise<Nullable<User>>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<Nullable<User>>;
  create(user: User): Promise<User>;
}
