---
title: Fhòcas Mòradh a' Chàrdainn
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow a' Chàrachadh Sovereigne {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 a sgilean gealltasan (migration verification gates) airson a' chàrachadh sgeulachda (subsite) a' chàrachadh gu strànaidh (sovereign tenant infrastructure).

## Tha thu a' chàrachadh? {#before-you-start}

Seibhe thu a' faigh:

- Sealladh a tha air a' chàrachadh a' chàrachadh.
- Addon Multi-Tenancy a tha a' seachdaich.
- Database, filesystem root, agus domain a' chàrachadh a tha ready airson an tòiseach.
- Bheagail a' chàrachadh database a tha a' tòiseachadh air an tòiseach.
- Faigh a' chàrachadh WP-CLI airson an sealladh (network).

## A' chàrachadh a tha a' seachdaich {#recommended-workflow}

1. Sealladh database agus filesystem a' chàrachadh.
2. Sealladh na stiùiriche aislaidh tenant (tenant isolation settings) a' chàrachadh air an tòiseach.
3. A' chàrachadh tenant a' chàrachadh.
4. A' chàrachadh uisgeir (users) tenant a' chàrachadh air.
5. A' chàrachadh jobs async a' chàrachadh.
6. A' chàrachadh sgilean chàrachadh sovereign a' chàrachadh.
7. A' chàrachadh an tenant le SSO a' chàrachadh.
8. Sealladh DNS no routing a' chàrachadh tar a tha a' chàrachadh a' chàrachadh.

## Sgeulachdan chàrachadh (Verification gates) {#verification-gates}

Tha sgeulachadh chàrachadh a' chàrachadh an tòiseach air sgàil:

- Tha an schema tenant aig a tha agus is eadar-dhearg a' chàrachadh database.
- Tha an host database a th' ann a' le grantan a tha fìor.
- Tha uisgeir tenant aig a tha agus tha a' tòiseachadh air an sealladh sovereign (sovereign install user count).
- Is eadar-dhearg a' chàrachadh async push queue a' chàrachadh gu sgaidh.
- Tha faighinn a' chàrachadh data paths de luchdair (legacy network-side) a tha a' chàrachadh sovereign a' chàrachadh.

Tha fhaighinn chàrachadh a' chàrachadh a' chàrachadh air a' chàrachadh a' chàrachadh. Seachdaidh an tòiseachadh air an dat, uisgeir, queue, no routing a tha a' chàrachadh, agus a' chàrachadh a' chàrachadh gu leathan air na luchdair.

## A' chàrachadh proddeant (First production visit) {#first-production-visit}

Tha an tòiseachadh air an tenant a' chàrachadh le **Visit (SSO)** a' chàrachadh a' chàrachadh a' chàrachadh a' chàrachadh a' chàrachadh. Tha seo a' chàrachadh an stiùiriche aislaidh tenant, a' chàrachadh token SSO, a' chàrachadh origin pinning, agus a' chàrachadh uisgeir tenant air a' chàrachadh gu sealladh.
