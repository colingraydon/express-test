import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { logger } from "./middleware/logs";
import user_routes from "./routes/user";
import { dataSource } from "./dataSource";

const main = async () => {
  dataSource
    .initialize()
    .then(() => {
      console.log("initialized successfully");
    })
    .catch((err: unknown) => {
      console.log("data source initialization error occurred: ", err);
    });

  const app = express();
  // app.use(express.json()); //middleware

  // app.use(logger);
  // app.use(bodyParser.urlencoded({ extended: true }));

  // // Serving static files
  // app.use(express.static(path.join(__dirname, "../src/public")));

  app.get("/", (_, res) => {
    res.send("Hello World");
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  // app.use("/api/users", user_routes);
};

main().catch((err) => {
  console.log(err);
});
