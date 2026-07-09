---
title: Hestia Control Panel אינטעגראַציע
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel אינטעגראַציע

דער וועגווייזער דערקלערט ווי צו קאָנפֿיגורירן די Ultimate Multisite Hestia אינטעגראַציע, כּדי מאַפּירטע דאָמיינען אין אייער נעץ זאָלן אויטאָמאַטיש צוגעלייגט ווערן (און אַוועקגענומען ווערן) ווי וועב־דאָמיין־אַליאַסן אין Hestia.

- Hestia CLI רעפֿערענץ: v-add-web-domain-alias / v-delete-web-domain-alias
- אָפֿיציעלע REST API דאָקומענטאַציע: https://hestiacp.com/docs/server-administration/rest-api.html

## וואָס עס טוט
- ווען אַ דאָמיין ווערט מאַפּירט אין Ultimate Multisite, רופט די אינטעגראַציע דעם Hestia API צו לויפֿן:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ווען אַ דאָמיין־מאַפּינג ווערט אַוועקגענומען, לויפֿט עס:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- לייגט לויטן אָפּציאָנאַל צו/נעמט אַוועק דעם `www.` אַליאַס, לויט אייער “אויטאָמאַטיש שאַפֿן www אונטער־דאָמיין” באַשטעטיקונג אין דאָמיין־מאַפּינג־באַשטעטיקונגען.

## פֿאָרויסזעצונגען
- אַן עקזיסטירנדיקער Hestia וועב־דאָמיין וואָס ווײַזט שוין אויף אייער WordPress אינסטאַלאַציע. די אינטעגראַציע וועט צוהענגען אַליאַסן צו דעם באַזע־דאָמיין.
- Hestia API צוטריט אַקטיווירט. איר קענט זיך אָטענטיפֿיצירן מיט אָדער אַ פּאַראָל אָדער אַן API hash/token.

זעט Hestia'ס REST API דאָקומענטאַציע פֿאַרן אַקטיווירן API צוטריט און פּרטים וועגן אָטענטיפֿיקאַציע:
https://hestiacp.com/docs/server-administration/rest-api.html

## קאָנפֿיגוראַציע (וויזאַרד → אינטעגראַציעס → Hestia)
גיט אָן די ווײַטערדיקע ווערטן:

- `WU_HESTIA_API_URL` (פֿאַרלאַנגט)
  - דער באַזע API ענדפּונקט, געוויינטלעך `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (פֿאַרלאַנגט)
  - Hestia באַניצער גענוצט פֿאַר API באַפֿעלן (אָפֿט `admin`).
- `WU_HESTIA_API_PASSWORD` אָדער `WU_HESTIA_API_HASH` (כאָטש איינס)
  - קלײַבט איין אָטענטיפֿיקאַציע־מעטאָד: פּאַראָל אָדער API hash/token.
- `WU_HESTIA_ACCOUNT` (פֿאַרלאַנגט)
  - דער חשבון (אייגנטימער) פֿונעם וועב־דאָמיין אין Hestia; דאָס איז דער ערשטער אַרגומענט צו דער CLI.
- `WU_HESTIA_WEB_DOMAIN` (פֿאַרלאַנגט)
  - דער עקזיסטירנדיקער Hestia וועב־דאָמיין וואָס באַדינט אייער WordPress (אַליאַסן וועלן צוגעהענגט ווערן דאָ).
- `WU_HESTIA_RESTART` (אָפּציאָנאַל; סטאַנדאַרט `yes`)
  - צי צו איבערסטאַרטן/איבערלאָדן סערוויסן נאָך אַליאַס־ענדערונגען.

איר קענט לאָזן דעם וויזאַרד אַרײַנלייגן די קאָנסטאַנטן אין `wp-config.php`, אָדער זיי דעפֿינירן מאַנועל.

## באַשטעטיקן די אויפֿשטעלונג
- אינעם וויזאַרד־שריט “טעסטינג”, רופט דער plugin `v-list-web-domains <WU_HESTIA_ACCOUNT> json` דורך דעם API. אַן הצלחה־ענטפֿער באַשטעטיקט פֿאַרבינדונג און אָטענטיפֿיקאַציע.
- נאָכן מאַפּירן אַ דאָמיין, קאָנטראָלירט אין Hestia: וועב > דער באַזע־דאָמיין > אַליאַסן. איר זאָלט זען דעם נײַעם אַליאַס צוגעלייגט.

## באַמערקונגען און עצות
- פֿאַרזיכערט אַז `WU_HESTIA_WEB_DOMAIN` עקזיסטירט שוין און איז אין אייגנטום פֿון `WU_HESTIA_ACCOUNT`.
- אויב SSL איז נייטיק, פֿאַרוואַלטעט סערטיפֿיקאַטן אין Hestia. די אינטעגראַציע באַהאַנדלט איצט בלויז אַליאַסן.
- דער plugin קען אויך צולייגן/אַוועקנעמען `www.<domain>` לויט אייער דאָמיין־מאַפּינג “www אונטער־דאָמיין” באַשטעטיקונג.

## בײַשפּיל API רוף (cURL)
אונטן איז אַ קאָנצעפּטועלער בײַשפּיל (פּאַסט צו אייער סבֿיבֿה). זעט די אָפֿיציעלע דאָקומענטאַציע פֿאַר גענויע פּאַראַמעטערס.

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

פֿאַר אויסמעקן, ניצט `cmd=v-delete-web-domain-alias` און די זעלבע אַרגומענטן.

## טראָבלשוטינג
- HTTP טעות פֿון API: באַשטעטיקט אַז `WU_HESTIA_API_URL` איז דערגרייכבאַר און נעמט אַרײַן `/api`.
- אָטענטיפֿיקאַציע־טעותים: באַשטעטיקט `WU_HESTIA_API_USER` און אָדער `WU_HESTIA_API_PASSWORD` אָדער `WU_HESTIA_API_HASH`.
- “פֿעלנדיקער חשבון/באַזע־דאָמיין” אין לאָגס: פֿאַרזיכערט אַז `WU_HESTIA_ACCOUNT` און `WU_HESTIA_WEB_DOMAIN` זענען באַשטימט און גילטיק אין Hestia.

## רעפֿערענצן
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI רעפֿערענץ (אַליאַסן): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
