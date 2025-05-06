import { Request, Response, NextFunction } from 'express';
import { RequestSchema } from '../../core/interfaces/request-schema.interface';
import { ZodError } from 'zod';
import { responseHandler } from './response-handler.middleware';

export const validate = (schema: RequestSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (schema.body) req.body = schema.body.parse(req.body);
            if (schema.query) req.query = schema.query.parse(req.query);
            if (schema.params) req.params = schema.params.parse(req.params);
            if (schema.headers) req.headers = schema.headers.parse(req.headers);
            if (schema.cookies) req.cookies = schema.cookies.parse(req.cookies);

            next();
          } catch (e) {
            if (e instanceof ZodError) {
                res.payload = { status: 400, message: '', error: e.errors, isSuccess: false };
            } else {
                res.payload = { status: 500, message: 'Internal Server Error', isSuccess: false };
            }
            
            responseHandler(req, res, next);
          }
    };
};