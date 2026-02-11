---
title: Cloudways-integratie
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways Integration

## Overview
Cloudways is een beheerde cloudhostingplatform dat je toestaat WordPress-sites te implementeren op verschillende cloudproviders zoals DigitalOcean, AWS, Google Cloud, en meer. Deze integratie maakt automatische domeinsynchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en Cloudways.

## Features
- Automatische domeinsynchronisatie
- SSL-certificaatbeheer
- Ondersteuning voor extra domeinen
- DNS-validatie voor SSL-certificaten

## Requirements
The following constants must be defined in your `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optionally, you can also define:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions

### 1. Get Your Cloudways API Credentials

1. Log in op je Cloudways-dashboard
2. Ga naar "Account" > "API Keys"
3. Genereer een API-sleutel als je er nog geen hebt
4. Kopieer je e-mailadres en API-sleutel

### 2. Get Your Server and Application IDs

1. In je Cloudways-dashboard, ga naar "Servers"
2. Selecteer de server waarop je WordPress multisite is gehost
3. De Server ID is zichtbaar in de URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ga naar "Applications" en selecteer je WordPress-toepassing
5. De App ID is zichtbaar in de URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php

Add the following constants to your `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

If you have additional domains that should always be included:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Enable the Integration

1. In je WordPress-beheer, ga naar Ultimate Multisite > Settings
2. Navigeer naar het tabblad "Domain Mapping"
3. Scroll naar beneden naar "Host Integrations"
4. Schakel de Cloudways-integratie in
5. Klik op "Save Changes"

## How It Works

### Domain Syncing

When a domain is mapped in Ultimate Multisite:

1. De integratie haalt alle momenteel toegewezen domeinen op
2. Voegt het nieuwe domein toe aan de lijst (inclusief een www-versie indien van toepassing)
3. Verstuurt de volledige lijst naar Cloudways via de API
4. Cloudways werkt de domeinaliassen voor je toepassing bij

Note: De Cloudways API vereist het verzenden van de volledige lijst domeinen elke keer, niet alleen het toevoegen of verwijderen van individuele domeinen.

### SSL Certificate Management

After domains are synced:

1. De integratie controleert welke domeinen geldige DNS-records hebben die naar je server wijzen
2. Verstuurt een verzoek naar Cloudways om Let's Encrypt SSL-certificaten te installeren voor die domeinen
3. Cloudways beheert de uitgifte en installatie van het SSL-certificaat

## Extra Domains

The `WU_CLOUDWAYS_EXTRA_DOMAINS` constant allows you to specify additional domains that should always be included when syncing with Cloudways. This is useful for:

- Domeinen die niet worden beheerd door Ultimate Multisite
- Wildcard-domeinen (bijv. `*.example.com`)
- Ontwikkelings- of staging-domeinen

## Troubleshooting

### API Connection Issues
- Verifieer dat je e-mailadres en API-sleutel correct zijn
- Controleer dat je server- en applicatie-ID's correct zijn
- Zorg ervoor dat je Cloudways-account de nodige permissies heeft

### SSL Certificate Issues
- Cloudways vereist dat domeinen geldige DNS-records hebben die naar je server wijzen voordat SSL-certificaten worden uitgegeven
- De integratie valideert DNS-records voordat SSL-certificaten worden aangevraagd
- Als SSL-certificaten niet worden uitgegeven, controleer dan of je domeinen correct wijzen naar het IP-adres van je server

### Domain Not Added
- Controleer de Ultimate Multisite-logs op foutmeldingen
- Verifieer dat het domein nog niet aan Cloudways is toegevoegd
- Zorg ervoor dat je Cloudways-plan het aantal domeinen ondersteunt dat je toevoegt
