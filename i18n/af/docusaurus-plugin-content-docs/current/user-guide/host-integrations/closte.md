---
title: Closte Integrasie
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integrasie {#closte-integration}

## Oorsig {#overview}
Closte is 'n beheerde WordPress hosting platform wat op Google Cloud-infrastruktuur gebou is. Hierdie integrasie maak outomatiese domein-sinkronisering en SSL-sertifikaatbestuur moontlik tussen Ultimate Multisite en Closte.

## Eienskappe {#features}
- Outomatiese domein-sinkronisering
- SSL-sertifikaatbestuur
- Ondersteuning vir wildcard-domeine
- Geen konfigurasie nodig as dit op Closte gehost word

## Vereistes {#requirements}
Die volgende konstante moet in jou `wp-config.php` lêer gedefinieer word as jy Closte gebruik:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Hierdie konstante is gewoonlik reeds gedefinieer as jy op Closte host.

## Opstel Instruksies {#setup-instructions}

### 1. Verifieer Jou Closte API Sleutel {#1-verify-your-closte-api-key}

As jy op Closte host, behoort die `CLOSTE_CLIENT_API_KEY` konstante reeds in jou `wp-config.php` lêer gedefinieer te wees. Jy kan dit verifieer deur jou `wp-config.php` lêer te kyk.

### 2. Aktiveer die Integrasie {#2-enable-the-integration}

1. Gaan in jou WordPress-administrasie na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tab
3. Skrol af na "Host Integrations"
4. Aktiveer die Closte-integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk {#how-it-works}

Wanneer 'n domein in Ultimate Multisite gekoppel word:

1. Stuur die integrasie 'n versoek na Closte se API om die domein by jou toepassing by te voeg.
2. Closte hanteer outomaties die voorsiening van SSL-sertifikaat.
3. Wanneer 'n domeinkoppelings verwyder word, sal die integrasie die domein van Closte verwyder.

Die integrasie werk ook met die DNS-kontrole-interval-instelling in Ultimate Multisite, wat jou toelaat om te konfigureer hoe dikwilig die stelsel na DNS-propagasie en SSL-sertifikaatuitgifte kyk.

## Domeinrekord Skepping {#domain-record-creation}

Hierdie integrasie verseker dat wanneer 'n webwerf geskep of geduplikeer word, 'n domeinrekord outomaties geskep word. Dit is veral belangrik vir die Closte-integrasie, aangesien die skepping van die domeinrekord die Closte API aan die gang sit om die domein en SSL-sertifikaat te skep.

## Probleemoplossing {#troubleshooting}

### API Verbindingsprobleme {#api-connection-issues}
- Verifieer dat jou Closte API sleutel korrek is.
- Maak seker dat jou Closte rekening die nodige toestemminge het.

### SSL Sertifikaatprobleme {#ssl-certificate-issues}
- Closte kan 'n rukkie neem om SSL-sertifikaat te gee (gewoonlik 5-10 minute).
- Verifieer dat jou domeine korrek na jou Closte-bediener se IP-adres wys.
- Kontroleer die DNS-rekords vir jou domein om te verseker dat dit korrek gekonfigureer is.

### Domein Nie Bygevoeg Nie {#domain-not-added}
- Kontroleer die Ultimate Multisite logs vir enige foutboodskappe.
- Verifieer dat die domein nie reeds by Closte bygevoeg is nie.
- Maak seker dat die DNS-rekords van jou domein korrek gekonfigureer is.

### DNS Kontrole Interval {#dns-check-interval}
- As SSL-sertifikaat te lank neem om uit te gee, kan jy die DNS-kontrole-interval in die Domain Mapping-instellings aanpas.
- Die standaardinterval is 300 sekondes (5 minute), maar jy kan dit so laag as 10 sekondes stel vir vinniger kontrole tydens toetsing.
