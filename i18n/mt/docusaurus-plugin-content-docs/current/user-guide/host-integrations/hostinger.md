---
title: Integrazzjoni Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integrà Hostinger (hPanel)

## Panoramika

Hostinger huwa fornitore popolari di hosting li jista pannellu di controllo modernu chiamatu hPanel. L'integrà Ultimate Multisite Hostinger tal-għajnuna ti permessi sincronizzazzjoni awtomatiku tad-domeni bejn Ultimate Multisite u hPanel ta Hostinger, li jagħti l-possibbiltà tiegħek tmachjen il-mappamenti tad-domeni u subdomeni b'mod awtomatiku dirett mill-admin tal-WordPress tiegħek.

## Funzjonijiet

- Kreawment awtomatika ta domeni addon f hPanel
- Kreawment awtomatika ta subdomeni f hPanel (għall installazzjonijiet multisite ta subdomeni)
- Eliminazzjoni tad-domenu meta jkun il-mappamenti eliminati
- Integrà senċi mal-API tal-managament tad-domeni ta' hPanel

## Reġistrazzjonijiet

Biex tista' uża l-integrà Hostinger, għandek:

1. Kont att Hostinger b access għal hPanel
2. Token API minn Hostinger
3. L-konstanti tal-folji li jiddefini fil-file tiegħek `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

B'opzjoni, tista' definixxi wkoll:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API difiċjar
```

## Istruzzjonijiet ta l-Istitwix

### 1. Genera il Token API tal-Hostinger Tieħdak

1. Inlogja fil-kont tiegħek ta Hostinger u għinnile aċċess għal hPanel
2. Naviga għall-**Account Settings** → **API Tokens**
3. Klikka fuq **Create New Token**
4. Iddi un isimk deskrittiv għat-token tiegħek (e.g., "Ultimate Multisite")
5. Sigli l-permessuri neċessarji:
   - Domain management
   - Subdomain management
6. Kopja it-token generat u spejja flitt bil-sigurt

### 2. Iscrivi l-ID tal-Kont Tieħdak

1. F hPanel, navigja għall-**Account Settings** → **Account Information**
2. L-Account ID tiegħek jappari fuq danja
3. Kopja u spejja dan l-ID għall-istep xieq

### 3. Aggiungi Konstanti għal wp-config.php

Aggiungi l-konstanti tal-folji fil-file tiegħek `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

إذا l-account Hostinger tiegħek għandu endpoint API differenti, puoi tista' tippersonalizzawhu:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Iżna' l-Integrazzjoni (Enable the Integration)

1. F'admin tal-WordPress tiegħek, għandi tnejj **Ultimate Multisite > Settings**
2. Naviga għall-tab **Domain Mapping**
3. Scroll' għad il-qiegħed **Host Integrations**
4. Iżna' l-integrazzjoni **Hostinger (hPanel)**
5. Klikka fuq **Save Changes**

## Come Funziona

### Addon Domains (Domini Aggiuntivi)

Meta tmappi dominu f'Ultimate Multisite:

1. L-integrazzjoni trassmil request għall-API tal-Hostinger biex tiddarba d-dominu bħala addon domain
2. Id-dominu huwa konfigurat biex jidirettaw għall-root directory tiegħek
3. Meta tiddirba l-mapping tal-dominu, l-integrazzjoni tiffaqa biex tixleb d-addon domain min hPanel

### Subdomains (Subdomini)

Biex għall-installazzjonijiet ta multisite subdomini, meta tiddirja siti ġdidi:

1. L-integrazzjoni tiffaqa l-parti tal-subdomain mill-dominu kollu
2. Trassmil request għall-API tal-Hostinger biex tiddarba d-subdomain
3. Id-subdomain huwa konfigurat biex jidirettaw għall-root directory tiegħek

## Nota Importanti (Important Notes)

- L-integrazzjoni tista' tiffaqa biex tkomunika mal-account tiegħek u tiffaqa biex tkomunika mal-account tiegħek.
- Il-API token tiegħek għandu l-permessijiet neċessarji għall-managament tal-domini u subdomini
- L-integrazzjoni ma tiġixx tal-konfigurazzjoni tal-DNS; id-domini għandhom jkun imminenti biex jidirettaw għall-account Hostinger tiegħek
- Il-API requests jitqassmu b'mod sicuro über HTTPS
- Ixxi l-API token tiegħek sal-sigurt u ma tqassimuxhu pubbliċi

## Problemi (Troubleshooting)

### Issewju f'Konnessjoni API

- Verifika li li token API tiegħek huwa korrett u ma għandu xirq.
- Kontrolla li l-Account ID tiegħek huwa korrett.
- Assigurja li l-API token tiegħek għandu l-permessiet nepreżso għall-ġestjoni tal-domain.
- Verifika li l-account Hostinger tiegħek huwa attif u f kondizzjoni tajba.

### Domain Mġobb
- Kontrolla il-logs ta Ultimate Multisite għal pirċa msgjiġi diġett.
- Verifika li d-dominju ma jkunx imġobb aħna fil-account Hostinger tiegħek.
- Assigurja li l-account Hostinger tiegħek ma għandu xirq għall-addon domains.
- Konferma li d-dominju hija direttament impostata għal il-nameservers ta Hostinger tiegħek.

### Problemi b'Certifikat SSL

- Il-integrazzjoni ma tiffaħlix l-emissioni tal-certifikati SSL.
- Hostinger tipikament joffri certifikati SSL free peress hi AutoSSL.
- Tista' tmexxi il-certifikati SSL direttament f'hPanel ta qudd **SSL/TLS**.
- Alternattivament, uż Let's Encrypt مع feature AutoSSL ta Hostinger.

## Support

Biex tiġi għajnuna aggišjonali mal-integrazzjoni tal-Hostinger, jseħħa għal:

- [Dokumentazzjoni API ta Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Dokumentazzjoni ta Ultimate Multisite](/docs)
- [Support ta Ultimate Multisite](https://ultimatemultisite.com/support)
