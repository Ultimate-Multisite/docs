---
title: Ychwanegiad y Panel Cwilio Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Ymystriedion Cwilio Hestia {#hestia-control-panel-integration}

Mae'r cyfarwyddyd hwn yn esbonio sut i sicrwy'r y cynnig Ultimate Multisite Hestia felly mae domenau a mapiad mewn rheoltain eich rheolyn yn cael eu cytriau (a cael eu tystiolaeth) fel Aliases Web Domain yn Hestia.

- Cyfeiriad CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Ddoci REST API ofisiylol: https://hestiacp.com/docs/server-administration/rest-api.html

## Beth yw'r Cynllun? {#what-it-does}
- Pan mae domenaid yn cael eu mapiad mewn Ultimate Multisite, mae'r cynnig yn cyflwyno'r API Hestia i chwarae:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Pan mae mapiad domenaid yn cael ei ffwrdd, mae'n chwarae:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Mae'n ychwanegu/ffwrdd'r alias `www.` yn ddefnyddiol yn ôl eich sethedig "Auto-create www subdomain" mewn sethedigo Mapiad Domenaid.

## Prifysgolion {#prerequisites}
- Un Hestia Web Domain sydd wedi'i gynnwys y eich installiad WordPress. Bydd y cynnig yn cytriau aliases i'r domenaid iself.
- Mae cyffredinol API Hestia wedi'i chwarae. Gallwch gyfeiriant gan ddefnyddio pwysiciar neu hash/token API.

Gweld ddefnyddio doci REST API Hestia i sicrwy'r cyffredinol API a ddefnyddio data gyfeiriant:
https://hestiacp.com/docs/server-administration/rest-api.html

## Cynllunio (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Cyflwynwch y cyflwyniadau canlynol:

- `WU_HESTIA_API_URL` (rhaid)
  - Ymdd y cyllid API, fellych yn gyffredinol, fellych `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (rhaid)
  - Defnyddio'r ben defnyddi Hestia i ddefnyddio adferion API (yn y cyflym `admin`).
- `WU_HESTIA_API_PASSWORD` neu `WU_HESTIA_API_HASH` (pob llawer)
  - Dewch yn deall un o fforddau cyfrifoldeb: ben neu hash/token API.
- `WU_HESTIA_ACCOUNT` (rhaid)
  - Y cyfrifoldeb (berffwr) y Ddwylliant Web yn Hestia; mae hyn yn argymhell cyntaf i'r CLI.
- `WU_HESTIA_WEB_DOMAIN` (rhaid)
  - Y Ddwylliant Web sydd ar gael yn Hestia sy'n gwasanaethu eich WordPress (bydd y aliasau wedi'u cynnwys yma).
- `WU_HESTIA_RESTART` (optynol; ddefnyddio `yes` fel deall)
  - A oes angen i'r gysylltiadau i restart/reload ar ôl newid aliasau.

Gallwch rhoi'r constantau hyn i `wp-config.php`, neu ddynnu nhw yn manwl.

## Cynllunio y Rheoliad {#verifying-setup}
- Yn y stad "Testing" o'r wizard, mae'r plugin yn cyflwyno `v-list-web-domains <WU_HESTIA_ACCOUNT> json` drwy'r API. Mae ateb cyfathrebu'n llwyddiannus yn cadarnhau'r cysylltiad a'r cyfrifoldeb.
- Ar ôl cyflwyno ddaill, gwch yn Hestia: Web > y ddaill gyntaf > Aliases. Doddiwch yn gweld y alias newydd wedi'i cyflwyno.

## Nodau & Cynlluniau {#notes--tips}
- Sicrhewch bod `WU_HESTIA_WEB_DOMAIN` sydd ar gael a'r cyfrifoldeb o'r `WU_HESTIA_ACCOUNT`.
- Os oes angen SSL, reolwch y certyddion yn Hestia. Mae'r cysylltiad hwn yn gwarchod aliasau yn unig ar hyn o bryd.
- Gallai'r plugin hefyd ychwanegu/talybu `www.<domain>` yn ôl y sethedd "www subdomain" o'ch Cyflwyniad Ddaill (Domain Mapping).

## Rheol API (cURL) {#example-api-call-curl}
Dyma enweth cyfathrebu (rheol i'r ddefnyddi eich gweithredol). Cynllunwch y ddogfenniad cyffredinol ar gyfer parametrau cywir.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (neu &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias i ddiladd)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Ar gyf ddelio, defnyddiwwch `cmd=v-delete-web-domain-alias` a'r unigol argau.

## Cynllunio (Troubleshooting) {#troubleshooting}
- Err HTTP o'r API: gwirioneddwch bod `WU_HESTIA_API_URL` yn cyffredinol ac yn cynnwys `/api`.
- Err authengiad (Auth errors): gwirioneddwch `WU_HESTIA_API_USER` a'r unigol `WU_HESTIA_API_PASSWORD` neu `WU_HESTIA_API_HASH`.
- “Missing account/base domain” yn y logau: sicrhewch bod `WU_HESTIA_ACCOUNT` a `WU_HESTIA_WEB_DOMAIN` wedi'u setio ac yn gywir mewn Hestia.

## Cyfeiriadau (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Cyfeiriad Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
