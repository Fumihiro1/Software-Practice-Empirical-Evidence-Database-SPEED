import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './create-book.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

  // Get all articles
  async findAll(): Promise<Book[]> {
    return this.bookModel.find({ isDeleted: false }).exec();  // Don't fetch deleted articles
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookModel.create({ ...createBookDto, isDeleted: false });
  }

  async update(id: string, createBookDto: CreateBookDto) {
    return await this.bookModel.findByIdAndUpdate(id, createBookDto).exec();
  }

  async delete(id: string) {
    return await this.bookModel.findByIdAndDelete(id).exec();
  }

  // Fetch only approved articles for the view page
  async findApproved(): Promise<Book[]> {
    return this.bookModel.find({
      isApproved: true,
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }]  // Include articles without the isDeleted field
    }).exec();
  }

  // Fetch only pending articles (not approved and not rejected)
  async findPending(): Promise<Book[]> {
    return this.bookModel.find({
      isApproved: false,
      isRejected: false  // Ensure rejected articles are excluded
    }).exec();
  }

  // Approve or reject a book and send an email if rejected
  async moderateBook(id: string, approve: boolean): Promise<Book> {
    if (approve) {
      return await this.bookModel.findByIdAndUpdate(id, { isApproved: true, isRejected: false }, { new: true }).exec();
    } else {
      const book = await this.bookModel.findByIdAndUpdate(id, { isApproved: false, isRejected: true }, { new: true }).exec();

      // Send rejection email
      if (book && book.email) {
        await this.sendRejectionEmail(book.email, book.title);
      }

      return book;
    }
  }

  // Get deleted articles
  async findDeleted(): Promise<Book[]> {
    return this.bookModel.find({ isDeleted: true }).exec();
  }

  // Get rejected articles
  async findRejected(): Promise<Book[]> {
    return this.bookModel.find({ isRejected: true }).exec();
  }

  // Accept a rejected article
  async acceptRejected(id: string): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, { isRejected: false, isApproved: true }, { new: true }).exec();
  }

  // Delete an article (mark it as deleted)
  async deleteBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).exec();
  }

  // Restore a deleted article (set isDeleted to false)
  async restoreBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, { isDeleted: false }, { new: true }).exec();
  }

  // Helper function to send rejection email
  private async sendRejectionEmail(email: string, title: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mlsy6455@gmail.com',
        pass: 'eimt tpus zpqo xtiq',
      },
    });

    const mailOptions = {
      from: 'mlsy6455@gmail.com',  // Sender address
      to: email,  // Recipient's email address
      subject: 'Article Rejection Notification',
      text: `Dear user, we regret to inform you that your article titled "${title}" has been rejected.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Rejection email sent successfully');
    } catch (error) {
      console.error('Error sending rejection email:', error);
    }
  }
}
