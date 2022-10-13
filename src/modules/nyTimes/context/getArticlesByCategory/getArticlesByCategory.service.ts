import { Injectable } from '@nestjs/common';

import { NyTimesConnector } from '@shared/connectors';
import { GetArticleByCategoryResponseDTO } from '@shared/dtos/nyTimes';
import { CategoryEnum } from '@shared/enums/article';

@Injectable()
export class GetArticleByCategoryService {
  constructor(private nyTimesConnecotr: NyTimesConnector) {}

  async execute(
    category: CategoryEnum,
  ): Promise<GetArticleByCategoryResponseDTO> {
    return this.nyTimesConnecotr.getArticlesByCategory(category);
  }
}
