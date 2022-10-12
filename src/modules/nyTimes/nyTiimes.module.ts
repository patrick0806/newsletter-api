import { Module } from '@nestjs/common';
import { NyTimesConnector } from 'src/shared/connectors';
import { GetArticleByCategoryController } from './context/getArticlesBySection/getArticlesBySection.controller';
import { GetArticleByCategoryService } from './context/getArticlesBySection/getArticlesBySection.service';

@Module({
  imports: [],
  controllers: [GetArticleByCategoryController],
  providers: [GetArticleByCategoryService, NyTimesConnector],
})
export class NyTimesModule {}
