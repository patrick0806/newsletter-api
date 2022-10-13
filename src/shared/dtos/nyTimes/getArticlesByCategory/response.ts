import { ArticleEntity } from '@shared/entities';
import { CategoryEnum } from '@shared/enums/article';

export class GetArticleByCategoryResponseDTO {
  status: string;
  copyright: string;
  section: CategoryEnum;
  lastUpdate: string;
  numResults: number;
  results: ArticleEntity[];
}
