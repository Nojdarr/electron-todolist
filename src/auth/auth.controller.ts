import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('singup')
  singup() {
    return 'I am signed up';
  }

  @Post('singup')
  singin() {
    return 'I am signed in';
  }
}
