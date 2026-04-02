/** All possible states a deal cycle can be in. */
export enum CycleStatus {
  DRAFT = 'DRAFT',
  STARTED = 'STARTED',
  TRADELIST_UPLOADED = 'TRADELIST_UPLOADED',
  OEM_NEGOTIATION = 'OEM_NEGOTIATION',
  CONFIG_APPROVAL = 'CONFIG_APPROVAL',
  HEADLINES_IN_PROGRESS = 'HEADLINES_IN_PROGRESS',
  HEADLINES_APPROVED = 'HEADLINES_APPROVED',
  CHANNELS_IN_PROGRESS = 'CHANNELS_IN_PROGRESS',
  EXECUTIVE_APPROVAL = 'EXECUTIVE_APPROVAL',
  LOADED = 'LOADED',
  CLOSED = 'CLOSED',
  FAILED = 'FAILED',
}

/** Which business unit a cycle belongs to */
export enum BusinessUnit {
  CBU = 'CBU',
  VBU = 'VBU',
}

/** Valid state transitions (FSM). Enforced by cycle-service. */
export const CYCLE_STATUS_TRANSITIONS: Record<CycleStatus, CycleStatus[]> = {
  [CycleStatus.DRAFT]: [CycleStatus.STARTED],
  [CycleStatus.STARTED]: [CycleStatus.TRADELIST_UPLOADED, CycleStatus.FAILED],
  [CycleStatus.TRADELIST_UPLOADED]: [CycleStatus.OEM_NEGOTIATION, CycleStatus.FAILED],
  [CycleStatus.OEM_NEGOTIATION]: [CycleStatus.CONFIG_APPROVAL, CycleStatus.FAILED],
  [CycleStatus.CONFIG_APPROVAL]: [CycleStatus.HEADLINES_IN_PROGRESS, CycleStatus.FAILED],
  [CycleStatus.HEADLINES_IN_PROGRESS]: [CycleStatus.HEADLINES_APPROVED, CycleStatus.FAILED],
  [CycleStatus.HEADLINES_APPROVED]: [CycleStatus.CHANNELS_IN_PROGRESS, CycleStatus.FAILED],
  [CycleStatus.CHANNELS_IN_PROGRESS]: [CycleStatus.EXECUTIVE_APPROVAL, CycleStatus.FAILED],
  [CycleStatus.EXECUTIVE_APPROVAL]: [CycleStatus.LOADED, CycleStatus.FAILED],
  [CycleStatus.LOADED]: [CycleStatus.CLOSED],
  [CycleStatus.CLOSED]: [],
  [CycleStatus.FAILED]: [CycleStatus.DRAFT], // can reset a failed cycle
};
