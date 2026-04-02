#!/usr/bin/env bash
# ----------------------------------------------------------------------------
# PostgreSQL initialisation script.
# Creates one isolated database per DDE microservice.
# Runs automatically when the postgres container is first started.
# Mount this file to /docker-entrypoint-initdb.d/init-databases.sh
# ----------------------------------------------------------------------------
set -e

DATABASES=(
  dde_auth
  dde_cycle
  dde_catalog
  dde_tradelist
  dde_oem
  dde_headline
  dde_approval
  dde_channel_deals
  dde_job
  dde_notification
  dde_audit
)

for DB in "${DATABASES[@]}"; do
  echo "[init] Creating database: ${DB}"
  psql -v ON_ERROR_STOP=1 --username "${POSTGRES_USER}" --dbname "postgres" <<-EOSQL
    SELECT 'CREATE DATABASE "${DB}"'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${DB}')
    \gexec
    GRANT ALL PRIVILEGES ON DATABASE "${DB}" TO "${POSTGRES_USER}";
EOSQL
done

echo "[init] All per-service databases created."
