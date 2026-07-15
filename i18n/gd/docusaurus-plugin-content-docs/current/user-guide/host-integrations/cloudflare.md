---
title: Còmhlaid an Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Aims (Overview) {#overview}
Cloudflare is a leading content delivery network (CDN) agus curtha leat a thabhairt seachainn agus a chothromadh fáil ar na wailis. Is eolais seo a bheith ag tairgseánna mheánach ar an t-amachadh domáin beò (subdomain multisite) a bheith ag Ultimate Multisite agus Cloudflare, go sònraichte.

## Feicharasan (Features) {#features}
- Creachadh beò (subdomain) ag Cloudflare gu mheánach
- Suidheachadh subdomain a chothromadh (Proxied subdomain support)
- Bhratadh rianach ar an t-amachadh DNS (DNS record management)
- Bhratadh DNS record a chanlaicedh ar an admin Ultimate Multisite

## Cothromadh (Requirements) {#requirements}
Is eolais seo a bheith ag fháil amach i bhfàilteacht na `wp-config.php` a bhaineann leis:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Amachais (Setup Instructions) {#setup-instructions}

### 1. Fháil an API Key a Chluainn (Get Your Cloudflare API Key) {#1-get-your-cloudflare-api-key}

1. Isgeul an t-amachadh Cloudflare a bheith agat
2. Ath an "My Profile" (clic ar do email ar an chuid uile a bhonraithe)
3. Taispeáin "API Tokens" a' chluainn seachdaigh
4. Creidh API token nua le na gníomhaíochta seo:
   - Zone.Zone: Read (Léid)
   - Zone.DNS: Edit (Súileadh)
5. Coptaidh do API token

### 2. Fháil an ID an Zone a Chluainn (Get Your Zone ID) {#2-get-your-zone-id}

1. I bhfàilteacht na Cloudflare, leat a thabhairt domáin a fhaigh agat
2. Is eolais an ID an Zone ag bheith i "Overview" tab, ar an chuid uile a shlannaithe ar "API"
3. Coptaidh an ID an Zone

### 3. Add Constants i wp-config.php (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Add na constants seo i do `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Foirmiadh an Iompair (Enable the Integration) {#4-enable-the-integration}

1. I do admin WordPress, ath an Ultimate Multisite > Settings a bheith agat
2. Ath an tab "Domain Mapping" a chluainn seachdaigh
3. Glac an t-amachadh ar "Host Integrations"
4. Foirmiadh an Cloudflare integration
5. Clice ar "Save Changes"

## Conas Aird a Bhail (How It Works) {#how-it-works}

### Bhratadh Subdomains (Subdomain Management) {#subdomain-management}

Nuair a bheil seòl ùr ag creachadh i bhfàilteacht na subdomain multisite:

1. A' chlàradh a ghràdh do API Cloudflare airson cridhe CNAME airson an subdomain.
2. Tha an subdomain a' chlàradh gu beatha (proxied) a tha e a' chlàradh de dhòigh (default) le Cloudflare (is eadar a tharann amach le filter).
3. Nuair a thàir seòl (site) a' chlàradh, salaidh an ghràdh an subdomain a' chlàradh de Cloudflare.

### Sealladh cridhe DNS (DNS Record Display) {#dns-record-display}

Tha an ghràdh a' chlàradh a' leatamach an sealladh cridhe DNS anns an admin Ultimate Multisite gu:

1. A tharraing cridhean DNS gu beatha (directly) de Cloudflare
2. A shindadh gu sònraidh an earrach (proxied) no cha.
3. A shindadh fhaighinn a tha cridhean DNS gu sònraidh eile.

## Hostnames a' chlàradh Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

Tha **Cloudflare Custom Hostnames** (a tha e a' chlàradh de dhòigh "Cloudflare for SaaS" a tha e a' chlàradh) gun faicinn a' chlàradh de Cloudflare a tha a' ginealach do eadar a tharann amach le seòl (multisite network). Is e an fhaighinn a' chlàradh a' chlàradh airson seòlaite multisite a tha a' chlàradh, no'n dhomh a tha e a' ginealach an tacaid (SSL certificate) agus a' chlàradh de Cloudflare gu beatha airson eachdraidh. Is e an fhaighinn a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlà

1. Iar a dashboard Cloudflare agad, leugh an zone airson an t-sìth (domain) sin air.
2. Rinn gu **SSL/TLS > Custom Hostnames**.
3. Add a fallback origin a' chùlchnaidh (IP address) air an sìth (hostname) a bhfacaidh agad.
4. Air chùlchnaidh (domain) a tha mappeddairta i Ultimate Multisite, add a entry Custom Hostname mar chùlchnaidh (Custom Hostname) i Cloudflare. Is eadar thuig a faicinn an t-sìth air an t-seòl (network). Is eadar thuig a faicinn an t-sìth air an t-seòl (network).
5. Cloudflare a thonn agus a rathail (renews) na TLS certificates airson chùlchnaidh (hostname) a tha a' chùlchnaidh sin a tha a' sgeulachda air an t-seòl (DNS) agad, gu sònraichte.

Air fhaighinn an t-sìth (reference) API latha, leugh [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Athrachadh a' chùlchnaidh (Terminology update)
Air tairgseachais Ultimate Multisite v2.6.1, tha an fìrinn seo a' cheannachdaidh **Cloudflare Custom Hostnames** i spasgais agus i labels. Air fhaighinn tairgseachais a' chùlchnaidh (earlier versions) a' chùlchnaidh (name) "Cloudflare for SaaS", a tha an fìrinn Cloudflare a tha a' cheannachdaidh.
:::

## Notean Athramanta (Important Notes) {#how-it-differs-from-the-standard-cloudflare-integration}

Air tairgseachais Cloudflare air a tha a' cheannachdaidh, tha wildcard proxying a' chùlchnaidh (wildcard proxying) a' chùlchnaidh (customers) a tha a' cheannachdaidh. Bheann seo a' chùlchnaidh (standard Cloudflare DNS integration) a tha fìor air tairgseachais multisite a tha a' cheannachdaidh, gu sònraichte, agus is eadar thuig a faicinn an t-sìth (hostname) a' chùlchnaidh (wildcard DNS record) i Cloudflare.

## Athrachadh (Troubleshooting) {#setting-up-cloudflare-custom-hostnames}

### Earrachda a' chluich an API (API Connection Issues) {#important-notes}
- Bheann air a' cheannachdaidh (token) API agad gu sònraichte agus tha eilean fìor-fhaighinn (permissions) a tha eilean.
- Bheann a faicinn an ID Zone air a bheith gu sònraichte.
- Bheann a' cheannachdaidh (account) Cloudflare agad tha eilean fìor-fhaighinn a tha eilean.

### Cha bhith an t-sìth (Subdomain Not Added) {#troubleshooting}
- Bheann air na logs Ultimate Multisite gu faicinn aon earrachda (error messages).
- Bheann a faicinn an t-sìth (subdomain) a tha a' cheannachdaidh i Cloudflare.
- Bheann a' cheannachdaidh (plan) Cloudflare agad tha eilean fìor-fhaighinn air na n-earrachda DNS a tha thuair a' chùlchnaidh (records) a tha thuair.

### Problemanan Proxy {#api-connection-issues}

- Tha thuair a tha thu de uileidhean subdomàin a bhith ag obair, is eadar thu le `wu_cloudflare_should_proxy` filter.
- Beagadh feumaidh tòiseilichean tha fìor gu sònraich gu lèul nuair a tha thu a' obair (e.g., fìor faighneachd WordPress).
- Bhaidh tu a' ghnìoth airson a' chàrachd Cloudflare a' uileidhean cache a thar a' chàrachda admin.
