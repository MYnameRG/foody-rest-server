import { Request, Response } from "express";
import AppError from "../../core/interfaces/app-error.interface";
import IResponse from "../../core/interfaces/response.interface";

export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response<IResponse>
) => {
    console.error(err);
    res.status(err.status || 500).json({
        data: [
            { name: err.name, type: err.type, stack: err.stack }
        ], isSuccess: false, message: (err.message || 'Internal Server Error')
    });
    return;
};