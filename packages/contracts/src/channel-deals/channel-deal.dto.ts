import { DealStatus, DealSubType } from '../headlines/proto-headline.dto';

export class ChannelDealDto {
  id: string;
  cycleId: string;
  headlineId: string;
  channelId: number;
  dealStatus: DealStatus;
  dealSubType: DealSubType;
  dealPrice: number;
  subscription: number;
  ctd: number;
  ctc: number;
  efficiency: number;
  approvalLevelRequired: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
