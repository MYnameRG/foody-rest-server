export default interface IResponse {
    data?: Array<any>;
    isSuccess?: boolean;
    error?: any;
    message?: string;
}