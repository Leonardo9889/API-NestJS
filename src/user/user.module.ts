import { Module } from '@nestjs/common';
import { isUniqueNameConstraint } from './id-username-unique.validator';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, isUniqueNameConstraint],
})
export class UserModule {}
