---
title: Uunganishaji wa cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Uunganishaji wa cPanel

## Muhtasari
cPanel ni mojawapo ya paneli maarufu zaidi za kudhibiti huduma za hosting zinazotumiwa na watoa huduma wengi wa shared na dedicated hosting. Uunganishaji huu unawezesha usawazishaji wa kiotomatiki wa domains kati ya Ultimate Multisite na cPanel, kukuruhusu kuongeza domain aliases na subdomains kwenye akaunti yako ya cPanel kiotomatiki.

## Vipengele
- Uundaji wa kiotomatiki wa addon domain kwenye cPanel
- Uundaji wa kiotomatiki wa subdomain kwenye cPanel (kwa usakinishaji wa subdomain multisite)
- Kuondoa domain wakati mappings zinafutwa

## Mahitaji
Constants zifuatazo lazima zielezwe kwenye faili yako ya `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Kwa hiari, unaweza pia kueleza:

```php
define('WU_CPANEL_PORT', 2083); // Chaguo-msingi ni 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Chaguo-msingi ni /public_html
```

## Maelekezo ya Usanidi

### 1. Pata Taarifa za Kuingia za cPanel

1. Pata jina lako la mtumiaji na nenosiri la cPanel kutoka kwa mtoa huduma wako wa hosting
2. Tambua host yako ya cPanel (kawaida ni `cpanel.yourdomain.com` au `yourdomain.com:2083`)

### 2. Ongeza Constants kwenye wp-config.php

Ongeza constants zifuatazo kwenye faili yako ya `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Kwa hiari, unaweza kubadilisha port na directory kuu:

```php
define('WU_CPANEL_PORT', 2083); // Badilisha ikiwa cPanel yako inatumia port tofauti
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Badilisha ikiwa document root yako ni tofauti
```

### 3. Washa Uunganishaji

1. Kwenye admin ya WordPress yako, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Washa uunganishaji wa cPanel
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

### Addon Domains

Wakati domain inaunganishwa kwenye Ultimate Multisite:

1. Uunganishaji unatuma ombi kwa API ya cPanel kuongeza domain kama addon domain
2. Domain inasanidiwa kuelekeza kwenye directory yako kuu
3. Wakati domain mapping inaondolewa, uunganishaji utaondoa addon domain kutoka cPanel

### Subdomains

Kwa usakinishaji wa subdomain multisite, wakati tovuti mpya inaundwa:

1. Uunganishaji unachukua sehemu ya subdomain kutoka domain kamili
2. Inatuma ombi kwa API ya cPanel kuongeza subdomain
3. Subdomain inasanidiwa kuelekeza kwenye directory yako kuu

## Mambo Muhimu ya Kuzingatia

- Uunganishaji unatumia API2 ya cPanel kuwasiliana na akaunti yako ya cPanel
- Akaunti yako ya cPanel lazima iwe na ruhusa za kuongeza addon domains na subdomains
- Watoa huduma wengine wa hosting wanaweza kuweka kikomo kwa idadi ya addon domains au subdomains unazoweza kuunda
- Uunganishaji haushughulikii usanidi wa DNS; bado unahitaji kuelekeza domains zako kwa anwani ya IP ya seva yako

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Hakikisha kuwa jina lako la mtumiaji na nenosiri la cPanel ni sahihi
- Angalia kuwa host yako ya cPanel ni sahihi na inapatikana
- Hakikisha kuwa akaunti yako ya cPanel ina ruhusa zinazohitajika
- Jaribu kutumia URL kamili kwa host (k.m., `https://cpanel.yourdomain.com`)

### Domain Haijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Hakikisha kuwa domain haijaongezwa tayari kwenye cPanel
- Hakikisha kuwa akaunti yako ya cPanel haijafikia kikomo chake cha addon domains au subdomains

### Matatizo ya Cheti cha SSL
- Uunganishaji haushughulikii utoaji wa vyeti vya SSL
- Utahitaji kutumia zana za SSL/TLS za cPanel au kipengele cha AutoSSL kutoa vyeti vya SSL kwa domains zako
- Vinginevyo, unaweza kutumia huduma kama Let's Encrypt pamoja na AutoSSL ya cPanel
