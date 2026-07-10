---
title: Còmhraidh CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

An tòran seo a sgrias a bhith a' chiall an robh a' sgrùdadh an seòl Ultimate Multisite CyberPanel sin gu robh a bhith ag suidheachadh (agus a' tòran) domain-nàthach anns a ghràdhdaichean agad mar virtual hosts san CyberPanel, agus cuideachd a' tòran auto-SSL optional trí Let's Encrypt.

## Gu làidhinn a tha e ag obair {#what-it-does}

- Nuair a thàir thu an domain air a ghràdhdaicheadh (mapped) anns Ultimate Multisite, tha an seòl a' chialadh API CyberPanel airson cruthachadh virtual host airson sin domain.
- Nuair a thàir an ghràdhdaicheadh domain air a ghràdhdaicheadh, tha an seòl a' chialadh API airson athraidh (delete) an virtual host a tha a' tòran.
- Nuair a tha auto-SSL a' tòran, tha an seòl a' tòran a' chiallach Let's Encrypt certificate issuance agad agad agad air a bhith a' cruinnachadh an virtual host.
- Tha e ag suidheachadh/athraidh `www.` alias optional a' tòran a' chiall a' tòran a tha thu 'Auto-create www subdomain' anns a' sgrùdadh Domain Mapping.

## A' chàrachadh (Prerequisites) {#prerequisites}

- Seòl CyberPanel a' tòran (v2.3 agus nàdhair a' tòran de uile) a tha ag obair agus a' fhaighinn air a' chùlann WordPress agad.
- Website a tha aig CyberPanel a tha air a bhith a' cruinnich an seòl WordPress agad. Tha an seòl sin a' tòran new virtual hosts dhan seòl sin.
- A' chàrachadh API CyberPanel a tha a' tòran. Tha an athbhreithneachadh a' chiallach air a' chùlann admin CyberPanel agus a' spionnadh (password) agad.
- Fad tha tairgseichean DNS dhan domain-nàthach a tha ag tòran, mus primaich a tha e a' tòran agad, ri fhaighinn certificate a tha a' tòran agad.

## A' chriaichean (Requirements) {#requirements}

Tha an tòran seo a' cheannach thu a' sgrùdadh anns a' file `wp-config.php` agad:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Tha e ag suidheachadh optional a tha thu a' cheannach:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Setup Instructions {#setup-instructions}

### 1. Enable the CyberPanel API {#1-enable-the-cyberpanel-api}

1. Log in to ansinne (log in) to do chù (as an administrator) your CyberPanel dashboard.
2. Go tới **Security** > **SSL** agus dì fhaighinn (confirm) gu cunntas SSL ar an seòrsa CyberPanel air a bheachd (required for secure API calls).
3. Tha an API CyberPanel aig `https://your-server-ip:8090/api/` air a bheachd (by default). Cha thuairt (no additional steps) tha aige airson eolas (it is on by default) airson uisgeann (admin users).

### 2. Add Constants to wp-config.php {#2-add-constants-to-wp-configphp}

Add an seo chuntas (add these constants) air do chuid `wp-config.php` a geal-fhaighinn (before the line `/* That's all, stop editing! */`):

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

 airson auto-SSL (recommended):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Enable the Integration {#3-enable-the-integration}

1. Air do chuid WordPress network admin, go tới **Ultimate Multisite** > **Settings**.
2. Taisg (Navigate) air tab **Domain Mapping**.
3. Glac (Scroll) air a dh'chù (down to) **Host Integrations**.
4. Fhaighinn (Enable) an integration CyberPanel.
5. Cluair (Click) ar **Save Changes**.

### 4. Verify Connectivity {#4-verify-connectivity}

Air a' chuid test connadh (connection test) air a bheachd:

1. Roinn **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Clicke ar **Test Connection**.
3. Tha meil a' chluasach aistidh gu cunbhal sin gun a tha' sgaidh an plugin agad air CyberPanel API agus a tha' eadar-dheargadh gu fìor.

## Conas a tha e a' tòiseachadh {#how-it-works}

### Domain Mapping {#domain-mapping}

Nuair a thàth a' chluasach domain mar Ultimate Multisite:

1. A' chluasach a' sgaidh cur `POST` air `/api/createWebsite` ar an host CyberPanel agad.
2. Tha CyberPanel a' creachadh ùr host guthach airson an domain a' leatair a tha' eadar-dheargadh.
3. Tha an root document (document root) a' sgaidh a' tòiseachadh air an root directory na h-neth-seallach WordPress agad.
4. Nuair a thàth a' chluasach domain a' leatair, a tha an plugin a' guth air `/api/deleteWebsite` airson a glèid an host guthach.

### Auto-SSL {#auto-ssl}

Nuair a tha `WU_CYBERPANEL_AUTO_SSL` ag bheachd `true`:

1. An dàimh a' chluasach a' sgaidh cur `/api/issueSSL` airson an domain.
2. Tha CyberPanel a' ceannach certifikeat Let's Encrypt a' leatair air an t-aistadh ACME HTTP-01.
3. Tha an certifikeat a' guth air gu sònraich de CyberPanel air a' chluasachadh.

> **Important:** Feumaidh DNS a bhith a' chluasach gu fìor air an adhráin agad a tha' an server. Nuair a thàth a' chluasach SSL a' tòiseachadh gu sònraich an t-aistadh, cuir a' chluasach air an dashboard CyberPanel air **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Nuair a tha **Auto-create www subdomain** ag bheachd `true` mar a tha e ag fhaighinn air na sethichean Domain Mapping agad, a thàth a' chluasach a' creach a' leatair alias host guthach airson `www.<domain>` agus, nuair a tha Auto-SSL ag bheachd `on`, a thàth a' chluasach certifikeat a' tòiseachadh air am beatha (apex) agus ar www.

### Email Forwarders {#email-forwarders}

Nuair a tha an [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ag iarraidh, caithedh CyberPanel a losgaidh luchd-e-e-mail. Beathaidhean (forwarders) a th'annas nan meilinn sealltainn san àrd-chùl gu amrra, gu sàmhach an ailseachd sin sin `info@customer-domain.test` no `support@customer-domain.test`.

Tha earrachda gu bheil thu a' thabhairt luchd-e-e-mail:

1. Bhaigh a' chluas nan constant CyberPanel a' mheasach agus tha an teast cothromach a' tòisich.
2. Bhaigh an cungaidh e-mail CyberPanel a' fhaighinn anns a' sgrùdhan (settings) an addon Emails.
3. Bhaigh an domain luchd-e-e-mail a' bheachd air CyberPanel gu bheil eairt a' creachadh an forwarder.
4. Creig un forwarder teast agus sgaidh meilinn a tha thu a' thabhairt gu fhaic a' chùl a' thabhairt ar planau prodúct.

Tha am fhaic a' creachadh forwarder a' tòisich, leugh an logaichean sealltainn (activity logs) Ultimate Multisite gu fàilte air, agus tha thu a' chluas nan domain-e-mail a' bheachd air CyberPanel agus tha an user API a' guth a' chùl-e-mail.

## Cothromach airson a' sgrùdhan (Configuration Reference) {#configuration-reference}

| Constant | A' sgaidh? | Dèan-a-chùl | A' chluas? |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Bheil | — | URL fhuil airson an CyberPanel a tha thu, gu sàmhach port, e.g. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Bheil | — | Username admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Bheil | — | Password admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Bheil | `Default` | Package hosting CyberPanel a' sgaidh air host-e-mail new |
| `WU_CYBERPANEL_AUTO_SSL` | Cha | `true` | Creig sealltainn SSL Let's Encrypt an dàta a' bheachd air |
| `WU_CYBERPANEL_PHP_VERSION` | Cha | `PHP 8.2` | Versiù PHP airson host-e-mail new (cha tha e a' tòisich a' chluas a' tha a' sgaidh anns an CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Cha | — | E-mail a' chluas airson sealltainn SSL a' bheachd air |

## Note Sinneachaidh (Important Notes) {#important-notes}

Aighe, an tòiseachadh air na h-API de CyberPanel a tha a' leughadh token-based session authentication. Tha an sinneachadh a thabhairt an tòiseil a' ghnothromach gu fìor ar chùineach API ùr.

Tha an àiteach admin de CyberPanel agad thuig a bhith ag deuchainn agus a' leughadh webs.

Tha CyberPanel a' cur riannach ar port `8090` a' chùineachadh gu fìor. Mar a tha thuair a' chluas air an t-firewall, dìreach a' cleachd an port seo de dhutha a bhith agad airson an server WordPress.

Tha an sinneachadh ag iarraidh a' leughadh na h-DNS records. Mus eadar-dheargadh an domain, rinn an DNS de dhutha air an IP de thairis a tha thuig agad gu faic a bhith agad mar a tha a' cur riannach an domain anns Ultimate Multisite.

Mar a tha OpenLiteSpeed (OLS) a' leughadh, tha seachdaidhean ùr fìor a' cur riannachadh gu fìor air an t-virtual host air a' chluas. Tha e a' cur riannachadh gu fìor gu fìor air a' chluas. Cha bhith thu ag iarraidh a' leughadh mòr-chùineachadh.

## Tòiseachadh (Troubleshooting) {#troubleshooting}

### A' chluas API a tha a' leughadh {#api-connection-refused}

- Bhaigh an tòiseil `8090` a' ghnothromach anns an t-firewall de thairis agad.
- Bhaigh an fhaighinn `WU_CYBERPANEL_HOST` a' leughadh an tòiseil (protocol) agus an port gu fìor (`https://`).
- Bhaigh an cert SSL de CyberPanel agad a' leughadh; tha cert-a-ghnothromach (self-signed certificates) eadar-dheargadh TLS a' leughadh. Bidh `WU_CYBERPANEL_VERIFY_SSL` a' cur riannachadh gu fìor air `false` dìreach anns na stiùirthean seallanta (private network environments).

### Earrachda ùr-fhaighinn (Authentication Errors) {#authentication-errors}

- Bhaigh an tòiseil `WU_CYBERPANEL_USERNAME` agus `WU_CYBERPANEL_PASSWORD` agad a' cur riannachadh gu fìor gu faic a bhith agad air CyberPanel dìreach.
- Tha CyberPanel a' leughadh àiteachan air a' chluas ùr-fhaighinn an tòiseil a tha a' leughadh. Bhaigh **Security** > **Brute Force Monitor** a' cur riannachadh gu fìor anns CyberPanel mar a tha eadar-dheargadh agad.

### Domain cha tha a' cur riannachadh (Domain Not Created) {#domain-not-created}

- Bhaigh an log ùr-fhaighinn de Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) a' leughadh missinean air API.
- Bhaigh an package a' cur riannachadh anns `WU_CYBERPANEL_PACKAGE` a' cur riannachadh gu fìor anns CyberPanel (**Packages** > **List Packages**).
- Bhaigh an domain cha tha a' cur riannachadh mar web a' leughadh anns CyberPanel — tha deuchainn webs a' cur riannachadh a' cur riannachadh.

### Cert SSL cha tha a' cur riannachadh (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

- Confine an amh a tha DNS a' chluainnachd air: `dig +short your-domain.com` rinn thu IP a' chùl.
- Let's Encrypt a' chluainnachd leamhan. Tha siù a th'annasachda chertificat airson deamh a tha thu'n ceannach, seirbheann gu sònraich a' chluainnachd air.
- Comharrach air loga SSL CyberPanel air **Logs** > **Error Logs** airson seirbheann air an t-chertificat.
- As ùr-fàs, thu eadar a thannasachda SSL gu sònraich de uile: **SSL** > **Manage SSL** > sceilidh an deamh > **Issue SSL**.

## References {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
