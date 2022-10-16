import { Module } from '@nestjs/common';

import { GoogleConnector } from '@shared/connectors';

import { LoginWithGoogleController } from './loginWithGoogle/loginWithGoogle.controller';
import { LoginWithGoogleService } from './loginWithGoogle/loginWithGoogle.service';
import { ValidateGoogleCodeController } from './validateGoogleCode/validateGoogleCode.controller';
import { ValidateGoogleCodeService } from './validateGoogleCode/validateGoogleCode.service';

@Module({
  imports: [],
  controllers: [LoginWithGoogleController, ValidateGoogleCodeController],
  providers: [
    LoginWithGoogleService,
    ValidateGoogleCodeService,
    GoogleConnector,
  ],
})
export class AuthModule {}
