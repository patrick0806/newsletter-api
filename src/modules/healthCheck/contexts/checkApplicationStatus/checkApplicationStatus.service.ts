import { Injectable } from '@nestjs/common';
import { HealthCheckService, HealthCheckResult } from '@nestjs/terminus';

@Injectable()
export class CheckApplicationStatusService {
  constructor(private application: HealthCheckService) {}

  async execute(): Promise<HealthCheckResult> {
    return this.application.check([]);
  }
}
