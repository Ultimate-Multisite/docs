---
title: Integrasyon ng Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrasyon ng Hestia Control Panel

Ipapaliwanag ng gabay na ito kung paano i-configure ang integrasyon ng Ultimate Multisite sa Hestia para awtomatikong maidagdag (at matanggal) ang mga naka-map na domain sa iyong network bilang mga Web Domain Alias sa Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Opisyal na REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Ano ang Ginagawa Nito
- Kapag may domain na na-map sa Ultimate Multisite, tinatawag ng integrasyon ang Hestia API para patakbuhin ang:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kapag tinanggal ang isang domain mapping, pinapatakbo nito ang:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opsyonal na nagdadagdag/nagtatanggal ng `www.` alias depende sa iyong setting na "Auto-create www subdomain" sa Domain Mapping settings.

## Mga Kinakailangan
- Isang umiiral nang Hestia Web Domain na nakaturo na sa iyong WordPress installation. Ang integrasyon ay maglalagay ng mga alias sa base domain na ito.
- Naka-enable ang Hestia API access. Maaari kang mag-authenticate gamit ang password o API hash/token.

Tingnan ang REST API docs ng Hestia para sa pag-enable ng API access at mga detalye ng authentication:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Wizard → Integrations → Hestia)
Ibigay ang mga sumusunod na values:

- `WU_HESTIA_API_URL` (kinakailangan)
  - Ang base API endpoint, karaniwang `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kinakailangan)
  - Hestia user na ginagamit para sa mga API command (kadalasang `admin`).
- `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` (kahit isa)
  - Pumili ng isang paraan ng authentication: password o API hash/token.
- `WU_HESTIA_ACCOUNT` (kinakailangan)
  - Ang account (may-ari) ng Web Domain sa Hestia; ito ang unang argument sa CLI.
- `WU_HESTIA_WEB_DOMAIN` (kinakailangan)
  - Ang umiiral nang Hestia Web Domain na nagsisilbi sa iyong WordPress (dito ikakabit ang mga alias).
- `WU_HESTIA_RESTART` (opsyonal; default ay `yes`)
  - Kung iri-restart/iri-reload ang mga service pagkatapos ng mga pagbabago sa alias.

Maaari mong hayaan ang wizard na i-inject ang mga constant na ito sa `wp-config.php`, o manual mong i-define ang mga ito.

## Pag-verify ng Setup
- Sa "Testing" step ng wizard, tinatawag ng plugin ang `v-list-web-domains <WU_HESTIA_ACCOUNT> json` gamit ang API. Ang matagumpay na response ay nagpapatunay ng connectivity at authentication.
- Pagkatapos mag-map ng domain, tingnan sa Hestia: Web > ang base domain > Aliases. Dapat makita mo ang bagong alias na naidagdag.

## Mga Tala at Tips
- Siguraduhing umiiral na ang `WU_HESTIA_WEB_DOMAIN` at pag-aari ito ng `WU_HESTIA_ACCOUNT`.
- Kung kinakailangan ang SSL, pamahalaan ang mga certificate sa Hestia. Kasalukuyang alias lang ang hinahawakan ng integrasyon na ito.
- Maaari ring magdagdag/magtanggal ang plugin ng `www.<domain>` depende sa iyong setting na "www subdomain" sa Domain Mapping.

## Halimbawang API Call (cURL)
Nasa ibaba ang isang conceptual na halimbawa (i-adjust ayon sa iyong environment). Sumangguni sa opisyal na doc para sa eksaktong parameters.

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

Para sa delete, gamitin ang `cmd=v-delete-web-domain-alias` at pareho ring args.

## Troubleshooting
- HTTP error mula sa API: i-verify na naaabot ang `WU_HESTIA_API_URL` at kasama ang `/api`.
- Auth errors: kumpirmahin ang `WU_HESTIA_API_USER` at alinman sa `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH`.
- "Missing account/base domain" sa logs: siguraduhing naka-set ang `WU_HESTIA_ACCOUNT` at `WU_HESTIA_WEB_DOMAIN` at valid ang mga ito sa Hestia.

## Mga Reference
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
