---
title: Ulelelo lula lehleletso la CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Tseka le tsela ea hore o se fihlela hore ho fana'a (and remove) domains tse di fetileng ka network ea hau ho ba le virtual hosts ka CyberPanel, le ho ba le ho fana'a auto-SSL ka Let's Encrypt.

## Eona ebohlokoa

- Ha domain e fetilwe ka Ultimate Multisite, integration e fihlela API ea CyberPanel ho fetola virtual host ea domainoa.
- Ha fetileng ea domain mapping e fetolwe, integration e fihlela API ho feta virtual host e fetileng.
- Ha auto-SSL e le lehle, integration e fihlela ho fana'a sertifikati ea Let's Encrypt ka nako e fetileng ha virtual host e fetola.
- Ho ba le ho fana'a/ho fetola alias ea `www.` ho feta ka ho fetoga "Auto-create www subdomain" sa setso sa Domain Mapping.

## Ho Ba Le Ho Fihlela (Prerequisites)

- Instance ea CyberPanel e fetileng (v2.3 le lehle ho ba le ho hlokomela) e ntse e fihlehang server ea WordPress ea hau.
- Website e fetileng ka CyberPanel e fetileng e fana'a root ea network ea WordPress ea hau. Integration e fetola virtual hosts tse ntlha ka lona server.
- Access ea API ea CyberPanel e lehle. Authentication e sebelisa username le password ea admin ea CyberPanel ea hau.
- Records ea DNS tsa hau tsa domains tse fetileng haholo ba hloka ho fihlela IP address ea hau ea server haholo fa auto-SSL e ka fana'a sertifikati e fetileng.

## Ho Ba Le (Requirements)

Ho hlokomela hore constants tse following di fetolelang ka file ea `wp-config.php` ea hau:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ho ba le, o ka fihlela tse ling:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Le tšepo: true — ho fana Let's Encrypt SSL fa le domain a fetoga
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Le tšepo: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Ho fana ho fana le certificate SSL

## Litlhahla ho fetoga (Setup Instructions)

### 1. Fana API ya CyberPanel

1. Fana ka admin fa dashboard ya CyberPanel ea hau.
2. Laela **Security** > **SSL** u tšoa hore SSL e leetsoang ka litietsi ea CyberPanel (ho hlophisa ho fana ka calls tsa API tse amanang).
3. API ya CyberPanel e fetoga ka `https://your-server-ip:8090/api/` ka ho fana ka tšepo. Ha na ho hlokahala litšepo tse ling ho etsa ho itšoa — e leetsoang ka ho fana ka admin users.

### 2. Fetoga Constants ka wp-config.php

Fetoga constants tse following ka file ea hau `wp-config.php` ka ntlha ea litietsi tsa `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ho etsa auto-SSL (ho hlokahala):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Etisa Ho fana (Enable the Integration)

1. Ka network admin ea WordPress ea hau, laela **Ultimate Multisite** > **Settings**.
2. Laela tab ea **Domain Mapping**.
3. Laela ho leka ka **Host Integrations**.
4. Etisa ho fetoga (Enable) integration ya **CyberPanel**.
5. Laela **Save Changes**.

### 4. Ho tloha Ho fana (Verify Connectivity)

U feta ho sebelisa ho tsoalo ea ho tsoalo le ho tsoalo ka ho itšoa ka settings wizard:
```

1. Foe ka **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Thaba **Test Connection**.
3. Le mofuta o le fa'aonapoloa e fesoasoa o le plugin e mafai auno i CyberPanel API a le fa'aonapoloa auno.

## O le Fa'aonapoloa

### Domain Mapping

E tasi o le domain e fa'aonapoloa i Ultimate Multisite:

1. Le integration e fa'aonapoloa `POST` request i `/api/createWebsite` i le host CyberPanel o oe.
2. CyberPanel e fa'aonapoloa virtual host tasi lea mo le domain a le fa'aonapoloa.
3. O le document root e fa'aonapoloa e fa'aonapoloa i le WordPress network root directory o oe.
4. Pe a le domain mapping e fa'aonapoloa, le integration e fa'aonapoloa `/api/deleteWebsite` mo le fa'aunoa virtual host.

### Auto-SSL

Pe a `WU_CYBERPANEL_AUTO_SSL` o le `true`:

1. A le virtual host e fa'aonapoloa, le integration e fa'aonapoloa `/api/issueSSL` mo le domain.
2. CyberPanel e fa'aonapoloa Let's Encrypt certificate e fa'aonapoloa i le ACME HTTP-01 challenge.
3. Le certificate o le auno fa'aonapoloa e CyberPanel i le taimi lea e le fa'aonopoloa.

> **Important:** O le DNS e tatau ona fa'aonapoloa la'a i le IP address o oe le servera fa'aonapoloa auno mo Let's Encrypt e mafai ona fa'aonopoloa le domain. Pe a SSL issuance e fa'aonopoloa i le taimi lea e le fa'aonopoloa, fa'aopoopo o le DNS propagation ma fa'aonapoloa SSL no CyberPanel dashboard i le **SSL** > **Manage SSL**.

### www Subdomain

Pe a **Auto-create www subdomain** o le `enabled` i le Domain Mapping settings o oe, le integration e fa'aonapoloa virtual host alias tasi lea mo `www.<domain>` ma, pe a auto-SSL o le `on`, le certificate e fa'aonopoloa o le apex ma www variants.

### Email Forwarders

Pula ka, fa ntlha ke go bona.

Fa le [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon e le teng, CyberPanel e ka dira gore o dirwe email forwarders ya ba bang. Forwarders di dira gore ditshwago tsa mailo di tsamaisa mo inbox efe fa se ne se bua mo domain address efe, fa se ne se dira mailbox efe. Ke go thusa go dira aliases ja `info@customer-domain.test` kgotsa `support@customer-domain.test`.

Pula ka go dira gore o tsameka le forwarders ya ba bang:

1. Go bona gore constants tsa CyberPanel tse di dirwe kgotsa go tsoalo la go tsamaisa le se a fana.
2. Go dira gore email provider ya CyberPanel e dirwe mo settings ya Emails addon.
3. Go bona gore domain ya customer e fa e teng mo CyberPanel ka ntlha fa o tla dira forwarder.
4. Dirisa test forwarder le tsamaisa message mo gobe fa o tla fana lerato la feature le plans tsa production.

Fa go dira forwarder ga gopola, go bona logs tsa activity ya Ultimate Multisite ka ntlha, le fa go bona mo CyberPanel gore domain e teng le gore API user a na le permissions ya email-management.

## Reference ya Configuration

| Constant | Go Tlhokwa | Default | Leela |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ee | — | Full URL ya CyberPanel instance ya gago e dirwe mo port, ja `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ee | — | Username ya admin ya CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ee | — | Password ya admin ya CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ee | `Default` | Package ya hosting ya CyberPanel e tla dirwe mo virtual hosts tse ntlha |
| `WU_CYBERPANEL_AUTO_SSL` | Se | `true` | Go dira Let's Encrypt SSL certificate fa domain e dirwe |
| `WU_CYBERPANEL_PHP_VERSION` | Se | `PHP 8.2` | PHP version ya virtual hosts tse ntlha (e tlwa go tsamaetsa le version e dirwe mo CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Se | — | Email ya go dira certificate registration |

## Notes e Kgolo

(Kea se na le notes e kgolo, fa o na le ntlha e kgolo, ke tla go bona.)

API ya CyberPanel e u tlhokomelo le token. Ho fetola, integration e fetola ho thola token ka nako le nako le API call.
Ho hloka go na leme la admin la CyberPanel le litlhokomelo tsa ho fetola le ho tsamaisa websites.
CyberPanel e tsamaea ka port `8090` ka tsela ya bohlokoa. Ha se a mo server ea hau e u le firewall, re bona hore port ena e le lebetseng ho ba leba ka WordPress application server.
Integration e seng e fetola DNS records. Ho hloka ho setse domain DNS ho IP address la server haholo mme o fetola domain ka Ultimate Multisite.
Ha u sebelisa OpenLiteSpeed (OLS), re fa restart e le nako le e fetola ka molao haholo ha se a fetola virtual host. Ha hloka ho fana ka monate.

## Ho Fetola Matlha

### API Connection E Tlhokomelo

- Re bona hore port `8090` e le lebetseng mo firewall ea hau la server.
- Re bona hore bohlokoa ba `WU_CYBERPANEL_HOST` ba le protocol e fetileng (`https://`) le port.
- Re bona hore sertifikati ea SSL ea CyberPanel ea hau e le bonolo; sertifikati e tsamaisang ka monate (self-signed) e ka etsa TLS verification e le maemo a tsela. Setse `WU_CYBERPANEL_VERIFY_SSL` ho `false` haholo mo dikotla tsa network tse ntle.

### Thaba ea Authentication

- Re bona hore `WU_CYBERPANEL_USERNAME` le `WU_CYBERPANEL_PASSWORD` ea hau e bonolo ka ho login ka CyberPanel ka tsela ya monate.
- CyberPanel e tsamaisa accounts haholo ha se a fetola login e le maemo a tlhokomelo. Re bona **Security** > **Brute Force Monitor** mo CyberPanel ha se a fetola lockouts.

### Domain E Seng E Fetolwa

- Re bona log e le activity la Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) ho bona messages ea API error.
- Re bona hore package e fetileng ka `WU_CYBERPANEL_PACKAGE` e le bonolo mo CyberPanel (**Packages** > **List Packages**).
- Re bona hore domain e seng e tsamaisang ka website ka CyberPanel — ho fetola website e le maemo a tlhokomelo e fetola error.

### SSL Certificate E Seng E Fetolwa

- Baile se DNS e a fetang go feta: `dig +short your-domain.com` go batla IP ya server ya hau.
- Let's Encrypt e ba le limitse tsa tsela. Ha o ne o dirile ho issua sertifikate tse dintsi tsa domain e le nako, tsama ka nako le pele ha u batse ho buisana fa u batse ho buisa fa.
- Re tla bona logs ea SSL ea CyberPanel ka **Logs** > **Error Logs** ho bona ditlhahlo tsa liphatlo tsa sertifikate tse di fetileng.
- Ho ba le nako ya tsela, u ka issua SSL manually ka CyberPanel: **SSL** > **Manage SSL** > select the domain > **Issue SSL**.

## References

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
