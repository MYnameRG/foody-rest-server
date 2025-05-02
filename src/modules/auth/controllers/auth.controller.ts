import { NextFunction, Request, Response } from 'express';
import IResponse from '../interfaces/response.interface';
import UserService from '../services/user.service';

class AuthController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public register = (req: Request, res: Response<IResponse>, next: NextFunction) => {
        try {
            const user = req.body;
            if (user) {
                throw new Error("");
            }

        } catch (error) {
            next(error);
        }
    }

    public loggedIn = (req: Request, res: Response<IResponse>, next: NextFunction) => {
        try {

        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();