import { NextFunction, Request, Response } from 'express';
import IResponse from '../interfaces/response.interface';

class AuthController {
    constructor() { }

    public registeredUser = (req: Request, res: Response<IResponse>, next: NextFunction) => {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    public loggedInUser = (req: Request, res: Response<IResponse>, next: NextFunction) => {
        try {

        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();