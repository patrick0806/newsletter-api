import { Injectable } from '@nestjs/common';

import { NyTimesConnector } from '@shared/connectors';
import { CategoryEnum } from '@shared/enums/article';

@Injectable()
export class GetArticleByCategoryService {
  constructor(private nyTimesConnecotr: NyTimesConnector) {}

  async execute(category: CategoryEnum) {
    return this.nyTimesConnecotr.getArticlesByCategory(category);
  }
}
