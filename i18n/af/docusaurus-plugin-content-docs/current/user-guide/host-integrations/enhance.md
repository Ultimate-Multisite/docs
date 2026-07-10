---
title: Verbeter Kontrolepaneel-integrasie
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Verbeter Beheerdashboard-Integrasie {#enhance-control-panel-integration}

## Oorsig {#overview}
Enhance is 'n moderne beheerdashboard wat kragtige hosting-automatisering en bestuursvermoë beskik. Hierdie integrasie maak outomatiese domein-sinkronisering en SSL-sertifikaatbestuur moontlik tussen Ultimate Multisite en Enhance Control Panel.

**Verwante Bespreking:** Kyk na [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) vir gemeenskapswenke en addisionele inligting.

## Eienskappe {#features}
- Outomatiese domein-sinkronisering wanneer domeine in Ultimate Multisite gekoppel word
- Outomatiese SSL-sertifikaatvoorsiening via LetsEncrypt wanneer DNS opgelos word
- Subdomeinondersteuning vir netwerke wat in subdomeinmodus loop
- Domeinverwydering wanneer koppeling(s) verwyder word
- Verbindingsbeoordeling om API-wagwoorde te verifieer

## Vereistes {#requirements}

### Sisteemvereistes {#system-requirements}
- Enhance Control Panel geïnstalleer en toeganklik
- WordPress Multisite-installasie gehost op of gekoppel aan 'n Enhance-bediener
- Apache webbediener (Enhance ondersteun tans Apache-konfigurasies; LiteSpeed Enterprise is teen 'n verminderde koste beskikbaar)

### API-Toegang {#api-access}
Jy moet administrateurtoegang tot die Enhance Control Panel hê om API-tokens te skep.

## Jou API-wagwoorde Verkry {#getting-your-api-credentials}

### 1. Skep 'n API-token {#1-create-an-api-token}

1. Log in op jou Enhance Control Panel as administrateur
2. Klik op **Settings** in die navigasieblaaikonde
3. Navigeer na **Access Tokens**
4. Klik op **Create Token**
5. Gee die token 'n beskrywende naam (bv. "Ultimate Multisite Integration")
6. Weken die **System Administrator** rol toe
7. Vir die vervaldatum:
   - Laat dit leeg indien jy wil hê dat die token nooit moet verval
   - Of stel 'n spesifieke vervaldatum vir sekuriteitsdoeleindes
8. Klik op **Create**

Nadat die skep gebeur het, sal jou **Access Token** en **Organization ID** vertoon word. **Stoor hierdie onmiddellik op** aangesien die token slegs een keer vertoon word.

### 2. Kry Jou Organization ID {#2-get-your-organization-id}

Die Organization ID word op die Access Tokens-blaaikonde in 'n blou inligtingboks gemerk as "Org ID: {your_id}".

Die Organization ID is 'n UUID wat so lyk: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Jy kan ook 'n kliënt se Organization ID vind deur:
1. Gaan na die **Customers** blaaikonde
2. Klik op **Manage customer** vir die relevante kliënt
3. Kyk na die URL - die Organization ID is die alfanumeriese karakters na `/customers/`

### 3. Kry Jou Server ID {#3-get-your-server-id}

Om jou Server ID te vind (verpligtend vir domeinoppdragte):

1. In die Enhance Control Panel, navigeer na **Servers**
2. Klik op die bediener waar jou WordPress-installasie loop
3. Die Server ID (UUID-formaat) sal in die URL of bedienerbesonderhede sigbaar wees
4. Alternatief kan jy die API gebruik om bedieners te lys:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Die bediener-ID volg die UUID-formaat: `00000000-0000-0000-0000-000000000000`

### 4. Kry Jou API URL {#4-get-your-api-url}

Jou API URL is jou Enhance Control Panel URL met `/api/` bygevoeg:

```
https://your-enhance-panel.com/api/
```

**Belangrik:** Die `/api/` pad is verpligtend. Algemene foute sluit in:
- Net die domein gebruik sonder `/api/`
- HTTP gebruik in plaas van HTTPS (HTTPS is verpligtend vir sekuriteit)

## Konfigurasie {#configuration}

### Vereiste Konstantes {#required-constants}

Voeg die volgende konstantes by jou `wp-config.php` lêer by:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Opstelling via Integrasie Wondskappe {#setup-via-integration-wizard}

1. In jou WordPress-administrasie, gaan na **Ultimate Multisite** > **Settings**
2. Navigeer na die **Integrations** blaaikonde
3. Vind **Enhance Control Panel Integration** en klik op **Configuration**
4. Die wondskappe sal jou deur die opstelling lei:
   - **Step 1:** Inleiding en funksie-oorsig
   - **Step 2:** Voer jou API-wagwoorde in (Token, API URL, Server ID)
   - **Step 3:** Beoordeel die verbinding
   - **Step 4:** Hersien en aktiveer

Jy kan kies om:
- Laat die wondskappe die konstantes outomaties in jou `wp-config.php` lêer insit
- Die konstante-definisiëne te kopieer en dit handmatig by te voeg

## Addisionele WordPress Konfigurasie {#additional-wordpress-configuration}

Gebaseer op gemeenskapsingrygging ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), mag jy hierdie addisionele instellings moet konfigureer:

### .htaccess Konfigurasie {#htaccess-configuration}

Indien jy probleme met domein-koppeling ervaar:
1. Verwyder die oorspronklike Enhance `.htaccess` lêer
2. Vervang dit met die standaard WordPress Multisite `.htaccess` lêer

### Koekie-Konstantes {#cookie-constants}

Voeg hierdie konstantes by `wp-config.php` by om korrekte koekiehantering oor gekoppelde domeine te verseker:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Hoe Dit Werk {#how-it-works}

### Wanneer 'n Domein Gekoppel Word {#when-a-domain-is-mapped}

1. 'n Gebruiker koppel 'n aangepaste domein in Ultimate Multisite (of 'n nuwe webwerf word in subdomeinmodus geskep)
2. Die integrasie stuur 'n POST-versoek na Enhance se API: `/servers/{server_id}/domains`
3. Enhance voeg die domein by jou bedienerkonfigurasie
4. Wanneer DNS na jou bediener opgelos word, voorsien Enhance outomaties 'n SSL-sertifikaat via LetsEncrypt
5. Die domein word aktief met HTTPS

### Wanneer 'n Domein Verwyder Word {#when-a-domain-is-removed}

1. 'n Domein-koppeling word in Ultimate Multisite verwyder
2. Die integrasie vra Enhance om die domein se ID te vind
3. 'n DELETE-versoek word gestuur na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance verwyder die domein van jou bedienerkonfigurasie

### DNS en SSL Beoordeling {#dns-and-ssl-checking}

Ultimate Multisite sluit ingeboude DNS- en SSL-beoordeling in:
- Jy kan die beoordelingsinterval in **Domain Mapping Settings** konfigureer (standaard: 300 sekondes/5 minute)
- Die stelsel sal DNS-verspreiding verifieer voordat dit 'n domein as aktief merk
- SSL-sertifikaatgeldigheid word outomaties beoordeel
- Enhance hanteer SSL-voorsiening outomaties, dus is handmatige SSL-konfigurasie nie nodig nie

## Opstelling Verifieer {#verifying-setup}

### Beoordeel die Verbinding {#test-the-connection}

1. Gebruik die **Test Connection** stap in die Integrasie Wondskappe
2. Die plugin sal probeer om domeine op jou bediener te lys
3. 'n Suksesboodskap bevestig:
   - API-wagwoorde is korrek
   - API URL is toeganklik
   - Server ID is geldig
   - Verhasilrighte is korrek ingestel

### Na Koppeling van 'n Domein {#after-mapping-a-domain}

1. Koppel 'n toetsdomein in Ultimate Multisite
2. Kontroleer die Ultimate Multisite-logboeke (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifieer in Enhance Control Panel dat die domein bygevoeg is:
   - Gaan na **Servers** > **Jou Bediener** > **Domains**
   - Die nuwe domein behoort in die lys te verskyn
4. Sodra DNS versprei, verifieer dat SSL outomaties voorsien is

## Probleemoplossing {#troubleshooting}

### API Verbindingsprobleme {#api-connection-issues}

**Fout: "Failed to connect to Enhance API"**
- Verifieer dat `WU_ENHANCE_API_URL` `/api/` aan die einde insluit
- Verseker dat jy HTTPS gebruik, nie HTTP nie
- Kontroleer of die Enhance paneel vanaf jou WordPress-bediener toeganklik is
- Verifieer dat daar geen firewall-reëls is wat die verbinding blokkeer nie

**Fout: "Enhance API Token not found"**
- Verseker dat `WU_ENHANCE_API_TOKEN` in `wp-config.php` gedefinieer is
- Verifieer dat die token nie in Enhance verwyder of verloopt het nie
- Kontroleer vir spelfoute in die token-waarde

**Fout: "Server ID is not configured"**
- Verifieer dat `WU_ENHANCE_SERVER_ID` in `wp-config.php` gedefinieer is
- Verseker dat die Server ID 'n geldige UUID-formaat is
- Bevestig dat die bediener in jou Enhance paneel bestaan

### Domein Nie Bygevoeg Nie {#domain-not-added}

**Kontroleer die logboeke:**
1. Gaan na **Ultimate Multisite** > **Logs**
2. Filter op **integration-enhance**
3. Soek na foutboodskappe wat die probleem aandui

**Algemene oorsake:**
- Ongeldige domeinnaamformaat
- Domein bestaan reeds in Enhance
- Onvoldoende API-verhasilregte (verseker dat die token die System Administrator rol het)
- Server ID pas nie by die werklike bediener in Enhance nie

### SSL Sertifikaatprobleme {#ssl-certificate-issues}

**SSL word nie voorsien nie:**
- Verifieer dat DNS na jou bediener se IP-adres wys
- Kontroleer of die domein korrek opgelos word: `nslookup joudomein.com`
- Enhance vereis dat DNS opgelos word voordat dit SSL kan voorsien
- SSL-voorsiening neem tipies 5-10 minute na DNS-verspreiding
- Kontroleer Enhance Control Panel logboeke vir SSL-spesifieke foute

**Handmatige SSL-probleemoplossing in Enhance:**
1. Gaan na **Servers** > **Jou Bediener** > **Domains**
2. Vind jou domein en kyk na sy SSL-status
3. Jy kan handmatig SSL-voorsiening aanvuur indien nodig

### DNS Beoordelingsinterval {#dns-check-interval}

Indien domeine of SSL-sertifikaat te lank neem om te aktiveer:
1. Gaan na **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Vind die **DNS Check Interval** instelling
3. Pas aan van die standaard 300 sekondes na 'n laer waarde (minimum: 10 sekondes)
4. **Let Wel:** Laer intervalle beteken meer gereelde kontrole, maar 'n hoër bedienerlas

### Wagwoordfoute {#authentication-errors}

**HTTP 401/403 foute:**
- Genereer jou API-token in Enhance
- Verifieer dat die token die **System Administrator** rol het
- Kontroleer of die token nie verloop het nie
- Verseker dat jy die korrekte Organization ID gebruik (hoewel dit tipies nie in die URL vereis word nie)

### Log-Analise {#log-analysis}

Skakel gedetailleerde logboeking in:
```php
// Voeg by wp-config.php vir verbeterde probleemoplossing
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kontroleer dan logboeke by:
- Ultimate Multisite logboeke: **Ultimate Multisite** > **Logs**
- WordPress probleemoplossingslog: `wp-content/debug.log`
- Enhance paneel logboeke: Beskikbaar in Enhance se administrasie-koppelvlak

## API Verwysing {#api-reference}

### Wagwoord {#authentication}
Alle API-versoeke gebruik Bearer-token-wagwoord:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Algemene Gebruikte Endpoints {#common-endpoints-used}

**Lys Bedieners:**
```
GET /servers
```

**Lys Domeine op 'n Bediener:**
```
GET /servers/{server_id}/domains
```

**Voeg 'n Domein By:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Verwyder 'n Domein:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Volledige API Dokumentasie {#full-api-documentation}
Volledige API-dokumentasie: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Beste Praktyke {#best-practices}

### Sekuriteit {#security}
- **Kom nooit API-wagwoorde na die beheerde lêer nie**
- Stoor wagwoorde in `wp-config.php` wat uit Git uitgesluit moet word
- Gebruik wagwoorde met toepaslike verhasilregte (System Administrator vir volle integrasie)
- Stel token-vervaldatums vir produksieomgewings
- Roeteer wagwoorde periodiek

### Prestasie {#performance}
- Gebruik die standaard DNS-beoordelingsinterval (300 sekondes) om oormatige API-aanroepe te vermy
- Monitor Enhance bedienerhulpbronne wanneer jy groot skaal domeinoppdragte uitvoer
- Oorweeg om domeinbyvoegings te versprei as jy baie domeine te en een keer koppel

### Monitoring {#monitoring}
- Kontroleer gereeld Ultimate Multisite logboeke vir integrasie-foute
- Stel monitoring op vir mislukte domeinbyvoegings
- Verifieer dat SSL-sertifikaat korrek voorsien word
- Hou oë op Enhance bedienerkapasiteit en domeingrense

## Addisionele Hulpbronne {#additional-resources}

- **Enhance Amptelike Dokumentasie:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokumentasie:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Gemeenskapsforum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Bespreking:** [Issue #265 - Enhance Integrasie Wenke](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domein-Koppelgids:** Kyk na die wiki-blaaikonde "How to Configure Domain Mapping v2"

## Ondersteuning {#support}

Indien jy probleme ondervind:
1. Kontroleer die Probleemoplossing-afdeling hierbo
2. Hersien die Ultimate Multisite logboeke
3. Raadpleeg die [GitHub Besprekings](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontak Enhance ondersteuning vir paneel-spesifieke kwessies
5. Skep 'n nuwe bespreking met gedetailleerde foutlogboeke vir gemeenskapsassistentie

## Notas {#notes}

- Hierdie integrasie hanteer slegs domein-alias; Enhance bestuur SSL outomaties
- Die integrasie ondersteun beide aangepaste domein-koppeling en subdomein-gebaseerde webwerwe
- Outomatiese www subdomein-skepping kan in Domein-Koppelsettings gekonfigureer word
- Enhance ondersteun tans Apache-konfigurasies (LiteSpeed Enterprise beskikbaar)
- Domeinverwydering uit Ultimate Multisite sal die domein uit Enhance verwyder, maar mag nie die geassosieerde SSL-sertifikaat onmiddellik verwyder nie
