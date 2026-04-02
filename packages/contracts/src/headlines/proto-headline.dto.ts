/**
 * Deal status codes.
 * Numeric codes align with the existing DDE production system conventions.
 */
export enum DealStatus {
  DRAFT = 10,
  SUBMITTED = 15,
  APPROVED = 25,
  REJECTED = 30,
  PUBLISHED = 40,
  LOADED = 50,
  ARCHIVED = 99,
}

/** Sub-type of deal based on price vs subscription comparison */
export enum DealSubType {
  FINANCED = 'financed',         // deal price > subscription
  REDUCED_SUB = 'reduced_sub',   // deal price < subscription
  FREE = 'free',                 // deal price = subscription
}

export class ProtoHeadlineDto {
  id: string;
  cycleId: string;
  deviceBasketId: string;
  tariffBasketId: string;
  cid: number;
  mainCid: number;
  channelId: number;
  termMonths: number;
  tariffType: string;
  tariffCode: string;
  dealPrice: number;
  subscription: number;
  ctd: number;
  cib: number;
  ctc: number;
  efficiency: number;
  approvalLevelRequired: number;
  dealSubType: DealSubType;
  dealStatus: DealStatus;
  createdAt: Date;
  updatedAt: Date;
}
