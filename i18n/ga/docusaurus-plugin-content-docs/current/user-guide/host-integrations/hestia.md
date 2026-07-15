---
title: Cothromadh na Panel Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Intégráid na Control Panel Hestia

Linn é seo ainsíonn an cur chuimne seo conairt an intégráid Ultimate Multisite Hestia chun domáin a bh'fhéidir (mapped domains) i ar chuid deamach agat ag cur isteach i gceoladh (and removed) mar Aliases Web Domain i Hestia.

- Réferns CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Doc API Oifig: https://hestiacp.com/docs/server-administration/rest-api.html

## Cad a Bhíonn an t-aithreach {#what-it-does}

- Domán Web Hestia atá ag cur isteach i Ultimate Multisite, leann an intégráid ar an API Hestia chun na sonraí seo a dhéanamh:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Nuair a bhíonn cur isteach domáin ag cur isteach, thartar an lán seo:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ag cur isteach/a chuid domáin `www.` ar bhealach a bhíonn agat i "Auto-create www subdomain" (Auto-curt an subdomán www) i cur chuimne Domán Mapping.

## Príobháidí {#prerequisites}

- An t-aithreach Web Hestia atá ag cur isteach ag cur isteach i do WordPress installation. Beidh an intégráid ag cur alias ar an domán bunaithe seo.
- Fáilte ar API Hestia leat. Is féidir leat a chuidú go léir ag úsáid phríomhpháirt (password) nó hash/token API.

Leat a fheiceáil doc API Oifig Hestia chun fáilte ar cur API access agus sonraí chuidú:
https://hestiacp.com/docs/server-administration/rest-api.html

## Conairt (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Céad an t-aithreach seo na sonraí a thug tú:

- `WU_HESTIA_API_URL` (ríg)
  - An tairgead API endpoint, tí ar fáil, mar `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (ríg)
  - An user Hestia a bhuseann chun rathacha API a dhéanamh (is é seo go bhfuil sé tar éifeachtach, mar `admin`).
- `WU_HESTIA_API_PASSWORD` nó `WU_HESTIA_API_HASH` (agach ag cur áit ag duine)
  - Déan chun aon chuid de athbhreithniú: password nó API hash/token.
- `WU_HESTIA_ACCOUNT` (ríg)
  - An account (eolaí) an Web Domain i Hestia; is é seo an ar an-am astir seo le CLI.
- `WU_HESTIA_WEB_DOMAIN` (ríg)
  - An Web Domain atá ag obair i Hestia a bhíonn WordPress agat (beidh aliasa ag cur áit anseo).
- `WU_HESTIA_RESTART` (agach ag duine; default `yes`)
  - An t-am chun seirbhísí a athdhú/athbhreithniú tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éife

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

Para deltas, usa `cmd=v-delete-web-domain-alias` agus an amachas na meán.

## Treoicíocht (Troubleshooting) {#verifying-setup}
- Éiríse HTTP ó API: déan cinnte go bhfuil `WU_HESTIA_API_URL` ar fáil agus go bhfuil `/api` iad ar fáil.
- Éirisi Auth: déan cinnte go bhfuil `WU_HESTIA_API_USER` agus an t-amach (either `WU_HESTIA_API_PASSWORD` nó `WU_HESTIA_API_HASH`).
- “Missing account/base domain” ag cur isteach i log: déan cinnte go bhfuil `WU_HESTIA_ACCOUNT` agus `WU_HESTIA_WEB_DOMAIN` ar fáil agus go bhfuil siad ceart i Hestia.

## Ciontaí (References) {#notes--tips}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Ciontacht Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
