import express, { Request, Response } from 'express';
import IResponse from './core/interfaces/response.interface';
import config from './shared/config/app.config';
import AuthRoutes from './modules/auth/routes/auth.route';
import { responseHandler } from './shared/middlewares/response-handler.middleware';
import DatabaseServer from './infrastructure/databases/mongo.database';

class ApplicationServer {
    private _appserver: express.Express;

    constructor() {
        this._appserver = express();
    }

    private initBeforeRouteMiddlewares = () => {
        this._appserver.use(express.json());
        this._appserver.use(express.urlencoded({ extended: false }));
    }

    private initAfterRouteMiddlewares = () => {
        this._appserver.use(responseHandler);
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
        this._appserver.use(`/api/${config.version}/auth`, AuthRoutes);
    }

    private connectToMongoDB = () => {
        const dbserver = new DatabaseServer();
        dbserver.connect();
    };

    public start = () => {
        // Initialize Middleware Globally
        this.initBeforeRouteMiddlewares();

        // Define Routes
        this.defineTestRoutes();
        this.defineMainRoutes();

        // Global error handler (should be after routes)
        // this.initAfterRouteMiddlewares();

        // Start server to listen
        this._appserver.listen(config.port, () => {
            this.connectToMongoDB();
            console.log(`Server running on port ${config.port}`);
        });
    }
}

export default ApplicationServer;