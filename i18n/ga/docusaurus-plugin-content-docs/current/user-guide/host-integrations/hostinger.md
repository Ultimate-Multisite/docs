---
title: Cothromacht Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Intégráid le Hostinger (hPanel)

## Oibríocht

Is é Hostinger curte oiriún web hosting le panel cothromach a cheart go léir, againn an hPanel. Féachfaidh an intégráid Ultimate Multisite Hostinger a fáil amach na sincontróin domáin go hiomlán idir Ultimate Multisite agus an hPanel de Hostinger, ag fáil amach ar chuid mapping domáin agus subdomáin go díreach ó chuid admin WordPress.

## Feicharásanna

- Creátiún domáin adda in hPanel
- Creátiún subdomáin adda in hPanel (do chuid instaltaí multisite subdomain)
- Taispeán domáin nuair a bhfáineann curruin mapping
- Intégráid leatla leatla le hAIP de haghaidh curruin domáin de Hostinger

## Cuidiúir

Leat a bheith ag úsáid an intégráid Hostinger, ag teacht duit:

1. Account Hostinger le curruin access ar hPanel
2. Token API ó Hostinger
3. An cosaint seo a bhaineann iad i bhfíth i do `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ar chuid optional, leat a fáil amach:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API de chuid default
```

## Cuidiúir Setup

### 1. Déan Token API Hostinger atá

1. Login go do account Hostinger agus fáil access ar an hPanel
2. Taispeáin go **Account Settings** → **API Tokens**
3. Cliom ar **Create New Token**
4. Déan leat a ngníomhán na token seo (e.g., "Ultimate Multisite")
5. Déan seirbhísí a bhfuil gá ag fáil:
   - Domain management
   - Subdomain management
6. Coptaigh an token a bhfáineadh agus storaigh é go séalaidh

### 2. Fáil an ID do Account

1. In hPanel, go **Account Settings** → **Account Information**
2. Tá an ID do Account ag tairgseán ar an cur chuireann seo
3. Coptaigh agus storaigh an ID seo leat do chuid chéadain

### 3. Add Constants i wp-config.php

Add na cosaint seo i do `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'do do chuid an api_token_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'do do chuid an account_id_hostinger');
```

Má tá an account Hostinger agat API endpoint eile, leat tú é a chur chuim:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Fáilte ar an Iompair

1. Ag cur in admin WordPress agat **Ultimate Multisite > Settings**
2. Cur isteach i **Domain Mapping**
3. Glac tú le chéile go **Host Integrations**
4. Fáilte ar an iompair **Hostinger (hPanel)**
5. Cliog ar **Save Changes**

## Conas Tá É seo Ag Bhéid

### Addon Domains

Nuair a mapáir tú domain ag Ultimate Multisite:

1. Bidd an iompair cur isteach cur isteach ar API Hostinger chun an domain a chuid féach ar addon domain
2. Beann an domain a chur ar an cur (root directory) agat
3. Nuair a bhíonn an mapáir domain ag cur isteach, beann an iompair a bhaint an addon domain ar hPanel go hiomlán

### Subdomains

Para installation multisite ar subdomain, nuair a chruthúla site nua:

1. Beann an iompair a chur ar an teilteacht (subdomain) ón domain leat
2. Bidd cur isteach ar API Hostinger chun an subdomain a chuid féach ar addon domain
3. Beann an subdomain a chur ar an cur (root directory) agat

## Note Dáibh

- Bú tá an iompair ag úsáid REST API Hostinger chun cur chuim leat ar do account
- Is féidir leis an api token atá ag cur fhéachanna ag cur fhéachanna ag cur chuim ar domain agus ar subdomain
- Níl an iompair ag cur fhéachanna ar DNS; caithfidh na domaina a bheith ag cur féach ar do account Hostinger

- Bidd cur isteach ar HTTPS go cur fhéachán ar an api token agat agus níl aon phostáil é ar chuid fhocaldaí.

## Treoirí

### API Connection Issues

- Déanáil an t-token API a bhfuil sé go bhfuil sé ceart agus níl sé deachailte
- Déan cinnte go bhfuil an ID Account agat ceart
- Déan cinnte go bhfuil an t-token API ag cur fhéidiríocht ag cur mhaith leis an dómhaín
- Déan cinnte go bhfuil an account Hostinger agat ábraint agus ag cur mhaith

### Dómhaín Níl Ag Cur

- Déan ar chuid log Ultimate Multisite chun aon rud éifeachtach a bheith ag cur fhéidiríocht
- Déan cinnte go níl an dómhaín ag cur fhéidiríocht agat ag cur mhaith i do account Hostinger
- Déan cinnte go bhfuil an account Hostinger agat níl ag cur leath an talamh ar chuid domáin addann
- Déan cinnte go bhfuil an dómhaín ag cur cur fhéidiríocht go ceart ar do nameservers Hostinger

### Cisteanna SSL

- Níl an cur chuig an t-token API ag cur fhéidiríocht cisteanna SSL
- Tugann Hostinger tí ar chuid cisteanna SSL freé ag AutoSSL
- Is féidir leat cur rialacha cisteanna SSL go díreach i hPanel ar **SSL/TLS**
- Mar chuid eile, úsáid Let's Encrypt le feidhm AutoSSL de Hostinger

## Cuimhneacháin

For cur fhéidiríocht eile le cur Hostinger, le ghnáthach ar:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
