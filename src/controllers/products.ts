import { products } from "../data";
import { Request, Response } from "express";
import { User } from "../entities/User";
import { dataSource } from "../dataSource";
import bcryptjs from "bcryptjs";

export const getProducts = (_: Request, res: Response) => {
  res.json(products);
};

export const getProduct = (req: Request, res: Response) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  return res.json(product);
};

export const getAllUsers = async (_: Request, res: Response) => {
  // const users = await User.find();
  // console.log("in getAllUsers");
  // console.log(users);
  res.send("hello");
};

export const createUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcryptjs.hash(password, 10);
  let user;

  try {
    const result = await dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        username: username,
        password: hashedPassword,
        email: email,
      })
      .returning("*")
      .execute();
    user = result.raw[0];
  } catch (err) {
    //code taken from stack trace
    if (err.code === "23505") {
      return res.status(400).send("User already exists");
    }
  }

  return res
    .status(201)
    .json({ message: "User created successfully", user: user });
};

export const deleteProduct = (req: Request, res: Response) => {
  const id: number = Number(req.params.productID);
  const index: number = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
  return res.status(200).json("Product deleted");
};
