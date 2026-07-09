---
title: یەکگرتووکردنی پۆلێپەری ھێستییا
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integration with Control Panel Hestia {#hestia-control-panel-integration}

ئەم ڕێنماییە دەڵێت چۆن تنظیم بکەیت یەکگرتوویی Ultimate Multisite و Hestia بە شێوەیەکی ئۆتۆماتیک کاریگەریی دۆمنەکان لە تۆڕەکەت (هەڵگرتن و نەهەڵگرتن) وەکو Web Domain Aliases لە Hestia زیاد بکات.

- سەرچاوەی مرجع بۆ Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- dokumên فەرمی REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## چی دەکات؟ {#what-it-does}
- کاتێک دۆمنێک لە Ultimate Multisite دا مێپ (map) دەکرێت، ئەم یەکگرتووە بەکاری دەهێنێت بۆ پەیوەندی بە Hestia API و ئەنجامدانی:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- کاتێک مێپ دۆمنێک لەناو دەچێت، ئەم کارە ئەنجام دەدات:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- بە شێوەیەکی ئاسایی، بەپێی ئەو تنظیمەی کە لە Domain Mapping settings دا بۆ "Auto-create www subdomain" (ئۆتۆماتیک دروستکردنی دۆمنێکی www) هەڵدەبگریت، دەتوانیت alias ی `www.` زیاد بکەیت یان نەدەکەیت.

## پێشنیارەکان {#prerequisites}
- Web Domainێکی Hestia بوونی هەیە کە لە ئێستادا بە وردی بۆ PHP/WordPress یەکەت ئاماژەی پێداوە. ئەم یەکگرتووە alias (ناونیشانی تایبەت) دەبەستێت بەو دۆمنە سەرەکییە.
- دەبێت API Access لە Hestia چالاک بێت. دەتوانیت بە شێوازی پاشاوردنێک (password) یان بە Hash/Tokenی API خۆت پاراستنی بکەیت.

دۆکومên REST APIی Hestia بۆ چالاککردنی API و وردەکاری پاشاوردن ببینە:
https://hestiacp.com/docs/server-administration/rest-api.html

## ڕێکخستن (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
ئەم بەهایان پێویستە بدەیت:

- `WU_HESTIA_API_URL` (ضروري)
  - پەیجە سەرەکی API، بە شێوەیەکی ئاسایی دەبێت بێت: `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (ضروری)
  - یوانەکەی Hestia کە بۆ ئەو کارەمی API بەکاردێت (زۆرجار `admin`).
- `WU_HESTIA_API_PASSWORD` یان `WU_HESTIA_API_HASH` (حداقل یەکێك)
  - یەکێک لە ڕێگاکانی ناساندنی هەڵبژێرە: پۆسڵە یان API hash/token.
- `WU_HESTIA_ACCOUNT` (ضروری)
  - ئەو یوانەی کە (خوێنەرەکە) بۆ Web Domain لە Hestia هەیە؛ ئەمە یەکەم کارەمی CLIـیە.
- `WU_HESTIA_WEB_DOMAIN` (ضروری)
  - Web Domainی ئێستای Hestia کە WordPress وێبەکەت لەسەر دەدات (ئامێرەکان لێرە دەچن).

تۆ دەتوانیت ئەم دیاریکراوانە بە شێوەیەکی خۆکار بۆ `wp-config.php` بڵێیتەوە، یان بە دەست خۆی دیاری بکەیت.

## پشکنینی سیستەمەکە {#verifying-setup}
- لە هەنگاوی “Testing” (تەستی)ی wizardـەکەدا، پلۆگینی کارێک دەکات: `v-list-web-domains <WU_HESTIA_ACCOUNT> json` بە ڕێگەی API. وەڵامێکی سەرکەوتوو دەربڵێنێت کە پەیوەندی و ناساندنی (authentication) لەسەر شێوەیەکی دروست بووە.
- دوای مۆڵپە کردنەوەی یوانێک، لە Hestia دا چاک بکە: Web > یوانە سەرەکیـیەکە > Aliases (ئامێرەکان). دەبێت ببینیت کە ئامێرە نوێیە زیادکراوە.

## تێبینی و ڕێنماییەکان {#notes--tips}
- دڵنیابە `WU_HESTIA_WEB_DOMAIN` پێشتر هەیە و بە `WU_HESTIA_ACCOUNT` بێت.
- ئەگەر SSL پێویست بوو، گوازارەکانی (certificates) لە Hestia بەڕێوەبەر بکە. ئەم یەکێک لە ئێستا تەنها ئامێرەکان دەگرێتەوە.
- پلۆگین لەوانەیە بەپێی ڕێکخستنی Domain Mappingـی خۆت ("www subdomain")، `www.<domain>` زیادکەیت یان کەمبکەیت.

## نموونەی پێداویستی API Call (cURL) {#example-api-call-curl}
لێرەدا نموونەیەکی بیرۆزەیی هەیە (بەپێی ژینگەکەت بگۆڕە). بۆ پارامێترە وردەکان، سەرچاوەی فەرمی بەدوای بکە.

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

بۆ دیلیشن (delete)، لە `cmd=v-delete-web-domain-alias` و هەمان پارامێترە بەکاربهێنن.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}
- هەڵەی HTTP لە API: دڵنیا بیت کە `WU_HESTIA_API_URL` دەگاتە ئاستی گونجاو و پێکهاتەی `/api` لەخۆ دەگرێت.
- هەڵەکانی ناساندن (Auth errors): پشتڕاست بکەرەوە کە `WU_HESTIA_API_USER` و یەکێک لە نێوان `WU_HESTIA_API_PASSWORD` یان `WU_HESTIA_API_HASH` دروستە.
- "Missing account/base domain" لە تۆمارەکاندا: دڵنیا بیت کە `WU_HESTIA_ACCOUNT` و `WU_HESTIA_WEB_DOMAIN` لە Hestia دیار و ڕاستن.

## سەرچاوەکان (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referenceی Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
