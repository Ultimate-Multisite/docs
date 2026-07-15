---
title: פֿאַרבעסערן אינטעגראַציע מיטן קאָנטראָל־פּאַנעל
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# פֿאַרבעסערן Control Panel אינטעגראַציע

## איבערבליק {#overview}
Enhance איז אַ מאָדערנער קאָנטראָל־פּאַנעל וואָס גיט שטאַרקע האָסטינג־אויטאָמאַציע און פֿאַרוואַלטונג־מעגלעכקייטן. די אינטעגראַציע דערמעגלעכט אויטאָמאַטישע דאָמיין־סינכראָניזאַציע און SSL־סערטיפיקאַט־פֿאַרוואַלטונג צווישן Ultimate Multisite און Enhance Control Panel.

**פֿאַרבונדענע דיסקוסיע:** זעט [GitHub דיסקוסיע #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) פֿאַר עצות פֿון דער קהילה און נאָך אינפֿאָרמאַציע.

## פֿעיִקייטן {#features}
- אויטאָמאַטישע דאָמיין־סינכראָניזאַציע ווען דאָמיינס ווערן צוגעפּאַסט אין Ultimate Multisite
- אויטאָמאַטישע SSL־סערטיפיקאַט־צושטעלונג דורך LetsEncrypt ווען DNS לייזט זיך אויף
- שטיצע פֿאַר סובדאָמיינס פֿאַר נעטוואָרקס וואָס לויפֿן אין סובדאָמיין־מאָדע
- דאָמיין־באַזייַטיקונג ווען צופּאַסונגען ווערן אויסגעמעקט
- פֿאַרבינדונג־טעסטינג כּדי צו באַשטעטיקן API־קרעדענציאַלן

## פֿאָדערונגען {#requirements}

### סיסטעם־פֿאָדערונגען {#system-requirements}
- Enhance Control Panel אינסטאַלירט און צוטריטלעך
- WordPress Multisite אינסטאַלאַציע געהאָסט אויף אָדער פֿאַרבונדן מיט אַן Enhance סערווער
- Apache וועב־סערווער (Enhance שטיצט איצט Apache קאָנפֿיגוראַציעס; LiteSpeed Enterprise איז בנימצא פֿאַר אַ נידעריקער פּרײַז)

### API צוטריט {#api-access}
איר מוזט האָבן אַדמיניסטראַטאָר־צוטריט צום Enhance Control Panel כּדי צו שאַפֿן API טאָקענס.

## באַקומען אײַערע API קרעדענציאַלן {#getting-your-api-credentials}

### 1. שאַפֿן אַן API טאָקען {#1-create-an-api-token}

1. לאָגט זיך אַרײַן אין אײַער Enhance Control Panel ווי אַן אַדמיניסטראַטאָר
2. קליקט אויף **Settings** אין דעם נאַוויגאַציע־מעניו
3. גייט צו **Access Tokens**
4. קליקט **Create Token**
5. גיט דעם טאָקען אַ באַשרײַבנדיקן נאָמען (למשל, "Ultimate Multisite Integration")
6. צוטיילט די **System Administrator** ראָלע
7. פֿאַרן אויסלויף־דאַטום:
   - לאָזט ליידיק אויב איר ווילט אַז דער טאָקען זאָל קיינמאָל נישט אויסלויפֿן
   - אָדער שטעלט אַ ספּעציפֿישן אויסלויף־דאַטום פֿאַר זיכערהייט־צוועקן
8. קליקט **Create**

נאָך דער שאַפֿונג וועלן אײַער **Access Token** און **Organization ID** געוויזן ווערן. **היט זיי גלײַך אָפּ**, ווײַל דער טאָקען וועט געוויזן ווערן נאָר איין מאָל.

### 2. באַקומען אײַער Organization ID {#2-get-your-organization-id}

דער Organization ID ווערט געוויזן אויף דער Access Tokens זײַט אין אַ בלויער אינפֿאָרמאַציע־קעסטל מיטן אָנשריפֿט "Org ID: {your_id}".

דער Organization ID איז אַ UUID פֿאָרמאַטירט אַזוי: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

איר קענט אויך געפֿינען אַ קונהס Organization ID דורך:
1. גייט צו דער **Customers** זײַט
2. קליקט **Manage customer** פֿאַרן באַטreffנדיקן קונה
3. קוקט אויף דעם URL - דער Organization ID איז די אַלפאַנומערישע צייכנס נאָך `/customers/`

### 3. באַקומען אײַער Server ID {#3-get-your-server-id}

כּדי צו געפֿינען אײַער Server ID (נייטיק פֿאַר דאָמיין־אָפּעראַציעס):

1. אין Enhance Control Panel, גייט צו **Servers**
2. קליקט אויף דעם סערווער וווּ אײַער WordPress אינסטאַלאַציע לויפֿט
3. דער Server ID (UUID פֿאָרמאַט) וועט זײַן זעבאַר אין דעם URL אָדער אין די סערווער־פּרטים
4. אַלטערנאַטיוו, קענט איר ניצן דעם API כּדי אויסצוליסטן סערווערס:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

דער סערווער ID נאָכפֿאָלגט דעם UUID פֿאָרמאַט: `00000000-0000-0000-0000-000000000000`

### 4. באַקומען אײַער API URL {#4-get-your-api-url}

אײַער API URL איז אײַער Enhance Control Panel URL מיט `/api/` צוגעגעבן:

```
https://your-enhance-panel.com/api/
```

**וויכטיק:** דער `/api/` וועג איז נייטיק. געוויינטלעכע גרײַזן אַרײַננעמען:
- ניצן בלויז דעם דאָמיין אָן `/api/`
- ניצן HTTP אַנשטאָט HTTPS (HTTPS איז נייטיק פֿאַר זיכערהייט)

## קאָנפֿיגוראַציע {#configuration}

### נייטיקע קאָנסטאַנטן {#required-constants}

לייגט צו די ווײַטערדיקע קאָנסטאַנטן צו אײַער `wp-config.php` טעקע:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### אויפֿשטעלונג דורך אינטעגראַציע־וויזאַרד {#setup-via-integration-wizard}

1. אין אײַער WordPress אַדמין, גייט צו **Ultimate Multisite** > **Settings**
2. גייט צו דעם **Integrations** קוויטל
3. געפֿינט **Enhance Control Panel Integration** און קליקט **Configuration**
4. דער וויזאַרד וועט אײַך פֿירן דורך דער אויפֿשטעלונג:
   - **שריט 1:** אַרײַנפֿיר און איבערבליק פֿון פֿעיִקייטן
   - **שריט 2:** אַרײַנגעבן אײַערע API קרעדענציאַלן (טאָקען, API URL, Server ID)
   - **שריט 3:** פּרוּוון די פֿאַרבינדונג
   - **שריט 4:** איבערקוקן און אַקטיווירן

איר קענט אויסקלײַבן צו:
- לאָזן דעם וויזאַרד אַרײַנשטעלן די קאָנסטאַנטן אין אײַער `wp-config.php` טעקע אויטאָמאַטיש
- קאָפּירן די קאָנסטאַנט־דעפֿיניציעס און זיי צולייגן האַנטיש

## נאָך WordPress קאָנפֿיגוראַציע {#additional-wordpress-configuration}

באַזירט אויף קהילה־Feedback ([דיסקוסיע #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), קענט איר דאַרפֿן קאָנפֿיגורירן די נאָך־שטעלונגען:

### .htaccess קאָנפֿיגוראַציע {#htaccess-configuration}

אויב איר דערפֿאַרט פּראָבלעמען מיט דאָמיין־צופּאַסונג:
1. מעקט אויס די אָריגינעלע Enhance `.htaccess` טעקע
2. פֿאַרבײַט זי מיט דער נאָרמאַלער WordPress Multisite `.htaccess` טעקע

### Cookie קאָנסטאַנטן {#cookie-constants}

לייגט צו די קאָנסטאַנטן צו `wp-config.php` כּדי צו פֿאַרזיכערן ריכטיקע Cookie־באַהאַנדלונג איבער צוגעפּאַסטע דאָמיינס:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ווי עס אַרבעט {#how-it-works}

### ווען אַ דאָמיין ווערט צוגעפּאַסט {#when-a-domain-is-mapped}

1. אַ באַניצער פּאַסט צו אַן אייגענעם דאָמיין אין Ultimate Multisite (אָדער אַ נײַער פּלאַץ ווערט געשאַפֿן אין סובדאָמיין־מאָדע)
2. די אינטעגראַציע שיקט אַ POST בקשה צו Enhance'ס API: `/servers/{server_id}/domains`
3. Enhance לייגט צו דעם דאָמיין צו אײַער סערווער־קאָנפֿיגוראַציע
4. ווען DNS לייזט זיך אויף צו אײַער סערווער, שטעלט Enhance אויטאָמאַטיש צו אַן SSL סערטיפיקאַט דורך LetsEncrypt
5. דער דאָמיין ווערט אַקטיוו מיט HTTPS

### ווען אַ דאָמיין ווערט באַזײַטיקט {#when-a-domain-is-removed}

1. אַ דאָמיין־צופּאַסונג ווערט אויסגעמעקט אין Ultimate Multisite
2. די אינטעגראַציע פֿרעגט Enhance כּדי צו געפֿינען דעם דאָמיינס ID
3. אַ DELETE בקשה ווערט געשיקט צו: `/servers/{server_id}/domains/{domain_id}`
4. Enhance באַזײַטיקט דעם דאָמיין פֿון אײַער סערווער־קאָנפֿיגוראַציע

### DNS און SSL קאָנטראָל {#dns-and-ssl-checking}

Ultimate Multisite נעמט אַרײַן אײַנגעבויטע DNS און SSL קאָנטראָל:
- איר קענט קאָנפֿיגורירן דעם קאָנטראָל־אינטערוואַל אין **Domain Mapping Settings** (פֿעליק: 300 סעקונדעס/5 מינוט)
- די סיסטעם וועט באַשטעטיקן DNS־פֿאַרשפּרייטונג איידער זי מאַרקירט אַ דאָמיין ווי אַקטיוו
- SSL־סערטיפיקאַט־גילטיקייט ווערט קאָנטראָלירט אויטאָמאַטיש
- Enhance באַהאַנדלט SSL־צושטעלונג אויטאָמאַטיש, דערפֿאַר איז האַנטישע SSL קאָנפֿיגוראַציע נישט נייטיק

## באַשטעטיקן די אויפֿשטעלונג {#verifying-setup}

### פּרוּוון די פֿאַרבינדונג {#test-the-connection}

1. אין דעם Integration Wizard, ניצט דעם **Test Connection** שריט
2. דער plugin וועט פּרוּוון אויסצוליסטן domains אויף אייער סערווער
3. אַ הצלחה־מעלדונג באַשטעטיקט:
   - API credentials זענען ריכטיק
   - API URL איז צוטריטלעך
   - סערווער־ID איז גילטיק
   - דערלויבענישן זענען ריכטיק באַשטימט

### נאָך אויסמאַפּן אַ domain {#after-mapping-a-domain}

1. מאַפּט אַ פּרוּוו־domain אין Ultimate Multisite
2. קאָנטראָלירט די Ultimate Multisite לאָגס (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. באַשטעטיקט אין Enhance Control Panel אַז דער domain איז צוגעגעבן געוואָרן:
   - גייט צו **Servers** > **Your Server** > **Domains**
   - דער נייער domain זאָל זיך באַווײַזן אין דער רשימה
4. אַמאָל DNS פֿאַרשפּרייט זיך, באַשטעטיקט אַז SSL ווערט אויטאָמאַטיש צוגעשטעלט

## פּראָבלעם־לייזונג {#troubleshooting}

### API פֿאַרבינדונג־פּראָבלעמען {#api-connection-issues}

**טעות: "Failed to connect to Enhance API"**
- באַשטעטיקט אַז `WU_ENHANCE_API_URL` נעמט אַרײַן `/api/` ביים סוף
- זיכערט אַז איר ניצט HTTPS, נישט HTTP
- קאָנטראָלירט אַז דער Enhance panel איז צוטריטלעך פֿון אייער WordPress סערווער
- באַשטעטיקט אַז עס זענען נישטאָ קיין firewall כּללים וואָס בלאָקירן די פֿאַרבינדונג

**טעות: "Enhance API Token not found"**
- זיכערט אַז `WU_ENHANCE_API_TOKEN` איז דעפֿינירט אין `wp-config.php`
- באַשטעטיקט אַז דער token איז נישט אויסגעמעקט געוואָרן אָדער אויסגעלאָפֿן אין Enhance
- קאָנטראָלירט אויף טיפּאָ־טעותן אין דעם token־ווערט

**טעות: "Server ID is not configured"**
- באַשטעטיקט אַז `WU_ENHANCE_SERVER_ID` איז דעפֿינירט אין `wp-config.php`
- זיכערט אַז דער Server ID איז אין אַ גילטיקן UUID פֿאָרמאַט
- באַשטעטיקט אַז דער סערווער עקזיסטירט אין אייער Enhance panel

### Domain נישט צוגעגעבן {#domain-not-added}

**קאָנטראָלירט די לאָגס:**
1. גייט צו **Ultimate Multisite** > **Logs**
2. פֿילטערט לויט **integration-enhance**
3. זוכט טעות־מעלדונגען וואָס ווײַזן אָן דעם פּראָבלעם

**געוויינטלעכע סיבות:**
- אומגילטיקער domain־נאָמען פֿאָרמאַט
- Domain עקזיסטירט שוין אין Enhance
- ניט גענוג API דערלויבענישן (זיכערט אַז דער token האָט די System Administrator ראָלע)
- Server ID שטימט נישט מיטן אמתן סערווער אין Enhance

### SSL סערטיפיקאַט־פּראָבלעמען {#ssl-certificate-issues}

**SSL ווערט נישט צוגעשטעלט:**
- באַשטעטיקט אַז DNS ווײַזט אויף אייער סערווער'ס IP אַדרעס
- קאָנטראָלירט אַז דער domain לייזט זיך ריכטיק אויף: `nslookup yourdomain.com`
- Enhance דאַרף אַז DNS זאָל זיך אויפֿלייזן איידער עס קען צושטעלן SSL
- SSL צושטעלונג נעמט געוויינטלעך 5-10 מינוט נאָך DNS פֿאַרשפּרייטונג
- קאָנטראָלירט Enhance Control Panel לאָגס פֿאַר SSL־ספּעציפֿישע טעותן

**מאַנועלע SSL פּראָבלעם־לייזונג אין Enhance:**
1. גייט צו **Servers** > **Your Server** > **Domains**
2. געפֿינט אייער domain און קאָנטראָלירט זײַן SSL סטאַטוס
3. איר קענט מאַנועל אויסלייזן SSL צושטעלונג אויב נייטיק

### DNS קאָנטראָל־אינטערוואַל {#dns-check-interval}

אויב domains אָדער SSL סערטיפיקאַטן נעמען צו לאַנג זיך צו אַקטיוויזירן:
1. גייט צו **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. געפֿינט די **DNS Check Interval** באַשטעטיקונג
3. פּאַסט אָן פֿון דעם סטאַנדאַרטן 300 סעקונדעס צו אַ נידעריקערן ווערט (מינימום: 10 סעקונדעס)
4. **באַמערקונג:** נידעריקערע אינטערוואַלן מיינען אָפֿטערע קאָנטראָלן אָבער העכערע סערווער־לאַסט

### אָטענטיפֿיקאַציע־טעותן {#authentication-errors}

**HTTP 401/403 טעותן:**
- שאַפֿט ווידער אייער API token אין Enhance
- באַשטעטיקט אַז דער token האָט די **System Administrator** ראָלע
- קאָנטראָלירט אַז דער token איז נישט אויסגעלאָפֿן
- זיכערט אַז איר ניצט דעם ריכטיקן Organization ID (כאָטש עס איז געוויינטלעך נישט נייטיק אין דער URL)

### לאָג־אַנאַליז {#log-analysis}

אַקטיוויזירט פּרטימדיקע לאָגירונג:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

דערנאָך קאָנטראָלירט לאָגס ביי:
- Ultimate Multisite לאָגס: **Ultimate Multisite** > **Logs**
- WordPress debug לאָג: `wp-content/debug.log`
- Enhance panel לאָגס: בנימצא אין Enhance'ס admin interface

## API רעפֿערענץ {#api-reference}

### אָטענטיפֿיקאַציע {#authentication}
אַלע API בקשות ניצן Bearer token אָטענטיפֿיקאַציע:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### געוויינטלעכע endpoints געניצט {#common-endpoints-used}

**ליסטע סערווערס:**
```
GET /servers
```

**ליסטע domains אויף אַ סערווער:**
```
GET /servers/{server_id}/domains
```

**לייג צו אַ domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**מעק אויס אַ domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### גאַנצע API דאָקומענטאַציע {#full-api-documentation}
פֿולשטענדיקע API דאָקומענטאַציע: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## בעסטע פּראַקטיקן {#best-practices}

### זיכערהייט {#security}
- **קיינמאָל נישט commit API tokens צו version control**
- האַלט tokens אין `wp-config.php`, וואָס זאָל זײַן אויסגעשלאָסן פֿון Git
- ניצט tokens מיט פּאַסיקע דערלויבענישן (System Administrator פֿאַר פֿולע אינטעגראַציע)
- שטעלט token אויסלויף־דאַטעס פֿאַר production סביבות
- ראָטירט tokens פּעריאָדיש

### פאָרשטעלונג {#performance}
- ניצט דעם סטאַנדאַרטן DNS קאָנטראָל־אינטערוואַל (300 סעקונדעס) כּדי צו פֿאַרמײַדן איבעריקע API רופֿן
- מאָניטאָרט Enhance סערווער רעסורסן ווען איר פֿירט גרויס־מאַסשטאַביקע domain אַפּעראַציעס
- באַטראַכט אָפּצושטופּן domain צולייגונגען אויב איר מאַפּט פילע domains אויף אַמאָל

### מאָניטאָרינג {#monitoring}
- קאָנטראָלירט רעגולער Ultimate Multisite לאָגס פֿאַר אינטעגראַציע־טעותן
- שטעלט אויף מאָניטאָרינג פֿאַר דורכגעפֿאַלענע domain צולייגונגען
- באַשטעטיקט אַז SSL סערטיפיקאַטן ווערן ריכטיק צוגעשטעלט
- האַלט אַן אויג אויף Enhance סערווער קאַפּאַציטעט און domain לימיטן

## נאָך רעסורסן {#additional-resources}

- **Enhance אָפֿיציעלע דאָקומענטאַציע:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API דאָקומענטאַציע:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance קהילה־פֿאָרום:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub דיסקוסיע:** [Issue #265 - Enhance אינטעגראַציע עצות](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping גײַד:** זעט wiki בלאַט "How to Configure Domain Mapping v2"

## שטיצע {#support}

אויב איר טרעפֿט פּראָבלעמען:
1. קאָנטראָלירט דעם פּראָבלעם־לייזונג אָפּטייל אויבן
2. איבערקוקט די Ultimate Multisite לאָגס
3. באַראַט זיך מיט די [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. קאָנטאַקטירט Enhance שטיצע פֿאַר panel־ספּעציפֿישע פּראָבלעמען
5. שאַפֿט אַ נײַע דיסקוסיע מיט פּרטימדיקע טעות־לאָגס פֿאַר קהילה־הילף

## באַמערקונגען {#notes}

- די אינטעגראציע באהאנדלט בלויז דאמעין־אליאסן; Enhance פירט SSL אויטאמאטיש
- די אינטעגראציע שטיצט סיי אייגענע דאמעין־צושרייבונגען סיי זייטלעך באזירט אויף סובדאמעינס
- אויטאמאטישע www סובדאמעין־שאַפונג קען מען קאנפיגורירן אין Domain Mapping איינשטעלונגען
- Enhance שטיצט איצט Apache קאנפיגוראציעס (LiteSpeed Enterprise פאראן)
- אראפנעמען א דאמעין פון Ultimate Multisite וועט אראפנעמען דעם דאמעין פון Enhance, אבער מעגלעך נישט אויסמעקן פארבונדענע SSL סערטיפיקאטן גלייך
