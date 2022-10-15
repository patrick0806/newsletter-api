/* import { GoogleModule } from '@modules/google/google.module';
 */ import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthCheckModule } from '@modules/healthCheck/healthCheck.module';

import { NyTimesModule } from './modules/nyTimes/nyTiimes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    /* GoogleModule, */
    HealthCheckModule,
    NyTimesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
