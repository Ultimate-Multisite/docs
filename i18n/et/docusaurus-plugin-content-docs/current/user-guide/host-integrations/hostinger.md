---
title: Hostinger (hPanel) integreerimine
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integreerimine

## Üldine ülevaade

Hostinger on populaarne veebhoostja, millel on moderni kontrollpaneel hPanel. Ultimate Multisite Hostinger integreerimine võimaldab automaatselt domeenid synkronida Ultimate Multisite ja Hostinger's hPanel vahel, võimaldades teil domeenide ülekirjeldusi ja alsubdomeeneid käsitsemist otse WordPress administ.

## Funktsioonid

- Automootne lisadomeenide loomine hPanelis
- Automootne alsubdomeenide loomine hPanelis (subdomain multisite installatsioonide jaoks)
- Domeeni eemaldamine, kui ülekirjeldusi eemaldatakse
- Sujuv integreerimine Hostinger's domeenihaldus API-ga

## nõuded

Hostinger integreerimise kasutamiseks vajad:

1. Hostingeri konto hPaneliga külastamise õigusega
2. API token Hostingerilt
3. Järgnev konstantsid definitsioon `wp-config.php` failis:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Valikult saate definitsiona ka:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Poold API-punkt
```

## Seadistamise juhised

### 1. Generiige Hostinger API token

1. Logi sisse oma Hostinger kontole ja pääse hPanelile
2. Minema **Account Settings** → **API Tokens** menüü läbi
3. Klõpsake **Create New Token** (Uue token luu)
4. Annake tokenile kirjeldava nime (nt. "Ultimate Multisite")
5. Valige vajalikud lubanded:
   - Domain management (Domeenihaldus)
   - Subdomain management (Alsubdomeenihaldus)
6. Kopya ja salvestage genereeritud token turvaliselt

### 2. Leida oma konto ID

1. hPanelis minema **Account Settings** → **Account Information** läbi
2. Teie konti ID on nähtav selle lehel
3. Kopya ja salvestage see ID järgmiseks sammuks.

### 3. Lisage konstantsid wp-config.php'le

Lisage järgmised konstantsid oma `wp-config.php` failile:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Kui teie Hostinger konto kasutab teise API-punkti, saate seda kohandada:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integreerimise aktiveerimine

1. WordPress administratiivis osas minud **Ultimate Multisite > Settings** sekkundi
2. Minuda **Domain Mapping** tabile
3. Skroolipõõs **Host Integrations** all
4. Aktiveeri **Hostinger (hPanel)** integreerimise
5. Klõpsake **Save Changes**

## Kuidas see toimib

### Lisandatud domeenid (Addon Domains)

Kui te mappate domeeni Ultimate Multisite'is:

1. Integreerimine läheb Hostingeri API-le ja lisab domeeni lisandud domeenina
2. Domeen on konfiguritud viitama teie juurdirektoriumile
3. Kui domeeni mappimist eemaldatakse, integreerimine eemaldab lisandud domeeni automaatselt hPanelist

### Subdomäinid (Subdomains)

Subdomääinide multisite installatsioonide jaoks, kui uus kont (site) luuakse:

1. Integreerimine välja laadib subdomääni osa täielikust domeenist
2. See läheb Hostingeri API-le ja lisab subdomääni
3. Subdomääin on konfiguritud viitama teie juurdirektoriumile

## Oluline märkused

- Integreerimine kasutab Hostingeri REST API-t kommunikatsiooniks kontoiga
- Kui teil on domeenide ja subdomääinide haldamiseks vajalikud lubanded, peab teie API tokenil need.
- Integreerimine ei halda DNS konfiguratsiooni; domeenid peavad olema juba viitatud teie Hostingeri kontile
- API-kutside teostatakse turvaliselt HTTPS abil
- Hoidke oma API tokeni turvaliselt ja jagage seda kunagi avalikult

* Kontrollige, et API token on õige ja ei ole lügim:*
* Kontrollige, kas teie Account ID on õige.
* Veenduge, et teie API tokenil on vajalikud lubanded domeeni haldamiseks.
* Kontrollige, kas teie Hostinger konto on aktiivne ja korralikult toimimas.

### Domeen ei ole lisatud

* Kontrollige Ultimate Multisite logid vigu otsides.
* Veenduge, et domeen ei ole juba Hostinger kontole lisatud.
* Veenduge, et teie Hostinger kontel pole jõudnud oma lisadomeenide piiri.
* Lõpetage kontrolli, et domeen on õigesti viidatud teie Hostinger nameserveritele.

### SSL-sertifikaadi probleemid

* Integraal ei halda SSL-sertifikaadide väljastamist.
* Hostinger pakub SSL-sertifikaade tavaliselt tasuta AutoSSL abil.
* Saate SSL-sertifikaade hallata otses hPanelis **SSL/TLS** menyuskonnas.
* Alternatiivselt kasutage Let's Encrypti ja Hostingeri AutoSSL funktsiooni.

## Tuge

Lisainformatsioonide jaoks Hostingeri integraaliga on soovitatav viidata:

* [Hostinger API Dokumentatsioon](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Dokumentatsioon](/docs)
* [Ultimate Multisite Tuge](https://ultimatemultisite.com/support)
