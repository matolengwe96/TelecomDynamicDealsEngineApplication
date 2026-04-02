import { DealStatus, DealSubType } from './proto-headline.dto';

export class HeadlineDto {
  id: string;
  cycleId: string;
  protoHeadlineId: string;
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
  latestApprovedLevel: number;
  dealSubType: DealSubType;
  dealStatus: DealStatus;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class UpdateHeadlineDto {
  dealPrice?: number;
  ctd?: number;
  cib?: number;
}
