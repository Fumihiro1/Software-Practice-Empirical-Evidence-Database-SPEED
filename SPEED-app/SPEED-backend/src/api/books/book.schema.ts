import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  isbn: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  description: string;

  @Prop({ type: Date })
  published_date: Date;

  @Prop()
  publisher: string;

  @Prop({ type: Date, default: Date.now })
  updated_date: Date;

  // New fields for moderation
  @Prop({ default: false }) // False means pending, true means approved
  isApproved: boolean;

  @Prop({ default: false }) // Track if an article was explicitly rejected
  isRejected: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
