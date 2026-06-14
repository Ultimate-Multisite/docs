---
title: Integrazzjoni ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrazzjoni ma' ServerPilot

## Panoramika
ServerPilot huwa servizz cloud għall host ta WordPress u siti PHP oħra fuq serveri tal-DigitalOcean, Amazon, Google, jew provider oħra. Dan l-integrazzjoni tfilu sincronizzazzjoni automatika tal-domain u it-tġib sertifikat SSL bejn Ultimate Multisite u ServerPilot.

## Funzjonijiet
- Sincronizzazzjoni automatika tal-domain
- Aġġustament sertifikat SSL ma' Let's Encrypt
- Renewal automatiku ta' SSL

## Reġistrazzjonijiet
Il-konstanti ewlenin għandhom jiġu definiti fil-file `wp-config.php` tiegħek:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Istruzzjonijiet ta' Isettabbilizzazzjoni

### 1. Iġib il-Credentials tal-API ta' ServerPilot

1. Idħol għall-dashboard tiegħek ta' ServerPilot
2. Irridi għal "Account" > "API"
3. Icrea key API جديد se ma għandekx hemm
4. Kopja l-Client ID u l-API Key tiegħek

### 2. Iġib l-App ID tiegħek

1. F'dashboard tiegħek ta' ServerPilot, irridi għal "Apps"
2. Sigli l-app li jhosta il-multisite tal-WordPress tiegħek
3. L-App ID huwa magħruf fil-URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Aggiungi i Konstanti għal wp-config.php

Aggiungi l-konstanti ewlenin tal-meħtieġa fil-file tiegħek `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Iżgħal l-Integrazzjoni

1. F'admin tiegħek ta' WordPress, irridi għal Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping" (Mappatura tal-domain)
3. Scrolla' lunħa' għal "Host Integrations" (Integrazzjonijiet tal-host)
4. Iżgħal l-ServerPilot integration
5. Klikka fuq "Save Changes" (Saħħi Bidżi)

## Come Funziona

### Sincronizzazzjoni tal-Domain

Meta domain jiġi mappat f'Ultimate Multisite:

1. L-integrà l-lista attuale tal-domaini minnien il ServerPilot
2. Aggiunge d-dominio nuw (jett jekk huwa applikabbli, jekk huwa www) lil lista
3. Tientja l-lista aggiornata għal ServerPilot permezz tal-API
4. Il ServerPilot jgħatti l-lista tal-domaini għall applikazzjoni tiegħek

### Aġġustament tal-Certifikat SSL (SSL Certificate Management)

Wara li id-dominji jkunu sincronizzati:

1. L-integrà attiva awtomatikament l-AutoSSL għall applikazzjoni tiegħek
2. Il ServerPilot jidabbir l-emissioni u l-installazzjoni tal-certifikat SSL u jipproċessa b'Let's Encrypt
3. Il ServerPilot jidabbir ukoll il rinnovament awtomatiku tal-certifikat SSL

## Verifikazzjoni tal-Certifikat SSL (SSL Certificate Verification)

L-integrà hija konfigurat biex t aumenta l-num tal isstati ta verifikazzjoni tal-certifikat SSL għal ServerPilot, peress li jista' ħafna ħin lil ServerPilot jissira u jinstalli sertifikat SSL. B'default, jitqabbel għal 5 voti, iżda dan jista' jiġi aġġustat b'filters.

## Problemi (Troubleshooting)

### Problemi ta Konezzjoni API (API Connection Issues)
- Verifika li l-Client ID u l-API Key tiegħek huma korretti
- Kontrolla li l-App ID tiegħek huwa korrett
- Assicurajt li l-account ServerPilot tiegħek għandu l-permessuri neċessarji

### Problemi tal-Certifikat SSL (SSL Certificate Issues)
- Il ServerPilot jiddeq li d-dominji għandhom record DNS validi li jidironqu għall-server tiegħek qabel ma jissira sertifikat SSL
- Jekk sertifikat SSL ma jistgħux jiġu emminati, kontrolla li d-dominji tiegħek jidironqu b'mod appropriat għall-indirizzju IP tal-server tiegħek
- Jista' ħafna ħin lil ServerPilot jissira u jinstalli sertifikat SSL (tipiku 5-15 minuti)

### D-Dominio Ma Għda (Domain Not Added)
- Kontrolla l-logs ta Ultimate Multisite għal pirċa msgjiċini diġuni
- Verifika li d-dominio ma jkunx imminien aġġojat lil ServerPilot
- Assicurajt li il-plan tal-ServerPilot tiegħek jippoġġa l-num tal-domaini li qed tgħadd

---

### Aġġuri tad-domeni (Domain Removal)
- Attualmente, l-API ta ServerPilot ma jgħod b'mod li tixleb domeni individwali.
- Meta tiddir il-mapping tal-domenu (domain mapping) f Ultimate Multisite, l-integratifika tiffaċċja l-lista tad-domeni fil-ServerPilot biex tixleb id-domenu li qed tinxleb.
