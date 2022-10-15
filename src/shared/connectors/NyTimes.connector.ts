import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { GetArticleByCategoryResponseDTO } from '@shared/dtos/nyTimes/getArticlesByCategory/response';
import { parseToCamelCase } from '@shared/utilss';

import { CategoryEnum } from '../enums/article';

@Injectable()
export class NyTimesConnector {
  private nyTimesApi: AxiosInstance;
  constructor() {
    this.nyTimesApi = axios.create({
      baseURL: 'https://api.nytimes.com',
    });
  }

  async getArticlesByCategory(
    category: CategoryEnum,
  ): Promise<GetArticleByCategoryResponseDTO> {
    const { data } = await this.nyTimesApi.get(
      `/svc/topstories/v2/${category}.json?api-key=${process.env.NY_TIMES_API_KEY}`,
    );
    return parseToCamelCase(data);
  }
}
