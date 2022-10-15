import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';

import { CheckApplicationStatusService } from './checkApplicationStatus.service';

@Controller('health')
export class CheckApplicationStatusController {
  constructor(
    private readonly checkApplicationStatusService: CheckApplicationStatusService,
  ) {}

  @Get()
  @HealthCheck()
  get(): Promise<HealthCheckResult> {
    return this.checkApplicationStatusService.execute();
  }
}
