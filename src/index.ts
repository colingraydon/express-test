import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { logger } from "./middleware/logs";
import product_routes from "./routes/products";

const app = express();
app.use(express.json()); //middleware

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(path.join(__dirname, "../src/public")));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/products", product_routes);
