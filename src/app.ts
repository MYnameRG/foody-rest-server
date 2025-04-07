import express, { Request, Response } from 'express';
import IResponse from './interfaces/response.interface';
import config from './config/config';
import AuthRoutes from './routes/auth.route';
import { errorHandler } from './middlewares/error-handler.middleware';

class ApplicationServer {
    private _appserver: express.Express;

    constructor() {
        this._appserver = express();
    }

    private initMiddleware = () => {
        this._appserver.use(express.json());
        this._appserver.use(express.urlencoded({ extended: false }));
    }

    private initErrorhandler = () => {
        this._appserver.use(errorHandler);
    }

    public defineTestRoutes = () => {
        this._appserver.get('/', (req: Request, res: Response<String>) => {
            res.status(200).send('API is working');
            return;
        });

        this._appserver.get('/json', (req: Request, res: Response<IResponse>) => {
            res.status(200).json({ data: [], isSuccess: true, message: 'API is working!' });
            return;
        });
    }

    private defineMainRoutes = () => {
        this._appserver.use(`/api/${config.version}/auth`, AuthRoutes.defineRoutes());
    }

    public start = () => {
        // Initialize Middleware Globally
        this.initMiddleware();

        // Define Routes
        // this.defineTestRoutes();
        this.defineMainRoutes();

        // Global error handler (should be after routes)
        this.initErrorhandler();

        // Start server to listen
        this._appserver.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
    }
}

export default ApplicationServer;