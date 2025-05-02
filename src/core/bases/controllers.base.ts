import { NextFunction, Response } from 'express';

export abstract class BaseController<T> {
  constructor() {}

  protected sendSuccess(res: Response, data: [T], message: string, status: number, next: NextFunction): void {
    res.payload = { data, status, message, isSuccess: true };
    next();
  }

  protected sendWarning(res: Response, data: [T], message: string, status: number, next: NextFunction): void {
    res.payload = { data, status, message, isSuccess: true };
    next();
  }

  protected sendError(res: Response, error: Error, status: number, message = '', next: NextFunction): void {
    res.payload = { status, error, message, isSuccess: false };
    next();
  }
}