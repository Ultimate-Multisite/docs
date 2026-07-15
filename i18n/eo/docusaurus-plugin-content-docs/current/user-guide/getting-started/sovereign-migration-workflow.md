---
title: Flujo de migrado souverena
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migra Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 donas migraverifikacianportojn por pasigi standard subsite en souveren tenanto infrastrukturo.

## Pred ke vi komencu {#before-you-start}

Konfirmu, ke vi havas:

- Aktua rezervon de la suraj sita.
- La addon Multi-Tenancy aktiva.
- La bazda de la destina tenanto, la radiko de la sistem filestrano kaj la domeno estas جاهza.
- Una ligado de bazda host kiu korespondas kun la destina aĉento.
- Aliro por fari WP-CLI komandojn por la retoj.

## Rekomandita fludo {#recommended-workflow}

1. Preparu la bazdon de la destina tenanto kaj filestrano.
2. Registru aŭ aktualizu la ŝanĝon de la izolaj setoj de la tenanto.
3. Fari la migran de la tenanto.
4. Provi aŭ verifi la uzantojn de la tenanto.
5. Elvidi la asinkra migrajobon.
6. Fari la verifikacion de la souverena migro.
7. Viziti la tenanton kun SSO.
8. Migri DNS aŭ rutigadon nur post kiam verifikado pasas.

## Verifikacian portoj {#verification-gates}

La fludo de verifikado kontrolas la migron de pluraj anguloj:

- La skema de la tenanto ekzistas kaj povas esti skribita de la skriptisto de bazda de la tenanto.
- La konfigurita bazda host havas validajn donon.
- Uzantoj de la tenanto estas prezentitaj kaj korespondas kun la esperita ceno de instalaj uzantoj de souverena instanco.
- La asinkra push-kviro povas elvidi sukcese.
- La malnovaj bazda vojoj de la retoj ne estas pli necesaj por la souverena tenanto.

Tratar verifikacian malsukces kiel blokantajn obstaklojn antaŭlanciun. Fixu la donon, uzanton, kviro aŭ rutigadon raportitan, tiam fari verifikadon priankon de la tenanto al klientoj.

## Unua produkcia vizito {#first-production-visit}

Post kiam verifikado pasas, uzu **Visit (SSO)** de la skrimi de la sistem por la unuan administran viziton. Tio konfirmu rutigon de la tenanto, la maneĝo de SSO-tokenoj, la origino pinado kaj la provizio de uzantoj de la lato de la tenanto en unu kontrolita paŝo.
