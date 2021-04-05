import { NextFunction, Request, Response } from 'express';
import NotFoundError from './not-found.error';

export default function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  let code = 500;
  let message = 'Server error';

  if (err instanceof NotFoundError) {
    code = 404;
    message = 'Not Found';
  }

  res.statusCode = code;
  res.json({
    status: code,
    message: err.message || message,
  });
}
