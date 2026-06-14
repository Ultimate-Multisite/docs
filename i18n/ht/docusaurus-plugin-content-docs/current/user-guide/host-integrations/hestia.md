---
title: Entegrasyon Panèl Kontwòl Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Entegrasyon Panel de Contrôle Hestia

Sa gidans sa tèks sa a, nou pral eksplike kijan pou configure entegrasyon Ultimate Multisite Hestia pou domèn ki mapé nan rezo ou yo otomatikman ajoute (e retire) kòm Alias Domèn Web nan Hestia.

- Referans CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokiman API ofisyèl REST: https://hestiacp.com/docs/server-administration/rest-api.html

## Sa Li Fè
- Lè yon domèn mapé nan Ultimate Multisite, entegrasyon an ap rele API Hestia pou eksekite sa a:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Lè yon mapaj domèn retire, li ap eksekite sa a:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Li ajoute/retire opsyonèl alias `www.` selon fonksyon "Auto-create www subdomain" ou genyen nan rann mapaj Domèn (Domain Mapping settings).

## Pré-requis

- Yon Web Domain Hestia ki egziste deja ap pointe nan enstalasyon WordPress ou a. Entegrasyon an ap atache alias yo nan domèn baz sa a.
- Akses API Hestia aktif. Ou ka autentike itilize yon mòn (password) oswa yon hash/token API.

Gade dokiman REST API Hestia pou aktive aksè API ak detay autentifikasyon:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigirasyon (Wizard → Integrations → Hestia)
Bay valè sa yo:

- `WU_HESTIA_API_URL` (obligatwa)
  - Liwè endpoint API de baz, ki souvan se `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obligatwa)
  - Itilizasyon Hestia user pou komand API (souvan se `admin`).
- `WU_HESTIA_API_PASSWORD` oswa `WU_HESTIA_API_HASH` (pa reyalman youn)
  - Chwazi yon metòd autentifikasyon: pwòp ou oswa API hash/token.
- `WU_HESTIA_ACCOUNT` (obligatwa)
  - Kont ak (propriyete) Web Domain nan Hestia; sa se premye argiman pou CLI la.
- `WU_HESTIA_WEB_DOMAIN` (obligatwa)
  - Web Domain Hestia ki egziste k ap sèvi WordPress ou a (alias yo pral mete la).
- `WU_HESTIA_RESTART` (opisyonal; valè defo `yes`)
  - Èske w vle reprime/reload sèvis apre chanjman alias.

Ou ka kite wizard la mete konstante sa yo nan `wp-config.php`, oswa defini yo menmman.

## Verifikasyon Setup
- Nan etap "Testing" nan wizard la, plugin an ap rele `v-list-web-domains <WU_HESTIA_ACCOUNT> json` atravè API a. Yon repons siksè konfime koneksyon ak autentifikasyon an.
- Apre ou map yon domain, kontwole nan Hestia: Web > domain baz la > Aliases. Ou dwe wè nouvo alias la ajoute.

## Nòt & Tip
- Asire w ke `WU_HESTIA_WEB_DOMAIN` deja egziste epi li pwofye pa `WU_HESTIA_ACCOUNT`.
- Si SSL nesesè, jere sertifikasyon yo nan Hestia. Entegrasyon sa a kounye a sèlman jere alias yo.
- Plugin an ka ajoute/retire `www.<domain>` selon fonksyon "www subdomain" ou a Domain Mapping la.

## Egzanp API Call (cURL)
Anba se yon egzanp konseptyèl (ajiste pou anviwònman ou). Refè dokiman ofisyèl la pou paramèt eksak yo.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (oswa &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias pou ajoute)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Pou delete, itilize `cmd=v-delete-web-domain-alias` e menm argman yo.

## Rezolisasyon pwoblèm (Troubleshooting)
- Erè HTTP soti nan API a: verify ke `WU_HESTIA_API_URL` rive epi li gen `/api`.
- Erè otantifikasyon (Auth errors): konfime `WU_HESTIA_API_USER` ak menm tan `WU_HESTIA_API_PASSWORD` oswa `WU_HESTIA_API_HASH`.
- “Missing account/base domain” nan logs: asire ke `WU_HESTIA_ACCOUNT` ak `WU_HESTIA_WEB_DOMAIN` yo mete epi valide nan Hestia.

## Referans (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Ref Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
