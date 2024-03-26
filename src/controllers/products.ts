import { ProductType } from "../types";
import { products } from "../data";
import { Request, Response } from "express";

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

//curl -X POST -H "Content-Type: application/json" -d '{"name": "keyboard", "price": 5}' http://localhost:3000/api/products
export const createProduct = (req: Request, res: Response) => {
  const newProduct: ProductType = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
};

//curl -X PUT -H "Content-Type: application/json" -d '{"name": "keyboard", "price": 55}' http://localhost:3000/api/products/4
export const updateProduct = (req: Request, res: Response) => {
  const id: number = Number(req.params.productID);
  const index: number = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).send("Product not found");
  }

  const updatedProduct: ProductType = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };

  products[index] = updatedProduct;
  return res.status(200).json("Product updated");
};

export const deleteProduct = (req: Request, res: Response) => {
  const id: number = Number(req.params.productID);
  const index: number = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
  return res.status(200).json("Product deleted");
};
