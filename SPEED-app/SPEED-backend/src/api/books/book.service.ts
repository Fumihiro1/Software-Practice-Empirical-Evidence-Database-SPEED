import { Injectable } from '@nestjs/common';
import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  test(): string {
    return 'book route testing';
  }

  // find all books
  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  // find a book
  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  // Create book
  async create(createBookDto: CreateBookDto) {
    return await this.bookModel.create(createBookDto);
  }

  // Update one book by id
  async update(id: string, createBookDto: CreateBookDto) {
    return await this.bookModel.findByIdAndUpdate(id, createBookDto).exec();
  }

  // Delete one book by id
  async delete(id: string) {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
    return deletedBook;
  }

  // Delete all books
  async deleteAll(): Promise<void> {
    await this.bookModel.deleteMany({});
  }
}
