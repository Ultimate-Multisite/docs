---
title: Qig tau txhaum tshiab hmoov
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0-ээр нь standard subsite-a sovereign tenant infrastructure-t nuam teeb (migration) verification gates-u laikin.

## Start-laik hauv thaum {#before-you-start}

Kuv tsuj tsuj yeej:

- Source site-a backup aktuel nuam muaj.
- Multi-Tenancy addon-u aktuel nuam muaj.
- Destination tenant database, filesystem root, thiab domain ready nuam muaj.
- Database host binding-u destination environment-t hèn.
- Network-t WP-CLI commands aiv tsuj los tau.

## Recommended workflow {#recommended-workflow}

1. Prepare the destination tenant database thiab filesystem.
2. Register lossis or update the tenant isolation settings.
3. Run the tenant migration.
4. Provision lossis users lossis verify.
5. Drain async migration jobs.
6. Run sovereign migration verification.
7. Visit the tenant with SSO.
8. Switch DNS lossis routing-u verification pass los yog tsis tas li.

## Verification gates {#verification-gates}

Verification workflow-u teeb loj hmoob no hauv tab tom nrho:

- Tenant schema-u muaj thiab tenant database writer-u tsoom txhua yam yuav tsoom tau.
- Configured database host-u valid grants muaj.
- Tenant users-u muaj thiab expected sovereign install user count-t hèn.
- Async push queue-u txaus lossis muaj.
- Legacy network-side data paths-u sovereign tenant-t tsis txhob yuav tsoom li.

Verification failures-u launch-t tshiab blockers ua. Database, user, queue, lossis routing issue-u hloov, thiab verification u tsim los yog customer-t tsim los thaum tsis txhob muaj.

## First production visit {#first-production-visit}

Verification pass los yog, site management screen-t **Visit (SSO)** hauv first admin visit-t siv. Qhov no tenant routing, SSO token handling, origin pinning, thiab tenant-side user provisioning lossis tsim los thaum tsis tas li ua ib lub ntsej muaj.
