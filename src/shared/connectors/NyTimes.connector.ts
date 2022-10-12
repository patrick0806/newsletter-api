import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { CategoryEnum } from '../enums/article';

@Injectable()
export class NyTimesConnector {
  private nyTimesApi: AxiosInstance;
  constructor() {
    this.nyTimesApi = axios.create({
      baseURL: 'https://api.nytimes.com',
    });
  }

  async getArticlesByCategory(category: CategoryEnum) {
    const { data } = await this.nyTimesApi.get(
      `/svc/topstories/v2/${category}.json?api-key=${process.env.NY_TIMES_API_KEY}`,
    );
    console.log(data);
    return data;
  }
}
