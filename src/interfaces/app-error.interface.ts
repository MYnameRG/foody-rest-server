export default interface AppError extends Error {
    status?: number;
    type?: string;
}