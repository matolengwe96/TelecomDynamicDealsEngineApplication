export class ChannelDto {
  id: number;
  name: string;
  code: string;
  isActive: boolean;
}

/**
 * Channel IDs used throughout the system.
 * Channel 0 = Generic (proto-headlines only)
 */
export enum ChannelId {
  GENERIC = 0,
  DIRECT = 1,
  DEALERS_AND_FRANCHISE = 2,
  NATIONAL_CHAINS = 3,
  ONLINE = 4,
  ONYX = 5,
}

export class SubChannelDto {
  id: string;
  channelId: number;
  name: string;
  code: string;
  isActive: boolean;
}
