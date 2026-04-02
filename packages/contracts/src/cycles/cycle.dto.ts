import { IsString, IsEnum, IsOptional, IsDateString } from 'class-validator';
import { CycleStatus, BusinessUnit } from './cycle-status.enum';

export class CreateCycleDto {
  @IsString()
  name: string;

  @IsEnum(BusinessUnit)
  businessUnit: BusinessUnit;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateCycleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class CycleDto {
  id: string;
  name: string;
  businessUnit: BusinessUnit;
  status: CycleStatus;
  startDate: Date;
  endDate: Date;
  description: string | null;
  createdByUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CycleStatusHistoryDto {
  id: string;
  cycleId: string;
  fromStatus: CycleStatus | null;
  toStatus: CycleStatus;
  changedByUserId: string;
  reason: string | null;
  createdAt: Date;
}
