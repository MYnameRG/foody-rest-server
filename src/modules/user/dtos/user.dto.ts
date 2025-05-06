import z from 'zod';
import { ROLES } from '../../../core/enums/roles.enum';

export const querySchema = z.object({
    id: z.string().optional()
});

export const bodySchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum([ROLES.ADMIN, ROLES.CUSTOMER, ROLES.DELIVERY_AGENT, ROLES.RESTAURANT_OWNER]),
});