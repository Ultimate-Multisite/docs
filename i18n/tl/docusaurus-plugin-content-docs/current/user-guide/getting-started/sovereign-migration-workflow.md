---
title: Daloy ng Migrasyon ng Sovereign
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow ng Sovereign Migration

Ultimate Multisite: Multi-Tenancy 1.2.0 ay nagdaragdag ng mga verification gate para sa paglipat ng isang standard subsite patungo sa sovereign tenant infrastructure.

## Bago ka magsimula

Siguraduhin na mayroon ka nang:

- Kasalukuyang backup ng source site.
- Aktibong Multi-Tenancy addon.
- Handang destination tenant database, filesystem root, at domain.
- Database host binding na tumutugma sa destination environment.
- Access para magpatakbo ng WP-CLI commands para sa network.

## Inirerekomendang workflow

1. Ihanda ang destination tenant database at filesystem.
2. I-register o i-update ang mga setting ng tenant isolation.
3. Patakbuhin ang tenant migration.
4. Mag-provision o mag-verify ng mga user ng tenant.
5. I-drain ang async migration jobs.
6. Patakbuhin ang sovereign migration verification.
7. Bisitahin ang tenant gamit ang SSO.
8. Palitan ang DNS o routing lamang pagkatapos maaprubahan ang verification.

## Mga verification gate

Sinusuri ng verification workflow ang migration mula sa iba't ibang anggulo:

- Ang schema ng tenant ay umiiral at maaaring isulat ng database writer ng tenant.
- Ang naka-configure na database host ay may mga valid grants.
- Ang mga user ng tenant ay naroroon at tumutugma sa inaasahang bilang ng expected sovereign install user.
- Ang async push queue ay matagumpay na ma-drain.
- Hindi na kailangan ang legacy network-side data paths para sa sovereign tenant.

Ituring ang mga verification failure bilang pre-launch blockers. Ayusin ang reported database, user, queue, o routing issue, pagkatapos ay patakbuhin muli ang verification bago ibunyag ang tenant sa mga customer.

## Unang production visit

Pagkatapos maaprubahan ang verification, gamitin ang **Visit (SSO)** mula sa site management screen para sa unang admin visit. Kinukumpirma nito ang tenant routing, paghawak ng SSO token, origin pinning, at user provisioning sa panig ng tenant sa isang kontroladong hakbang.
