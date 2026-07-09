---
title: Cúplaíocht Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Intégrátiú le Cloudways {#cloudways-integration}

## Oibríocht {#overview}
Is é Cloudways platform cloud managed a le fáil duit chun siti WordPress ar chuid deiridh cloud cosúil le DigitalOcean, AWS, Google Cloud, agus eile. Féachfaidh an intégráidiú seo ar bhealach authiú domáin agus ar chuid féachnaí SSL idir Ultimate Multisite agus Cloudways.

## Feicharásanna {#features}
- Authiú domáin authiúil
- Cur na féachnaí SSL
- Suí chomharthaí eile
- Cláthadh DNS chun féachnaí SSL a bheith cinnte

## Ríomhcheisteanna {#requirements}
Is gcurraí seo a bhaint i bhfáineacht ag an t-file `wp-config.php` duit:

```php
define('WU_CLOUDWAYS_EMAIL', 'an_email_do_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'an_api_key_do');
define('WU_CLOUDWAYS_SERVER_ID', 'an_id_do_server');
define('WU_CLOUDWAYS_APP_ID', 'an_id_do_app');
```

Ar chuid optional, leat a bheith ag cur i bhfáineacht:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_domáin_le_comma_a_séat');
```

## Instructiona Set-up {#setup-instructions}

### 1. Déan do Chuid API Credentials Cloudways {#1-get-your-cloudways-api-credentials}

1. Login go curannas (dashboard) Cloudways duit
2. Go dtí "Account" > "API Keys"
3. Déan an API key arís má níl agat ag an sin
4. Clionaigh an email agus an API key duit

### 2. Déan do Server ID agus Application IDs {#2-get-your-server-and-application-ids}

1. I do chuidann Cloudways, go dtí "Servers"
2. Déan chun an server a bhfuil an WordPress multisite agat ar fáil
3. Tá an Server ID ag bheith ag an URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Go dtí "Applications" agus déan chun do application WordPress a bheith ag an sin
5. Tá an App ID ag bheith ag an URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants i wp-config.php {#3-add-constants-to-wp-configphp}

Add an curraí seo i do `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Má tá domáin **eagrúla** (an tairbhealla eile) a bhí ag curtha ar fáil (ag curtha ar fáil an t-aon-chomhairle) a bhí ag curtha ar fáil ar Cloudways aliases:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ná cur isteach an t-aon-chomhairle (wildcard) a bhí ag do chuid ar nós
Ná cur `*.your-network.com` (nóth aon pattern de chuid ar nós) ar WU_CLOUDWAYS_EXTRA_DOMAINS. Déan ar an chúirt [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) seo a bheith agat chun a bheith agat ar chuid certs SSL per-tenant.
:::

### 4. Fáilteadh an Iompair (Enable the Integration) {#4-enable-the-integration}

1. Ag do admin WordPress, rag thar Ultimate Multisite > Settings
2. Róg go dtí an tab "Domain Mapping"
3. Glac ar an cur isteach go dtí "Host Integrations"
4. Fáilteadh an Cloudways integration
5. Cliom ar "Save Changes"

## Conas Tá Sé Ag Réiteach (How It Works) {#how-it-works}

### Synchriú Domáin (Domain Syncing) {#domain-syncing}

Nuair a bhíonn domán ag cur isteach i Ultimate Multisite:

1. Buaileann an t-aon-chomhairle (integration) go dtí gach domán atá ag cur isteach
2. Tá an domán nua ag cur isteach ar chuid (le www if tá sé ag cur isteach)
3. Deiridh sé an llista go léir do Cloudways tríd an API
4. Déan Cloudways sé an alias domáin ar fáil do application

Note: Is gcurann an API de Cloudways a bheith ag cur isteach an llista domáin go léir mar chomh maith, níl é an t-aon-chomhairle (individual) domáin a chur i bhfeicim.

### Cur na Certs SSL (SSL Certificate Management) {#ssl-certificate-management}

Tar é sin atá domáin synchraidh:

1. Buaileann an t-aon-chomhairle go dtí gach domán atá ag cur isteach ar fáil DNS records ag cur isteach ar do server
2. Deiridh sé ar Cloudways a chur i bhfeicim certs Let's Encrypt SSL do domáin sin
3. Déan Cloudways sé an t-aon-chomhairle (issuance) agus an cur na certs SSL

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

An cur chuig éifeachtar an tairiscint ag iarraidh **standard** (ní-wildcard) Let's Encrypt ó Cloudways. Má tá pattern wildcard i `WU_CLOUDWAYS_EXTRA_DOMAINS`, baillíonn an chéad `*.` arís ar an raon SSL — níl aon chuid wildcard a bhfaidh an cur chuig seo a sholáir. Mar é a bheith agat ag úsáid cairtleach wildcard ar Cloudways, beidh tú ag iarraidh a sholáir go mhaith, ach is é sin a dhéanann sé an tairiscint Let's Encrypt ar chuid domaina cúrama (fhéach ar an gníomh seo).

## Extra Domains {#extra-domains}

Baillíonn an constant `WU_CLOUDWAYS_EXTRA_DOMAINS` go hiomlán a chur in iarracht ar domáin **eile** a bhí ag cur chuig ar bhealach. Useann tú é chun:

- Domáin eile a bhí ag cur chuig ar bhealach níl cur chuig ar bhealach Ultimate Multisite (e.g. site mar sholáir a tháth ar an amach, a bhíonn an cur chuig Cloudways ag cur chuig ar bhealach).
- Domáin parkéadach nó staging a bhfuil tú ag iarraidh go mhaith a bheith ar an liosta alias na cur chuig.

**Níl aon chuid constant seo a úsáid chun wildcard subdomain na gcnáthacha do chuid ngrú (e.g. `*.your-network.com`).** Fhéach ar an pitfall SSL wildcard seo le below.

## Important — Wildcard SSL Pitfall {#important--wildcard-ssl-pitfall}

Is é an tairiscint a bhíonn ag cur chuig ar bhealach Cloudways deacairt ag cur chuig ar bhealach a chur iarracht ar chuid wildcard mar `*.your-network.com` i `WU_CLOUDWAYS_EXTRA_DOMAINS`, nó chun cairtleach SSL wildcard Cloudways a sholáir go mhaith ar an gcnáth seo.

**Má dhéanann tú é sin, beidh Cloudways ag iarraidh a bheith óchtaint ar chuid Let's Encrypt ar na domáin cúrama a bhíonn Ultimate Multisite ag cur chuig.** Tá Cloudways ag iarraidh a chur an cairtleach SSL acu ar an amach ar an cur chuig, agus beidh cairtleach wildcard atá ag cur chuig ar bhealach ar an cur chuig ag cur chuig ar bhealach a bhíonn an tairiscint ag cur chuig.

### Cloudways SSL setup cur chuig ar bhealach do ngrú Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Iarann an **SSL Certificate** i application Cloudways, install a **standard Let's Encrypt certificate** a bheith ar `your-network.com` agus `www.your-network.com` an t-amháin — níl aon wildcard.
2. Ná déan `*.your-network.com` (nó aon rócháin subdomain ar chuid na h-netwrík) i `WU_CLOUDWAYS_EXTRA_DOMAINS`. Déan an chontail seo ar **domainí ionta** ach.
3. Creoliad an wildcard per-tenant ar leith an **DNS** an-amháin (un record `A` do `*.your-network.com` a bheith ag cur isteach ar IP an server Cloudways duit) chun subsaites a bheith ag cur isteach. Ba cheana féin SSL do domainí custom a bhaineobh leat ag cur isteach go dtí an chuid.

Má tá do domainí custom na h-tenantaí ag cur isteach gan SSL, léigh an tab SSL i Cloudways. Má tá caillte wildcard certificate ar lá, déan é seo go léir, reois an t-amháin Let's Encrypt standard do domain an t-amháin ach, agus déan an t-amháin a bhaineobh leat ag cur isteach ar aon chontail wildcard ó `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ansin re-trigger (nó coinnigh ar an ceart) domain mapping agus beidh an integration ag cur isteach certificate per-domain againn.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Léigh go bhfuil do email agus key API cosúil leat
- Léigh go bhfuil do ID server agus application cosúil leat
- Déan cinnte go bhfuil do chontail Cloudways ag cur fhéidiríocht ag cur isteach a bhaineobh leat

### Problemaíocht Sertificat SSL {#ssl-certificate-issues}
- Is déanamh cinnte go bhfuil na domáin ag curte caillte DNS (DNS records) go dtí do server primaois ar chuid deireachta a chur in áit an t-sertificat SSL.
- Tá an curte a chiallaíonn na curte DNS ar chuid deireachta primaois primaois ar chuid deireachta a chur in áit an t-sertificat SSL primaois.
- Má níl ag curte caillte sertificat SSL, déan cinnte go bhfuil do domáin ag curte caillte go ceart go dtí an chuid IP de do server.
- **Domáin oibre (custom domains) a bhíonn ag curte marbh le caillte SSL?** Déan ar an tab SSL Certificate i application Cloudways. Má tá sertificat wildcard (a bhí curte marbh, nó a thugann `*.your-network.com`) ag obair, níl Cloudways ag curte sertificate Let's Encrypt do domáin oibre a chur in áit go hiomlán. Rinn an t-sertificat seo le caillte Let's Encrypt stiúir go domáint netwríúil (network domain) leatóg (`your-network.com`, `www.your-network.com`) agus roinnt curte wildcard ó `WU_CLOUDWAYS_EXTRA_DOMAINS` a bhaint as. Ansin, cur isteach an curte marbh (mapping) de réir domáint (or wait for the next one) agus beidh an curte ag curte caillte sertificate do domáin.

### Domán Ní Bhuaigh {#domain-not-added}
- Déan ar an log Ultimate Multisite chun aon rud éifeachtach a bheith agat.
- Déan cinnte go bhfuil an domán níl ag curte marbh le Cloudways.
- Déan cinnte go bhfuil do plan Cloudways ag curte caillte na n-oibre (domains) atá ag curte.
