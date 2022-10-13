import { Controller, Get, Param } from '@nestjs/common';

import { GetArticleByCategoryResponseDTO } from '@shared/dtos/nyTimes';
import { CategoryEnum } from '@shared/enums/article';

import { GetArticleByCategoryService } from './getArticlesByCategory.service';

@Controller('/articles')
export class GetArticleByCategoryController {
  constructor(
    private getArticlesByCategoryService: GetArticleByCategoryService,
  ) {}
  @Get(':category')
  async GetArticleByCategory(
    @Param('category') category: CategoryEnum,
  ): Promise<GetArticleByCategoryResponseDTO> {
    return this.getArticlesByCategoryService.execute(category);
  }
}
