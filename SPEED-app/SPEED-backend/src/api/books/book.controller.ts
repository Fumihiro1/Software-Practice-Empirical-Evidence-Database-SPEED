import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';
import { error } from 'console';

@Controller('api/books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  // Get all approved books for the view page
  @Get('/approved')
  async findApproved() {
    return this.bookService.findApproved();
  }

  // Fetch pending and rejected articles for the moderation page
  @Get('/pending')
  async findPendingAndRejected() {
    return this.bookService.findPending();
  }

  // Approve or reject an article via id
  @Post('/moderate/:id')
  async moderateBook(@Param('id') id: string, @Body('approve') approve: boolean) {
    try {
      await this.bookService.moderateBook(id, approve);
      return { message: `Book ${approve ? 'approved' : 'rejected'} successfully` };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to moderate this book',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  @Post('/')
  async addBook(@Body() createBookDto: CreateBookDto) {
    console.log("Received Data:", createBookDto);  // Log the received data for inspection
    try {
      await this.bookService.create(createBookDto);
      return { message: 'Book added successfully' };
    } catch (error) {
      console.error("Error while adding book:", error);  // Log any errors
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to add this book',
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  // Get all books
  @Get('/')
  async findAll() {
    return this.bookService.findAll();
  }

  // Get deleted articles
  @Get('/deleted')
  async findDeleted() {
    return this.bookService.findDeleted();
  }

  // Get rejected articles
  @Get('/rejected')
  async findRejected() {
    return this.bookService.findRejected();
  }

  // Accept a rejected article
  @Post('/accept/:id')
  async acceptRejected(@Param('id') id: string) {
    return this.bookService.acceptRejected(id);
  }

  // Delete an article
  @Delete('/:id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }

  // Delete all books
  @Delete('/')
  async deleteAllBooks() {
    try {
      await this.bookService.deleteAllBooks();
      return { message: 'All books deleted successfully' };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to delete all books',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Restore an article (set isDeleted to false)
  @Post('/restore/:id')
  async restoreBook(@Param('id') id: string) {
    try {
      await this.bookService.restoreBook(id);
      return { message: 'Book restored successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to restore the book',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Reject an article (moderate with false)
  @Post('/reject/:id')
  async rejectBook(@Param('id') id: string) {
    try {
      await this.bookService.moderateBook(id, false);  // Set approve as false to reject
      return { message: 'Book rejected and email sent' };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to reject the book and send email',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
