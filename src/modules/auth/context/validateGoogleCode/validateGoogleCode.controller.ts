import { Controller, Get, Query } from '@nestjs/common';

import { ValidateGoogleCodeResponseDTO } from '@shared/dtos/auth';

import { ValidateGoogleCodeService } from './validateGoogleCode.service';

@Controller('auth/google/validate-code')
export class ValidateGoogleCodeController {
  constructor(private validateGoogleCodeService: ValidateGoogleCodeService) {}
  @Get()
  async validateGoogleCode(
    @Query('code') code: string,
  ): Promise<ValidateGoogleCodeResponseDTO> {
    return this.validateGoogleCodeService.execute(code);
  }
}
