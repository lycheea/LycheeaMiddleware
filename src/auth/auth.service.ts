import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  private users = [
    { email: 'test@example.com', 'password': '123'}
  ];

  async validateUser(email: string, pass: string): Promise <any> {
    const user = this.users.find((user) => user.email == email);
    if (user && (await !!(user.password == pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
