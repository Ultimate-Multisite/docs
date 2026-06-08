---
title: Hostinger (hPanel) Integratie
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integratie

## Overzicht

Hostinger is een populaire webhostingprovider met een modern controlepaneel genaamd hPanel. De Ultimate Multisite Hostinger-integratie maakt automatische domeinsynchronisatie mogelijk tussen Ultimate Multisite en Hostinger's hPanel. Hierdoor kunt u domeinmappingen en subdomeinen automatisch beheren vanuit uw WordPress-admin.

## Functies

- Automatische aanmaak van add-on domeinen in hPanel
- Automatische aanmaak van subdomeinen in hPanel (voor subdomein multisite-installaties)
- Verwijdering van domeinen wanneer mappingen worden verwijderd
- Naadloze integratie met de domain management API van hPanel

## Vereisten

Om de Hostinger-integratie te gebruiken, heeft u nodig:

1. Een Hostinger-account met toegang tot hPanel
2. Een API-token van Hostinger
3. De volgende constanten gedefinieerd in uw `wp-config.php` bestand:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Optioneel kunt u ook definiëren:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Standaard API endpoint
```

## Instructies voor de Opzet

### 1. Genereer uw Hostinger API-token

1. Log in op uw Hostinger-account en ga naar hPanel
2. Navigeer naar **Account Settings** → **API Tokens**
3. Klik op **Create New Token**
4. Geef uw token een beschrijvende naam (bijv. "Ultimate Multisite")
5. Selecteer de benodigde rechten:
   - Domain management
   - Subdomain management
6. Kopieer het gegenereerde token en bewaar het veilig

### 2. Zoek uw Account ID

1. Ga in hPanel naar **Account Settings** → **Account Information**
2. Uw Account ID wordt op deze pagina weergegeven
3. Kopieer en sla deze ID op voor de volgende stap

### 3. Voeg constanten toe aan wp-config.php

Voeg de volgende constanten toe aan uw `wp-config.php` bestand:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Als uw Hostinger-account een ander API-endpoint gebruikt, kunt u dit aanpassen:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Schakel de Integratie in

1. Ga in uw WordPress-admin naar **Ultimate Multisite > Settings**
2. Navigeer naar het tabblad **Domain Mapping**
3. Scroll naar **Host Integrations**
4. Schakel de integratie **Hostinger (hPanel)** in
5. Klik op **Save Changes**

## Hoe Het Werkt

### Add-on Domeinen

Wanneer u een domein mapt in Ultimate Multisite:

1. Stuurt de integratie een verzoek naar de Hostinger API om het domein toe te voegen als add-on domein
2. Het domein wordt geconfigureerd om naar uw root directory te wijzen
3. Wanneer een domeinmapping wordt verwijderd, verwijdert de integratie automatisch het add-on domein uit hPanel

### Subdomeinen

Voor subdomein multisite-installaties, wanneer een nieuwe site wordt aangemaakt:

1. Haalt de integratie het subdomeingedeelte uit het volledige domein
2. Het stuurt een verzoek naar de Hostinger API om het subdomein toe te voegen
3. Het subdomein wordt geconfigureerd om naar uw root directory te wijzen

## Belangrijke Opmerkingen

- De integratie gebruikt de REST API van Hostinger om te communiceren met uw account
- Uw API-token moet de benodigde rechten hebben voor domein- en subdomeinbeheer
- De integratie regelt geen DNS-configuratie; domeinen moeten al worden gewezen op uw Hostinger-account
- API-verzoeken worden veilig via HTTPS verstuurd
- Houd uw API-token veilig en deel het nooit openbaar

## Probleemoplossing

### API-Verbindingsproblemen

- Controleer of uw API-token correct is en niet verlopen is
- Controleer of uw Account ID correct is
- Zorg ervoor dat uw API-token de benodigde rechten heeft voor domeinbeheer
- Controleer of uw Hostinger-account actief en in orde is

### Domein Niet Toegevoegd

- Controleer de Ultimate Multisite logs op foutmeldingen
- Controleer of het domein niet al is toegevoegd aan uw Hostinger-account
- Zorg ervoor dat uw Hostinger-account niet zijn limiet voor add-on domeinen heeft bereikt
- Bevestig dat het domein correct is gewezen op uw Hostinger nameservers

### SSL Certificaatproblemen

- De integratie regelt geen SSL-certificaatuitgifte
- Hostinger biedt doorgaans gratis SSL-certificaten aan via AutoSSL
- U kunt SSL-certificaten direct beheren in hPanel onder **SSL/TLS**
- Gebruik alternatief Let's Encrypt met de AutoSSL-functie van Hostinger

## Ondersteuning

Voor aanvullende hulp met de Hostinger-integratie, kunt u verwijzen naar:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
