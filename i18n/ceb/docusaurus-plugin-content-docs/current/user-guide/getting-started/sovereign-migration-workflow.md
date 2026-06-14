---
title: Workflow sa Sovereign Migration
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 naghat og migration verification gates para sa pagmoetor sa usa ka standard subsite ngadto sa sovereign tenant infrastructure.

## Sa dili ka magsugod

Siguraduhon nga naa kay:

- Usa ka kasamtang backup sa source site.
- Aktibo ang Multi-Tenancy addon.
- Andam na ang destination tenant database, filesystem root, ug domain.
- Database host binding nga nag-match sa destination environment.
- Access para magpatakbo og WP-CLI commands para sa network.

## Rekomendadong workflow

1. Ihanda ang destination tenant database ug filesystem.
2. I-register o i-update ang tenant isolation settings.
3. Patakbo ang tenant migration.
4. I-provision o i-verify ang mga user sa tenant.
5. I-drain ang async migration jobs.
6. Patakbo ang sovereign migration verification.
7. Bisitaha ang tenant gamit ang SSO.
8. I-switch ang DNS o routing human nga na-pass ang verification.

## Verification gates

Ang workflow sa verification nag-check sa migration gikan sa pipila ka anggulo:

- Ang schema sa tenant anaa ug mahimong isulat sa database writer sa tenant.
- Ang configured database host adunay valid grants.
- Ang mga user sa tenant anaa ug nag-match sa gipaabot nga gidaghanon sa expected sovereign install user.
- Ang async push queue makapahurot (drain) sa maayo.
- Ang legacy network-side data paths dili na kinahanglan para sa sovereign tenant.

Tratuhon ang mga verification failures isip pre-launch blockers. Ayusin ang gi-report nga database, user, queue, o routing issue, unya patakbo pag-usab ang verification sa dili pa ipakita ang tenant sa mga customer.

## Unang production visit

Human na ma-pass ang verification, gamita ang **Visit (SSO)** gikan sa site management screen para sa unang admin visit. Kini nagpamatuod sa tenant routing, SSO token handling, origin pinning, ug tenant-side user provisioning sa usa ka kontrolado nga lakang.
