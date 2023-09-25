import Elysia from "elysia";
import RegisterUser from "../core/user/service/useCases/UserRegister";

export default class RegisterUserController {
  constructor(readonly server: Elysia, readonly useCase: RegisterUser) {
    server.post("/users", async ({ body }) => {
      const { name, email, password } = body as any;

      await useCase.execute({ name, email, password });
    });
  }
}
