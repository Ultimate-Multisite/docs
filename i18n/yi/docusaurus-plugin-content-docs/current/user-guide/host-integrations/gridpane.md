---
title: GridPane אינטעגראַציע
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane אינטעגראַציע {#gridpane-integration}

## איבערבליק {#overview}
GridPane איז אַ ספּעציאַליזירטער WordPress האָסטינג־קאָנטראָל־פּאַנעל געבויט פֿאַר ערנסטע WordPress פּראָפֿעסיאָנאַלן. די אינטעגראַציע דערמעגלעכט אויטאָמאַטישע דאָמיין־סינקינג און SSL סערטיפיקאַט־פֿאַרוואַלטונג צווישן Ultimate Multisite און GridPane.

## פֿעיִקייטן {#features}
- אויטאָמאַטישע דאָמיין־סינקינג
- SSL סערטיפיקאַט־פֿאַרוואַלטונג
- אויטאָמאַטישע קאָנפֿיגוראַציע פֿון SUNRISE constant

## פֿאָדערונגען {#requirements}
די ווײַטערדיקע constants מוזן ווערן דעפֿינירט אין אײַער `wp-config.php` טעקע:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## אײַנשטעל־אינסטרוקציעס {#setup-instructions}

### 1. באַקומען אײַערע GridPane API קרעדענציאַלן {#1-get-your-gridpane-api-credentials}

1. לאָגט זיך אַרײַן אין אײַער GridPane dashboard
2. גייט צו "אײַנשטעלונגען" > "API"
3. שאַפֿט אַן API key אויב איר האָט נאָך נישט קיין איינעם
4. קאָפּירט אײַער API key

### 2. באַקומען אײַערע סערווער־און־וועבזײַט IDs {#2-get-your-server-and-site-ids}

1. אין אײַער GridPane dashboard, גייט צו "סערווערס"
2. קלײַבט אויס דעם סערווער וווּ אײַער WordPress מולטיסײַט ווערט געהאָסט
3. באַמערקט דעם Server ID (זעבאַר אין דער URL אָדער אויף דער סערווער־דעטאַלן־זײַט)
4. גייט צו "Sites" און קלײַבט אויס אײַער WordPress וועבזײַט
5. באַמערקט דעם Site ID (זעבאַר אין דער URL אָדער אויף דער וועבזײַט־דעטאַלן־זײַט)

### 3. צולייגן Constants צו wp-config.php {#3-add-constants-to-wp-configphp}

לייגט צו די ווײַטערדיקע constants צו אײַער `wp-config.php` טעקע:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. אַקטיווירן די אינטעגראַציע {#4-enable-the-integration}

1. אין אײַער WordPress admin, גייט צו Ultimate Multisite > Settings
2. נאַוויגירט צום "Domain Mapping" קוויטל
3. סקראָלט אַראָפּ צו "Host Integrations"
4. אַקטיווירט די GridPane אינטעגראַציע
5. קליקט "היט ענדערונגען"

## ווי עס אַרבעט {#how-it-works}

ווען אַ דאָמיין ווערט געמאַפּט אין Ultimate Multisite:

1. די אינטעגראַציע שיקט אַ בקשה צו GridPane's API צו צולייגן דעם דאָמיין צו אײַער וועבזײַט
2. GridPane באַהאַנדלט אויטאָמאַטיש SSL סערטיפיקאַט־צושטעלונג
3. ווען אַ דאָמיין־מאַפּינג ווערט אַוועקגענומען, וועט די אינטעגראַציע אַוועקנעמען דעם דאָמיין פֿון GridPane

די אינטעגראַציע באַהאַנדלט אויך אויטאָמאַטיש דעם SUNRISE constant אין אײַער wp-config.php טעקע, וואָס איז נויטיק כּדי דאָמיין־מאַפּינג זאָל אַרבעטן ריכטיק.

## SUNRISE Constant פֿאַרוואַלטונג {#sunrise-constant-management}

איין ייחודדיקע פֿעיִקייט פֿון דער GridPane אינטעגראַציע איז אַז זי קערט אויטאָמאַטיש צוריק דעם SUNRISE constant אין wp-config.php, כּדי צו פֿאַרמײַדן קאָנפֿליקטן מיט GridPane's אייגענעם דאָמיין־מאַפּינג־סיסטעם. דאָס פֿאַרזיכערט אַז ביידע סיסטעמען קענען אַרבעטן צוזאַמען אָן פּראָבלעמען.

## טראָבלשוטינג {#troubleshooting}

### API פֿאַרבינדונג־פּראָבלעמען {#api-connection-issues}
- באַשטעטיקט אַז אײַער API key איז ריכטיק
- קאָנטראָלירט אַז אײַערע סערווער־און־וועבזײַט IDs זענען ריכטיק
- מאַכט זיכער אַז אײַער GridPane Account האָט די נויטיקע דערלויבענישן

### SSL סערטיפיקאַט־פּראָבלעמען {#ssl-certificate-issues}
- GridPane קען נעמען אַ ביסל צײַט אַרויסצוגעבן SSL סערטיפיקאַטן
- באַשטעטיקט אַז אײַערע דאָמיינס ווײַזן ריכטיק אויף אײַער סערווער'ס IP אַדרעס
- קאָנטראָלירט די GridPane SSL אײַנשטעלונגען פֿאַר אײַער וועבזײַט

### דאָמיין נישט צוגעגעבן {#domain-not-added}
- קאָנטראָלירט די Ultimate Multisite לאָגס פֿאַר סײַ וועלכע טעות־מעלדונגען
- באַשטעטיקט אַז דער דאָמיין איז נישט שוין צוגעגעבן צו GridPane
- מאַכט זיכער אַז אײַער דאָמיין'ס DNS רעקאָרדס זענען ריכטיק קאָנפֿיגורירט
