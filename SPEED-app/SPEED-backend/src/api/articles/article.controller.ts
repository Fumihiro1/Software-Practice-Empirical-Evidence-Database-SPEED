import { Controller, Post, Body, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  async findAll() {
    return this.articleService.findAll();
  }
}
