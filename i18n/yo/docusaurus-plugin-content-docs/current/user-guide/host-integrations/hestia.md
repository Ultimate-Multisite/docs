---
title: Ìṣepọ̀ Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Ìṣepọ̀ Hestia Control Panel

Ìtọ́sọ́nà yìí ṣàlàyé bí a ṣe lè ṣètò ìṣepọ̀ Ultimate Multisite Hestia kí àwọn orúkọ àgbègbè tí a ti so mọ́ nẹ́tíwọ́ọ̀kì rẹ lè jẹ́ fífi kún (àti yíyọ kúrò) láìfọwọ́ṣe gẹ́gẹ́ bí Àwọn Orúkọ Àfikún Web Domain nínú Hestia.

- Ìtọ́ka Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Ìwé REST API osìṣẹ́: https://hestiacp.com/docs/server-administration/rest-api.html

## Ohun Tí Ó Ń Ṣe
- Nígbà tí a bá so orúkọ àgbègbè kan mọ́ nínú Ultimate Multisite, ìṣepọ̀ náà máa pe Hestia API láti ṣiṣẹ́:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Nígbà tí a bá yọ ìsopọ̀ orúkọ àgbègbè kan kúrò, ó máa ṣiṣẹ́:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ó lè fi tàbí yọ orúkọ àfikún `www.` kúrò gẹ́gẹ́ bí ètò “Ṣẹ̀dá subdomain www láìfọwọ́ṣe” rẹ nínú àwọn ètò ìsopọ̀ orúkọ àgbègbè.

## Àwọn Ohun Tó Gbọdọ̀ Wà Tẹ́lẹ̀
- Hestia Web Domain tó ti wà tẹ́lẹ̀ tí ó ti ń tọ́ka sí ìfìgbékalẹ̀ WordPress rẹ. Ìṣepọ̀ náà yóò so àwọn orúkọ àfikún mọ́ orúkọ àgbègbè ìpilẹ̀ yìí.
- Ìwọlé Hestia API tí a ti muu ṣiṣẹ́. O lè jẹ́rìí ara rẹ nípa lílo ọ̀rọ̀ aṣínà tàbí API hash/token.

Wo àwọn ìwé REST API ti Hestia fún mímú ìwọlé API ṣiṣẹ́ àti àwọn àlàyé ìjẹ́rìí:
https://hestiacp.com/docs/server-administration/rest-api.html

## Ìṣètò (Wizard → Integrations → Hestia)
Pèsè àwọn iye wọ̀nyí:

- `WU_HESTIA_API_URL` (dandan)
  - Endpoint API ìpilẹ̀, tí ó sábà máa ń jẹ́ `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (dandan)
  - Olùmúlò Hestia tí a ń lò fún àwọn àṣẹ API (nígbà púpọ̀ `admin`).
- `WU_HESTIA_API_PASSWORD` tàbí `WU_HESTIA_API_HASH` (ó kéré tán ọ̀kan)
  - Yan ọ̀nà ìjẹ́rìí kan: ọ̀rọ̀ aṣínà tàbí API hash/token.
- `WU_HESTIA_ACCOUNT` (dandan)
  - Account (olóhun) ti Web Domain nínú Hestia; èyí ni àríyànjiyàn àkọ́kọ́ sí CLI.
- `WU_HESTIA_WEB_DOMAIN` (dandan)
  - Hestia Web Domain tó ti wà tẹ́lẹ̀ tí ó ń sin WordPress rẹ (a ó so àwọn orúkọ àfikún mọ́ ibi yìí).
- `WU_HESTIA_RESTART` (àṣàyàn; aiyipada `yes`)
  - Bóyá kí a tún bẹ̀rẹ̀/tún rù àwọn iṣẹ́ lẹ́yìn àwọn ìyípadà orúkọ àfikún.

O lè jẹ́ kí wizard fi àwọn constants wọ̀nyí sí `wp-config.php`, tàbí kí o ṣàlàyé wọn fúnra rẹ.

## Ṣíṣàyẹ̀wò Ìṣètò
- Ní ìgbésẹ̀ “Testing” nínú wizard, plugin náà máa pe `v-list-web-domains <WU_HESTIA_ACCOUNT> json` nípasẹ̀ API. Ìdáhùn àṣeyọrí jẹ́rìí ìsopọ̀ àti ìjẹ́rìí.
- Lẹ́yìn fífi orúkọ àgbègbè kan so mọ́, ṣàyẹ̀wò nínú Hestia: Web > orúkọ àgbègbè ìpilẹ̀ > Aliases. Ó yẹ kí o rí orúkọ àfikún tuntun tí a fi kún.

## Àwọn Àkọsílẹ̀ & Ìmọ̀ràn
- Rí i dájú pé `WU_HESTIA_WEB_DOMAIN` ti wà tẹ́lẹ̀, àti pé `WU_HESTIA_ACCOUNT` ni olóhun rẹ.
- Bí SSL bá jẹ́ dandan, ṣàkóso àwọn ìwé-ẹ̀rí ní Hestia. Ìṣepọ̀ yìí ń bójú tó àwọn orúkọ àfikún nìkan lọ́wọ́lọ́wọ́.
- Plugin náà tún lè fi/yọ `www.<domain>` kúrò gẹ́gẹ́ bí ètò “www subdomain” ìsopọ̀ orúkọ àgbègbè rẹ.

## Àpẹẹrẹ Ìpè API (cURL)
Ní ìsàlẹ̀ ni àpẹẹrẹ ìmọ̀ràn kan (ṣe àtúnṣe sí ayika rẹ). Tọ́ka sí ìwé osìṣẹ́ fún àwọn parameters gangan.

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

Fún píparẹ́, lo `cmd=v-delete-web-domain-alias` àti àwọn args kan náà.

## Ìṣàtúnṣe Ìṣòro
- Àṣìṣe HTTP láti API: ṣàyẹ̀wò pé `WU_HESTIA_API_URL` ṣeé dé, ó sì ní `/api`.
- Àwọn àṣìṣe ìjẹ́rìí: jẹ́rìí `WU_HESTIA_API_USER` àti boya `WU_HESTIA_API_PASSWORD` tàbí `WU_HESTIA_API_HASH`.
- “Account/orúkọ àgbègbè ìpilẹ̀ kò sí” nínú àwọn àkọọ́lẹ̀: rí i dájú pé `WU_HESTIA_ACCOUNT` àti `WU_HESTIA_WEB_DOMAIN` ti ṣètò, wọ́n sì wúlò nínú Hestia.

## Àwọn Ìtọ́ka
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Ìtọ́ka Hestia CLI (Àwọn Orúkọ Àfikún): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
