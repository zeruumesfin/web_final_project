// services/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  

  async validateUser(username: string, plainPassword: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username: username } });
    if (user) {
      const passwordMatch = await this.validatePassword(plainPassword, user.password);
      if (passwordMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

    async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        return match;
    }

    
}