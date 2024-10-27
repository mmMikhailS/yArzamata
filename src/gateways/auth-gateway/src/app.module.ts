import { Module } from '@nestjs/common';
import { AuthGatewayService } from './authGateway.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthGatewayController } from './authGateway.controller';
import { authGatewayResponse } from './kafka/auth.response.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
    }),
  ],
  controllers: [AuthGatewayController],
  providers: [AuthGatewayService, authGatewayResponse], // authGatewayResponse
  exports: [AuthGatewayService],
})
export class AppModule {}
