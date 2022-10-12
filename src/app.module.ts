import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NyTimesModule } from './modules/nyTimes/nyTiimes.module';

@Module({
  imports: [ConfigModule.forRoot(), NyTimesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
