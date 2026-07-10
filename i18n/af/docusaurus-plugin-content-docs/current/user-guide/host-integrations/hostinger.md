---
title: Hostinger (hPanel) Integrasie
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integrasie {#hostinger-hpanel-integration}

## Oorsig {#overview}

Hostinger is 'n gewilde webhosting-verskaarende met 'n moderne beheerdashboard genaamd hPanel. Die Ultimate Multisite Hostinger-integrasie maak outomatiese domein-sinkronisering moontlik tussen Ultimate Multisite en Hostinger se hPanel, wat jou toelaat om domein-kaartleggings en subdomeine outomaties te bestuur direk vanaf jou WordPress-administrasie.

## Eienskappe {#features}

- Outomatiese skep van addon domeine in hPanel
- Outomatiese skep van subdomeine in hPanel (vir subdomein multisite-installasies)
- Verwydering van domeine wanneer kaartleggings verwyder word
- Naatlose integrasie met hPanel se domeinbestuur API

## Vereistes {#requirements}

Om die Hostinger-integrasie te gebruik, het jy nodig:

1. 'n Hostinger-rekening met hPanel-toegang
2. 'n API-token van Hostinger
3. Die volgende konstantes wat in jou `wp-config.php` lêer gedefinieer is:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opsioneel kan jy ook definieer:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Standaard API-eindpunt
```

## Opstel Instruksies {#setup-instructions}

### 1. Genereer Jou Hostinger API-token {#1-generate-your-hostinger-api-token}

1. Log in op jou Hostinger-rekening en skakel hPanel in
2. Navigeer na **Account Settings** → **API Tokens**
3. Klik op **Create New Token**
4. Gee jou token 'n beskrywende naam (bv. "Ultimate Multisite")
5. Kies die nodige toestemminge:
   - Domeinbestuur
   - Subdomeinbestuur
6. Kopieer die gegenereerde token en stoor dit veilig

### 2. Vind Jou Rekening-ID {#2-find-your-account-id}

1. In hPanel, gaan na **Account Settings** → **Account Information**
2. Jou Rekening-ID word op hierdie bladsy getoon
3. Kopieer en stoor hierdie ID vir die volgende stap

### 3. Voeg Konstantes by tot wp-config.php {#3-add-constants-to-wp-configphp}

Voeg die volgende konstantes by tot jou `wp-config.php` lêer:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

As jou Hostinger-rekening 'n ander API-eindpunt gebruik, kan jy dit aanpas:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktiveer die Integrasie {#4-enable-the-integration}

1. In jou WordPress-administrasie, gaan na **Ultimate Multisite > Settings**
2. Navigeer na die **Domain Mapping** tab
3. Skrol na **Host Integrations**
4. Aktiveer die **Hostinger (hPanel)** integrasie
5. Klik op **Save Changes**

## Hoe Dit Werk {#how-it-works}

### Addon Domeine {#addon-domains}

Wanneer jy 'n domein in Ultimate Multisite kaartlegging:

1. Stuur die integrasie 'n versoek na Hostinger se API om die domein as 'n addon domein by te voeg
2. Die domein word gekonfigureer om na jou hoofdirektorie te wys
3. Wanneer 'n domein-kaartlegging verwyder word, verwyder die integrasie outomaties die addon domein uit hPanel

### Subdomeine {#subdomains}

Vir subdomein multisite-installasies, wanneer 'n nuwe webwerf geskep word:

1. Die integrasie ekstraheer die subdomein-deel van die volledige domein
2. Dit stuur 'n versoek na Hostinger se API om die subdomein by te voeg
3. Die subdomein word gekonfigureer om na jou hoofdirektorie te wys

## Belangrike Notas {#important-notes}

- Die integrasie gebruik Hostinger se REST API om met jou rekening te kommunikeer
- Jou API-token moet die nodige toestemminge vir domein- en subdomeinbestuur hê
- Die integrasie hanteer nie DNS-konfigurasie nie; domeine moet reeds na jou Hostinger-rekening gewys wees
- API-versoeke word veilig oor HTTPS gemaak
- Hou jou API-token veilig en deel dit nooit openbaar nie

## Probleemoplossing {#troubleshooting}

### API-Verbindingsprobleme {#api-connection-issues}

- Verifieer dat jou API-token korrek is en nie verloopt nie
- Kontroleer of jou Rekening-ID korrek is
- Maak seker dat jou API-token die nodige toestemminge vir domeinbestuur het
- Verifieer dat jou Hostinger-rekening aktief en in goeie stand is

### Domein Nie Bygevoeg Nie {#domain-not-added}

- Kontroleer die Ultimate Multisite-logboeke vir enige foutboodskappe
- Verifieer dat die domein nie reeds by jou Hostinger-rekening bygevoeg is nie
- Maak seker dat jou Hostinger-rekening nie sy limiet vir addon domeine bereik het nie
- Bevestig dat die domein korrek na jou Hostinger-naamwoorddieners gewys is

### SSL Sertifikaatprobleme {#ssl-certificate-issues}

- Die integrasie hanteer nie die uitgifte van SSL-sertifikaat nie
- Hostinger verskaf tipies gratis SSL-sertifikaat deur AutoSSL
- Jy kan SSL-sertifikaat direk in hPanel onder **SSL/TLS** bestuur
- Alternatief, gebruik Let's Encrypt met Hostinger se AutoSSL-funksie

## Ondersteuning {#support}

Vir bykomende hulp met die Hostinger-integrasie, verwys asseblief na:

- [Hostinger API Dokumentasie](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokumentasie](/)
- [Ultimate Multisite Ondersteuning](https://ultimatemultisite.com/support)
