import { Injectable } from '@nestjs/common';

import { GoogleConnector } from '@shared/connectors';

@Injectable()
export class LoginWithGoogleService {
  constructor(private googleConnector: GoogleConnector) {}
  async execute(): Promise<string> {
    return this.googleConnector.getAuthorizationURL();
  }
}
