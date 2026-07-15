---
title: ServerPilot integreerimine
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integreerimine

## Üldine ülevaade {#overview}
ServerPilot on pilvteenne, mis võimaldab WordPressi ja teiste PHP veebilehtide hoitamist DigitalOcean, Amazon, Google või millegaugi serverproviideril. See integreerimine võimaldab automaatselt domeenid sünkroonida ja SSL-sertifikaate haldamist Ultimate Multisite ja ServerPilot vahel.

## Funktsioonid {#features}
- Automootne domeenide sünkroonimine
- Let's Encryptiga SSL-sertifikaadeni haldamine
- Automaatiline SSL-sertifikaadi uuendamine

## nõuded {#requirements}
Järgnev konstantsid tuleb definitsiooniks määrata teie `wp-config.php` failis:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Seadistamise juhised {#setup-instructions}

### 1. Täiendavate ServerPilot API-kujutuste saamine {#1-get-your-serverpilot-api-credentials}

1. Logige sisse oma ServerPilot dashboardi
2. Minimeerige "Account" > "API"
3. Luue uusi API-kuju, kui teil seda pole juba
4. Kopya Client ID ja API-kuju

### 2. App ID saamine {#2-get-your-app-id}

1. Oma ServerPilot dashboardis minimeerige "Apps"
2. Valige app, kus teie WordPress multisite on hoitu
3. App ID on nähtav URL-is: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Konstantside lisamine wp-config.php'le {#3-add-constants-to-wp-configphp}

Lisa järgmised konstantsid oma `wp-config.php` faili sekkoni:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Integreerimise aktiveerimine {#4-enable-the-integration}

1. WordPressi administratiivis osas minimeerige Ultimate Multisite > Settings
2. Minimeerige "Domain Mapping" tabist
3. Skroolipara oma "Host Integrations" all
4. Aktiveeri ServerPilot integreerimine
5. Klõpsake "Save Changes"

## Kuidas see toimib {#how-it-works}

### Domeenide sünkroonimine {#domain-syncing}

Kui domeen on Ultimate Multisite'is määratud:

1. Integreerimine võtab praeguse domeenide loend ServerPilotist.
2. Lisatakse uus domeenesse loende (soovitas, kui see on vajalik) www versioon.
3. Päivitatud loend lähetatakse API kaudu ServerPilotile.
4. ServerPiloti uuendab teie rakenduse domeenide loenda.

### SSL-sertifikaadi haldamine {#ssl-certificate-management}

Domeenid synkronimise pärast:

1. Integreerimine aktiveerib automaatselt AutoSSL teie rakenduseks.
2. ServerPilotil on SSL-sertifikaad lahendamise ja paigaldamise eest vastutav Let's Encrypt.
3. ServerPilot haldab ka SSL-sertifikaadide automaatse uuesti võtmise.

## SSL-sertifikaadi kontrollimine {#ssl-certificate-verification}

Integreerim on seadistatud suurendama SSL-sertifikaadide kontrollimise ürituste arvu ServerPilotile, kuna ServerPilotil võib olla aega sertifikaadid lahendamiseks ja paigaldamiseks. Oletuks see proovib kuni 5 korda, kuid seda saab filterite abil muuta.

## Probleemide lahendamine {#troubleshooting}

### API-ühenduse probleemid {#api-connection-issues}
- Kontrollige, kas teie Client ID ja API Key on õigud.
- Kontrollige, kas teie App ID on õige.
- Veenduge, et teie ServerPiloti kontes on vajalikud lubanded.

### SSL-sertifikaadide probleemid {#ssl-certificate-issues}
- ServerPilot nõuab, et domeenil ole validne DNS-registreerim, mis viitab teie serverile enne SSL-sertifikaad lahendamist.
- Kui SSL-sertifikaade ei lahendata, kontrollige, kas teie domeenid on õigutult seadistatud teie serveri IP-adressile.
- ServerPilotil võib olla aega sertifikaadid lahendamiseks ja paigaldamiseks (üldiselt 5–15 minutit).

### Domeeni lisamatus {#domain-not-added}
- Kontrollige Ultimate Multisite logud vigu sõnumite osas.
- Veenduge, et domeen ei ole juba ServerPilotile lisatud.
- Veenduge, et teie ServerPiloti plaan toetab seda domeenide arvu, mida te lisate.

### Domeen eemaldamine {#domain-removal}
- Praegu ei pakku ServerPilot API võimalust eraldi domeene eemalda.
- Kui domeeni ühendus (mapping) eemaldatakse Ultimate Multisite'is, uuendub integreerimine ServerPiloti domeenilist selle eemaldatud domeeni välja eksklüusi.
