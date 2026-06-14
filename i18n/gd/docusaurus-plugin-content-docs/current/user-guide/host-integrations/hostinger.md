---
title: Còmhlaid bheachd Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## Aims

Hostinger is a popular web hosting service, agus e panel control modern a tha a' chiallachadh air. The Ultimate Multisite Hostinger integration a' namh a' leat a' chiallachadh domain sinneachaidh (domain syncing) beòr-chùis a' mhaighdean beòr-chùis a' chiallachadh a' leat, a' leat a' chiallachadh mapping domain agus subdomain gu sònraich frum a' chiallachadh WordPress admin.

## Feàinean

- Creachaidh domain addon beòr-chùis beòr-chùis a' hPanel
- Creachaidh subdomain beòr-chùis beòr-chùis a' hPanel ( airson càiinnte subdomain multisite)
- A' chiallachadh domain nuair a thànd a' mapping a' leat a' dèanamh
- Chiallachadh sinneachaidh leat le API domain management a' hPanel

## Cùighean

 airson a' sgaidh a' chiallachadh Hostinger, tha thuig a bhith agad:

1. Càladh air ainm Hostinger le fhasgadh hPanel
2. Tòcan API frum Hostinger
3. A' chùighean a' leat a' dèanamh anns an t-file `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

A' chùighean, leat a bhith agad a' dèanamh:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint a' chùigidh
```

## Cùighean A' Chiallachadh

### 1. Creachaidh Tòcan API Hostinger

1. Càladh air ainm Hostinger agus fhasgadh hPanel
2. Tuisge do **Account Settings** → **API Tokens**
3. Clic air **Create New Token**
4. Dearcich tòcan a' chiallachadh (e.g., "Ultimate Multisite")
5. Taisg an amhdannean sinneachaidh sinneachaidh:
   - Domain management
   - Subdomain management
6. Cop an tòcan a' chiallachadh agus seachainn eair gu sònraich

### 2. Fhàilte do Chuid ID Account

1. An hPanel, adh a' **Account Settings** → **Account Information**
2. Tha do Chuid ID Account air a' leughadh air an seachainn seo
3. Cop agus seachainn an ID sin airson an tòca sinneachaidh

### 3. A' chùighean a' leat a' dèanamh anns `wp-config.php`

A' chùighean a' leat a' dhomh do `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'doire_token_dhua_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'uid_dhua_account_hostinger');
```

Tha thuair a tha a' chluainteachd an t-api endpoint a tha eich contaiche Hostinger a' uile, tha thu air a' chlàradh:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Ailinn an t-uisgeachadh (Enable the Integration)

1. Iar a tha eich admin WordPress, adh a' chluainteachd **Ultimate Multisite > Settings**
2. Adh a' chlàradh gu **Domain Mapping** tab
3. Adh a' chluainteachd air a' chluainteachd **Host Integrations**
4. Ailinn an t-uisgeachadh **Hostinger (hPanel)**
5. Adh a' chluainteachd **Save Changes**

## Còmhraidh a tha e a' tòiseachadh (How It Works)

### Addon Domains (Domàin Añaddan)

Nuair a tha thu a' chlàradh domàin i Ultimate Multisite:

1. A' chluainteachd a' chluainteach curraich do an API Hostinger airson domàin a bhith mar addan domain
2. Tha an domàin a' chluainteach a' tòiseachadh gu dìreach air eich dirich (root directory)
3. Nuair a tha am fhaighinn a' chlàradh domàin, tha an chluainteachd a' tòiseachadh a' tòiseachadh an addan domain a' le hPanel

### Subdomains (Subdomàina)

 airson càiinn subdomàina multisite, nuair a thonadh sgaidh a' chlàradh:

1. A' chluainteachd a' chluainteach a' tòiseachadh an dìomhaidh (subdomain part) a' chluainteachd an domhain gu latha
2. Tha an chluainteachd a' chluainteach curraich do an API Hostinger airson an subdomàin a bhith mar addan domain
3. Tha an subdomàin a' chluainteach a' tòiseachadh gu dìreach air eich dirich (root directory)

## Notean Cruciale (Important Notes)

- Tha an chluainteachd a' tòiseachadh air API REST de Hostinger airson a' sàmhail leis an contaiche.
- Fad a tha eich token API a' tòiseachadh gu fhaighinn na eochair sin airson curraich domàin agus subdomàina.
- Tha an chluainteachd a' tòiseachadh air curraich DNS; tha am domàin a' tòiseachadh air eich contaiche Hostinger air a bheith mar addan domain.
- A bheil na curraich API a' tòiseachadh gu sgaidh air HTTPS.
- Fad a tha eich token API a' tòiseachadh gu fhaighinn agus eadar-dheargadh an sin gu fhaighinn.

## Tòiseachadh (Troubleshooting)

### Còmhraidhean a tha a' chluainteachd API (API Connection Issues)

- A churaidh an t-token API agad ceart agus gun athraidh
- Comharrach gu bheil an ID Account agad ceart
- Sealltainn gu bheil an t-token API agad deamhan sinneachd airson cur-steachadh domain
- Sealltainn gu bheil an account Hostinger agad seachda agus a' chùcas

### Domain Chaillte (Domain Not Added)

- Comharrach air log Ultimate Multisite airson am pròiseas ceart
- Sealltainn gu bheil an domain chaillte beagair is eadar ann iardail Hostinger agad
- Sealltainn gu bheil an account Hostinger agad fada a' chùcas airson domain addon

### Comharrachadh Earrachda SSL Certificate (SSL Certificate Issues)

- Tha an cur-steachadh seo seachda air an t-token API
- Tha Hostinger a thailean SSL certificate fada air AutoSSL
- Is eadar a tha thu a' chùcas SSL certificates gu sgaidhinn i hPanel air **SSL/TLS**
- Mar eadar, guth a' chùcas Let's Encrypt le cur-steachadh AutoSSL de Hostinger

## Cuimhneachadh (Support)

 airson fìor tairgseachais airson cur-steachadh integration Hostinger, tha thu a' chùcas air:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
