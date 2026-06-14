---
title: یەکگرتووکردنی پۆلێپەری Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integration sa Control Panel Hestia

Evîlê ku li gorinên Ultimate Multisite Hestia integrasyonê ji bo ştekerkirina domênên mapkirî yên di neteweyê wekî Web Domain Aliases bi awayekî avtomatîk (bi destpêkirin û hatin hatiribin) a Hestia.

- Referansa CLI ya Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumanreya API ofisiyayî: https://hestiacp.com/docs/server-administration/rest-api.html

## Çi Karê Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke Deke D

- `WU_HESTIA_API_URL` (ضروري)
  - Endpointi sipari, adegami `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (ضروري)
  - Useri Hestia yey bekarin ji API commands biwize (zabanan `admin`).
- `WU_HESTIA_API_PASSWORD` an `WU_HESTIA_API_HASH` (hastare yek)
  - Yek nexeshn ji autentifikasyon biwize: parosawar an hash/tokeni API.
- `WU_HESTIA_ACCOUNT` (ضروري)
  - Hesab (sahib)a Web Domainan di Hestia; ev e awel argumenta ji CLI e.
- `WU_HESTIA_WEB_DOMAIN` (ضروري)
  - Web Domaini wajh kuwazdi bi WordPress-a ji Hestia; aliasan li leqey an jî li wê hatin liêday.
- `WU_HESTIA_RESTART` (hastare; default `yes`)
  - Çi ji bo restart/reload kirina xizmetên piştira guhertina aliasan e.

Tu dikarin ev konstanta bi wizardê destine bikin, an jî manavuran xwe dewan bikin.

## Teyakkirên Veranîn
- Di etapena “Testing” a wizardê, pluginê ji API bi `v-list-web-domains <WU_HESTIA_ACCOUNT> json` bidije. Pêşvekirina guhertina nîşanî û autentifikasyonê li ser e teyibûna pênaseke.
- Piştira mapekirina domain, di Hestia de çêkine: Web > domaina esasî > Aliases. Tu ji nû aliasê hatibe şanîn ve dikarin bibîne.

## Not û Preşvanên
- Dega ku `WU_HESTIA_WEB_DOMAIN` hewceyê ye û ji aliyê `WU_HESTIA_ACCOUNT` ve ye.
- Heger SSL hewceyê ye, sertifikatên li Hestia de derine rûkirin. Ev integrasyon bi taybetî aliasan ji bo xwendina parast e.
- Pluginê dikare li gorî lêkerina Domain Mapping “www subdomain” xwe jî `www.<domain>` zêde/kirdin bike.

## Nûçeyek API Call (cURL)
Li dûr, nûçeyek misali ye (bi gorî mîjmara te guhertin). Ji bo parametre yên rast ji dokumenta ofisî derine vejo.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

بۆ دیلیشن (delete)، لە جۆرەکە بەکاربهێنە `cmd=v-delete-web-domain-alias` و هەمان پارامێترەکان.

## چارەسەرکردنی کێشەکان (Troubleshooting)
- هەڵەی HTTP لە API: دڵنیا بیت کە `WU_HESTIA_API_URL` دەگاتە ئاستی گونجاو و پێکهاتەی `/api/` لەخۆگرتووە.
- هەڵەکانی ناساندن (Auth errors): پشتڕاست بکەرەوە کە `WU_HESTIA_API_USER` و یەکێک لە نێوان `WU_HESTIA_API_PASSWORD` یان `WU_HESTIA_API_HASH` دروستە.
- "Missing account/base domain" لە تۆمارەکاندا: دڵنیا بیت کە `WU_HESTIA_ACCOUNT` و `WU_HESTIA_WEB_DOMAIN` لە Hestia دیار و ڕاستن.

## سەرچاوەکان (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referenceی Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
