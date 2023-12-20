import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
   @Prop({ type: String, required: true })
   firstName: string;

   @Prop({ type: String, required: true })
   lastName: string;

   @Prop({ type: String, required: true })
   email: string;

   @Prop({ type: String, required: true })
   country: string;

   @Prop({ type: String, required: true })
   state: string;

   @Prop({ type: String, required: true })
   city: string;

   @Prop({ type: String, required: true })
   dob: string;

   @Prop({ type: Number, required: true })
   age: number;

   @Prop({ type: String, required: true })
   gender: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
