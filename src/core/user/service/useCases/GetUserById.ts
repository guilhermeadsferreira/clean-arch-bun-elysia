import UseCase from "../../../shared/UseCase";
import User from "../../model/User";
import UserRepository from "../interfaces/UserRepository";

export default class GetUserById implements UseCase<number, Nullable<User>> {
  constructor(private readonly repository: UserRepository) {}

  execute(id: number): Promise<Nullable<User>> {
    return this.repository.findById(id);
  }
}
