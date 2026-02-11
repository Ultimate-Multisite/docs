---
title: Enhance Control Panel Integration
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## Overzicht
Enhance is een modern controlepaneel dat krachtige hostingautomatisering en beheermogelijkheden biedt. Deze integratie maakt automatische domein synchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en Enhance Control Panel.

**Gerelateerde discussie:** Zie [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) voor community tips en extra informatie.

## Functies
- Automatische domein synchronisatie wanneer domeinen worden gekoppeld in Ultimate Multisite
- Automatische provisioning van SSL-certificaten via LetsEncrypt wanneer DNS oplost
- Ondersteuning voor subdomeinen voor netwerken die in subdomeinmodus draaien
- Domeinverwijdering wanneer koppelingen worden verwijderd
- Verbinding testen om API-gegevens te verifiëren

## Vereisten

### Systeemvereisten
- Enhance Control Panel geïnstalleerd en toegankelijk
- WordPress Multisite-installatie gehost op of verbonden met een Enhance-server
- Apache-webserver (Enhance ondersteunt momenteel Apache-configuraties; LiteSpeed Enterprise is beschikbaar tegen gereduceerde kosten)

### API-toegang
U moet beheerderstoegang hebben tot het Enhance Control Panel om API-tokens aan te maken.

## Uw API-gegevens verkrijgen

### 1. Maak een API-token

1. Log in op uw Enhance Control Panel als administrator
2. Klik op **Settings** in het navigatiemenu
3. Navigeer naar **Access Tokens**
4. Klik op **Create Token**
5. Geef het token een beschrijvende naam (bijv. "Ultimate Multisite Integration")
6. Wijs de rol **System Administrator** toe
7. Voor de vervaldatum:
   - Laat leeg als u wilt dat het token nooit verloopt
   - Of stel een specifieke vervaldatum in voor beveiligingsdoeleinden
8. Klik op **Create**

Na het aanmaken worden uw **Access Token** en **Organization ID** weergegeven. **Bewaar deze meteen** omdat het token slechts één keer wordt getoond.

### 2. Krijg uw Organisatie-ID

De Organisatie-ID wordt weergegeven op de Access Tokens-pagina in een blauwe informatiebox met het label 'Org ID: {your_id}'.

De Organisatie-ID is een UUID geformatteerd als: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

U kunt ook de Organisatie-ID van een klant vinden door:
1. Ga naar de pagina **Customers**
2. Klik op **Manage customer** voor de betreffende klant
3. Bekijk de URL - de Organisatie-ID zijn de alfanumerieke tekens na `/customers/`

### 3. Krijg uw Server-ID

Om uw Server-ID te vinden (vereist voor domeinoperaties):
1. In het Enhance Control Panel, navigeer naar **Servers**
2. Klik op de server waarop uw WordPress-installatie draait
3. De Server-ID (UUID-formaat) is zichtbaar in de URL of serverdetails
4. U kunt ook de API gebruiken om servers op te sommen:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

De server-ID volgt het UUID-formaat: `00000000-0000-0000-0000-000000000000`

### 4. Krijg uw API-URL

Uw API-URL is uw Enhance Control Panel URL met `/api/` toegevoegd:

```
https://your-enhance-panel.com/api/
```

**Belangrijk:** De `/api/`-pad is vereist. Veelvoorkomende fouten zijn onder meer:
- Gebruik alleen het domein zonder `/api/`
- Gebruik HTTP in plaats van HTTPS (HTTPS is vereist voor beveiliging)

## Configuratie

### Vereiste constanten

Add the following constants to your `wp-config.php` file:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Instellen via Integratie-wizard

1. In uw WordPress-beheer, ga naar **Ultimate Multisite** > **Settings**
2. Navigeer naar het tabblad **Integrations**
3. Zoek **Enhance Control Panel Integration** en klik op **Configuration**
4. De wizard leidt u door de installatie:
   - **Stap 1:** Introductie en overzicht van functies
   - **Stap 2:** Voer uw API-gegevens in (Token, API URL, Server ID)
   - **Stap 3:** Test de verbinding
   - **Stap 4:** Beoordeel en activeer

U kunt kiezen om:
- Laat de wizard de constanten automatisch in uw `wp-config.php`-bestand injecteren
- Kopieer de constante-definities en voeg ze handmatig toe

## Extra WordPress-configuratie

Based on community feedback ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), you may need to configure these additional settings:

### .htaccess-configuratie

If you experience issues with domain mapping:
1. Verwijder het originele Enhance `.htaccess`-bestand
2. Vervang het door het standaard WordPress Multisite `.htaccess`-bestand

### Cookie-constanten

Add these constants to `wp-config.php` to ensure proper cookie handling across mapped domains:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Hoe het werkt

### Wanneer een domein wordt gekoppeld

1. Een gebruiker koppelt een aangepast domein in Ultimate Multisite (of een nieuwe site wordt aangemaakt in subdomeinmodus)
2. De integratie verzendt een POST-verzoek naar Enhance's API: `/servers/{server_id}/domains`
3. Enhance voegt het domein toe aan uw serverconfiguratie
4. Wanneer DNS naar uw server wijst, provisioneert Enhance automatisch een SSL-certificaat via LetsEncrypt
5. Het domein wordt actief met HTTPS

### Wanneer een domein wordt verwijderd

1. Een domeinkoppeling wordt verwijderd in Ultimate Multisite
2. De integratie vraagt Enhance om het domein-ID te vinden
3. Een DELETE-verzoek wordt verzonden naar: `/servers/{server_id}/domains/{domain_id}`
4. Enhance verwijdert het domein uit uw serverconfiguratie

### DNS- en SSL-controle

Ultimate Multisite includes built-in DNS and SSL checking:
- U kunt het controleinterval configureren in **Domain Mapping Settings** (standaard: 300 seconden/5 minuten)
- Het systeem zal DNS-propagatie verifiëren voordat een domein als actief wordt gemarkeerd
- SSL-certificaat geldigheid wordt automatisch gecontroleerd
- Enhance verzorgt SSL-provisioning automatisch, dus handmatige SSL-configuratie is niet vereist

## Setup verifiëren

### Verbind testen

1. In de Integratie-wizard, gebruik de stap **Test Connection**
2. De plugin zal proberen domeinen op uw server op te sommen
3. Een succesbericht bevestigt:
   - API-gegevens zijn correct
   - API-URL is toegankelijk
   - Server-ID is geldig
   - Rechten zijn correct ingesteld

### Na het koppelen van een domein

1. Koppel een testdomein in Ultimate Multisite
2. Controleer de Ultimate Multisite-logs (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Controleer in Enhance Control Panel dat het domein is toegevoegd:
   - Ga naar **Servers** > **Your Server** > **Domains**
   - Het nieuwe domein moet in de lijst verschijnen
4. Zodra DNS is gepropageerd, controleer of SSL automatisch is provisioned

## Probleemoplossing

### API-verbindingproblemen

**Fout: "Kan niet verbinden met Enhance API"**
- Controleer of `WU_ENHANCE_API_URL` `/api/` bevat aan het einde
- Zorg ervoor dat u HTTPS gebruikt, niet HTTP
- Controleer of het Enhance-paneel toegankelijk is vanaf uw WordPress-server
- Controleer of er geen firewallregels de verbinding blokkeren

**Fout: "Enhance API Token niet gevonden"**
- Zorg ervoor dat `WU_ENHANCE_API_TOKEN` is gedefinieerd in `wp-config.php`
- Controleer of het token niet is verwijderd of verlopen in Enhance
- Controleer op typfouten in de tokenwaarde

**Fout: "Server-ID is niet geconfigureerd"**
- Controleer of `WU_ENHANCE_SERVER_ID` is gedefinieerd in `wp-config.php`
- Zorg ervoor dat de Server-ID een geldig UUID-formaat is
- Bevestig dat de server bestaat in uw Enhance-paneel

### Domein niet toegevoegd

**Controleer de logs:**
1. Ga naar **Ultimate Multisite** > **Logs**
2. Filter op **integration-enhance**
3. Zoek naar foutmeldingen die het probleem aangeven

**Veelvoorkomende oorzaken:**
- Ongeldig domeinnaamformaat
- Domein bestaat al in Enhance
- Onvoldoende API-rechten (zorg ervoor dat het token de rol System Administrator heeft)
- Server-ID komt niet overeen met de daadwerkelijke server in Enhance

### SSL-certificaatproblemen

**SSL niet provisioning:**
- Controleer of DNS wijst naar het IP-adres van uw server
- Controleer of het domein correct oplost: `nslookup yourdomain.com`
- Enhance vereist dat DNS oplost voordat het SSL kan provisioneren
- SSL-provisioning duurt meestal 5-10 minuten na DNS-propagatie
- Controleer Enhance Control Panel-logs op SSL-specifieke fouten

**Handmatige SSL-troubleshooting in Enhance:**
1. Ga naar **Servers** > **Your Server** > **Domains**
2. Zoek uw domein en controleer de SSL-status
3. U kunt handmatig SSL-provisioning activeren indien nodig

### DNS-controleinterval

If domains or SSL certificates are taking too long to activate:
1. Ga naar **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Zoek de instelling **DNS Check Interval**
3. Pas aan van de standaard 300 seconden naar een lagere waarde (minimum: 10 seconden)
4. **Opmerking:** Lagere intervallen betekenen meer frequente controles maar hogere serverbelasting

### Authenticatiefouten

**HTTP 401/403 fouten:**
- Regenereren uw API-token in Enhance
- Controleer of het token de rol **System Administrator** heeft
- Controleer of het token niet is verlopen
- Zorg ervoor dat u de juiste Organisatie-ID gebruikt (hoewel het meestal niet vereist is in de URL)

### Loganalyse

Schakel gedetailleerde logging in:

```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Then check logs at:
- Ultimate Multisite-logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance-paneel-logs: Beschikbaar in de admininterface van Enhance

## API-referentie

### Authenticatie

Alle API-verzoeken gebruiken Bearer-token authenticatie:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Veelgebruikte eindpunten

**Servers opvragen:**

```
GET /servers
```

**Domeinen op een server opvragen:**

```
GET /servers/{server_id}/domains
```

**Domein toevoegen:**

```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domein verwijderen:**

```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Volledige API-documentatie

Volledige API-documentatie: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Beste praktijken

### Beveiliging

- **Nooit API-tokens naar versiebeheer committen**
- Sla tokens op in `wp-config.php` die uitgesloten moeten worden van Git
- Gebruik tokens met passende rechten (System Administrator voor volledige integratie)
- Stel vervaldatums voor tokens in voor productieomgevingen
- Roteren tokens periodiek

### Prestaties

- Gebruik het standaard DNS-controleinterval (300 seconden) om overmatige API-aanroepen te voorkomen
- Monitor Enhance-serverbronnen bij grootschalige domeinoperaties
- Overweeg het stapsgewijs toevoegen van domeinen als u veel domeinen tegelijk koppelt

### Monitoring

- Controleer regelmatig de Ultimate Multisite-logs op integratiefouten
- Stel monitoring in voor mislukte domeintoevoegingen
- Controleer of SSL-certificaten correct worden provisioned
- Houd de servercapaciteit en domeinlimieten van Enhance in de gaten

## Aanvullende bronnen

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Zie wiki-pagina "How to Configure Domain Mapping v2"

## Ondersteuning

If you encounter issues:
1. Controleer het probleemoplossingsgedeelte hierboven
2. Bekijk de Ultimate Multisite-logs
3. Raadpleeg de [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Neem contact op met Enhance support voor paneel-specifieke problemen
5. Maak een nieuwe discussie met gedetailleerde foutlogboeken voor community-hulp

## Opmerkingen

- Deze integratie behandelt alleen domein-aliasen; Enhance beheert SSL automatisch
- De integratie ondersteunt zowel aangepaste domeinkoppelingen als subdomein-gebaseerde sites
- Automatische www subdomeincreatie kan worden geconfigureerd in Domain Mapping-instellingen
- Enhance ondersteunt momenteel Apache-configuraties (LiteSpeed Enterprise beschikbaar)
- Domeinverwijdering vanuit Ultimate Multisite verwijdert het domein uit Enhance, maar verwijdert mogelijk niet meteen de bijbehorende SSL-certificaten
