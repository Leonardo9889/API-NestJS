import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUniqueName } from './id-username-unique.validator';

export class User {
  id: number;

  @IsUniqueName({
    message: 'Username need to be unique',
  })
  @IsNotEmpty({
    message: 'userName is required',
  })
  @IsString()
  userName: string;

  @IsNotEmpty({
    message: 'completeName is required',
  })
  @IsString()
  completeName: string;

  @IsEmail({}, { message: 'email is required' })
  @IsString()
  email: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsString()
  password: string;

  createdAt: Date;
}
