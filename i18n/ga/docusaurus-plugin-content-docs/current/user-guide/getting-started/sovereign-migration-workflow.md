---
title: Fluach na gCruthú Sovereigne |
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow Míseartú Sovereing

Ultimate Multisite: Multi-Tenancy 1.2.0 añade gorteacha de archeálach (verification gates) do mísseartú mar chuidte standard go dtíne infrastructure sovereign tenant.

## Beo leat a thaispeá {#before-you-start}

Cén fáth a bhfuil tú ag cur isteach:

- Un archeálach (backup) curtha ar fáil de chuid site spruach.
- An addon Multi-Tenancy ag teacht ar fáil.
- An database tenant, root filesystem agus domain an t-aonach (destination) ag bheith réidh.
- An binding host database a bhaineann le an ardán (environment) an t-aonach.
- A ghrá (access) chun WP-CLI commands a chur ar fáil do netwerg.

## Workflow curtha ar fáil {#recommended-workflow}

1. Déan ar fáil an database tenant agus an filesystem.
2. Rinnseáil nó athrú ar chuidais aislaidh (isolation settings).
3. Cur le chéile an mísseartú tenant.
4. Déan ar fáil nó archeálach do chuiditeoirí (users) an tenant.
5. Déan ar fáil (drain) na jobs async migration.
6. Cur le chéile archeálach mísseartú sovereign.
7. Fáil ar an tenant le SSO.
8. Athrú DNS nó routing tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach
