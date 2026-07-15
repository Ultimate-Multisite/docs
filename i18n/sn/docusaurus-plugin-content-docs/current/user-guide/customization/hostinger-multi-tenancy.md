---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 inafanira fana fana multi-tenancy ya Hostinger, zvichidzidzera kuti domain dzakareva dzinogona kuenda mberi nekubatsirwa kwetenant sovereign pamwe nekuita integration yedu yakareya yeHostinger domain-mapping.

Garauna nguva iyi kana munenge uchigona kuita iye kana tenant domains uye infrastructure inotevera zvinhu, pane kuti ndiri munhu anogona kukuita iye nekubatsirwa kweHostinger hPanel.

## Setup notes {#setup-notes}

1. Ramba iintegration ya core Hostinger under **Ultimate Multisite > Settings > Host Integrations**.
2. Ramba uone kuti Hostinger API token inogona kuita zvinhu nemudzi kana subdomain wako.
3. Onge addon ya Multi-Tenancy.
4. Ramba istrategy ya isolation ya tenant yakasiya panguva unopuburisa tenant.
5. Ramba workflow ya migration verification yakasiya panguva unopasa traffic yakanaka kune tenant yako.

Nguva iyi, Hostinger inoratidza connection yenyu yakashandana (shared) yekuti zvinhu zvinotevera pane kuti zvinhu zvehost inogona kuenda mberi. DNS inofanira kuenda kune akaunti ya Hostinger yakareya, uye limits dzakaakaunti ya hPanel dzinogona kuita.

## Capability-specific changes {#capability-specific-changes}

- Sovereign tenants inogona kuva nekuita operations dzine host awareness.
- Strings dzemudzi wenyu wehost (same-machine database host strings) dziri kuitwa kuti zvinogone kutenderwa panguva yakasiya verification.
- Tenants dzinotevera nemanzo ya Hostinger dzinofanira kuita database host value inoratidzorwa mu hPanel, kana WordPress runtime inoda kuramba inenge inoshandisa override ya local.
- SSO visits dzine ruzivo rvinogona kuenda kune tenant wako wa Hostinger.

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- Kana install ya tenant isingazivikanzi, ramba uone kuti domain yakareya akaunti ya Hostinger.
- Kana verification ya database isingazivikanzi, ramba uone username yenyu yeDB, dzina ya DB, uye host binding kuita comparison ne hPanel.
- Kana **Visit (SSO)** isingazivikanzi, ramba uone kuti DNS uye SSL zvinogona kuenda kune domain yako ya tenant.
- Kana teardown inenge inosanganisa resources dzemhost, ramba usanganisa databases, users, kana folders dzakareva mu hPanel panguva unopindura backups.
