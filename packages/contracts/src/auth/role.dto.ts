import { IsString, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class RoleDto {
  id: string;
  name: string;
  description: string | null;
  permissions: string[];
}

/**
 * Built-in roles for the DDE platform.
 * These are seeded at startup.
 */
export enum BuiltInRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  // CBU Trade Marketing
  CBU_TRADE_MARKETING = 'CBU_TRADE_MARKETING',
  // VB (Vodacom Business) Trade Marketing
  VB_TRADE_MARKETING = 'VB_TRADE_MARKETING',
  // Terminals team — uploads trade list + OEM negotiations
  TERMINALS = 'TERMINALS',
  // Deal approvers (levels 1-3)
  APPROVER_L1 = 'APPROVER_L1',
  APPROVER_L2 = 'APPROVER_L2',
  APPROVER_L3 = 'APPROVER_L3',
  // Executive approvers
  EXECUTIVE_APPROVER = 'EXECUTIVE_APPROVER',
  // Read-only viewer
  VIEWER = 'VIEWER',
}
