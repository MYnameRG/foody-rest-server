import { NextFunction, Request, Response } from 'express';
import IResponse from './../../../core/interfaces/response.interface';
import UserService from '../services/user.service';
import { BaseController } from '../../../core/bases/controllers.base';
import { IUser } from '../interfaces/user.interface';

class AuthController extends BaseController<IUser> {
    private userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    public register = (req: Request, res: Response<IResponse>, next: NextFunction) => {
        try {
            

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