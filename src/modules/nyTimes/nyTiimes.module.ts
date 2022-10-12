import { Module } from '@nestjs/common';

import { NyTimesConnector } from '@shared/connectors';

import { GetArticleByCategoryController } from './context/getArticlesByCategory/getArticlesByCategory.controller';
import { GetArticleByCategoryService } from './context/getArticlesByCategory/getArticlesByCategory.service';

@Module({
  imports: [],
  controllers: [GetArticleByCategoryController],
  providers: [GetArticleByCategoryService, NyTimesConnector],
})
export class NyTimesModule {}
