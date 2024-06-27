import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('validate')
  async validateUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.validateUser(username, password);
    if (user) {
      return {
        code: 200,
        status: 'success',
        message: 'User validated successfully',
        data: user,
      };
    } else {
      return {
        code: 500,
        status: 'error',
        message: 'Invalid username or password',
      };
    }
  }
}
