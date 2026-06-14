---
title: Samþætting Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Samning við Hostinger (hPanel)

## Áhersla

Hostinger er mjög populma vefsítarþjónustufara með nútíma stjórnunarstjörnu nefndu hPanel. Ultimate Multisite Hostinger samningur gerir möguleika á sjálfsviðandi samning milli Ultimate Multisite og hPanel-sérstingsleika fyrir domæns samræmi, sem leyfir þér að stjórna domænssamninga og undirdomæns (subdomains) sjálfvirklega beint frá WordPress admin.

## Stöðvar

- Sjálfsviðandi sköpun addon domain í hPanel
- Sjálfsviðandi sköpun undirdomanna í hPanel (í tilfellum multisite installations fyrir undirdomann)
- Fjármunnsla domænsins þegar samningarnar eru fjarlægðar
- Glíma sjálfsviðandi samningur við API stjórnun domænsins í hPanel

## Krefringar

Til notkun Hostinger samnings þarf:

1. Hostinger reikning með aðgang til hPanel
2. API token frá Hostinger
3. Fá eftir stöðvum sem eru sést í `wp-config.php` skjalinu þínu:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Valfræðlega geturðu einnig skilgreina:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Stöðvar API-endur
```

## Stöðvarferli

### 1. Skapa Hostinger API Token þitt

1. Logga inn í Hostinger reikninginn þinn og hleððu hPanel
2. Navigera yfir til **Account Settings** → **API Tokens**
3. Klikka á **Create New Token** (Skapa nýtt token)
4. Gefðu tokeninu skýrna nafn (t.d. "Ultimate Multisite")
5. Veldu nauðsynlegar réttindi:
   - Domain management (Stjórnun domænsins)
   - Subdomain management (Stjórnun undirdomanna)
6. Kopla tokeninn sem var skapaður og geymiðu hann örugglega

### 2. Finndu reikningarskilninguna þína (Account ID)

1. Í hPanel, fara yfir til **Account Settings** → **Account Information**
2. Þín Account ID er sýnt á þessum síðu
3. Kopla og geymiðu þennan ID fyrir næsta skref

### 3. Skilgreina stöðvar í wp-config.php

Skilgreina eftirfarandi stöðvar í `wp-config.php` skjalinu þínu:

```php
define('WU_HOSTINGER_API_TOKEN', 'þurrinn_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'þurrinn_hostinger_account_id');
```

Ef þú notar annar API-endur fyrir Hostinger reikninginn, geturðu það séð úr:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Skynning á viðskipti (Enable the Integration)

1. Í WordPress admin-stjórninu þínu, gæfðu yfir í **Ultimate Multisite > Settings**
2. Navigju yfir til tabinn **Domain Mapping**
3. Skolia niður yfir **Host Integrations**
4. Skynni á viðskipti **Hostinger (hPanel)**
5. Klikkaðu á **Save Changes**

## Hvernig það virkar

### Addon Domains (Viðskipta-domænir)

Þegar þú mappa domén í Ultimate Multisite:

1. Skynni á viðskipti sendir skýrslu til Hostinger API um að bæta domény í viðskipta-domén með
2. Domænin er settur til að stjórna til hlutvirkum forðar (root directory) þínum
3. Þegar mappa domény fjarliggir, fjarliggir skynni á viðskipti sjálf viðskipta-domény úr hPanel

### Subdomains (Undirdomænir)

Fyrir uppsetningar multisite með undirdomænum, þegar nýtt staðsetningur er skráður:

1. Skynni fjallar um undirdoménar hluta domény
2. Skynni sendir skýrslu til Hostinger API um að bæta undirdomenn í
3. Undirdomænin eru settur til að stjórna til hlutvirkum forðar (root directory) þínum

## Mikilvægar athugasemdir

- Skynni á viðskipti notar Hostinger REST API til samskiptar með reikningnum þínum
- Þurrinn API token þinn þarf nauðsynlegur rétt til stjórnun domény og undirdomény
- Skynni á viðskipti skilar ekki um DNS-innstæðingu; domænir verða að vera settar í þennan fyrirkomulag á Hostinger reikningnum þínum
- API-skýrslur eru sendar örugg með HTTPS
- Halda API token þínum örugglegan og sjávar ekki yfir almenna netið

## Feilfellingar (Troubleshooting)

### Skynning á viðskipti (API Connection Issues)

### Verfiðu að API-tokeninn þinn sé rétt og ekki laukið

- Verfið að API-tokeninn þinn sé rétt og hefur ekki laukið
- Verfið að reikninginúmerinn (Account ID) þinn sé rétt
- Tryggðu það að API-tokeninn þinn hefur nauðsynlegum réttunum til demanáttarstjórnun

### Verfið að Hostinger reikningurinn þinn sé aktivt og í góðum standi

---

### Domæni ekki viðbúið

- Verfið í Ultimate Multisite logs eftir nánari villum
- Verfið að domænið er ekki enn viðbúið í Hostinger reikninginn þinn
- Tryggðu það að Hostinger reikningurinn þinn hefur ekki náð hámarki fyrir viðbúna domæni

### Vanda með SSL-certifikat

- Samþættingin skilar ekki með útboði SSL-certifikata
- Hostinger býður upp um algenglega frelsa SSL-certifikata í AutoSSL
- Þú getur stýrt SSL-certifikata beint í hPanel undir **SSL/TLS**
- Eða nota Let's Encrypt með AutoSSL eiginleika Hostingerinnar

## Stöðun

Vinsamlegast skoða eftirfarandi aðferðir fyrir vöxtu hjá Hostinger samþættingunni:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
