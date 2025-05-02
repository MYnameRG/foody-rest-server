import express from 'express';
import AuthController from '../controllers/auth.controller';

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
        this.router.post('/login', AuthController.loggedIn);
        return this.router;
    }
}

export default new AuthRoutes().fetchRoutes();