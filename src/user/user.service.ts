import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: Array<User> = [
    {
      id: 1,
      completeName: 'Leonardo Almeida',
      userName: 'leo',
      email: 'leonardo.teste@gmail.com',
      password: '12345',
      createdAt: new Date(),
    },
  ];

  public findUser(user: string): User {
    return this.users.find((users) => users.userName === user);
  }

  public create(user: User): User {
    this.users.push(user);

    return user;
  }
}
