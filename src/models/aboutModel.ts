import mongoose, { Schema, Document } from 'mongoose';

interface IAbout extends Document {
  name: string;
  version: string;
  year: string;
  description: string;
}

const AboutSchema: Schema = new Schema({
  name: { type: String, required: true },
  version: { type: String, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true }
});

export default mongoose.model<IAbout>('About', AboutSchema);
