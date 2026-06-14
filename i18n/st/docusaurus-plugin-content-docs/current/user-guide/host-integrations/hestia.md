---
title: Ho lapa la ho lula le Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hoho Control Panel Integration

O le tsela lona o le fa'amalosia o Ultimate Multisite Hestia, e fesoasoani atu i le fa'amaonia o domain-o-mapa i lona network e automatically fa'aalia (and remove) mo Web Domain Aliases i Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## O le Fa'aopoopo
- O lea ua e fa'amaonia ai domain i Ultimate Multisite, o le integration e fa'amalosia Hestia API mo fa'amalosia:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ua e fa'aalia ai domain mapping, o lea ua e fa'amalosia:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- O le fa'amaonia/fa'aalia o alias `www.` i lona fa'aopoopo, e tatau i le "Auto-create www subdomain" setting i Domain Mapping settings.

## Fa'amalosia (Wizard → Integrations → Hestia)
Fa'amalosia mea e tatau:

- `WU_HESTIA_API_URL` (ho hlomela) (ho hlomela)
  - Le base API endpoint, e le fa fano `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (ho hlomela) (ho hlomela)
  - Hestia user o ya go ba API commands (o ka ho ba `admin`).
- `WU_HESTIA_API_PASSWORD` kapa `WU_HESTIA_API_HASH` (ho le fa fano)
  - Choose e fono ea authentication: password kapa API hash/token.
- `WU_HESTIA_ACCOUNT` (ho hlomela) (ho hlomela)
  - Le account (owner) o Web Domain ka Hestia; ke tsela ya tsoalo ea CLI.
- `WU_HESTIA_WEB_DOMAIN` (ho hlomela) (ho hlomela)
  - Le Web Domain e fapaneng ea Hestia e tsoalo ea WordPress ea hau (aliases li tla fana ka ho fana ka le."

O ka u le ka ba le fa constants eo ka `wp-config.php`, kapa u le ka ba le fa ka ho ba le fa.

## Ho lula Setup
- Ka morao oa wizard “Testing”, e plugin ea fana ka `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ka API. Response ea ho ba le bohlokoa e fana ka ho ba le leboha le authentication.
- Ha u feta domain, tseba ka Hestia: Web > le base domain > Aliases. O tla bona alias e ntlha e fetileng.

## Litsoalo & Lehetseng (Notes & Tips)
- Le fa `WU_HESTIA_WEB_DOMAIN` e fapaneng e le e tsoalo ea `WU_HESTIA_ACCOUNT`.
- Ha SSL e hloka, leba certificates ka Hestia. Ho ba le ho ba lehle le integration e fana ka aliases fela.
- E possible e plugin e le e ntse e fetola/e le e tsamaea `www.<domain>` ka lebaka la setso sa Domain Mapping “www subdomain” ea hau.

## Litsoalo ea API (cURL)
Ka morao o tla ba le fa fano (adjust ho hauetso). Leba litsoalo tsa bona tse fapaneng.

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

Ho delete, u sebelisa `cmd=v-delete-web-domain-alias` le same args.

## Goalo bo Thaba (Troubleshooting)
- HTTP error ho API: re le `WU_HESTIA_API_URL` e le ba leba le e hlompha hore e na `/api`.
- Errors ea Auth: re le `WU_HESTIA_API_USER` le e le `WU_HESTIA_API_PASSWORD` kapa `WU_HESTIA_API_HASH`.
- “Missing account/base domain” sa logs: re le hore `WU_HESTIA_ACCOUNT` le `WU_HESTIA_WEB_DOMAIN` ba set le ba bonah ka Hestia.

## Ho Litso (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
