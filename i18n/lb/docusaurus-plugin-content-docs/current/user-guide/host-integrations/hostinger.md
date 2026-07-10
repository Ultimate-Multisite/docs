---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## Überblick {#overview}

Hostinger is en populäre webhostingprovider met een moderne beheerspaneel genaamd hPanel. De Ultimate Multisite Hostinger integratie maakt automatische domein-sync tussen Ultimate Multisite en Hostinger's hPanel mogelijk, waardoor je automatisch domeinmappings en subdomeinen direct vanuit je WordPress admin kunt beheren.

## Functies {#features}

- Automatische aanmaak van addon domeinen in hPanel
- Automatische aanmaak van subdomeinen in hPanel (voor subdomein multisite installaties)
- Domein verwijdering wanneer mappings worden verwijderd
- Naadloze integratie met de domain management API van hPanel

## Vereisten {#requirements}

Om de Hostinger integratie te gebruiken, heb je nodig:

1. Een Hostinger account met toegang tot hPanel
2. Een API token van Hostinger
3. De volgende constants gedefinieerd in je `wp-config.php` bestand:

```php
define('WU_HOSTINGER_API_TOKEN', 'jouw_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'jouw_hostinger_account_id');
```

Optioneel kun je ook definiëren:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Installatie-instructies {#setup-instructions}

### 1. Generer je Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Log in op je Hostinger account en ga naar hPanel
2. Ga naar **Account Settings** → **API Tokens**
3. Klik op **Create New Token** (Nieuwe token aanmaken)
4. Geef je token een beschrijvende naam (bijvoorbeeld: "Ultimate Multisite")
5. Selecteer de benodigde rechten:
   - Domain management (Domeinbeheer)
   - Subdomain management (Subdomeinbeheer)
6. Kopieer de gegenereerde token en bewaar deze veilig

### 2. Vind je Account ID {#2-find-your-account-id}

1. In hPanel ga naar **Account Settings** → **Account Information**
2. Je Account ID wordt op deze pagina weergegeven
3. Kopieer en sla deze ID op voor de volgende stap

### 3. Voeg constants toe aan wp-config.php {#3-add-constants-to-wp-configphp}

Voeg de volgende constants toe aan je `wp-config.php` bestand:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Wenn dini Hostinger-Account en anderi API-Endpunkt brucht, chönntsch de aapasize:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integration aktiviere {#4-enable-the-integration}

1. Im WordPress Admin geit's zu **Ultimate Multisite > Settings**
2. Navièrech zur Tab **Domain Mapping**
3. Scrollt nach unten bis zu **Host Integrations**
4. Aktiviere d'Integration **Hostinger (hPanel)**
5. Klickt uf **Save Changes**

## Wie funktioniert das? {#how-it-works}

### Addon Domains {#addon-domains}

Wenn du en Domain in Ultimate Multisite mappsch:

1. D'Integration sendt en Aafrog a Hostinger API, um d'Domain als Addon-Domain hinzuzfüege
2. D'Domain wird so konfiguriert, dass sie uf din Root-Verzeichnis zeigt
3. Wenn du en Domain Mapping entfernst, entfernt d'Integration automatisch d'Addon-Domain us em hPanel

### Subdomains {#subdomains}

Für Subdomain Multisite Installatione, wenn e neui Site erstellt wird:

1. D'Integration extrahiert de Subdomain-Teil us de ganze Domain
2. Sie sendt en Aafrog a Hostinger API, um d'Subdomain hinzuzfüege
3. D'Subdomain wird so konfiguriert, dass sie uf din Root-Verzeichnis zeigt

## Wichtigi Notize {#important-notes}

- D'Integration brucht Hostinger REST API, um mit dim Account z'kommuniziere
- Din API Token muess d'nötige Berechtigunge für Domain- und Subdomain-Management ha
- D'Integration handhabt kei DNS-Konfiguration; Domains müesse scho uf din Hostinger-Account gsetzt si
- API-Aafrog werdet sicher über HTTPS gmacht
- Halt din API Token sicher und teil ihn nie öffentlich

## Fehlerbehebung {#troubleshooting}

### API Connection Issues {#api-connection-issues}

Überprüfe, ob din API Token korrekt isch und nöd abgloffe isch
Überprüef, ob dini Account ID stimmt
Stell sicher, dass din API Token d nötige Berechtigunge für Domain-Management het
Überprüef, ob dini Hostinger-Account aktiv isch und in Ordnung isch

### Domain Nöd hinzugefügt {#domain-not-added}

- Überprüef d Ultimate Multisite Logs uf Fehlermeldige
- Überprüef, ob d Domain nöd scho zu dim Hostinger-Account hinzugefügt isch
- Stell sicher, dass din Hostinger-Account sini Grenze für Addon-Domains nöd erreicht het
- Bestätig, dass d Domain korrekt uf dini Hostinger Nameserver zeigt

### SSL-Zertifikatsprobleme {#ssl-certificate-issues}

- D Integration verwaltet d Ausstellung vo SSL-Zertifikaten nöd
- Hostinger stellt typischerwiis gratis SSL-Zertifikate über AutoSSL zur Verfüegung
- Du chasch SSL-Zertifikate direkt in hPanel unter **SSL/TLS** verwalte
- Alternativ chasch Let's Encrypt mit de AutoSSL-Funktion vo Hostinger bruche

## Support {#support}

Für wiiteri Hilf mit de Hostinger Integration, lueg bitte:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
