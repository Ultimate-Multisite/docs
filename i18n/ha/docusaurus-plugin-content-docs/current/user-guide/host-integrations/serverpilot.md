---
title: Shigarwar ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Shigarwa na Haɗin Kai (ServerPilot Integration)

## Bayani {#overview}
ServerPilot wuri ne na kayan a cikin cloud don samar da WordPress da wasu shafukan PHP a kan server-server kamar DigitalOcean, Amazon, Google, ko wani girmamawa na server. Wannan haɗin kai yana ba damar daidaita domain-saukar (domain syncing) da kuma sarrafa sertifika SSL tsakanin Ultimate Multisite da ServerPilot ta hanyar kawai.

## Sifofi {#features}
- Daidaitawa na domain-saukar (Automatic domain syncing)
- Sarrafa sertifika SSL tare da Let's Encrypt
- Tana sake samarwa na SSL a lokaci na iya faruwa (Automatic SSL renewal)

## Bukatar Shigo {#requirements}
Wannan ƙa'idojin da ke suka wajaba dole ne su yi bayani a cikin fayil ɗin `wp-config.php` naka:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Shawara na Shigo {#setup-instructions}

### 1. Samu Bayan Aiki (Credentials) na ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Shiga cikin dashboard na ServerPilot naka
2. Ka je "Account" > "API"
3. Ka ƙirƙira sabon API key idan ba ka da shi ba
4. Ka ɗauki Client ID da API Key ɗinka

### 2. Samu Bayan Aiki (App ID) na Kake {#2-get-your-app-id}

1. A dashboard na ServerPilot naka, ka je "Apps"
2. Zaɓi app ɗin inda kake samar da WordPress multisite ɗinka
3. App ID zai bayyana a URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ka Tambaya Bayan Aiki (Constants) zuwa wp-config.php {#3-add-constants-to-wp-configphp}

Ka ƙara wa fayil ɗin `wp-config.php` naka waɗannan constants:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Shiga Haɗin Kai (Enable the Integration) {#4-enable-the-integration}

1. A admin panel na WordPress naka, ka je Ultimate Multisite > Settings
2. Ka tafiya zuwa tab ɗin "Domain Mapping"
3. Ka tura ƙasa zuwa "Host Integrations"
4. Ka ƙara/ka samar da haɗin kai na ServerPilot (Enable the ServerPilot integration)
5. Ka danna "Save Changes"

## Yadda Zai Aiki {#how-it-works}

### Daidaitawa na Domain-saukar (Domain Syncing) {#domain-syncing}

Idan an sanya domain a cikin Ultimate Multisite:

1. Shigarwa (Integration) wannan babban aiki yana riƙewa cikakken jadawalin domen daga ServerPilot.
2. Yana ƙara sabon domen zuwa cikin jadawa (kuma wani www idan ya dace).
3. Yana aiko jadawalin da aka sake gyara ga ServerPilot ta hanyar API.
4. ServerPilot yana sake gyara jadawalin domen na manhajar ku.

### Gudanar da SSL Certificate {#ssl-certificate-management}

Bayan an yi syncing (saka wajen juna):

1. Wannan integration tana samar da AutoSSL ne don manhajar ku.
2. ServerPilot tana gudanar da bayarwar daidaicin SSL certificate da kuma shigarwa ta amfani da Let's Encrypt.
3. ServerPilot tana gudanar da sake gyara (renewal) na SSL certificates a zahiri.

## Binciken SSL Certificate {#ssl-certificate-verification}

Wannan integration an tsara shi don ƙara yawan ƙoƙarin binciken SSL certificate ga ServerPilot, saboda yana iya ɗaukar lokaci don ServerPilot ya ba da kuma shigarwa SSL certificates. A matsayin gaba, zai gwada zuwa 5 lokacin, amma wannan zai iya canza shi ta amfani da filters.

## Magan Rarraba Matala (Troubleshooting) {#troubleshooting}

### Matsalolin Haɗin API {#api-connection-issues}
- Ka tabbata cewa Client ID da API Key na kake amfani da su sahihi ne.
- Ka bincika ko App ID ɗinka ya dace.
- Ka tabbatar cewa asusunka na ServerPilot yana da iyakoki (permissions) da ake bukata.

### Matsalolin SSL Certificate {#ssl-certificate-issues}
- ServerPilot tana buƙatar domen suke da DNS records masu inganci wa server ɗin ku kafin ya ba da SSL certificates.
- Idan ba a ba da SSL certificates, ka bincika idan domen suke da wajen shiga (pointing) na sahihi ga IP address na server ɗinka.
- Zai iya ɗaukar lokaci don ServerPilot ya ba da kuma shigarwa SSL certificates (yawanci 5-15 minti).

### Domen Ba Ya Aka Tambaya {#domain-not-added}
- Ka bincika logs na Ultimate Multisite don wata saƙon sauyi (error messages).
- Ka tabbatar cewa domen ba ya ƙara a cikin ServerPilot ba.
- Ka tabbatar cewa tsarin ServerPilot da kake amfani da shi yana dac da yawan domen da kake ƙara.

### Cire Domain (Domain Removal) {#domain-removal}
- Ayyukan ServerPilot API ba su ba wani hanyar cire domain ɗin guda.
- Idan aka cire haɗin domain a Ultimate Multisite, wannan haɗin zai sake gyara cikin sako na domain a ServerPilot don cire domain da aka cire.
