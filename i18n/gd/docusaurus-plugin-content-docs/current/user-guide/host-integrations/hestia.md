---
title: Còmhlaidais Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Intighneachadh le Control Panel Hestia {#hestia-control-panel-integration}

An tòiseachadh seo a sgriasgadh ri faic a bhith a' chlàradh an Ultimate Multisite Hestia, gu sònraichte, gu robh domain sinneachd (mapped domains) anns a ghràdh agad a tha a' chlàradh, a bheil iad a' tòiseachadh air a bhith a' bheachdaidhean Web Domain Aliases mar Web Domain Aliases.

- Referens CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Doc REST API fhaisg: https://hestiacp.com/docs/server-administration/rest-api.html

## Tha iad a' tòiseachadh air? {#what-it-does}
- Nuair a tha domain sinneachd a chlàradhdaidheadh (mapped) anns an Ultimate Multisite, a tha an intighneachadh a' chlàradh API Hestia airson:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Nuair a thar a bhreach domain sinneachd a thar, tha e a' chlàradh:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Tha e a' chlàradh/a' tòiseachadh air an alias `www.` a' chlàradh/a' tòiseachadh air a' chlàradh "Auto-create www subdomain" anns a ghràdh Domain Mapping.

## Prisgairtean {#prerequisites}
- Tha Web Domain Hestia aig a tha a' chlàradh agad air WordPress. Bhaidh an intighneachadh a' chlàradh aliases air an domain sinneachd buneachдайn seo.
- Tha API Hestia a' chlàradh. Is e cheannach a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh air a' chlàradh (password) no 'API hash/token'.

Fhaigh doc REST API Hestia airson a' chlàradh API agus fiosrachadh:
https://hestiacp.com/docs/server-administration/rest-api.html

## Chlàradh (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Thoir an amasan seo:

- `WU_HESTIA_API_URL` (rigil)
  - An tòst punt API base, a chan eil e cheann, riatanach `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (rigil)
  - A user Hestia aig an API commands (a' chùlchnaidh a tha thuig a' chùlchnaidh).
- `WU_HESTIA_API_PASSWORD` mar `WU_HESTIA_API_HASH` (còmhnaidh mar a' chùlchnaidh)
  - Tòl aon fadar a chruinneachadh: pàsruhe air an API mar hash/token.
- `WU_HESTIA_ACCOUNT` (rigil)
  - An contaidh (eòlasach) a' Chàrn Web a Hestia; tha seo an uair a' chùlchnaidh a' chùlchnaidh air CLI.
- `WU_HESTIA_WEB_DOMAIN` (rigil)
  - An Chàrn Web a' Chàrn Hestia a tha a' cruinneachadh thu WordPress (tha a' chùlchnaidh a' chùlchnaidh sealltainn an sin).
- `WU_HESTIA_RESTART` (còmhnaidh; default `yes`)
  - A bheil thu a' chruinneachadh/a' rianach a' chàrn air a' chùlchnaidh a' chùlchnaidh an sin.

Is e cheann thu a' chùlchnaidh a' chùlchnaidh na constantan seo a' chùlchnaidh air `wp-config.php`, mar a tha thu a' chùlchnaidh gu mheansach.

## A' Chàrnachadh an Setup {#verifying-setup}
- Mar a tha thu a' chùlchnaidh "Testing", tha an plugin a' chùlchnaidh `v-list-web-domains <WU_HESTIA_ACCOUNT> json` a' chùlchnaidh air an API. A' chùlchnaidh a' chùlchnaidh a' chruinneachadh a' chàrn, tha e a' chluich agus a' chruinneachadh.
- An dàcha a' chùlchnaidh a' chàrn, cheann air Hestia: Web > an chàrn base > Aliases. Bheir thu a' chùlchnaidh a' chùlchnaidh a' chùlchnaidh a' chruinneachadh.

## Notean & Tòisichid {#notes--tips}
- Sealltainn gu bheil `WU_HESTIA_WEB_DOMAIN` a' chùlchnaidh air an sin agus a' chùlchnaidh a' chùlchnaidh air `WU_HESTIA_ACCOUNT`.
- Mar a tha SSL a' chùlchnaidh, tha thu a' chruinneachadh certifigiatanan air Hestia. Tha an tòisichid seo a' chùlchnaidh a' chùlchnaidh a' chàrn gu mheansach.
- Thu a' chùlchnaidh eadar-dhearg a' chruinneachadh/a' tòl `www.<domain>` a' chùlchnaidh air an tòisichid a' chùlchnaidh "www subdomain".

## Eisimpleil API Call (cURL) {#example-api-call-curl}
Tha eisimpleil cheann (a' chùlchnaidh thu a' chruinneachadh). Bheir thu a' chùlchnaidh air an documint fìrse airson pàirtan a' chùlchnaidh.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Cumh na dealladh, usa `cmd=v-delete-web-domain-alias` agus eir chùis a beag.

## Tònaichean (Troubleshooting) {#troubleshooting}
- Erra HTTP san API: dìme si `WU_HESTIA_API_URL` a tha sònachail agus a ginn a' le `/api`.
- Earrachdan auth: dìme si `WU_HESTIA_API_USER` agus an tòiseachadh `WU_HESTIA_API_PASSWORD` (amar `WU_HESTIA_API_HASH`).
- "Missing account/base domain" san logs: dìme si `WU_HESTIA_ACCOUNT` agus `WU_HESTIA_WEB_DOMAIN` a tha set agus a thaith leidhean fìor mar Hestia.

## Còmhraidhean (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Còmhraidh Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
