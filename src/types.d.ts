import { Response } from 'express';

export type Send<ResBody = any, T = Response<ResBody>> = (body?: ResBody) => T;

declare global {
  namespace Express {
      interface Request {
        locals: {
          divisionId: number;
        };
      }

      interface Response<ResBody = any> {
        sendOk: Send<ResBody, this>;
        sendOkCreated: Send<ResBody, this>;
        sendOkDeleted: Send<ResBody, this>;
        sendOkUpdated: Send<ResBody, this>;
      }
  }
}
