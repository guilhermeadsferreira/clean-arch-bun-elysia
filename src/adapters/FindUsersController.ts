import Elysia from "elysia";
import FindUsers from "../core/user/service/useCases/FindUsers";

export default class FindUsersController {
  constructor(readonly server: Elysia, readonly useCase: FindUsers) {
    server.get("/users", async () => {
      return await useCase.execute();
    });
  }
}
