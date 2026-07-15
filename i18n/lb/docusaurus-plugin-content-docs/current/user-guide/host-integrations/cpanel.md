---
title: cPanel Integratioun
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integratioun

## Überblick {#overview}
cPanel isch e vo de beliebteste Webhosting-Kontrollpanele, wo vieli Shared und Dedicated Hosting Provider bruche. D'Integration ermöglicht e automatische Domain Sync zwüsche Ultimate Multisite und cPanel, sodass Sie automatisch Domain Aliases und Subdomains zu Ihrem cPanel Account hinzufüge chönd.

## Features {#features}
- Automatisch Erschaffe vo Addon Domains in cPanel
- Automatisch Erschaffe vo Subdomains in cPanel (für Subdomain Multisite Installatione)
- Domain Entferne, wenn Mappings gelöscht wärde

## Requirements {#requirements}
D'folgende Konstante müesse Sie i Ihrer `wp-config.php` Datei definiere:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optional chönd Sie au folgendi definiere:

```php
define('WU_CPANEL_PORT', 2083); // Standard isch 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Standard isch /public_html
```

## Setup Instruktione {#setup-instructions}

### 1. Holen Sie sich Ihre cPanel Credentials {#1-get-your-cpanel-credentials}

1. Erhalte Sie Ihren cPanel Benutzername und Passwort vo Ihrem Hosting Provider
2. Bestimme Sie Ihren cPanel Host (normalerwiis `cpanel.yourdomain.com` oder `yourdomain.com:2083`)

### 2. Konstante zu wp-config.php hinzufüge {#2-add-constants-to-wp-configphp}

Füge d'folgende Konstante i Ihre `wp-config.php` Datei hinzu:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optional chönd Sie de Port und de Root-Verzeichnis aapasse:

```php
define('WU_CPANEL_PORT', 2083); // Ändere, wenn Ihr cPanel en andere Port brucht
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ändere, wenn de Dokument-Root anders isch
```

### 3. D'Integration aktivieren {#3-enable-the-integration}

1. In de WordPress admin, gaats uf Ultimate Multisite > Settings
2. Navige naar het tab "Domain Mapping"
3. Scroll oaf na "Host Integrations"
4. Schakel de cPanel integratie in
5. Klik op "Save Changes"

## Wie funktioniert dat? {#how-it-works}

### Addon Domains {#addon-domains}

Wanneer een domein wordt gemapt in Ultimate Multisite:

1. Stuurt de integratie een verzoek naar de API van cPanel om het domein als addon domain toe te voegen
2. Het domein wordt ingesteld om naar je hoofdmap te wijzen
3. Wanneer een domeinmapping wordt verwijderd, zal de integratie het addon domain uit cPanel verwijderen

### Subdomains {#subdomains}

Voor subdomein multisite installaties, wanneer er een nieuwe site wordt aangemaakt:

1. Extraheert de integratie het subdomein deel van het volledige domein
2. Stuurt hij een verzoek naar de API van cPanel om het subdomein toe te voegen
3. Het subdomein wordt ingesteld om naar je hoofdmap te wijzen

## Belangrijke Notities {#important-notes}

- De integratie gebruikt cPanel's API2 om met je cPanel account te communiceren
- Je cPanel account moet de rechten hebben om addon domains en subdomains toe te voegen
- Sommige hostingproviders kunnen het aantal addon domains of subdomains dat je kunt aanmaken beperken
- De integratie behandelt geen DNS-configuratie; je moet je domeinen nog steeds naar het IP-adres van je server wijzen

## Probleemoplossing {#troubleshooting}

### API Connectieproblemen {#api-connection-issues}
- Controleer of je cPanel gebruikersnaam en wachtwoord correct zijn
- Controleer of je cPanel host correct is en toegankelijk
- Zorg ervoor dat je cPanel account de benodigde rechten heeft
- Probeer het volledige URL voor de host te gebruiken (bijv. `https://cpanel.yourdomain.com`)

### Domein Niet Toegevoegd {#domain-not-added}
- Controleer de Ultimate Multisite logs op foutmeldingen
- Controleer of het domein niet al is toegevoegd aan cPanel
- Zorg ervoor dat je cPanel account zijn limiet voor addon domains of subdomains nog niet heeft bereikt

### SSL Zertifikatsprobleme {#ssl-certificate-issues}
- D'Integration handhabt d'Uusgaab vo SSL-Zertifikaten nöd.
- Sie müesse cPanel's SSL/TLS Tools oder d'AutoSSL-Funktion bruche, um SSL-Zertifikate für dini Domains uszgäh.
- Alternativ chönntet Sie en Service wie Let's Encrypt mit cPanel's AutoSSL nutze.
