---
title: Nkwado Migratory Workflow
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow Migration Sovereign

Ultimate Multisite: Multi-Tenancy 1.2.0 nwere nkwado verification gates (verification gates) na ịnwale site ọ bụla (subsite) standard do infrastructure nke sovereign tenant.

## Ka ọ dịka ị gbanwe {#before-you-start}

Keti na ị nwere:

- Backup a site ọkachaha (source site) ahụ.
- Addon Multi-Tenancy ahụ nwere.
- Database tenant, filesystem root, na domain destination ready.
- Binding database host nke ji akụkọ (environment) destination ahụ nwere.
- Access do run WP-CLI commands fọdụ (network).

## Workflow a ọ dịka ị chọrọ {#recommended-workflow}

1. Prepare database tenant na filesystem destination.
2. Register or update settings isolation tenant.
3. Run migration tenant.
4. Provision or verify users tenant.
5. Drain jobs async migration.
6. Run verification migration sovereign.
7. Visit tenant nwere SSO.
8. Switch DNS or routing karịta verification passe.

## Verification gates {#verification-gates}

Workflow verification na-eji nchekwa migration ahụ n'ime ụfọdụ:

- Schema tenant ahụ nwere na ọ nwere ike ịkọwa (written) na database writer tenant.
- Database host nke a kete nwere grants ndị dị mma.
- Users tenant nwere na ha na-agba (match) count user install sovereign nke a bụ.
- Queue async push nwere ike iji drain ọrụ.
- Data paths network-side legacy ahụ karịta anọchịrị maka tenant sovereign.

Chere verification failures dị ka ihe na-agbanwe mburu ịlanwa (pre-launch blockers). Keti ihe a bụ database, user, queue, ma routing nke a nwere, karịta run verification ọzọ karịta ịle tenant ahụ nwere ike iji ndị biara.

## First production visit {#first-production-visit}

Ọ bụrụ na verification passe, jiri **Visit (SSO)** nwere site management screen maka first admin visit. A na-agbanwe routing tenant, token handling SSO, origin pinning, na user provisioning tenant-side n'ime akụkọ ọrụ ọzọ.
