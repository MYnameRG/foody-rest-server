import express from 'express';

class AuthRoutes {
    public router: express.IRouter;

    constructor() {
        this.router = express.Router();
    }

    defineRoutes = (): express.IRouter => {
        this.router.post('/signup');
        this.router.post('/login');

        return this.router;
    }
}

export default new AuthRoutes;