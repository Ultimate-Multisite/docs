---
title: Kukonseka kwa ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Umuwamba wa ServerPilot {#serverpilot-integration}

## Kufunika (Overview) {#overview}
ServerPilot ndi service la cloud lomwe limapereka kupeza WordPress ndi zinthu zina za PHP pa servers monga DigitalOcean, Amazon, Google, kapena wopereka wina. Kufuna kuli ndikukonza kukhazikitsa domain kwawo ndi kusunga SSL certificate m'moyo mwa Ultimate Multisite ndi ServerPilot.

## Mafunso (Features) {#features}
- Kukhazikitsa domain kwawo kwa kujambula (Automatic domain syncing)
- Kusunga SSL certificate ndi Let's Encrypt
- Kukhazikitsa upatanira kwa SSL (Automatic SSL renewal)

## Zomwe Zifunika (Requirements) {#requirements}
Mwachidule, zinthu zina zomwe zimene m'file yanu ya `wp-config.php` mukuwoneka:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Mwayi Woperekera (Setup Instructions) {#setup-instructions}

### 1. Kupereka Zomwe Zifunika za ServerPilot API {#1-get-your-serverpilot-api-credentials}

1. Kukhala m'dashboard ya ServerPilot yanu
2. Kodi kuenda ku "Account" > "API"
3. Kufuna kukhazikitsa key yanu pa API kungakhale muli ndi imodzi
4. Kopya Client ID ndi API Key yanu

### 2. Kupereka App ID Yanu {#2-get-your-app-id}

1. M'dashboard ya ServerPilot yanu, Kodi kuenda ku "Apps"
2. Kukhala m'app womwe WordPress multisite yanu ikulimbikira
3. App ID imakwoneka m'URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Kupereka Constants mu wp-config.php {#3-add-constants-to-wp-configphp}

Kupereka constants zina zomwe zifunika mu file yanu ya `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Kukhazikitsa Integration (Enable the Integration) {#4-enable-the-integration}

1. M'admin ya WordPress yanu, Kodi kuenda Ultimate Multisite > Settings
2. Kodi kuenda m'tab ya "Domain Mapping"
3. Kodi kupita lero ku "Host Integrations"
4. Kukhazikitsa integration ya ServerPilot
5. Kodi kuenda "Save Changes"

## Kuti Imene Kuti Imene (How It Works) {#how-it-works}

### Kukhazikitsa Domain kwawo (Domain Syncing) {#domain-syncing}

Pamene domain imaperekedwa m'Ultimate Multisite:

1. Kufufu kuingana (integration) kulipeza list ya domains iliyonseka kwa ServerPilot.
2. Kuliingiza domain mpya ku list (kufunga na toleo la www ikiwepo au la kutolewa).
3. Kuliita list iliyosongeka kwake ServerPilot kupitia API.
4. ServerPilot kulipeza list ya domains kwa ajili ya application yako.

### Usimamizi wa SSL Certificate {#ssl-certificate-management}

Baadapo domains zikufungwa (synced):

1. Kufunga kiotomatiki AutoSSL kwa application yako.
2. ServerPilot kuliita upatikanaji wa SSL certificate na kuweka (install) kwa kutumia Let's Encrypt.
3. ServerPilot kuliita pia kufanya urefu wa mwaka wa SSL certificates.

## Uthibitishaji wa SSL Certificate {#ssl-certificate-verification}

Kufunga (integration) kuliwekwa kuti kuongeza idadi ya majaribio ya uthibitishaji wa SSL certificate kwa ServerPilot, chifukwa chonde chimene ServerPilot chikafuna kuchangamiza na kuweka SSL certificates. Kwa kawaida, kuliingiza mpaka mara 5, koma ukufanya kuti ubadize kupitia filters.

## Kufanya Matatizo (Troubleshooting) {#troubleshooting}

### Matatizo ya API Connection {#api-connection-issues}
- Chuka kuti Client ID yako na API Key zikholedwa.
- Chuka kuti App ID yako ikholedwa.
- Chuka kuti akaunti yako ya ServerPilot inayo ruhumu (permissions) iliyofunika.

### Matatizo ya SSL Certificate {#ssl-certificate-issues}
- ServerPilot ikufuna kuti domains zithibe DNS records zilizothole kwa server yako mosho pansi pa kuliita SSL certificates.
- Ngati SSL certificates sikufungwa, chuka kuti domains zako zikufunga vizuri kwa IP address ya server yako.
- Chonde chimene ServerPilot chikafuna kuchangamiza na kuweka SSL certificates (kuchangamiza 5-15 minutes).

### Domain Sikufungwa {#domain-not-added}
- Chuka Ultimate Multisite logs kuti chifukwa cha makosa yoyote.
- Chuka kuti domain sikali kufungwa kwa ServerPilot pansi pa kuliita.
- Chuka kuti plan ya ServerPilot yako ikufunika idadi la domains unalipia kuingiza.

### Kutsira Domain (Domain Removal) {#domain-removal}
- Muli, ServerPilot API si mpamvu woshipa uwo kupanga domain muli.
- Lipo lilo kupanga mapangidwe a domain muli m'Ultimate Multisite, kuli kukhala kuupatira list ya domain muli m'ServerPilot kuti upate kuondoka domain yomwe yali yopanga.
