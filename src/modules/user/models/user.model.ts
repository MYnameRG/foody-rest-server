import { model, Schema } from 'mongoose';
import { ROLES } from '../../../core/enums/roles.enum';
import { IUser } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema<IUser>({
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: true, default: "" },
    email: { type: String, required: true, unique: true, default: "" },
    phone: { type: String, required: false, default: "" },
    imageURL: { type: String, required: false, default: "" },
    address: { type: String, required: false, default: "" },
    country: { type: String, required: false, default: "" },
    role: {
        type: String,
        required: true,
        enum: [ROLES.ADMIN, ROLES.CUSTOMER, ROLES.DELIVERY_AGENT, ROLES.RESTAURANT_OWNER],
        default: ROLES.CUSTOMER
    },
}, { timestamps: true });

const User = model('User', UserSchema);
export default User;