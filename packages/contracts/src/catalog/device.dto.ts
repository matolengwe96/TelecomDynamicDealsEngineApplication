export class DeviceDto {
  id: string;
  cid: number;
  mainCid: number;
  oem: string;
  description: string;
  modelName: string;
  colour: string | null;
  category: string | null;
  objectType: string | null;
  tradeEx: number | null;
  retailRrpInclVat: number | null;
  os: string | null;
  netTech: string | null;
  isActive: boolean;
  createdAt: Date;
}

export class DeviceBasketDto {
  id: string;
  primaryCid: number;
  secondaryCid: number | null;
  basketHash: string;
  createdAt: Date;
}
