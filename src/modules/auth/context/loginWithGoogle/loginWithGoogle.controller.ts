import { Controller, Get } from '@nestjs/common';

import { LoginWithGoogleService } from './loginWithGoogle.service';

@Controller('auth/google')
export class LoginWithGoogleController {
  constructor(private loginWithGoogleService: LoginWithGoogleService) {}
  @Get()
  async getGoogleAuthUrl(): Promise<string> {
    return this.loginWithGoogleService.execute();
  }
}
