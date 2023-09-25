import Elysia from "elysia";
import GetUserById from "../core/user/service/useCases/GetUserById";

export default class FindUserByIdController {
  constructor(readonly server: Elysia, readonly useCase: GetUserById) {
    server.get("/users/:id", async ({ params }) => {
      return await useCase.execute(Number(params.id));
    });
  }
}
