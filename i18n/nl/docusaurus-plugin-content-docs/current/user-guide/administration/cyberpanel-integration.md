---
title: CyberPanel Integratie
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integratie {#cyberpanel-integration}

Deze handleiding legt uit hoe u de Ultimate Multisite CyberPanel-integratie configureert, zodat gemapte domeinen in uw netwerk automatisch worden toegevoegd (en verwijderd) als virtuele hosts in CyberPanel, met optionele auto-SSL provisioning via Let's Encrypt.

## Wat het doet {#what-it-does}

- Wanneer een domein wordt gemapt in Ultimate Multisite, roept de integratie de CyberPanel API aan om een virtuele host voor dat domein aan te maken.
- Wanneer een domeinmapping wordt verwijderd, roept de integratie de API aan om de corresponderende virtuele host te verwijderen.
- Wanneer auto-SSL is ingeschakeld, triggert de integratie de uitgifte van een Let's Encrypt-certificaat onmiddellijk nadat de virtuele host is aangemaakt.
- Voegt optioneel de `www.` alias toe/verwijderde deze, afhankelijk van uw instelling "Auto-create www subdomain" in de Domain Mapping settings.

## Vereisten {#prerequisites}

- Een draaiende CyberPanel-instantie (v2.3 of later wordt aanbevolen) die bereikbaar is vanaf uw WordPress-server.
- Een bestaande website in CyberPanel die al de root van uw WordPress-netwerk bedient. De integratie voegt nieuwe virtuele hosts toe aan deze server.
- Toegang tot de CyberPanel API is ingeschakeld. Authenticatie gebruikt uw CyberPanel admin gebruikersnaam en wachtwoord.
- Uw DNS-records voor de gemapte domeinen moeten al wijzen naar het IP-adres van uw server voordat auto-SSL een geldig certificaat kan uitgeven.

## Configuratie {#requirements}

De volgende constanten moeten in uw `wp-config.php` bestand worden gedefinieerd:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optioneel kunt u ook definiëren:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standaard: true — Let's Encrypt SSL uitgeven na domeinaanmaak
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standaard: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Gebruikt voor SSL certificaat contact
```

## Installatie-instructies {#setup-instructions}

### 1. Schakel de CyberPanel API in {#1-enable-the-cyberpanel-api}

1. Log in op uw CyberPanel dashboard als beheerder.
2. Ga naar **Security** > **SSL** en bevestig dat SSL actief is op de CyberPanel-interface zelf (vereist voor veilige API-aanroepen).
3. De CyberPanel API is standaard beschikbaar op `https://your-server-ip:8090/api/`. Er zijn geen extra stappen nodig om deze in te schakelen — deze is standaard ingeschakeld voor admin-gebruikers.

### 2. Voeg constanten toe aan wp-config.php {#2-add-constants-to-wp-configphp}

Voeg de volgende constanten toe aan uw `wp-config.php` bestand, vóór de regel `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Om auto-SSL in te schakelen (aanbevolen):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Schakel de integratie in {#3-enable-the-integration}

1. Ga in uw WordPress network admin naar **Ultimate Multisite** > **Settings**.
2. Navigeer naar het tabblad **Domain Mapping**.
3. Scroll naar **Host Integrations**.
4. Schakel de **CyberPanel** integratie in.
5. Klik op **Save Changes**.

### 4. Controleer de connectiviteit {#4-verify-connectivity}

Gebruik de ingebouwde connectietest in de settings wizard:

1. Ga naar **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klik op **Test Connection**.
3. Een succesbericht bevestigt dat de plugin verbinding kan maken met de CyberPanel API en correct kan authenticeren.

## Hoe het werkt {#how-it-works}

### Domain Mapping {#domain-mapping}

Wanneer een domein wordt gemapt in Ultimate Multisite:

1. Stuurt de integratie een `POST` request naar `/api/createWebsite` op uw CyberPanel host.
2. CyberPanel creëert een nieuwe virtuele host voor het domein onder het geconfigureerde pakket.
3. De document root wordt ingesteld om naar de map van uw WordPress-netwerk te wijzen.
4. Wanneer de domeinmapping wordt verwijderd, roept de integratie `/api/deleteWebsite` aan om de virtuele host op te ruimen.

### Auto-SSL {#auto-ssl}

Wanneer `WU_CYBERPANEL_AUTO_SSL` `true` is:

1. Nadat de virtuele host is aangemaakt, roept de integratie `/api/issueSSL` aan voor het domein.
2. CyberPanel vraagt een Let's Encrypt-certificaat aan met behulp van de ACME HTTP-01 challenge.
3. Het certificaat wordt automatisch verlengd door CyberPanel voordat het verloopt.

> **Belangrijk:** DNS moet volledig gepropageerd zijn naar het IP-adres van uw server voordat Let's Encrypt het domein kan valideren. Als de SSL-uitgifte onmiddellijk na mapping mislukt, wacht dan op de DNS-propagatie en trigger de SSL opnieuw vanuit het CyberPanel dashboard onder **SSL** > **Manage SSL**.

### www Subdomein {#www-subdomain}

Als **Auto-create www subdomain** is ingeschakeld in uw Domain Mapping settings, creëert de integratie ook een virtuele host alias voor `www.<domein>` en geeft, wanneer auto-SSL ingeschakeld is, een certificaat uit dat zowel de apex- als de www-variant dekt.

### Email Forwarders {#email-forwarders}

Wanneer de [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon actief is, kan CyberPanel ook klant-email forwarders verstrekken. Forwarders routeren berichten van een domeinadres naar een andere inbox zonder een volledige mailbox aan te maken, wat handig is voor aliases zoals `info@customer-domain.test` of `support@customer-domain.test`.

Voordat u forwarders voor klanten inschakelt:

1. Bevestig dat de CyberPanel constanten hierboven zijn geconfigureerd en dat de connectietest slaagt.
2. Schakel de CyberPanel email provider in de Emails addon settings in.
3. Bevestig dat het klantdomein al bestaat in CyberPanel voordat u de forwarder aanmaakt.
4. Maak een testforwarder aan en stuur een bericht via deze voordat u de functie op productieplannen aanbiedt.

Als de forwardercreatie mislukt, controleer dan eerst de Ultimate Multisite activity logs, en bevestig vervolgens in CyberPanel dat het bron-domein bestaat en dat de API-gebruiker de rechten voor e-mailbeheer heeft.

## Configuratieverwijzing {#configuration-reference}

| Constant | Vereist | Standaard | Beschrijving |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Volledige URL naar uw CyberPanel-instantie, inclusief poort, bijv. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | CyberPanel admin gebruikersnaam |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | CyberPanel admin wachtwoord |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel hosting pakket om toe te wijzen aan nieuwe virtuele hosts |
| `WU_CYBERPANEL_AUTO_SSL` | Nee | `true` | Geef een Let's Encrypt SSL-certificaat uit na domeinaanmaak |
| `WU_CYBERPANEL_PHP_VERSION` | Nee | `PHP 8.2` | PHP-versie voor nieuwe virtuele hosts (moet overeenkomen met een versie die in CyberPanel is geïnstalleerd) |
| `WU_CYBERPANEL_EMAIL` | Nee | — | Contact e-mailadres voor SSL certificaatregistratie |

## Belangrijke opmerkingen {#important-notes}

- De API van CyberPanel gebruikt session-based token authenticatie. De integratie handelt de token-acquisitie automatisch af bij elke API-aanroep.
- Uw CyberPanel admin account moet de rechten hebben om websites aan te maken en te verwijderen.
- CyberPanel draait standaard op poort `8090`. Als uw server een firewall gebruikt, zorg er dan voor dat deze poort toegankelijk is vanaf de WordPress applicatieserver.
- De integratie beheert geen DNS-records. U moet de domein DNS wijzen naar het IP-adres van uw server voordat u het domein in Ultimate Multisite mapt.
- Als u OpenLiteSpeed (OLS) gebruikt, wordt na virtuele hostwijzigingen automatisch een graceful restart getriggerd. Geen handmatige ingreep is nodig.

## Probleemoplossing {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- Controleer of poort `8090` openstaat in de firewall van uw server.
- Bevestig dat de waarde van `WU_CYBERPANEL_HOST` het juiste protocol (`https://`) en de poort bevat.
- Controleer of uw CyberPanel SSL-certificaat geldig is; self-signed certificaten kunnen TLS-verificatiefouten veroorzaken. Stel `WU_CYBERPANEL_VERIFY_SSL` alleen in op `false` in vertrouwde private netwerkomgevingen.

### Authentication Errors {#authentication-errors}

- Bevestig of uw `WU_CYBERPANEL_USERNAME` en `WU_CYBERPANEL_PASSWORD` correct zijn door direct in CyberPanel in te loggen.
- CyberPanel blokkeert accounts na herhaalde mislukte loginpogingen. Controleer **Security** > **Brute Force Monitor** in CyberPanel als er blokkades optreden.

### Domain Not Created {#domain-not-created}

- Controleer de Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) op API-foutmeldingen.
- Controleer of het pakket dat in `WU_CYBERPANEL_PACKAGE` is gedefinieerd, bestaat in CyberPanel (**Packages** > **List Packages**).
- Zorg ervoor dat het domein niet al geregistreerd is als website in CyberPanel — dubbele websitecreatie geeft een foutmelding terug.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- Bevestig dat DNS volledig gepropageerd is: `dig +short your-domain.com` moet het IP-adres van uw server retourneren.
- Let's Encrypt handhaaft limieten. Als u onlangs verschillende certificaten voor hetzelfde domein heeft uitgegeven, wacht dan voordat u het opnieuw probeert.
- Controleer de CyberPanel SSL logs onder **Logs** > **Error Logs** voor details over certificaatuitgiftefouten.
- Als alternatief kunt u de SSL handmatig uitgeven via CyberPanel: **SSL** > **Manage SSL** > selecteer het domein > **Issue SSL**.

## Referenties {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
