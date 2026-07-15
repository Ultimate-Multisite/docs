---
title: Integrasyon sa Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Pagsamkon sa Hestia Control Panel

Kini nga giya nagpatin-aw unsaon pag-configure sa Ultimate Multisite Hestia integration aron awtomatikong madugang (ug ma-alis) ang mga domain nga gipamapa sa imong network isip Web Domain Aliases sa Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Unsa Niini Ang Buhaton {#what-it-does}
- Kung ang usa ka domain gipamapa sa Ultimate Multisite, ang integration magtawag sa Hestia API aron magpadagan ni:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kung ang pagpama sa domain mapping gipahimo, kini magpadagan ni:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Optional nga magdugang/mag-alis sa alias nga `www.` depende sa imong setting sa “Auto-create www subdomain” sa Domain Mapping settings.

## Mga Kinahanglanon (Prerequisites) {#prerequisites}
- Naa na'y Hestia Web Domain nga nagtudlo na sa imong WordPress installation. Ang integration magdugang og mga aliases niini nga base domain.
- Aktibo ang Hestia API access. Mahimo kang mag-authenticate gamit ang password o usa ka API hash/token.

Tan-awa ang Hestia’s REST API docs para sa pag-enable sa API access ug mga detalye sa authentication:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasyon (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Hatagi og mosunod nga mga value:

- `WU_HESTIA_API_URL` (kinahanglan)
  - Ang base API endpoint, kasagaran mao ang `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kinahanglan)
  - Hestia user nga gigamit para sa mga API commands (kasagaran `admin`).
- `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` (usa labingon)
  - Pilia ang usa ka pamaagi sa pag-authenticate: password o API hash/token.
- `WU_HESTIA_ACCOUNT` (kinahanglan)
  - Ang account (owner) sa Web Domain sa Hestia; kini mao ang unang argumento sa CLI.
- `WU_HESTIA_WEB_DOMAIN` (kinahanglan)
  - Ang kasamtangang Hestia Web Domain nga nag-serve sa imong WordPress (ang mga alias iapil dinhi).
- `WU_HESTIA_RESTART` (opsyonal; default `yes`)
  - Kung gusto ba nga i-restart/i-reload ang mga serbisyo human sa pag-change sa aliases.

Mahimo nimong ipasok kining mga constant sa `wp-config.php`, o mahimong mag-define kini manually.

## Pag-verify sa Setup {#verifying-setup}
- Sa wizard "Testing" step, ang plugin magtawag og `v-list-web-domains <WU_HESTIA_ACCOUNT> json` pinaagi sa API. Ang success response nagpamatuod sa koneksyon ug authentication.
- Human ma-mapa (mapping) ang usa ka domain, i-check sa Hestia: Web > ang base nga domain > Aliases. Makita nimo ang bag-ong alias nga gidugang.

## Mga Nota & Tips {#notes--tips}
- Siguraduhon nga ang `WU_HESTIA_WEB_DOMAIN` kay anaa na ug gihigugma ni sa `WU_HESTIA_ACCOUNT`.
- Kung kinahanglan ang SSL, pangasiwaan ang mga certificate sa Hestia. Karon, kini nag-handle lang sa aliases.
- Ang plugin mahimong magdaghang/magtangtang og `www.<domain>` depende sa imong setting sa Domain Mapping "www subdomain".

## Example API Call (cURL) {#example-api-call-curl}
Kini usa ka konsepto nga pananglitan (adjust kini sa imong environment). Magrefer sa official doc para sa eksaktong mga parameters.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (o &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias para idugdan)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Para sa pagtanggal, gamita ang `cmd=v-delete-web-domain-alias` ug parehas nga mga argumento.

## Troubleshooting {#troubleshooting}
- HTTP error gikan sa API: siguruha nga maabot (reachable) ang `WU_HESTIA_API_URL` ug apil kini og `/api`.
- Mga sayop sa Auth: kumpirmahon ang `WU_HESTIA_API_USER` ug bisan unsa kung `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH`.
- “Missing account/base domain” sa logs: siguruha nga ang `WU_HESTIA_ACCOUNT` ug `WU_HESTIA_WEB_DOMAIN` gi-set ug valid sa Hestia.

## References {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
