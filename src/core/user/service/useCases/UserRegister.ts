import UseCase from "../../../shared/UseCase";
import UserRepository from "../interfaces/UserRepository";

type Input = {
  name: string;
  email: string;
  password: string;
};

export default class UserRegister implements UseCase<Input> {
  constructor(private readonly repository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    const userAlreadyExists = await this.repository.findByEmail(input.email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    await this.repository.create(input);
  }
}
