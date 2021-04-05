import { NextFunction, Request, Response } from 'express';

export default function(_req: Request, res: Response, next: NextFunction) {
  res.sendOk = (data: any) => {
    return res.json(data).status(200);
  };

  res.sendOkCreated = (data: any) => {
    return res.json(data).status(201);
  };

  next();
}
