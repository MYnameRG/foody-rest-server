import { ZodSchema, ZodTypeAny } from "zod";

export interface RequestSchema {
    body?: ZodTypeAny;
    query?: ZodTypeAny;
    params?: ZodTypeAny;
    headers?: ZodTypeAny;
    cookies?: ZodTypeAny;
}