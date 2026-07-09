---
title: Integrasyon ng Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrasyon sa Hestia Control Panel {#hestia-control-panel-integration}

Ang gabay na ito ay nagpapaliwanag kung paano i-configure ang Ultimate Multisite Hestia integration para awtomatikong idagdag (at tanggalin) ang mga domain na naka-map sa iyong network bilang Web Domain Aliases sa Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Ano ang Ginagawa Nito {#what-it-does}
- Kapag may domain na naka-map sa Ultimate Multisite, tatawagin ng integration ang Hestia API para patakbuhin ang:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kapag tinanggal ang pag-map ng domain, tatakbo ito ng:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opsyonal na nagdaragdag/nagtatanggal ng alias na `www.` depende sa iyong setting na “Auto-create www subdomain” sa Domain Mapping settings.

## Mga Kinakailangan (Prerequisites) {#prerequisites}
- Isang umiiral na Hestia Web Domain na tumuturo na sa iyong WordPress installation. Ang integration ay maglalagay ng mga alias sa base domain na ito.
- Aktibong Hestia API access. Maaari kang mag-authenticate gamit ang password o isang API hash/token.

Tingnan ang Hestia’s REST API docs para sa pag-enable ng API access at mga detalye ng authentication:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasyon (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Magbigay ng mga sumusunod na halaga:

- `WU_HESTIA_API_URL` (kinakailangan)
  - Ang base API endpoint, karaniwan ay `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kinakailangan)
  - Hestia user na gagamitin para sa mga API command (madalas ay `admin`).
- `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` (kahit isa lang ang kailangan)
  - Pumili ng isang paraan ng pag-authenticate: password o API hash/token.
- `WU_HESTIA_ACCOUNT` (kinakailangan)
  - Ang account (may-ari) ng Web Domain sa Hestia; ito ang unang argumento sa CLI.
- `WU_HESTIA_WEB_DOMAIN` (kinakailangan)
  - Ang kasalukuyang Hestia Web Domain na nagpapatakbo ng iyong WordPress (dito idadagdag ang mga alias).
- `WU_HESTIA_RESTART` (opsyonal; default ay `yes`)
  - Kung kailangang i-restart/i-reload ang mga serbisyo pagkatapos magbago ng alias.

Maa mong hayaang magpasok ang wizard ng mga constant na ito sa `wp-config.php`, o maaari mo itong i-define nang mano-mano.

## Pagpapatunay ng Setup {#verifying-setup}
- Sa wizard "Testing" step, tatawagin ng plugin ang `v-list-web-domains <WU_HESTIA_ACCOUNT> json` gamit ang API. Ang matagumpay na tugon ay nagpapatunay ng koneksyon at authentication.
- Pagkatapos mag-map ng domain, tingnan sa Hestia: Web > ang base domain > Aliases. Dapat makita mo ang bagong alias na idinagdag.

## Mga Tala at Tips {#notes--tips}
- Siguraduhin na ang `WU_HESTIA_WEB_DOMAIN` ay umiiral na at pag-aari ng `WU_HESTIA_ACCOUNT`.
- Kung kailangan ng SSL, pamahalaan ang mga certificate sa Hestia. Ang integrasyong ito ay kasalukuyang humahawak lamang ng mga alias.
- Maaaring magdagdag/magtanggal din ang plugin ng `www.<domain>` depende sa iyong setting ng Domain Mapping na "www subdomain".

## Halimbawa ng API Call (cURL) {#example-api-call-curl}
Narito ang isang konsepto (i-adjust ito sa iyong environment). Tingnan ang opisyal na dokumento para sa eksaktong mga parameter.

Para sa pagdaragdag, gamitin ang `cmd=v-add-web-domain-alias` at parehong mga argumento.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (o &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias na idadagdag)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Para sa pagtanggal, gamitin ang `cmd=v-delete-web-domain-alias` at parehong mga argumento.

## Pag-troubleshoot {#troubleshooting}
- HTTP error mula sa API: i-verify kung maaabot ba ang `WU_HESTIA_API_URL` at kasama ba ito ng `/api`.
- Mga error sa pag-authenticate (Auth errors): kumpirmahin ang `WU_HESTIA_API_USER` at alinman sa `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH`.
- "Missing account/base domain" sa logs: siguraduhin na naka-set at balido ang `WU_HESTIA_ACCOUNT` at `WU_HESTIA_WEB_DOMAIN` sa Hestia.

## Mga Sanggunian {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
