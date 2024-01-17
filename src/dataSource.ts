import path from "path";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Notification } from "./entities/Notification";

export const dataSource = new DataSource({
  type: "postgres",
  //added
  host: "127.0.0.1",
  port: 5432,
  database: "testdb",
  username: "postgres",
  password: "postgres",
  logging: true,
  synchronize: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [User, Notification],
});
