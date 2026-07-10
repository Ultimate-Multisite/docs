---
title: Cloudways Integrasie
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integrasie {#cloudways-integration}

## Oorsig {#overview}
Cloudways is 'n beheerde cloud-hostingplatform wat jou toelaat om WordPress-webwerwe op verskeie cloud-verskaffers soos DigitalOcean, AWS, Google Cloud, en meer te implementeer. Hierdie integrasie maak outomatiese domein-sinkronisering en SSL-sertifika-bestuur moontlik tussen Ultimate Multisite en Cloudways.

## Eienskappe {#features}
- Outomatiese domein-sinkronisering
- SSL-sertifika-bestuur
- Ondersteuning vir ekstra domeine
- DNS-validasie vir SSL-sertifikate

## Vereistes {#requirements}
Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opsioneel kan jy ook definieer:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Opstel Instruksies {#setup-instructions}

### 1. Kry Jou Cloudways API-gegevens {#1-get-your-cloudways-api-credentials}
1. Log in op jou Cloudways dashboard
2. Gaan na "Account" > "API Keys"
3. Genereer 'n API-sleutel as jy nog nie een het nie
4. Kopieer jou e-posadres en API-sleutel

### 2. Kry Jou Server- en Applikasie-ID's {#2-get-your-server-and-application-ids}
1. In jou Cloudways dashboard, gaan na "Servers"
2. Kies die server waar jou WordPress multisite gehost word
3. Die Server ID is sigbaar in die URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gaan na "Applications" en kies jou WordPress-applikasie
5. Die App ID is sigbaar in die URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Voeg Konstantes by tot wp-config.php {#3-add-constants-to-wp-configphp}
Voeg die volgende konstantes by tot jou `wp-config.php` lêer:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

As jy bykomende **eksterne** domeine (buite jou multisite-netwerk) het wat altyd op die Cloudways aliases-lys gehou moet word:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Moenie jou eie netwerk se wildcard insluit nie
Voeg **nie** `*.your-network.com` (of enige subdomeinpatroon van jou eie netwerk) by tot
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Kyk hieronder na [Belangrik — wildcard SSL-val](#important---wildcard-ssl-val)
om te sien hoekom dit verhoed dat SSL-sertifikate per-tenant uitgereik word.
:::

### 4. Aktiveer die Integrasie {#4-enable-the-integration}
1. In jou WordPress admin, gaan na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tab
3. Skrol na "Host Integrations"
4. Aktiveer die Cloudways integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk {#how-it-works}

### Domein-sinkronisering {#domain-syncing}

Wanneer 'n domein in Ultimate Multisite gemap word:

1. Haal die integrasie al die tans gemapte domeine in.
2. Dit voeg die nuwe domein by tot die lys (sakeens saam met 'n www-weergawe indien van toepassing).
3. Dit stuur die volledige lys na Cloudways via die API.
4. Cloudways het die domein-aliases vir jou applikasie op datum.

Let Wel: Die Cloudways API vereis dat die volledige lys domeine elke keer gestuur word, nie net die byvoeg of verwydering van individuele domeine nie.

### SSL-sertifika-bestuur {#ssl-certificate-management}

Nadat domeine gesink is:

1. Kontroleer die integrasie watter domeine geldige DNS-rekords het wat na jou server wys.
2. Dit stuur 'n versoek na Cloudways om Let's Encrypt SSL-sertifikate vir daardie domeine te installeer.
3. Cloudways hanteer die uitreiking en installering van die SSL-sertifika.

Die integrasie versoek altyd **standaard** (nie-wildcard) Let's Encrypt-sertifikate van Cloudways. As 'n wildcard-patroon in `WU_CLOUDWAYS_EXTRA_DOMAINS` verskaf word, word die leidende `*.` gestrip voordat die SSL-versoek gemaak word — die wildcard self word nooit deur hierdie integrasie geïnstalleer nie. Om 'n wildcard-sertifika op Cloudways te gebruik, sou jy dit handmatig moet installeer, maar dit blokkeer per-domein Let's Encrypt-uitreiking vir gemapte aangepaste domeine (kyk na die val hieronder).

## Eksterne Domeine {#extra-domains}

Die `WU_CLOUDWAYS_EXTRA_DOMAINS` konstante laat jou toe om bykomende **eksterne** domeine te spesifiseer wat altyd op die Cloudways-applikasie se aliases-lys gehou moet word. Gebruik dit vir:

- Eksterne domeine wat nie deur Ultimate Multisite bestuur word nie (bv. 'n aparte bemarkingswebwerf wat dieselfde Cloudways-applikasie deel)
- Geparkeerde of staging-domeine wat jy op die applikasie-aliases-lys wil hou

Moenie hierdie konstante gebruik vir jou eie netwerk se subdomein-wildcard (bv. `*.your-network.com`) nie. Kyk na die wildcard SSL-val hieronder.

## Belangrik — Wildcard SSL-val {#important--wildcard-ssl-pitfall}

'n Algemene fout wanneer jy Cloudways se standaardopstelling volg, is om 'n wildcard soos `*.your-network.com` by `WU_CLOUDWAYS_EXTRA_DOMAINS` by te voeg, of om handmatig 'n Cloudways wildcard SSL-sertifika vir daardie wildcard te installeer.

**As jy dit doen, sal Cloudways weier om Let's Encrypt-sertifikate vir die per-tenant aangepaste domeine wat Ultimate Multisite map, uit te reik.** Cloudways vervang die aktiewe SSL-sertifika op die applikasie elke keer, en 'n voorafbestaande wildcard-sertifika op die applikasie blokkeer die per-domein Let's Encrypt-uitreiking waarop die integrasie staatmaak.

### Aanbevole Cloudways SSL-opstelling vir 'n Ultimate Multisite-netwerk {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Installeer in die Cloudways applikasie se **SSL Certificate** tab 'n **standaard Let's Encrypt-sertifika** wat slegs `your-network.com` en `www.your-network.com` dek — **nie** 'n wildcard nie.
2. Moenie `*.your-network.com` (of enige subdomeinpatroon van jou eie netwerk) in `WU_CLOUDWAYS_EXTRA_DOMAINS` plaas nie. Reserveer daardie konstante vir **eksterne** domeine slegs.
3. Skep die per-tenant subdomein-wildcard slegs op die **DNS**-vlak ('n `A`-rekord vir `*.your-network.com` wat na jou Cloudways-server IP wys) sodat subwerwe oplos. SSL vir individuele gemapte aangepaste domeine word dan outomaties deur die integrasie via Let's Encrypt uitgereik.

As jou tenants se aangepaste domeine vasstak sonder SSL, kyk na die Cloudways SSL tab. As daar 'n wildcard-sertifika aktief is (handmatig geïnstalleer, of wat `*.your-network.com` dek), sal Cloudways nie Let's Encrypt-sertifikate vir individueel gemapte aangepaste domeine uitreik nie. Vervang dit met 'n standaard Let's Encrypt-sertifika wat slegs die hoofnetwerkdomein (`your-network.com`, `www.your-network.com`) dek, en verwyder enige wildcard-inskrywings uit `WU_CLOUDWAYS_EXTRA_DOMAINS`. Her-trigger dan 'n domein-mapping (of wag vir die volgende) en die integrasie sal weer per-domein sertifikate versoek.

## Probleemoplossing {#troubleshooting}

### API-Verbindingsprobleme {#api-connection-issues}
- Verifieer dat jou e-posadres en API-sleutel korrek is
- Kontroleer of jou server- en applikasie-ID's korrek is
- Verseker dat jou Cloudways-rekening die nodige toestemminge het

### SSL-sertifika-probleme {#ssl-certificate-issues}
- Cloudways vereis dat domeine geldige DNS-rekords het wat na jou server wys voordat SSL-sertifikate uitgereik kan word.
- Die integrasie valideer DNS-rekords voordat dit SSL-sertifikate versoek.
- Indien SSL-sertifikate nie uitgereik word nie, kyk of jou domeine korrek na jou server se IP-adres wys.
- **Per-tenant aangepaste domeine vasstak sonder SSL?** Kyk na die Cloudways applikasie se SSL Certificate tab. As 'n wildcard-sertifika (handmatig geïnstalleer, of wat `*.your-network.com` dek) aktief is, sal Cloudways nie Let's Encrypt-sertifikate vir individueel gemapte aangepaste domeine uitreik nie. Vervang dit met 'n standaard Let's Encrypt-sertifika wat slegs die hoofnetwerkdomein (`your-network.com`, `www.your-network.com`) dek en verwyder enige wildcard-inskrywings uit `WU_CLOUDWAYS_EXTRA_DOMAINS`. Her-trigger dan 'n domein-mapping (of wag vir die volgende) en die integrasie sal per-domein sertifikate versoek.

### Domein Nie Bygevoeg Nie {#domain-not-added}
- Kyk na die Ultimate Multisite logs vir enige foutboodskappe.
- Verifieer dat die domein nie reeds by Cloudways bygevoeg is nie.
- Verseker dat jou Cloudways-plan die aantal domeine wat jy byvoeg, ondersteun.
