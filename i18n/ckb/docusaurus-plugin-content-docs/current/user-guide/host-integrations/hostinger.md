---
title: یەکگرتووکردنی Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integration with Hostinger (hPanel) {#hostinger-hpanel-integration}

## Overview {#overview}

Hostinger is een populaire webhostingprovider met een moderne beheerderspaneel genaamd hPanel. De Ultimate Multisite Hostinger integratie maakt automatische domein synchronisatie mogelijk tussen Ultimate Multisite en Hostinger's hPanel, waardoor je automatisch domeinmappings en subdomeinen kunt beheren rechtstreeks vanuit je WordPress admin.

## Features {#features}

- Automatische aanmaak van add-on domeinen in hPanel
- Automatische aanmaak van subdomeinen in hPanel (voor subdomein multisite installaties)
- Domein verwijdering wanneer mappings worden verwijderd
- Naadloze integratie met de domain management API van hPanel

## Requirements {#requirements}

Om de Hostinger integratie te gebruiken, heb je het volgende nodig:

1. Een Hostinger account met toegang tot hPanel
2. Een API token van Hostinger
3. De volgende constants gedefinieerd in je `wp-config.php` bestand:

```php
define('WU_HOSTINGER_API_TOKEN', 'jouw_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'jouw_hostinger_account_id');
```

Optioneel kun je ook definiëren:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Standaard API-endpoint
```

## Setup Instructions {#setup-instructions}

### 1. Genereer uw Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Log in op uw Hostinger account en ga naar hPanel
2. Ga naar **Account Settings** → **API Tokens**
3. Klik op **Create New Token** (Nieuwe token aanmaken)
4. Geef uw token een beschrijvende naam (bijvoorbeeld: "Ultimate Multisite")
5. Selecteer de benodigde permissies:
   - Domain management (Domeinbeheer)
   - Subdomain management (Subdomeinbeheer)
6. Kopieer de gegenereerde token en bewaar deze veilig

### 2. Vind uw Account ID {#2-find-your-account-id}

1. In hPanel, ga naar **Account Settings** → **Account Information** (Accountinformatie)
2. Uw Account ID wordt op deze pagina weergegeven
3. Kopieer en sla dit ID op voor de volgende stap

### 3. Voeg constants toe aan wp-config.php {#3-add-constants-to-wp-configphp}

Voeg de volgende constants toe aan je `wp-config.php` bestand:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

He account Hostinger-a bi API endpoint hafa, tu wi customize karabî:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivekirin Integrasyonê {#4-enable-the-integration}

1. Di admin WordPress-ê xwe de, ji **Ultimate Multisite > Settings** bişira.
2. Binivîsêrê ku ji tabêka **Domain Mapping** (Mapkirina Domain) bişira.
3. Ji berê ji **Host Integrations** (Integrasyonên Host) ji berê binivîsêrê bişira.
4. Integrasyonê **Hostinger (hPanel)**-ê aktivekirin.
5. Li ser **Save Changes** (Guhê Guhên) klik dikirin.

## Çawa Karê Dide {#how-it-works}

### Addon Domains (Domainên Zirîn) {#addon-domains}

Dema ku tu domainê di Ultimate Multisite de map dikî:

1. Integrasyonê raxiya yek ji API-yê Hostinger bişira ku domainê wek domainê zirîn (addon domain) bişire.
2. Domainê ji bo nûneriya serê dorkê we configure kirin.
3. Dema ku mapkirina domainê hatine hatiribin, integrasyonê domainê zirîn ji hPanel-ê otomatikman difirkirin.

### Subdomains (Subdomainên Zirîn) {#subdomains}

Ji bo li ji nûneriyên subdomain multisite, dema ku siteyek nû hatine cihêkirin:

1. Integrasyonê ji qeyda subdomain-ê ji domainê bişire.
2. E raxiya yek ji API-yê Hostinger bişira ku subdomainê bişire.
3. Subdomainê ji bo nûneriya serê dorkê we configure kirin.

## Notên Girîng {#important-notes}

- Integrasyonê ji bo hevkarî karê bi account-ê te ji aliyê API-yê REST yê Hostinger ve dike.
- Token-a API ya te bi hewceya girmenîna domain û subdomain hatine.
- Integrasyonê ji bo configurekirina DNS ne kar e; domainên herî hatine ser account-ê Hostinger-ê we dikarin.
- Xiştinên API bi awayek hûrgulî li ser HTTPS bişire.
- Token-a API ya te hûrgulî parastin bike û heta neparveyek ji aliyê jêr de neberxê.

## Çözdarîna Matî {#troubleshooting}

### Masînalên Pêkirina API (API Connection Issues) {#api-connection-issues}

- دڵنیابیت کە توکن API یەکێتییەکەت دروستە و بەچی منقاس نەکراوە
- چاک بکە کە ID ی تایبداکەت دروستە
- دڵنیا بهێنەوە کە توکن API ئەو ڕێگەپێدانی پێویستەی لەلایەن بەڕێوەبردنی ناوچەکە (domain management) بۆت هەیە
- دڵنیابیت کە بەڕێوەبردنی تایبداکەت (Hostinger account) چالاکە و لە دۆخی باشدایە

### ناونیشانێک زیاد نەکراوە {#domain-not-added}

- لە تۆمارەکانی Ultimate Multisite بۆ هەر هەڵەیەک چاک بکە
- دڵنیا بهێنەوە کە ناوچەکە پێشتر لە تۆمار بەڕێوەبردنی تایبداکەت (Hostinger account) نییە
- دڵنیا بهێنەوە کە تۆمار بەڕێوەبردنی تایبداکەت (Hostinger account) ناتوانێت بگاتە سنوور بۆ ناونیشانەکانی زیادکردن (addon domains)
- پشتڕاست بکەرەوە کە ناوچەکە بە شێوەیەکی دروست بۆ سرڤەرەکانی ناومێر (nameservers) ی تایبداکەت ڕێکراوە

### کێشەی گوازارنی SSL Certificate {#ssl-certificate-issues}

- ئەم یەکگرتووەیە کارێک لە دابینکردنی SSL certificate ناکات
- Hostinger بە شێوەیەکی ئۆتۆماتیک SSL certificates دەدات (AutoSSL)
- دەتوانیت SSL certificates بە شێوەیەکی ڕاستەوخۆ لە hPanel لە خوارەوەدا بەشی **SSL/TLS** بەڕێوەبەر بکەیت
- یان، لەگەڵ تایبەتمەندی AutoSSLی Hostinger لە Let's Encrypt بەکاربهێنە

## پشتگیریک {#support}

بۆ یارمەتی زیاتر لەگەڵ یەکگرتووەی Hostinger، تکایە سەردانی ئەم لینکان بکە:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
