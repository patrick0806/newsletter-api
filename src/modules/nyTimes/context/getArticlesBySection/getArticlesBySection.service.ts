import { Injectable } from '@nestjs/common';
import { NyTimesConnector } from 'src/shared/connectors';
import { CategoryEnum } from 'src/shared/enums/article';

@Injectable()
export class GetArticleByCategoryService {
  constructor(private nyTimesConnecotr: NyTimesConnector) {}

  async execute(category: CategoryEnum) {
    return this.nyTimesConnecotr.getArticlesByCategory(category);
  }
}
