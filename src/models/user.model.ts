import { model, Schema } from 'mongoose';
import { ROLES } from '../enums/roles.enum';

// Schema
const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    imageURL: { type: String, required: false },
    address: { type: String, required: true },
    country: { type: String, required: true },
    role: {
        type: Number,
        required: true,
        enum: [ROLES.ADMIN, ROLES.CUSTOMER, ROLES.DELIVERY_AGENT, ROLES.RESTAURANT_OWNER],
        default: ROLES.CUSTOMER
    },
}, { timestamps: true });

const User = model('User', UserSchema);
export default User;