import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);
