# Database Ownership Matrix

| Service                 | Database          | Primary Tables                                                                                                                                                   |
| ----------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth-service            | dde_auth          | users, roles, permissions, user_roles, role_permissions, sessions, user_login_history, password_reset_tokens                                                     |
| cycle-service           | dde_cycle         | enr_cycles, hsh_cycle_status_history, enr_cycle_deal_configs, enr_deal_config_tariff_baskets, enr_deal_config_device_baskets, enr_deal_config_vas, enr_campaigns |
| catalog-service         | dde_catalog       | src_devices, src_tariffs, src_vas, cfg_channels, cfg_sub_channels, cfg_terms, cfg_tariff_ranges, enr_device_baskets, enr_tariff_baskets                          |
| tradelist-service       | dde_tradelist     | src_tradelist_uploads, src_tradelist_rows, src_tradelist_validation_errors                                                                                       |
| oem-negotiation-service | dde_oem           | enr_oem_negotiations, enr_oem_negotiation_items                                                                                                                  |
| headline-service        | dde_headline      | dsh_proto_headlines, dsh_headlines                                                                                                                               |
| approval-service        | dde_approval      | dsh_approval_requests, dsh_approval_actions                                                                                                                      |
| channel-deals-service   | dde_channel_deals | dsh_channel_deals                                                                                                                                                |
| job-service             | dde_job           | enr_job_runs                                                                                                                                                     |
| notification-service    | dde_notification  | enr_notifications                                                                                                                                                |
| audit-service           | dde_audit         | hsh_audit_events                                                                                                                                                 |

## Notes

- Prefix conventions align to existing DDE documentation where applicable:
  - `src_`: source/raw ingest
  - `cfg_`: configuration
  - `enr_`: enrichment/operational
  - `dsh_`: deal/dashboard artifacts
  - `hsh_`: hash/history/audit artifacts

- Foreign keys across services are represented as scalar IDs, not relational constraints.
