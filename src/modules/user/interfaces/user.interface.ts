import { Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone? : string;
    password: string;
    imageURL? : string;
    address? : string;
    country? : string;
    role: string;
  }