import { NextFunction, Response } from 'express';
import IResponse from '../interfaces/response.interface';

export class BaseController {
  constructor() {}

  protected sendSuccess(res: Response<IResponse>, data: any, message: string, status: number, next: NextFunction): Response {
    // next({ data, status, message, isSuccess: true });
    return res.status(status).json({ data, message, isSuccess: true });
  }

  protected sendWarning(res: Response<IResponse>, data: any, message: string, status: number, next: NextFunction): Response {
    return res.status(status).json({ data, message, isSuccess: true });
    // next({ data, message, isSuccess: true });
  }

  protected sendError(res: Response<IResponse>, error: any, status: number, next: NextFunction): Response {
    // next({ status, error, isSuccess: false });
    return res.status(status).json({ error, isSuccess: false })
  }
}