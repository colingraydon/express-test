import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, _: Response, next: NextFunction) => {
  req.body.requestTime = Date.now();
  console.log("url: ", req.url);
  console.log("params: ", req.params);
  console.log("query: ", req.query);
  console.log("body: ", req.body);
  next();
};
