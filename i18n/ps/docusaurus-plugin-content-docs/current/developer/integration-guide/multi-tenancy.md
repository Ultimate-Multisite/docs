---
title: د څو کرایه‌دارۍ ادغام
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy ادغام

Ultimate Multisite: Multi-Tenancy 1.2.0 د خپلواکو کرایه‌دارانو، د لېږد د تایید، او د کرایه‌دار د ژوندپړاو اتومات کولو لپاره څو د ادغام د تماس ټکي بدلوي.

## د کرایه‌دار د پیلولو بهیر {#tenant-bootstrap-flow}

هغه ادغامونه چې کرایه‌داران جوړوي یا یې بدلوي باید دا ترتیب تعقیب کړي:

1. د کرایه‌دار د ثبت ریکارډ او د جلاوالي ماډل حل کړئ.
2. د کرایه‌دار د ډیټابېس لیکونکی جوړ یا تایید کړئ.
3. د کرایه‌دار schema پیل کړئ.
4. د کرایه‌دار کاروونکي برابر کړئ.
5. د کرایه‌دار routing او د فایل‌سیستم لارې ثبت کړئ.
6. د کرایه‌دار تر ښکاره کولو مخکې د لېږد تایید وچلوئ.

دا مه انګېرئ چې یو خپلواک کرایه‌دار د شبکې د ډیټابېس اتصال بیا کارولی شي. د addon له‌خوا برابر شوي د کرایه‌دار ثبت او لیکونکي تجریدونه وکاروئ.

## SSO او REST hooks {#sso-and-rest-hooks}

بې‌حالته د کرایه‌دار اتومات ننوتل لنډمهالي tokens کاروي چې د موخې claim، د JTI replay protection، د پای‌ته‌رسېدو حد، او origin pinning لري. هغه ادغامونه چې د ننوتلو تڼۍ یا د لرې مدیریت لینکونه زیاتوي، باید د کرایه‌دار لیدنې د ملاتړ شوي SSO بهیر له لارې جوړې کړي، نه دا چې د کرایه‌دار د ننوتلو URLs په مستقیم ډول جوړ کړي.

د شبکې اړخ API د پلټنې پېښې او ورځني لنډیزونه د خپلواک کرایه‌دار gateways لپاره شته. هغه logs وکاروئ کله چې هغه بهرني سیستمونه debug کوئ چې د کرایه‌دار د ژوندپړاو endpoints رابولي.

## د خپلواک پېرودونکي د کړنو URLs {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 د خپلواک-کرایه‌دار د پېرودونکي کړنې د account، checkout، billing، invoice، site، template-switching، او domain-mapping بهیرونو لپاره بېرته اصلي site ته routing کوي. هغه ادغامونه چې د کرایه‌دار اړخ د مدیریت لینکونه وړاندې کوي، باید دغه کړنې د اصلي-site د پېرودونکي panel ته راجع کړي او یو تایید شوی د بېرته‌ستنېدو هدف پکې شامل کړي، کله چې کاروونکی باید وکولای شي د کړنې له بشپړېدو وروسته بېرته کرایه‌دار ته لاړ شي.

د cross-domain مدیریت لینکونو لپاره د core SSO wrapper وکاروئ:

```php
$url = wu_with_sso($main_site_customer_url);
```

جوړ شوی URL د `wu_sso_url` له لارې لا هم filterable پاتې کېږي، چې SSO URL، اوسنی کاروونکی، د هدف site ID، او د redirect context ترلاسه کوي. Add-ons کولی شي له هغه filter څخه د provider-ځانګړي context د نښلولو یا د broker URL د بدلولو لپاره کار واخلي، په داسې حال کې چې د Ultimate Multisite د token validation ساتي.

د membership، invoice، billing-address، template، یا domain-management حالت د خپلواک کرایه‌دار دننه مه تکراروئ. د کرایه‌دار dashboard د پیل‌کوونکي په توګه او د اصلي-site د پېرودونکي panel د managed actions لپاره د اصلي ریکارډ سیستم په توګه وګڼئ.

## د لېږد تایید {#migration-verification}

وروسته له دې چې یو لېږد یا د ژوندپړاو ادغام د کرایه‌دار معلومات بدل کړي، د تایید دروازې وچلوئ:

- `wp tenant verify-no-legacy --site=<site-id>` تاییدوي چې کرایه‌دار نور د شبکې اړخ legacy لارو پورې تړاو نه لري.
- `wp tenant verify-sovereign-push --site=<site-id>` تاییدوي چې sovereign push دندې پروسس او تشېدای شي.

ادغامونه باید ناکام تایید د خپرولو خنډ وبولي او له دې ډډه وکړي چې کرایه‌دار live په نښه کړي تر څو ناکامي حل شوې نه وي.

## د کرایه‌دار ړنګول {#tenant-deletion}

د ړنګولو بهیرونه باید د addon teardown لاره راوبولي څو د کرایه‌دار د ډیټابېس credentials پاک شي. بهرني ادغامونه ښايي د teardown له بریا وروسته د provider سرچینې لرې کړي، خو باید host ډیټابېسونه یا فولډرونه ړنګ نه کړي تر څو تایید یا async push دندې لا هم روانې وي.

## Deprecated database router {#deprecated-database-router}

زوړ `Database_Router` د deprecation stub له‌خوا بدل شوی. نوي ادغامونه باید کرایه‌داران د اوسني site router او د کرایه‌دار registry APIs له لارې حل کړي، نه دا چې په زاړه router class تکیه وکړي.
