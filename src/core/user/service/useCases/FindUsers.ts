import UseCase from "../../../shared/UseCase";
import User from "../../model/User";
import UserRepository from "../interfaces/UserRepository";

export default class FindUsers implements UseCase<void, User[]> {
  constructor(readonly repository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.repository.findAll();
  }
}
