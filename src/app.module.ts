import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@modules/auth/context/auth.module';
import { HealthCheckModule } from '@modules/healthCheck/healthCheck.module';

import { NyTimesModule } from './modules/nyTimes/nyTiimes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    HealthCheckModule,
    NyTimesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
