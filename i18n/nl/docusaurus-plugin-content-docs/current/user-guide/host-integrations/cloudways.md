---
title: Cloudways-integratie
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways-integratie

## Overzicht {#overview}
Cloudways is een beheerd cloudhostingplatform waarmee je WordPress-sites kunt implementeren bij verschillende cloudproviders zoals DigitalOcean, AWS, Google Cloud en meer. Deze integratie maakt automatische domeinsynchronisatie en beheer van SSL-certificaten mogelijk tussen Ultimate Multisite en Cloudways.

## Functies {#features}
- Automatische domeinsynchronisatie
- Beheer van SSL-certificaten
- Ondersteuning voor extra domeinen
- DNS-validatie voor SSL-certificaten

## Vereisten {#requirements}
De volgende constanten moeten worden gedefinieerd in je `wp-config.php`-bestand:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optioneel kun je ook definiëren:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Installatie-instructies {#setup-instructions}

### 1. Haal je Cloudways API-inloggegevens op {#1-get-your-cloudways-api-credentials}

1. Log in op je Cloudways Dashboard
2. Ga naar "Account" > "API-sleutels"
3. Genereer een API-sleutel als je er nog geen hebt
4. Kopieer je e-mailadres en API-sleutel

### 2. Haal je server- en applicatie-ID's op {#2-get-your-server-and-application-ids}

1. Ga in je Cloudways Dashboard naar "Servers"
2. Selecteer de server waarop je WordPress-multisite wordt gehost
3. De server-ID is zichtbaar in de URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ga naar "Applicaties" en selecteer je WordPress-applicatie
5. De app-ID is zichtbaar in de URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Voeg constanten toe aan wp-config.php {#3-add-constants-to-wp-configphp}

Voeg de volgende constanten toe aan je `wp-config.php`-bestand:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Als je aanvullende **externe** domeinen hebt (buiten je multisite-netwerk) die altijd op de Cloudways-aliassenlijst moeten blijven staan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Neem de wildcard van je eigen netwerk niet op
Voeg **geen** `*.your-network.com` (of enig subdomeinpatroon van je eigen netwerk) toe aan
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Zie [Belangrijk — valkuil met wildcard-SSL](#important--wildcard-ssl-pitfall)
hieronder voor waarom dit voorkomt dat SSL-certificaten per tenant worden uitgegeven.
:::

### 4. Schakel de integratie in {#4-enable-the-integration}

1. Ga in je WordPress-beheer naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad "Domeinkoppeling"
3. Scrol omlaag naar "Hostintegraties"
4. Schakel de Cloudways-integratie in
5. Klik op "Wijzigingen opslaan"

## Hoe het werkt {#how-it-works}

### Domeinsynchronisatie {#domain-syncing}

Wanneer een domein wordt gekoppeld in Ultimate Multisite:

1. De integratie haalt alle momenteel gekoppelde domeinen op
2. Het voegt het nieuwe domein toe aan de lijst (samen met een www-versie indien van toepassing)
3. Het stuurt de volledige lijst via de API naar Cloudways
4. Cloudways werkt de domeinaliassen voor je applicatie bij

Opmerking: De Cloudways API vereist dat elke keer de volledige lijst met domeinen wordt verzonden, niet alleen het toevoegen of verwijderen van afzonderlijke domeinen.

### Beheer van SSL-certificaten {#ssl-certificate-management}

Nadat domeinen zijn gesynchroniseerd:

1. De integratie controleert welke domeinen geldige DNS-records hebben die naar je server verwijzen
2. Het stuurt een verzoek naar Cloudways om Let's Encrypt SSL-certificaten voor die domeinen te installeren
3. Cloudways handelt de uitgifte en installatie van de SSL-certificaten af

De integratie vraagt altijd **standaard** (niet-wildcard) Let's Encrypt-certificaten aan bij
Cloudways. Als een wildcardpatroon wordt opgegeven in `WU_CLOUDWAYS_EXTRA_DOMAINS`, wordt de voorafgaande
`*.` verwijderd vóór de SSL-aanvraag — de wildcard zelf wordt nooit door deze
integratie geïnstalleerd. Om een wildcardcertificaat op Cloudways te gebruiken, zou je het
handmatig moeten installeren, maar dit blokkeert de uitgifte van Let's Encrypt per domein voor gekoppelde aangepaste domeinen
(zie de valkuil hieronder).

## Extra domeinen {#extra-domains}

De constante `WU_CLOUDWAYS_EXTRA_DOMAINS` stelt je in staat aanvullende **externe**
domeinen op te geven die altijd op de aliassenlijst van de Cloudways-applicatie moeten blijven staan. Gebruik deze voor:

- Externe domeinen die niet worden beheerd door Ultimate Multisite (bijv. een aparte marketingsite die dezelfde Cloudways-applicatie deelt)
- Geparkeerde of stagingdomeinen die je op de applicatie-aliassenlijst wilt houden

Gebruik deze constante **niet** voor de subdomein-wildcard van je eigen netwerk
(bijv. `*.your-network.com`). Zie de valkuil met wildcard-SSL hieronder.

## Belangrijk — valkuil met wildcard-SSL {#important--wildcard-ssl-pitfall}

Een veelgemaakte fout bij het volgen van de standaardinstallatie van Cloudways is het toevoegen van een wildcard zoals
`*.your-network.com` aan `WU_CLOUDWAYS_EXTRA_DOMAINS`, of het handmatig installeren van een Cloudways
wildcard-SSL-certificaat voor die wildcard.

**Als je dit doet, zal Cloudways weigeren Let's Encrypt-certificaten uit te geven voor de
aangepaste domeinen per tenant die Ultimate Multisite koppelt.** Cloudways vervangt telkens het actieve
SSL-certificaat op de applicatie, en een reeds bestaand wildcardcertificaat op
de applicatie blokkeert de uitgifte van Let's Encrypt per domein waarop de integratie vertrouwt.

### Aanbevolen Cloudways SSL-installatie voor een Ultimate Multisite-netwerk {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Installeer in het tabblad **SSL-certificaat** van de Cloudways-applicatie een **standaard
   Let's Encrypt-certificaat** dat alleen `your-network.com` en `www.your-network.com` dekt
   — **geen** wildcard.
2. Plaats `*.your-network.com` (of enig subdomeinpatroon van je eigen netwerk) **niet** in
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserveer die constante uitsluitend voor **externe** domeinen.
3. Maak de subdomein-wildcard per tenant alleen op **DNS**-niveau aan (een `A`-record voor
   `*.your-network.com` dat naar het IP-adres van je Cloudways-server verwijst), zodat subsites worden opgelost. SSL
   voor afzonderlijke gekoppelde aangepaste domeinen wordt vervolgens automatisch door de integratie uitgegeven
   via Let's Encrypt.

Als de aangepaste domeinen van je tenants zonder SSL blijven hangen, controleer dan het Cloudways SSL-tabblad. Als daar een
wildcardcertificaat actief is, verwijder het dan, geef opnieuw een standaard Let's Encrypt
certificaat uit voor alleen het hoofdnetwerkdomein, en verwijder alle wildcard-items uit
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Activeer daarna opnieuw een domeinkoppeling (of wacht op de volgende)
en de integratie zal opnieuw certificaten per domein gaan uitgeven.

## Probleemoplossing {#troubleshooting}

### API-verbindingsproblemen {#api-connection-issues}
- Controleer of je e-mailadres en API-sleutel correct zijn
- Controleer of je server- en applicatie-ID's correct zijn
- Zorg ervoor dat je Cloudways Account de benodigde rechten heeft

### SSL-certificaatproblemen {#ssl-certificate-issues}
- Cloudways vereist dat domeinen geldige DNS-records hebben die naar je server verwijzen voordat SSL-certificaten worden uitgegeven
- De integratie valideert DNS-records voordat SSL-certificaten worden aangevraagd
- Als SSL-certificaten niet worden uitgegeven, controleer dan of je domeinen correct naar het IP-adres van je server verwijzen
- **Aangepaste domeinen per tenant blijven zonder SSL hangen?** Controleer het SSL Certificate-tabblad van de Cloudways-applicatie. Als een wildcardcertificaat (handmatig geïnstalleerd, of dekkend voor `*.your-network.com`) actief is, zal Cloudways geen Let's Encrypt-certificaten uitgeven voor individueel gekoppelde aangepaste domeinen. Vervang het door een standaard Let's Encrypt-certificaat dat alleen het hoofdnetwerkdomein dekt (`your-network.com`, `www.your-network.com`) en verwijder alle wildcard-items uit `WU_CLOUDWAYS_EXTRA_DOMAINS`. Activeer daarna opnieuw een domeinkoppeling (of wacht op de volgende) en de integratie zal certificaten per domein aanvragen.

### Domein niet toegevoegd {#domain-not-added}
- Controleer de Ultimate Multisite-logs op eventuele foutmeldingen
- Controleer of het domein niet al aan Cloudways is toegevoegd
- Zorg ervoor dat je Cloudways-plan het aantal domeinen ondersteunt dat je toevoegt
