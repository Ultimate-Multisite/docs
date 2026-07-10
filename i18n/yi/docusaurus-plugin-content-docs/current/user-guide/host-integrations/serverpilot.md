---
title: ServerPilot אינטעגראַציע
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot אינטעגראַציע {#serverpilot-integration}

## איבערבליק {#overview}
ServerPilot איז אַ וואָלקן־דינסט פֿאַר האָסטינג WordPress און אַנדערע PHP וועבזײַטן אויף סערווערס בײַ DigitalOcean, Amazon, Google, אָדער יעדן אַנדערן סערווער־צושטעלער. די אינטעגראַציע ערמעגלעכט אויטאָמאַטישע דאָמיין־סינכראָניזאַציע און SSL סערטיפיקאַט־פֿאַרוואַלטונג צווישן Ultimate Multisite און ServerPilot.

## פֿעיִקייטן {#features}
- אויטאָמאַטישע דאָמיין־סינכראָניזאַציע
- SSL סערטיפיקאַט־פֿאַרוואַלטונג מיט Let's Encrypt
- אויטאָמאַטישע SSL באַנײַונג

## פֿאָדערונגען {#requirements}
די ווײַטערדיקע קאָנסטאַנטן מוזן זײַן דעפֿינירט אין אײַער `wp-config.php` טעקע:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## אײַנשטעל־אינסטרוקציעס {#setup-instructions}

### 1. באַקומען אײַערע ServerPilot API קרעדענציאַלן {#1-get-your-serverpilot-api-credentials}

1. לאָגט זיך אַרײַן אין אײַער ServerPilot dashboard
2. גייט צו "Account" > "API"
3. שאַפֿט אַ נײַעם API שליסל אויב איר האָט נאָך נישט קיין איינעם
4. קאָפּירט אײַער Client ID און API Key

### 2. באַקומען אײַער App ID {#2-get-your-app-id}

1. אין אײַער ServerPilot dashboard, גייט צו "Apps"
2. קלײַבט אויס די אַפּ וווּ אײַער WordPress מולטיסײַט איז געהאָסטעט
3. דער App ID איז קענטיק אין דעם URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. צולייגן קאָנסטאַנטן צו wp-config.php {#3-add-constants-to-wp-configphp}

לייגט צו די ווײַטערדיקע קאָנסטאַנטן צו אײַער `wp-config.php` טעקע:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. אַקטיווירן די אינטעגראַציע {#4-enable-the-integration}

1. אין אײַער WordPress אַדמין, גייט צו Ultimate Multisite > Settings
2. נאַוויגירט צום "Domain Mapping" קוויטל
3. סקראָלט אַראָפּ צו "Host Integrations"
4. אַקטיווירט די ServerPilot אינטעגראַציע
5. קליקט "Save Changes"

## ווי עס אַרבעט {#how-it-works}

### דאָמיין־סינכראָניזאַציע {#domain-syncing}

ווען אַ דאָמיין ווערט מאַפּט אין Ultimate Multisite:

1. די אינטעגראַציע נעמט אַרויס די איצטיקע רשימה פֿון דאָמיינס פֿון ServerPilot
2. זי לייגט צו דעם נײַעם דאָמיין צו דער רשימה (צוזאַמען מיט אַ www ווערסיע אויב אָנווענדלעך)
3. זי שיקט די דערהײַנטיקטע רשימה צו ServerPilot דורך דעם API
4. ServerPilot דערהײַנטיקט די דאָמיין־רשימה פֿאַר אײַער אַפּליקאַציע

### SSL סערטיפיקאַט־פֿאַרוואַלטונג {#ssl-certificate-management}

נאָך דעם וואָס דאָמיינס ווערן סינכראָניזירט:

1. די אינטעגראַציע אַקטיווירט אויטאָמאַטיש AutoSSL פֿאַר אײַער אַפּליקאַציע
2. ServerPilot באַהאַנדלט די SSL סערטיפיקאַט־אַרויסגאַבע און אינסטאַלאַציע מיט Let's Encrypt
3. ServerPilot באַהאַנדלט אויך אויטאָמאַטישע באַנײַונג פֿון SSL סערטיפיקאַטן

## SSL סערטיפיקאַט־וועריפֿיקאַציע {#ssl-certificate-verification}

די אינטעגראַציע איז קאָנפֿיגורירט צו פֿאַרגרעסערן די צאָל SSL סערטיפיקאַט־וועריפֿיקאַציע־פּרוּוון פֿאַר ServerPilot, ווײַל עס קען נעמען אַ ביסל צײַט פֿאַר ServerPilot צו אַרויסגעבן און אינסטאַלירן SSL סערטיפיקאַטן. לויטן פעליקייט, וועט עס פּרוּוון ביז 5 מאָל, אָבער דאָס קען ווערן צוגעפּאַסט מיט פֿילטערס.

## טראָבלשוטינג {#troubleshooting}

### API פֿאַרבינדונג־פּראָבלעמען {#api-connection-issues}
- באַשטעטיקט אַז אײַער Client ID און API Key זענען ריכטיק
- קאָנטראָלירט אַז אײַער App ID איז ריכטיק
- מאַכט זיכער אַז אײַער ServerPilot Account האָט די נייטיקע דערלויבענישן

### SSL סערטיפיקאַט־פּראָבלעמען {#ssl-certificate-issues}
- ServerPilot פֿאָדערט אַז דאָמיינס זאָלן האָבן גילטיקע DNS רעקאָרדס וואָס ווײַזן אויף אײַער סערווער איידער עס גיט אַרויס SSL סערטיפיקאַטן
- אויב SSL סערטיפיקאַטן ווערן נישט אַרויסגעגעבן, קאָנטראָלירט אַז אײַערע דאָמיינס ווײַזן ריכטיק אויף אײַער סערווערס IP אַדרעס
- עס קען נעמען אַ ביסל צײַט פֿאַר ServerPilot צו אַרויסגעבן און אינסטאַלירן SSL סערטיפיקאַטן (געוויינטלעך 5-15 מינוט)

### דאָמיין נישט צוגעגעבן {#domain-not-added}
- קאָנטראָלירט די Ultimate Multisite לאָגס פֿאַר טעות־מעלדונגען
- באַשטעטיקט אַז דער דאָמיין איז נישט שוין צוגעגעבן צו ServerPilot
- מאַכט זיכער אַז אײַער ServerPilot פּלאַן שטיצט די צאָל דאָמיינס וואָס איר לייגט צו

### דאָמיין־באַזײַטיקונג {#domain-removal}
- איצט גיט דער ServerPilot API נישט קיין אופֿן צו באַזײַטיקן יחידדיקע דאָמיינס
- ווען אַ דאָמיין־מאַפּינג ווערט באַזײַטיקט אין Ultimate Multisite, וועט די אינטעגראַציע דערהײַנטיקן די דאָמיין־רשימה אין ServerPilot כּדי אויסצושליסן דעם באַזײַטיקטן דאָמיין
