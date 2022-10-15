import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { CheckApplicationStatusController } from './contexts/checkApplicationStatus/checkApplicationStatus.controller';
import { CheckApplicationStatusService } from './contexts/checkApplicationStatus/checkApplicationStatus.service';

@Module({
  imports: [TerminusModule],
  controllers: [CheckApplicationStatusController],
  providers: [CheckApplicationStatusService],
})
export class HealthCheckModule {}
