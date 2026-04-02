/** Tariff type: D = Data, V = Voice */
export type TariffType = 'D' | 'V';
/** Tariff sub-type: MBB = Mobile Broadband, FWA = Fixed Wireless Access */
export type TariffSubType = 'MBB' | 'FWA' | null;

export class TariffDto {
  id: string;
  tariffCode: string;
  tariffName: string;
  tariffType: TariffType;
  tariffSubType: TariffSubType;
  subscription: number;
  discount: number;
  ccsId: number;
  ranking: number | null;
  isActive: boolean;
  createdAt: Date;
}

export class TariffRangeDto {
  id: string;
  tariffType: TariffType;
  termMonths: number;
  minCostEx: number;
  maxCostEx: number | null;
  tariffCode: string;
}

export class TariffBasketDto {
  id: string;
  primaryTariffCode: string;
  basketHash: string;
}
