import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

  // async findAll(): Promise<Book[]> {
  //   return await this.bookModel.find().exec();
  // }

  // Get all articles
  async findAll(): Promise<Book[]> {
    return this.bookModel.find({ isDeleted: false }).exec();  // Don't fetch deleted articles
  }
  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  // async create(createBookDto: CreateBookDto) {
  //   return await this.bookModel.create(createBookDto);
  // }
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
  // async findApproved(): Promise<Book[]> {
  //   return await this.bookModel.find({ isApproved: true, isDeleted: false }).exec();
  // }

  async findApproved(): Promise<Book[]> {
    return this.bookModel.find({
      isApproved: true,
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }]  // Include articles without the isDeleted field
    }).exec();
  }

  // Fetch pending and rejected articles for the moderation page
  async findPendingAndRejected(): Promise<Book[]> {
    return await this.bookModel.find({
      $or: [{ isApproved: false, isRejected: false }, { isRejected: true }]
    }).exec();
  }

  // Approve or reject a book
  async moderateBook(id: string, approve: boolean): Promise<Book> {
    if (approve) {
      return await this.bookModel.findByIdAndUpdate(id, { isApproved: true, isRejected: false }, { new: true }).exec();
    } else {
      return await this.bookModel.findByIdAndUpdate(id, { isApproved: false, isRejected: true }, { new: true }).exec();
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


}
