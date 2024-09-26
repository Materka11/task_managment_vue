import { cleanEnv, str, port } from "envalid";

export default cleanEnv(process.env, {
  PORT: port(),
  DATABASE_URL: str(),
  APP_REFRESH_SECRET: str(),
  APP_SECRET: str(),
});
