import { Injectable } from '@nestjs/common';

import { GoogleConnector } from '@shared/connectors';
import { ValidateGoogleCodeResponseDTO } from '@shared/dtos/auth';

@Injectable()
export class ValidateGoogleCodeService {
  constructor(private googleConnector: GoogleConnector) {}
  async execute(code: string): Promise<ValidateGoogleCodeResponseDTO> {
    return this.googleConnector.validateAuthCode(code);
  }
}
