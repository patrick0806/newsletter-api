import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
import { google } from 'googleapis';

import { ValidateGoogleCodeResponseDTO } from '@shared/dtos/auth';
import { GoogleScopes } from '@shared/enums/google';
import { parseToCamelCase } from '@shared/utilss';

@Injectable()
export class GoogleConnector {
  private oAuth2Client: OAuth2Client;
  constructor() {
    this.oAuth2Client = new google.auth.OAuth2(
      process.env.OAUTH_CLIENT,
      process.env.OAUTH_SECRET,
      `${process.env.OAUTH_URL_REDIRECT}`,
    );
  }
  async getAuthorizationURL(): Promise<string> {
    return this.oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [GoogleScopes.BLOGGER, GoogleScopes.CALENDAR],
    });
  }

  async validateAuthCode(code: string): Promise<ValidateGoogleCodeResponseDTO> {
    const { tokens } = await this.oAuth2Client.getToken(code);
    this.oAuth2Client.setCredentials(tokens);
    return parseToCamelCase(tokens);
  }
}
