import { model, Schema } from 'mongoose';
import { ROLES } from '../enums/roles.enum';

// Schema
const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: true, default: "" },
    email: { type: String, required: true, default: "" },
    phone: { type: String, required: false, default: "" },
    imageURL: { type: String, required: false, default: "" },
    address: { type: String, required: false, default: "" },
    country: { type: String, required: false, default: "" },
    role: {
        type: Number,
        required: true,
        enum: [ROLES.ADMIN, ROLES.CUSTOMER, ROLES.DELIVERY_AGENT, ROLES.RESTAURANT_OWNER],
        default: ROLES.CUSTOMER
    },
}, { timestamps: true });

const User = model('User', UserSchema);
export default User;