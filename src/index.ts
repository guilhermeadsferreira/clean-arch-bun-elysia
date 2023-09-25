import app from "./external/api/config";
import FindUserByIdController from "./adapters/FindUserByIdController";
import FindUsers from "./core/user/service/useCases/FindUsers";
import FindUsersController from "./adapters/FindUsersController";
import GetUserById from "./core/user/service/useCases/GetUserById";
import RegisterUserController from "./adapters/RegisterUserController";
import UserRegister from "./core/user/service/useCases/UserRegister";
import UserRepositoryPrisma from "./external/prisma/UserRepositoryPrisma";

const userRepository = new UserRepositoryPrisma();

const userRegister = new UserRegister(userRepository);
new RegisterUserController(app, userRegister);

const findUsers = new FindUsers(userRepository);
new FindUsersController(app, findUsers);

const findUserById = new GetUserById(userRepository);
new FindUserByIdController(app, findUserById);

app.listen(3000);
const hostname = app.server?.hostname;
const port = app.server?.port;

console.log(`🦊 Elysia is running at ${hostname}:${port}`);
