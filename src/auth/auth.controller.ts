import { Controller, Post, Body, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy
  ) {}

  @Post('login')
  async login(@Body body) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);

    if (user) {
      
    }
  }
}
