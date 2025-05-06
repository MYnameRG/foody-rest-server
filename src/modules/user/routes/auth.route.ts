import express from 'express';
import AuthController from '../controllers/auth.controller';
import { validate } from '../../../shared/middlewares/validate.middleware';
import { bodySchema } from '../dtos/user.dto';

class AuthRoutes {
    private router: express.IRouter;

    constructor() {
        this.router = express.Router();
    }

    fetchRoutes = (): express.IRouter => {
        return this.fetchPOSTReq();
    }

    fetchPOSTReq = (): express.IRouter => {
        this.router.post('/signup', AuthController.register);
        this.router.post('/login', validate({ body: bodySchema }), AuthController.loggedIn);

        return this.router;
    }
}

export default new AuthRoutes().fetchRoutes();