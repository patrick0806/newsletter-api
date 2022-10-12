import { Controller, Get, Param } from '@nestjs/common';
import { CategoryEnum } from 'src/shared/enums/article';
import { GetArticleByCategoryService } from './getArticlesByCategory.service';

@Controller('/articles')
export class GetArticleByCategoryController {
  constructor(
    private getArticlesByCategoryService: GetArticleByCategoryService,
  ) {}
  @Get(':category')
  async GetArticleByCategory(@Param('category') category: CategoryEnum) {
    return this.getArticlesByCategoryService.execute(category);
  }
}
