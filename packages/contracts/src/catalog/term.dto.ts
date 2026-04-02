export class TermDto {
  id: string;
  months: number;
  isActive: boolean;
  createdAt: Date;
}

/** Standard contract terms offered. */
export enum ContractTerm {
  TWELVE = 12,
  TWENTY_FOUR = 24,
  THIRTY_SIX = 36,
  FORTY_EIGHT = 48,
}
