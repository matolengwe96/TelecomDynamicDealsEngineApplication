import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}

export class LoginResponseDto {
  accessToken!: string;
  refreshToken!: string;
  expiresIn!: number;
  user!: UserSummaryDto;
}

export class RefreshTokenDto {
  @IsString()
  refreshToken!: string;
}

export class UserSummaryDto {
  id!: string;
  email!: string;
  firstName!: string | null;
  lastName!: string | null;
  roles!: string[];
}
