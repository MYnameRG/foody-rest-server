export abstract class BaseServices<T> {
    abstract _create(data: Partial<T>): Promise<T>;
    abstract _findOne(id: string): Promise<T | null>;
    abstract _updateOne(id: string, data: Partial<T>): Promise<T | null>;
    abstract _deleteOne(id: string): Promise<T | null>;
}