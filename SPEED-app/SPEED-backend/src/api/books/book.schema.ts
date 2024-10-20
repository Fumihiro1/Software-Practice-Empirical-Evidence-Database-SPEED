import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ type: Date })
  published_date: Date;

  @Prop({ required: true })
  seMethod: string;  // Added SE Method

  @Prop({ required: true })
  claim: string;     // Added Claim

  @Prop({ required: true })
  pageRange: string; // Added Page Range

  @Prop()
  description: string;

  @Prop({ required: true }) // Assuming email is required
  email: string;

  @Prop({ default: false }) // False means pending, true means approved
  isApproved: boolean;

  @Prop({ default: false }) // Track if an article was explicitly rejected
  isRejected: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
