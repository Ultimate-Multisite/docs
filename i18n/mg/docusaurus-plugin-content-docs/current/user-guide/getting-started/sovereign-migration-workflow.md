---
title: Fomba fiasa fifindrana Sovereignty
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Fomba Fi Mba Fifindrana (Sovereign Migration Workflow)

Ultimate Multisite: Multi-Tenancy 1.2.0 dia manome fefy fanamarinana fifindrana rehefa mandefa subsite tsotra ho ao anatin' ny fototra tenant sovereign.

## Alohan'ny fanombohanao {#before-you-start}

Ataovy azo antoka fa efa manana ireto zavatra maromaro ianao:

- Backup vaovao amin'ilay site fototra (source site).
- Ny addon Multi-Tenancy dia mialoha sy miasa tsara.
- Ny database, ny root filesystem ary ny domain an'ilay tenant tokony ho tonga.
- Fandrefesana host database izay mifanaraka amin'ny tontolo iainana (environment) tokony ho tonga.
- Fidirana mba hahafahanao manao WP-CLI commands ho an'ny tambajotra (network).

## Fomba fiasa atolotra {#recommended-workflow}

1. Miomana ny database sy ny filesystem an'ilay tenant tokony ho tonga.
2. Manamarina na manavao ny fandrindrana ny fizarana (isolation settings) an'ilay tenant.
3. Ampidiro ny fifindrana an'ilay tenant (tenant migration).
4. Apetraka na averina ny mpampiasa an'ilay tenant.
5. Esory ireo asa fifindrana tsy mivantana (async migration jobs).
6. Ampidiro ny fanamarinana fifindrana sovereign (sovereign migration verification).
7. Mandehana amin'ny tenant miaraka amin'ny SSO (Single Sign-On).
8. Ovay ny DNS na routing rehefa vita tsara ny fanamarinana.

## Fefy Fanamarinana (Verification Gates) {#verification-gates}

Ny fomba fiasa fanamarinana dia manamarina ny fifindrana avy amin'ny lafiny maromaro:

- Misy ny schéma an'ilay tenant ary azo soratana (written) amin'ny mpanoratra database an'ilay tenant.
- Ny host database voafidy dia manana zo fandraisana (grants) marina.
- Misy mpampiasa ao anatin'ilay tenant ary mifanaraka amin'ny isan'ny mpampiasa tokony ho azo avy amin'ny fanatanterahana sovereign (sovereign install user count).
- Afaka esorina tsara ny toerana fampidirana tsy mivantana (async push queue).
- Tsy mila ireo lalana data an-tserasera (network-side data paths) taloha intsony ho an'ilay tenant sovereign.

Aleo atao hoe fanapahan-kevitra (blocker) ny tsy fahampian'ny fanamarinana. Atao toy ny olana mialoha ny fanombohana. Atao toy ny manitsy ny database, mpampiasa, queue na routing izay naseho, dia averina indray ny fanamarinana alohan'ny hampidirana an'ilay tenant ho an'ny mpanjifa.

## Fidinana voalohany amin'ny fametrahana (First Production Visit) {#first-production-visit}

Rehefa vita tsara ny fanamarinana, dia ampiasao ny **Visit (SSO)** avy amin'ny efijery fitantanana (site management screen) ho an'ny fidinana admin voalohany. Izany dia manamarina ny fandaminana ny routing an'ilay tenant, ny fandraisana token SSO, ny fametrahana ny toerana (origin pinning), ary ny fanomezana mpampiasa an-tserasera ao anatin'ny dingana iray voafehy.
