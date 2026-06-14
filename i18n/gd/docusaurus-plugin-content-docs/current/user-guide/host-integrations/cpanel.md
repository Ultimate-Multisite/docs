---
title: Cpanel a' chluainn
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# CPanel Integradh

## Aims
CPanel is am mionn de chùlchnaith (control panel) web hosting a tha thaile gu mòr a' chluichdheachda le fìor-ghnàthach. A' chluichdheach seo a' bheachd a' chluichdheach ùr-fhaisg (domain syncing) beòr-fhaisg (Ultimate Multisite) agus cPanel, a' bheachd a' chluichdheach a' chluichdheach fhaisg (automatic domain syncing). Tha seo a' bheachd a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach a' chluichdheach.

## Feàinean
- Creach ùr-fhaisg (addon domain) a' chluichdheach beòr-fhaisg (cPanel)
- Creach ùr-fhaisg (subdomain) a' chluichdheach beòr-fhaisg (cPanel) ( airson càiinnte subdomain multisite)
- A' chluichdheach a' tòiseachadh nuair a thàndraidhean (mappings) a' tòiseachadh a' tòiseachadh.

## Cùighean
Tha e cheann de dhìon a tha thu `wp-config.php` beartach:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Tha e a' chluichdheach, tha thu e a' bheachd a' chluichdheach:

```php
define('WU_CPANEL_PORT', 2083); // Tha e a' chluichdheach, tha e 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Tha e a' chluichdheach, tha e /public_html
```

## Amasachadh Creachadh

### 1. Ghràdh Eadar-fhaisg CPanel (cPanel Credentials)

1. Ghàdh thu username agus passord cPanel a' chluichdheach de dhòigh fhaisg (hosting provider).
2. Seachdaidh thu host CPanel (thìr a tha e, thèid a tha e, thàndraidh a tha e) (thìr a tha e, thèid a tha e, thàndraidh a tha e) (thìr a tha e, thèid a tha e, thà

1. Iar a admin WordPress-a, ràdh an t-sealladh (Ultimate Multisite) > Settings goidh.
2. Tuisge an tab "Domain Mapping" (Mappáil Dòmnain).
3. Scroladh a' chùl don "Host Integrations".
4. Enable the cPanel integration (Taisg an t-sealladh cPanel).
5. Click "Save Changes" (Sgaidh Amdiridhean).

## Conas Aird a tha e cheannach

### Addon Domains (Dòmnainn Addon)

Nuair a thàir an dòmnain a' chùl i Ultimate Multisite:

1. Aird an t-sealladh (integration) cur a' chruinneachadh do API cPanel airson an dòmnain a bhith mar addon domain.
2. Bidh an dòmnain a' sgaidh gu dìreach air an àrd-dirich (root directory) agad.
3. Nuair a thàir an mappáil dòmnain a' chùl, beidh an t-sealladh a' tòisich an addon domain a' le cPanel.

### Subdomains (Subdòmnainn)

 airson càiinnte subdomain multisite, nuair a chruthach an sin-aithreach:

1. Aird an t-sealladh a' chruinneachadh an t-subdomain a' chluainteachd air an dòmnain gu latha.
2. Aird cur a' chruinneachadh do API cPanel airson an subdomain a thàir.
3. Bidh an subdomain a' sgaidh gu dìreach air an àrd-dirich agad.

## Note Donnach Importanthe

- Aird an t-sealladh (integration) a' sgaidh air API2 de cPanel airson a bhith a' gorteininn riabh an àite cPanel agad.
- Fad an àite cPanel agad fhaigh amhdan airson addon domains agus subdomains a thàir.
- Beirich daoine aithreach (hosting providers) eadar-dheargadh air tairteachadh DNS; tha thuig a' sgaidh tòisich tòmnainn agad gu an àite IP agad.

## Taisg (Troubleshooting)

### Amachdan Cunnartasan API (API Connection Issues)
- Bhaigh amhdan do username agus password cPanel agad gu fìor.
- Comharr a' chluainteachd obairc agad cPanel agad agus gun eadar-dheargadh.
- Bidh an àite cPanel agad de dhòighean a thàir sinneachaidh (permissions) a tha thuig.
- Comharr a' sgaidh air an URL fhuil don host (e.g., `https://cpanel.yourdomain.com`).

### Dòmnain Nì Aird
- Bhaigh amhdan do logs Ultimate Multisite a' chluainteachd seachdairean (error messages) gu leòr.
- Comharr a' sgaidh air an dòmnain a tha eairt a' le cPanel agad.
- Beirich daoine aithreach agad gun fhaigh thuig air an latha airson addon domains no subdomains.

### Problemanan Certat SSL

- A integrasi a dullnann an tòiseachadh air sgaidhinn certat SSL.
- Bidh sinn ag iarraidh leat a lasadh certat SSL airson do chàilidhean (domains) a' le cPanel's SSL/TLS tools no AutoSSL feature.
- Mar ealaian, thuig a lasadh seòlas a tha seòlas Let's Encrypt aige le cPanel's AutoSSL.
