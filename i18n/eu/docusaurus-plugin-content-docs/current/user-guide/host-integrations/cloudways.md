---
title: Cloudways Integrazioa
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integrazioa

## Deskuntzua
Cloudways da la plataforma hostiguntza cloud gestionatua (managed cloud hosting) den, eta horrek lehen WordPress websteiak DigitalOcean, AWS, Google Cloud eta gehiago beste cloud provider batzuken moduan deploy dezake. Horrek Ultimate Multisite eta Cloudways-ren artean domainio automatikoki sinkronizatzeko eta SSL certificate management egiteko laguntzen du.

## Aeragunak
- Domainio automatikoki sinkronizazioa (Automatic domain syncing)
- SSL certificate management
- Beste domaiak (extra domains) suporta
- SSL certificate-ek DNS bidez biltzen jakinarazpena (DNS validation for SSL certificates)

## Aurrekontuak
Hau dauden konstante hauek zehazteko dugu beharrezkoa da `wp-config.php` daturiko filean:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opsionala da, hauek ere zehazteko:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Aurrekontu-erregistroa (Setup Instructions)

### 1. Hondaritu API Cloudways-ren identifikazioak (API Credentials)

1. Cloudways dashboard-era hondatu (Log in)
2. "Account" > "API Keys"-ra jarraitu
3. Hau ez dut jakin duen API key bat generatu (Generate)
4. Email eta API key-n kopiatu du

### 2. Hondaritu Server eta Aplikazio identifikazioak (Server and Application IDs)

1. Cloudways dashboard-era, "Servers"-ra jarraitu
2. WordPress multisite-a hostatutako servera aukeratu
3. Server ID-k URL-an erabil da: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications"-ra jarraitu eta aplikazio WordPress-a aukeratu
5. App ID-k URL-an erabil da: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Konstante hauek wp-config.php-le gehitu (Add Constants to wp-config.php)

Hau dauden konstante hauek zehazteko dugu `wp-config.php` filean:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ez duzu oso **external** domaiak (sorti-dela zure multisite-ko gerlan edo network-ko hainbatik gaurki jarraitu behar duten) Cloudways alias listan jarraitu behar diren:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Zure network-ko wildcard ez sartu duzu
`*.your-network.com` (edo zure network-aren edoze subdomain pattern bat) `WU_CLOUDWAYS_EXTRA_DOMAINS`-i ez sartu duzu. SSL sertifikatua per-tenant-ek emateko erreguntzen zehazteko, aipatutako [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) testuaren artean dagoela.
:::

### 4. Integrazioa aktibatu

1. WordPress admin-ean, Ultimate Multisite > Settings (Aurrekontuak > Hezkuntza) funtziara jarraitu.
2. "Domain Mapping" (Domaine Mapoak) tabera jarraitu.
3. "Host Integrations" (Host Integrazioak) duen lailariro jarraitu.
4. Cloudways integrazioa aktibatu duzu.
5. "Save Changes" (Gehiagoak saldatu) klik egin.

## Ondo jakinarazteko

### Domain Syncing (Domaine-ak sinkronizatu)

Ultimate Multisite-an domain bat mapatuta dagoenean:

1. Integrazioa aktualment mapatutako domain guztietan bilatzen du.
2. Domain berria listara jodez daudenean (aurrekin www bertsio bat josu behar bada).
3. Listak maila Cloudways-i API beti bidaltzen du.
4. Cloudways-ek aplikazio-ko domain alias-ak update egiten du.

Ez zure domain-ak pertsonalizatu edo erregitu beharko duzu, Cloudways API-k domain guztia beti bidaltzea eskatzen du.

### SSL Certificate Management (SSL Sertifikatua jartzea)

Domain-ak sinkronizatu gtainaren ondoren:

1. Integrazioa DNS record-ek zure serverra jarraitzen duen domain-ak zehazten du.
2. Cloudways-i domain horiek bitartean Let's Encrypt SSL sertifikatua instalatzeko eskatzen du.
3. Cloudways-ek SSL sertifikatua emateko eta instalatzeko jarduerak jartzen du.

Integrazioa daude **standard** (non-wildcard) Let's Encrypt biltzatzenak Cloudways-ekoelectric. `WU_CLOUDWAYS_EXTRA_DOMAINS` arlojian bat wildcard pattern bat ematen ditzake, baina SSL eskatzeko prozesuaren lehen `*.` da gurean ez daikiztenago — wildcard hori ez da instalatzen honekin. Cloudways-ekon wildcard biltzatzenak erabili nahi duzu, manuel instalatu behar duzu, baina horrek mapatutako custom domain-ek Let's Encrypt emateko prozesua blokeatzen du (ezikozia aipoa lehen).

## Extra Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constanta daileduki ditzake gehiago **external** domainak zehazteko, eta horiek Cloudways aplikazioaren alias listan daiteko. Horrek erabili duzu:

- Ultimate Multisite dengekondarekin ez dagoen external domainak (adibidez, Cloudways aplikazio berria jarduten marketing web bat).
- Parkatutako edo staging domainak zehazteko eta horiek aplikazioaren alias listan daiteko.

**Ez** erabili honen constanta hori zure proprieta network-ren subdomain wildcard-ek (adibidez, `*.your-network.com`). Wildcard SSL-ren aipoa lehenari lehenakik ikusi duzu.

## Importante — Wildcard SSL Pitfall

Cloudways-en default setup-a jarraitzen duen horrek bat erraza ez da, baina `WU_CLOUDWAYS_EXTRA_DOMAINS`-i `*.your-network.com` garrantzitsu wildcard bat ematzea edo hori wildcatu-ek Cloudways-eko SSL biltzatze manuel instalatu.

**Hau egin duzu, Cloudways-ek Ultimate Multisite dengekondarekin mapatutako per-tenant custom domainak-erik Let's Encrypt biltzatzenak ez ematen du.** Cloudways aplikazioaren aktibo SSL biltzatzenak lehen daitekean aldatzen du, eta aplikazioan jakinuta dagoen wildcard biltzatzenak hori per-domain Let's Encrypt emateko prozesua blokeatzen du, zein ere integrazioa onartzen du.

### Ultimate Multisite network-eko Cloudways SSL setup rekomendatu

1. Cloudways aplikazioaren **SSL Certificate** taban, `your-network.com` eta `www.your-network.com` (berria-katuta) ere ezaritzitzea esan dituz, lehen aurrera standard Let's Encrypt certificate bat eratu — wildcard ez da.
2. `*.your-network.com` edo zure gerpetuaren subdomainak bat `WU_CLOUDWAYS_EXTRA_DOMAINS`-ean ez hartu behar dira. Horrek **ekstergo** domainak (external domains) beste batzuk ere eratu.
3. Subdomain per-tenant wildcarda hori **DNS** nivelan (zure Cloudways server IP-ra apuntatzen duen `A` record bat `*.your-network.com`-er bitartean) sortu behar da, nahiz eta subdomainak irantzatu sansioen. Per-domain custom domainak dira Let's Encrypt bidezko integrazioaren erabilera SSL emanez.

Honekzuak pertsonalak domainak SSL ez dutelako jardutean jarraitzen ari dira, Cloudways SSL taban eskatze. Honoiz wildcard certificate bat aktibo dago, hori hartu, lehen aurrera standard Let's Encrypt certificate bat eratu osoa gerpetuaren main domainari bitartean, eta `WU_CLOUDWAYS_EXTRA_DOMAINS`-eko edozein wildcard sartura hartu. Horrek domain mapping bat irekitu (edo iragatik gaurkoak jaurtean jaurte) eta integrazioa per-domain certificateak berri eratu hertzera hasten da.

## Problema ezberdinetzat (Troubleshooting)

### API Connection Issues
- Zure email-a eta API key-ak barne dira?
- Zure server eta application ID-ak barne dira?
- Zure Cloudways kontua beharrezko berriak ditu?

### SSL Sertifikat Problemaak
- Cloudways eskerren du, dat domeinen geldige DNS records moeten hebben die naar je server wijzen voordat ze SSL certificaten uitgeven.
- De integratie valideert de DNS records voordat het vraagt om SSL certificaten.
- Als er geen SSL certificaten worden uitgegeven, controleer dan of je domeinen correct naar het IP-adres van je server wijzen.
- **Per-tenant custom domains vastgelopen zonder SSL?** Controleer dan het tabblad SSL Certificate in de Cloudways applicatie. Als een wildcard certificaat (handmatig geïnstalleerd, of dat `*.your-network.com` dekt) actief is, zal Cloudways geen Let's Encrypt certificaten uitgeven voor individueel gemapte custom domeinen. Vervang dit door een standaard Let's Encrypt certificaat dat alleen het hoofdnetwerkdomein (`your-network.com`, `www.your-network.com`) dekt en verwijder eventuele wildcard-entries uit `WU_CLOUDWAYS_EXTRA_DOMAINS`. Start dan een domeinmapping opnieuw (of wacht op de volgende) en de integratie zal per domein certificaten aanvragen.

### Domein Niet Toegevoegd
- Controleer de Ultimate Multisite logs op eventuele foutmeldingen.
- Controleer of het domein niet al is toegevoegd aan Cloudways.
- Zorg ervoor dat je Cloudways plan de hoeveelheid domeinen ondersteunt die je toevoegt.
