import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':userName')
  public findUser(@Param('userName') userName: string) {
    const userExistis = this.userService.findUser(userName);

    if (!userExistis) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      });
    }

    return userExistis;
  }

  @Post()
  public create(@Body() user: User): NestResponse {
    const userResponse = this.userService.create(user);
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        location: `/users/${userResponse.userName}`,
      })
      .comBody(userResponse)
      .build();
  }
}
