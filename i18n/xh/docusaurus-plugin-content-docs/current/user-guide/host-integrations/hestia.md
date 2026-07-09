---
title: Umdibaniso ne-Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Udibaniso lwe-Hestia Control Panel

Esi sikhokelo sichaza indlela yokumisela udibaniso lwe-Ultimate Multisite Hestia ukuze iidomeyini ezimephiweyo kwinethiwekhi yakho zongezwe ngokuzenzekelayo (kwaye zisuswe) njenge-Web Domain Aliases e-Hestia.

- Isalathiso se-Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Uxwebhu olusemthethweni lwe-REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Into Eyenziwayo
- Xa idomeyini imephwe kwi-Ultimate Multisite, udibaniso lubiza i-Hestia API ukuze luqhube:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Xa imephu yedomeyini isusiwe, luqhuba:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ngokukhethayo longeza/lususa i-alias ye-`www.` ngokuxhomekeke kuseto lwakho lwe-“Yenza ngokuzenzekelayo i-www subdomain” kwiisetingi ze-Domain Mapping.

## Iimfuno Zangaphambili
- I-Hestia Web Domain esele ikhona esele ikhomba kufakelo lwakho lwe-WordPress. Udibaniso luya kuncamathisela ii-alias kule domeyini isisiseko.
- Ufikelelo lwe-Hestia API luvuliwe. Ungangqina usebenzisa nokuba ligama lokugqitha okanye i-API hash/token.

Jonga amaxwebhu e-Hestia REST API ukuze uvule ufikelelo lwe-API kunye neenkcukacha zokuqinisekisa:
https://hestiacp.com/docs/server-administration/rest-api.html

## Uqwalaselo (Wizard → Integrations → Hestia)
Nika la maxabiso alandelayo:

- `WU_HESTIA_API_URL` (iyafuneka)
  - I-endpoint esisiseko ye-API, ngokuqhelekileyo `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (iyafuneka)
  - Umsebenzisi we-Hestia osetyenziselwa imiyalelo ye-API (rhoqo `admin`).
- `WU_HESTIA_API_PASSWORD` okanye `WU_HESTIA_API_HASH` (ubuncinane enye)
  - Khetha indlela enye yokuqinisekisa: igama lokugqitha okanye i-API hash/token.
- `WU_HESTIA_ACCOUNT` (iyafuneka)
  - I-akhawunti (umnini) ye-Web Domain e-Hestia; le yingxoxo yokuqala kwi-CLI.
- `WU_HESTIA_WEB_DOMAIN` (iyafuneka)
  - I-Hestia Web Domain ekhoyo enikezela nge-WordPress yakho (ii-alias ziya kuncanyathiselwa apha).
- `WU_HESTIA_RESTART` (uyazikhethela; okungagqibekanga `yes`)
  - Ukuba iinkonzo maziqaliswe kwakhona/zilayishwe kwakhona emva kotshintsho lwe-alias.

Ungavumela i-wizard ifake ezi constants kwi-`wp-config.php`, okanye uzichaze ngesandla.

## Ukuqinisekisa Useto
- Kwinyathelo le-“Testing” le-wizard, iplugin ibiza `v-list-web-domains <WU_HESTIA_ACCOUNT> json` nge-API. Impendulo ephumeleleyo iqinisekisa uqhagamshelwano kunye nokuqinisekisa.
- Emva kokumepha idomeyini, khangela e-Hestia: Web > idomeyini esisiseko > Aliases. Kufuneka ubone i-alias entsha yongezwe.

## Amanqaku & Iingcebiso
- Qinisekisa ukuba `WU_HESTIA_WEB_DOMAIN` sele ikhona kwaye yeyomnini `WU_HESTIA_ACCOUNT`.
- Ukuba i-SSL iyafuneka, lawula izatifikethi e-Hestia. Olu dityaniso okwangoku luphatha ii-alias kuphela.
- Iplugin inokongeza/isuse kwakhona `www.<domain>` ngokuxhomekeke kuseto lwakho lwe-Domain Mapping “www subdomain”.

## Umzekelo Wobizo lwe-API (cURL)
Apha ngezantsi kukho umzekelo wengqiqo (lungisa ngokwemeko-bume yakho). Bhekisa kuxwebhu olusemthethweni kwiiparamitha ezichanekileyo.

```
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
```

Ukucima, sebenzisa `cmd=v-delete-web-domain-alias` kunye nee-args ezifanayo.

## Ukusombulula Iingxaki
- Impazamo ye-HTTP evela kwi-API: qinisekisa ukuba `WU_HESTIA_API_URL` iyafikeleleka kwaye iquka `/api`.
- Iimpazamo zokuqinisekisa: qinisekisa `WU_HESTIA_API_USER` kunye nokuba yi-`WU_HESTIA_API_PASSWORD` okanye `WU_HESTIA_API_HASH`.
- “I-akhawunti/idomeyini esisiseko ayikho” kwiilog: qinisekisa ukuba `WU_HESTIA_ACCOUNT` kunye `WU_HESTIA_WEB_DOMAIN` zisetiwe kwaye ziyasebenza e-Hestia.

## Izalathiso
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Isalathiso se-Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
