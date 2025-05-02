import 'express';

declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            id: string;
            role?: string;
        };
    }

    interface Response {
        payload?: {
            status: number;
            isSuccess: boolean;
            message: string;
            data?: any;
            error?: any;
        };
    }
}