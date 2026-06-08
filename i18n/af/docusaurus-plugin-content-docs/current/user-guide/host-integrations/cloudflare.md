---
title: Cloudflare Integrasie
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integrasie

## Oorsig
Cloudflare is 'n leidende *content delivery network* (CDN) en sekuriteitsverskaffer wat help om webwerwe te beskerm en te versnel. Hierdie integrasie maak outomatiese domeinbestuur moontlik tussen Ultimate Multisite en Cloudflare, veral vir *subdomain* multisite-installasies.

## Eienskappe
- Outomatiese *subdomain* skep in Cloudflare
- Ondersteuning vir geproksieerde *subdomain*
- DNS-rekordbestuur
- Verbeterde DNS-rekordweergawes in die Ultimate Multisite admin

## Vereistes
Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Opstel Instruksies

### 1. Kry jou Cloudflare API Sleutel

1. Log in op jou Cloudflare *dashboard*.
2. Gaan na "My Profile" (klik op jou e-posadres in die boonste regterhoek).
3. Kies "API Tokens" uit die spyskaart.
4. Skep 'n nuwe API-token met die volgende toestemminge:
   - Zone.Zone: Lees
   - Zone.DNS: Wysig
5. Kopieer jou API-token.

### 2. Kry jou Zone ID

1. In jou Cloudflare *dashboard*, kies die domein wat jy wil gebruik.
2. Die Zone ID is sigbaar in die "Overview" tab, in die regterbalk onder "API".
3. Kopieer die Zone ID.

### 3. Voeg Konstantes by tot wp-config.php

Voeg die volgende konstantes by tot jou `wp-config.php` lêer:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktiveer die Integrasie

1. In jou WordPress admin, gaan na Ultimate Multisite > Settings.
2. Navigeer na die "Domain Mapping" tab.
3. Skrol na "Host Integrations".
4. Aktiveer die Cloudflare-integrasie.
5. Klik op "Save Changes".

## Hoe Dit Werk

### Subdomain Bestuur

Wanneer 'n nuwe webwerf in 'n *subdomain* multisite-installasie geskep word:

1. Stuur die integrasie 'n versoek na Cloudflare se API om 'n CNAME-rekord vir die *subdomain* by te voeg.
2. Die *subdomain* word standaard gekonfigureer om deur Cloudflare geproksieer te word (dit kan met *filters* verander word).
3. Wanneer 'n webwerf verwyder word, sal die integrasie die *subdomain* van Cloudflare verwyder.

### DNS-Rekordweergawes

Die integrasie verbeter die DNS-rekordweergawes in die Ultimate Multisite admin deur:

1. DNS-rekords direk van Cloudflare te haal.
2. Te wys of rekords geproksieer is of nie.
3. Addisionele inligting oor die DNS-rekords te toon.

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (voorheen genoem "Cloudflare for SaaS") is 'n Cloudflare-funksie wat jou kliënte toelaat om hul eie domeine met SSL op jou multisite-netwerk te gebruik. Dit is die aanbeveelde benadering vir domein-gemapte multisite-installasies wat Cloudflare gebruik, omdat Cloudflare die uitreiking en vernuwing van die SSL-sertifikaat vir elke aangepaste domein outomaties bestuur.

### Hoe dit verskil van die standaard Cloudflare-integrasie

| | Standaard integrasie | Cloudflare Custom Hostnames |
|---|---|---|
| **Doel** | Skep outomaties DNS-rekords vir *subdomain*s | Maak aangepaste (gemapte) domeine met Cloudflare-bestuurde SSL moontlik |
| **Beste vir** | *Subdomain* multisite | Domein-gemapte multisite |
| **SSL** | Word afsonderlik hanteer | Word outomaties deur Cloudflare bestuur |

### Opstel van Cloudflare Custom Hostnames

1. In jou Cloudflare *dashboard*, maak die zone vir jou hoofdomein oop.
2. Gaan na **SSL/TLS > Custom Hostnames**.
3. Voeg 'n *fallback origin* by wat na jou bediener se IP of *hostname* wys.
4. Vir elke kliëntdomein wat in Ultimate Multisite gemap is, voeg 'n Custom Hostname-inskrywing in Cloudflare by. Jy kan hierdie stap outomaties gebruik met die Cloudflare API.
5. Cloudflare stel en vernuwing TLS-sertifikaat vir elke aangepaste *hostname* outomaties sodra die kliënt se DNS na jou netwerk gewys word.

Vir die volledige API-verwysing, kyk na [Cloudflare Custom Hostnames dokumentasie](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminology update
Vanaf Ultimate Multisite v2.6.1 word hierdie funksie in alle *plugin* instellings en etikette verwys as **Cloudflare Custom Hostnames**. Vroëre weergawes het die naam "Cloudflare for SaaS" gebruik, wat die onderliggende Cloudflare produknaam is.
:::

## Belangrike Notas

Vanweë Cloudflare se onlangse opdaterings, is *wildcard proxying* nou beskikbaar vir alle kliënte. Dit beteken dat die standaard Cloudflare DNS-integrasie minder kritiek is vir *subdomain* multisite-installasies as wat dit was, aangesien jy eenvoudig 'n *wildcard* DNS-rekord in Cloudflare kan opstel.

## Probleemoplossing

### API Verbindingsprobleme
- Verifieer dat jou API-token korrek is en die nodige toestemminge het.
- Kontroleer of jou Zone ID korrek is.
- Verseker dat jou Cloudflare rekening die nodige toestemminge het.

### Subdomain Nie Bygevoeg Nie
- Kontroleer die Ultimate Multisite logboeke vir enige foutboodskappe.
- Verifieer dat die *subdomain* nie reeds by Cloudflare bygevoeg is nie.
- Verseker dat jou Cloudflare plan die aantal DNS-rekords ondersteun wat jy skep.

### Proxying Probleme
- As jy nie wil hê dat *subdomain*s geproksieer moet word nie, kan jy die `wu_cloudflare_should_proxy` *filter* gebruik.
- Sommige funksies mag nie korrek werk wanneer dit geproksieer word nie (bv. sekere WordPress admin-funksies).
- Oorweeg om Cloudflare se Page Rules te gebruik om die *cache* vir admin-bladsye te omseil.
