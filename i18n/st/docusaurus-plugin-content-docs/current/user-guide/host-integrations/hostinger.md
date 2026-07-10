---
title: Ho-tsoalo (hPanel) Ho-tshegofatso
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integration ho Hostinger (hPanel) {#hostinger-hpanel-integration}

## Tsela {#overview}

Hostinger ke mofuta o le web hosting a le fa'aaloa a le fesoasoane, a le na le panel a le fa'aaloa a le modern a le hPanel. Le Ultimate Multisite integration a le fesoasoane a le automatic domain syncing ho Ultimate Multisite a le fesoasoane a le hPanel, a le a le automatically manage domain mappings a subdomains a le a le WordPress admin mo le a.

## Fa'aaloa {#features}

- Automatic addon domain creation i hPanel
- Automatic subdomain creation i hPanel (mo le subdomain multisite installations)
- Domain removal fa le mappings a le a deleted
- Seamless integration ma le API a le fesoasoane a le domain management o le hPanel

## Asofa {#requirements}

Mo le a le automatic integration ho Hostinger, o le a le mana'a:

1. A hostinger account ma access i hPanel
2. Le API token a le Hostinger
3. Le constants a le a le fa'aaloa a le `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Mo le a le fesoasoane, o le a le fa'aaloa:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Asofa a le Setup {#setup-instructions}

### 1. Fa'aaloa Le Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Log in i a hostinger account a le access i hPanel
2. La i **Account Settings** → **API Tokens**
3. Click **Create New Token**
4. I le token a le fa'aaloa se tsela (e.g., "Ultimate Multisite")
5. Select le permissions a le fesoasoane:
   - Domain management
   - Subdomain management
6. Copy le token a le generated a le store a le fesoasoane

### 2. Fa'aaloa Le Account ID {#2-find-your-account-id}

1. I hPanel, la i **Account Settings** → **Account Information**
2. Le Account ID o le displayed a le page a
3. Copy a le ID a le save a le next step

### 3. A le Constants a `wp-config.php` {#3-add-constants-to-wp-configphp}

Add le constants a le file a le `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ha se ho u tlobo le API endpoint e fapanoni, o ka fetola:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Fana Hua Ho I-tshwaro (Enable the Integration) {#4-enable-the-integration}

1. I WordPress admin ea, etsa **Ultimate Multisite > Settings** e fihla.
2. La ka tabetso **Domain Mapping** e fihla.
3. Ka tsamaelo ho **Host Integrations** e fihla.
4. Fana ha integration ea **Hostinger (hPanel)**.
5. Ka fetola **Save Changes**.

## Ena Eona E tlobo (How It Works) {#how-it-works}

### Addon Domains {#addon-domains}

Ha ntho o fetola domain ka Ultimate Multisite:

1. Integration ea e fana request ea Hostinger API ea ho fana domain e le addon domain
2. Domain ea e fetola ho a fihla ka directory ea hau ea root
3. Ha u fetola mapping ea domain, integration ea e fetola addon domain ea ho hPanel automatically

### Subdomains {#subdomains}

Ha ntho o fetola subdomain multisite installations, ha site se tlobo:

1. Integration ea e fetola part ea subdomain eo ho full domain
2. E fana request ea Hostinger API ea ho fana subdomain
3. Subdomain ea e fetola ho a fihla ka directory ea hau ea root

## Litsoeng E Hlalosang (Important Notes) {#important-notes}

- Integration ea e fetola REST API ea Hostinger ea ho buisana le hau
- API token ea hau e hloka permissions e tlobo le management ea domain le subdomain
- Integration ea e fetola DNS configuration; domains ha ba fetola ka hau ea Hostinger

- API requests e fana ka amanaga ka HTTPS
- Ke fetola API token ea hau ho amanaga le ha fetola ka lina.

## Ho Hlalosa Matlha (Troubleshooting) {#troubleshooting}

### Masimo a Buisana le API (API Connection Issues) {#api-connection-issues}

- Baile hore ke token ya API e ntshwago le e ne e ntshwago

- Baile hore ID ya Account ya hau e ntshwago

- Baile hore token ya API ya hau e na le tsela e hlophisang ho go mane domain

- Baile hore account ya Hostinger ya hau e ntshwago le e ntse le teng

### Domain E Ntse Le A Ntswe {#domain-not-added}

- Baile hore o tle ba logs ea Ultimate Multisite ho bona sebopepeho sa tsela
- Baile hore o tsamaea hore domain e ntse a fana ka account ya hau ya Hostinger
- Baile hore o tsamaea hore account ya Hostinger ya hau e ntse le teng le e na le limit ea addon domains

- Baile hore o tsamaea hore domain e ntse a fana ka nameservers ea hau ya Hostinger

### Moruo oa SSL Certificate {#ssl-certificate-issues}

- Ho hlokompha ho ba le tsela ea ho fana ka SSL certificate, integration e ntse e na le sebopepeho
- Hostinger haholo e fana ka SSL certificates e ntlha ka AutoSSL
- O ka mane SSL certificates ka lina hPanel ka **SSL/TLS**
- Ka mofuta o mong, u sebelisa Let's Encrypt le tsela ea AutoSSL ea Hostinger

## Ho thusa {#support}

Ho ba le bonolo haholo le integration ya Hostinger, u ka tsamaea:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
