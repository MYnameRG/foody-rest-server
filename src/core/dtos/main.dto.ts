import z from 'zod';

export const headersSchema = z.object({
    Authorization: z.string(),
});