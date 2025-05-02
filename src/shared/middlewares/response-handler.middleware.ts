import { NextFunction, Request, Response } from "express";
import IResponse from "../../core/interfaces/response.interface";

export const responseHandler = (req: Request, res: Response<IResponse>, next: NextFunction): void => {
    if (res.payload) {
        const { status, ...body } = res.payload;
        res.status(status).json({ ...body });
        return;
    } else {
        next();
    }
};
