---
title: Hostinger (hPanel) אינטעגראַציע
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) אינטעגראַציע

## איבערבליק {#overview}

Hostinger איז אַ פּאָפּולערער וועב־האָסטינג פֿאַרזאָרגער מיט אַ מאָדערנעם קאָנטראָל־פּאַנעל וואָס הייסט hPanel. די Ultimate Multisite Hostinger אינטעגראַציע דערמעגלעכט אויטאָמאַטישע דאָמיין־סינכראָניזאַציע צווישן Ultimate Multisite און Hostinger'ס hPanel, אַזוי אַז איר קענט אויטאָמאַטיש פירן דאָמיין־מאַפּירונגען און סובדאָמיינס גלייך פֿון אייער WordPress אַדמין.

## אייגנשאַפטן {#features}

- אויטאָמאַטישע שאַפונג פֿון צוגאָב־דאָמיינס אין hPanel
- אויטאָמאַטישע שאַפונג פֿון סובדאָמיינס אין hPanel (פֿאַר סובדאָמיין־מולטיסייט אינסטאַלאַציעס)
- דאָמיין־באַזייַטיקונג ווען מאַפּירונגען ווערן אויסגעמעקט
- גלאַטע אינטעגראַציע מיט hPanel'ס דאָמיין־פֿאַרוואַלטונג API

## באַדערפענישן {#requirements}

כּדי צו נוצן די Hostinger אינטעגראַציע, דאַרפֿט איר:

1. אַ Hostinger Account מיט hPanel צוטריט
2. אַן API token פֿון Hostinger
3. די ווײַטערדיקע קאָנסטאַנטן דעפֿינירט אין אייער `wp-config.php` טעקע:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

אָפּציאָנעל קענט איר אויך דעפֿינירן:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## איינשטעל־אנווייזונגען {#setup-instructions}

### 1. דזשענערירט אייער Hostinger API Token {#1-generate-your-hostinger-api-token}

1. לאָגט אַרײַן אין אייער Hostinger Account און באַקומען צוטריט צו hPanel
2. נאַוויגירט צו **Account סעטטינגס** → **API Tokens**
3. קליקט **שאַפֿן נײַעם Token**
4. געבט אייער token אַ באַשרײַבנדיקן נאָמען (למשל, "Ultimate Multisite")
5. קלײַבט אויס די נייטיקע דערלויבענישן:
   - דאָמיין־פֿאַרוואַלטונג
   - סובדאָמיין־פֿאַרוואַלטונג
6. קאָפּירט דעם דזשענערירטן token און האַלט עס אויף זיכער

### 2. געפֿינט אייער Account ID {#2-find-your-account-id}

1. אין hPanel, גייט צו **Account סעטטינגס** → **Account אינפֿאָרמאַציע**
2. אייער Account ID ווערט געוויזן אויף דער בלאַט
3. קאָפּירט און היט דעם ID פֿאַרן קומענדיקן שריט

### 3. לייגט צו קאָנסטאַנטן אין wp-config.php {#3-add-constants-to-wp-configphp}

לייגט צו די ווײַטערדיקע קאָנסטאַנטן אין אייער `wp-config.php` טעקע:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

אויב אייער Hostinger Account ניצט אַן אַנדערן API endpoint, קענט איר עס צופּאַסן:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. אַקטיווירט די אינטעגראַציע {#4-enable-the-integration}

1. אין אייער WordPress אַדמין, גייט צו **Ultimate Multisite > סעטטינגס**
2. נאַוויגירט צום **דאָמיין־מאַפּירונג** קוויטל
3. ראָלט אַראָפּ צו **האָסט־אינטעגראַציעס**
4. אַקטיווירט די **Hostinger (hPanel)** אינטעגראַציע
5. קליקט **היט ענדערונגען**

## ווי עס אַרבעט {#how-it-works}

### צוגאָב־דאָמיינס {#addon-domains}

ווען איר מאַפּירט אַ דאָמיין אין Ultimate Multisite:

1. די אינטעגראַציע שיקט אַ בקשה צו Hostinger'ס API כּדי צוצולייגן דעם דאָמיין ווי אַ צוגאָב־דאָמיין
2. דער דאָמיין ווערט קאָנפֿיגורירט צו ווײַזן אויף אייער וואָרצל־טעקע־אָרט
3. ווען אַ דאָמיין־מאַפּירונג ווערט באַזײַטיקט, באַזײַטיקט די אינטעגראַציע אויטאָמאַטיש דעם צוגאָב־דאָמיין פֿון hPanel

### סובדאָמיינס {#subdomains}

פֿאַר סובדאָמיין־מולטיסייט אינסטאַלאַציעס, ווען אַ נײַע זייטל ווערט געשאַפֿן:

1. די אינטעגראַציע ציט אַרויס דעם סובדאָמיין־טייל פֿון דעם פולן דאָמיין
2. זי שיקט אַ בקשה צו Hostinger'ס API כּדי צוצולייגן דעם סובדאָמיין
3. דער סובדאָמיין ווערט קאָנפֿיגורירט צו ווײַזן אויף אייער וואָרצל־טעקע־אָרט

## וויכטיקע באַמערקונגען {#important-notes}

- די אינטעגראַציע ניצט Hostinger'ס REST API כּדי צו קאָמוניקירן מיט אייער Account
- אייער API token מוז האָבן די נייטיקע דערלויבענישן פֿאַר דאָמיין־ און סובדאָמיין־פֿאַרוואַלטונג
- די אינטעגראַציע באַהאַנדלט נישט קיין DNS קאָנפֿיגוראַציע; דאָמיינס מוזן שוין ווײַזן אויף אייער Hostinger Account
- API בקשות ווערן געשיקט זיכער איבער HTTPS
- האַלט אייער API token זיכער און טיילט עס קיינמאָל נישט עפֿנטלעך

## פּראָבלעמען־לייזונג {#troubleshooting}

### API פֿאַרבינדונג־פּראָבלעמען {#api-connection-issues}

- באַשטעטיקט אַז אייער API token איז ריכטיק און איז נישט אויסגעגאַנגען
- קאָנטראָלירט אַז אייער Account ID איז ריכטיק
- מאַכט זיכער אַז אייער API token האָט די נייטיקע דערלויבענישן פֿאַר דאָמיין־פֿאַרוואַלטונג
- באַשטעטיקט אַז אייער Hostinger Account איז אַקטיוו און אין גוטן מצבֿ

### דאָמיין נישט צוגעלייגט {#domain-not-added}

- קאָנטראָלירט די Ultimate Multisite לאָגן פֿאַר טעות־מעלדונגען
- באַשטעטיקט אַז דער דאָמיין איז נאָך נישט צוגעלייגט צו אייער Hostinger Account
- מאַכט זיכער אַז אייער Hostinger Account האָט נישט דערגרייכט זײַן גרענעץ פֿאַר צוגאָב־דאָמיינס
- באַשטעטיקט אַז דער דאָמיין ווײַזט ריכטיק אויף אייערע Hostinger nameservers

### SSL סערטיפֿיקאַט־פּראָבלעמען {#ssl-certificate-issues}

- די אינטעגראַציע באַהאַנדלט נישט קיין SSL סערטיפֿיקאַט־אַרויסגעבן
- Hostinger גיט געוויינטלעך פֿרײַע SSL סערטיפֿיקאַטן דורך AutoSSL
- איר קענט פירן SSL סערטיפֿיקאַטן גלייך אין hPanel אונטער **SSL/TLS**
- אַלטערנאַטיוו, ניצט Let's Encrypt מיט Hostinger'ס AutoSSL פֿונקציע

## שטיצע {#support}

פֿאַר נאָך הילף מיט דער Hostinger אינטעגראַציע, ביטע זעט:

- [Hostinger API דאָקומענטאַציע](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite דאָקומענטאַציע](/)
- [Ultimate Multisite שטיצע](https://ultimatemultisite.com/support)
