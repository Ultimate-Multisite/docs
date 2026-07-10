---
title: Còmhlaidheachd Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration {#cloudways-integration}

## Aims (Overview) {#overview}
Cloudways is a platform where ye can deploy yer WordPress sites on different cloud providers like DigitalOcean, AWS, Google Cloud, and more. This integration lets you sync yer domain automatically and manage SSL certificates between Ultimate Multisite and Cloudways.

## Features {#features}
- Syncing domain an-d automatic
- Manage SSL certificates
- Support for extra domains
- DNS validation for SSL certificates

## Requirements {#requirements}
Feuck following constants sin yer `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optional, ye can also define:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions {#setup-instructions}

### 1. Ghràdh Eairte API Credentials Cloudways-a {#1-get-your-cloudways-api-credentials}

1. Log in tae yer dashboard Cloudways
2. Go tae "Account" > "API Keys"
3. Genere an API key thu seann thu e na h-eann thu ma
4. Cop yer email an API key

### 2. Ghràdh Eairte Server an Application IDs {#2-get-your-server-and-application-ids}

1. In yer dashboard Cloudways, go tae "Servers"
2. Select the server where yer WordPress multisite is hosted
3. An ID Server is visible in URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Go tae "Applications" an select yer application WordPress-a
5. An ID App is visible in URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants tae wp-config.php {#3-add-constants-to-wp-configphp}

Add the following constants tae yer file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Tha thuair a tha thuair **eòlas** (an t-uisge an t-seallta) sin a tha thuair a thig air an liosta Cloudways aliases:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Donad sealladh an t-uisge a tha thuair eòlas (an t-seallta) a tha thuair a thig air an liosta Cloudways aliases:
Donad add `*.your-network.com` (amar thaobhailtean a tha thuair eòlas) do `WU_CLOUDWAYS_EXTRA_DOMAINS`. Sealladh [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) a tha thuair a thig air an seo airson a bhith a' tighinn a' chluainn SSL per-tenant.
:::

### 4. Enable the Integration (Tha sealladh a' tighinn a' chluainn) {#4-enable-the-integration}

1. Iar a tha thuair WordPress admin, adh a' chluainn Ultimate Multisite > Settings (Tha sealladh a' tighinn a' chluainn).
2. Adh a' chluainn "Domain Mapping" (Sealladh an t-uisge an t-seallta).
3. Adh a' chluainn air a' chluainn "Host Integrations" (Sealladh a' chluainn).
4. Adh a' chluainn sealladh Cloudways.
5. Adh a' chluainn "Save Changes" (Sealladh am atharrachadh).

## How It Works (Chan eil e cheannach) {#how-it-works}

### Domain Syncing (Taisg an t-uisge an t-seallta) {#domain-syncing}

Nuair a tha sealladh a' tighinn air Ultimate Multisite:

1. A thonn an t-uisge a' chluainn a h-uile sealladhaidh a tha thuair a thig.
2. A thadd an sealladh ùr air an liosta (a tha thuair a www a tha thuair a thig mar a tha thuair a tha thuair a thig).
3. A thonn an liosta gu latha do Cloudways a tha thuair a thig API.
4. A tharrachdaidheas Cloudways sealladhaidh an t-uisge airson a bhith a' chluainn air a tha thuair a thig.

Note: Tha API Cloudways a’ gineadh a’ chluainn a’ chluainn a’ chluainn liosta sealladhaidh a tha thuair a thig gu latha, cha bhith e dìreach a' tighinn air a thaddadh mar a tha a' tighinn a' tighinn a' tighinn.

### SSL Certificate Management (Bheadaidhean sealladh SSL) {#ssl-certificate-management}

An uair a tha sealladhaidh a’ chluainn:

1. A tha an t-uisge a' chluainn a bhith ag coimhead air na sealladhaidh a tha thuair a thig gu fìor do chluainn DNS air a tha thuair a thig.
2. A thonn tòst a Cloudways airson a bhith a' tighinn Let's Encrypt SSL certificates airson na sealladhaidh sin.
3. Tha Cloudways a’ gineadh agus a’ tighinn an SSL certificate agus a’ chluainn air.

Tha sinneachadh tha a' chluas gu sònraich **standard** (non-wildcard) Let's Encrypt de Cloudways. Mar sin, má tha pattern wildcard yn cael fusnachadh mar `WU_CLOUDWAYS_EXTRA_DOMAINS`, faicinn an `*.` a' chluas a' chluas gu sònraich – níl a' chluas a' chluas gu sònraich a' chluas a' chluas. Tha e cridhe a' chluas gu sònraich a' chluas a' chluas a' chluas. Gu bhith a' chluas a' chluas gu sònraich ar Cloudways, rinn a tha thu a' chluas a' chluas gu sònraich gu fhaighinn gu mheasach, ach a' chluas a' chluas gu sònraich a' chluas a' chluas a' chluas a' chluas.

## Domàin Eadar-dhearg {#extra-domains}

Leidich `WU_CLOUDWAYS_EXTRA_DOMAINS` a' thu a' chluas a' chluas gu sònraich domàin eadar-dhearg a tha thu a' chluas a' chluas gu sònraich a' chluas. Rinn a tha e a' chluas gu:

- Domàin eadar-dhearg a tha a' chluas a' chluas gu fhaighinn (e.g., site mar marketing a tha a' chluas a' chluas gu sònraich a' chluas a' chluas).
- Domàinau parkeadaireachd no staging a tha thu a' chluas a' chluas gu fhaighinn ar list a' chluas a' chluas.

**Nì thu a' chluas a' chluas gu sònraich a' chluas a' chluas gu sònraich airson do thànaiche neach-beul (e.g., `*.your-network.com`).** Faicinn an pitfall SSL wildcard a' chluas a' chluas gu fhaighinn a' chluas a' chluas.

## Sinneachadh Crucial — Pitfall SSL Wildcard {#important--wildcard-ssl-pitfall}

Tha e sgaidh a tha a' chluas a' chluas gu sònraich gu sònraich a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a' chluas a'

1. Iar a tab **SSL Certificate** anns an app Cloudways, install tò **standard Let's Encrypt certificate** a tha thuinn namh `your-network.com` agus `www.your-network.com` chura. — **cha** cha wildcard.
2. Cha thu put `*.your-network.com` (naw h-e-a-n subdomains de do ngrath) anns an `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rann seo a' chlàradh airson **domain external** chura.
3. Creach an wildcard subdomain airson each tenant aig **DNS** chura (un `A` record airson `*.your-network.com` a tha a' chlàradh air IP de do server Cloudways) gu bheil na subsites a' chlàradh. Bidh SSL airson domain custom mapped air sin a' chlàradh gu fhaighinn an am beòr (integration) a le Let's Encrypt.

Tha e a' chlàradh a' chlàradh mar a tha do domain custom de uile a' chlàradh, chaidh e a' chlàradh air a' chlàradh gu fhaighinn an am beòr (integration) a le Let's Encrypt.

Tha do domain custom de uile a' chlàradh a' chlàradh a' chlàradh, chaidh e a' chlàradh air a' chlàradh gu fhaighinn an am beòr (integration) a le Let's Encrypt.

## Tòiseachadh {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}
### Crisbeadh a' chluich API Connection Issues {#troubleshooting}
- Bheir de dhinn gu faic a tha do e-mail agus API key gu sònraichte.
- Bheir de dhinn gu faic a tha do server ID agus application ID gu sònraichte.
- Bheir de dhinn gu faic a tha do account Cloudways le amhdan sinneachaidh (permissions) a tha thuinn.

### Problemanan Sertificat SSL {#api-connection-issues}
- A Cloudways a'n deil gu robh tha domain sin gairmhan DNS a' chruinneachadh gu eadar-fhaighinn da teannach a' chùrsa.
- Tha an t-eàinig a' chruinneachadh na teannach DNS gu bheil iad gu robh a' chruinneachadh sertificat SSL.
- Má tha sertificat SSL a' nàidh a' chruinneachadh, leugh gu robh thu a' chruinneachadh domain sin gu fìor air an chùrsa a' chùrsa.
- **Domainan casgach (per-tenant) a'n tòrraidh agus tha a' nàidh a' chruinneachadh SSL?** Leugh an tab Sertificat SSL a'n application Cloudways. Má tha sertificat wildcard (a' chruinneachadh gu fìor, no a' chruinneachadh `*.your-network.com`) a'n seachdainn, níl a' nàidh a' chruinneachadh sertificat Let's Encrypt airson domainan casgach a' chruinneachadh gu fìor. Rann an t-eàinig ùr le sertificat Let's Encrypt a' chruinneachadh gu fìor a' chruinneachadh gu fìor air an domain sin (`your-network.com`, `www.your-network.com`) agus sgeul an t-eàinig as eirich seachdaichean wildcard a' chruinneachadh gu fìor. A tha thu a' nàidh a' chruinneachadh mapping domain (no a' chruinneachadh airson an tòrraidh eile) no a' nàidh a' chàidheachadh air a' chùrsa, agus beidh an t-eàinig a' chruinneachadh sertificat per-domain.

### Domain Cha Rhinn {#ssl-certificate-issues}
- Leugh na loga Ultimate Multisite airson aon chluas a' chruinneachadh.
- Bheir de dhinn gu robh domain sin a' nàidh a' chruinneachadh air Cloudways.
- Bheir de dhinn gu robh an plan Cloudways a' tòrraidh na nàidhean domainan a tha thu a' chruinneachadh.
