---
title: Kuthandiza kwa Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Usumbu wa Hostinger (hPanel)

## Umuvuu {#overview}

Hostinger ndi chonde kowonje wopanga web hosting, ndipo imene imene yomwe imapereka mwayi wopanga ntchito yomwe. Ultimate Multisite Hostinger integration imapereka kusintha domain kwawo m'mwayi wopanga ntchito (WordPress admin) ndi Hostinger hPanel, imapereka kuti mupereke ntchito yawo m'mwayi wopanga ntchito (WordPress admin) kuchokera kwa mapeto a domain ndi subdomains m'mwayi wopanga ntchito yomwe.

## Mafunso Awo {#features}

- Kupanga addon domain kowonje m'hPanel
- Kupanga subdomain kowonje m'hPanel (poyamba kuti mupereke subdomain multisite installations)
- Kusuntha domain pamene mappings apereka akugwira mapeto a mapping
- Kukhala ndi integration yomwe yomwe yomwe imapereka kuwelola domain kwa hPanel

## Zomwe Zikufunika {#requirements}

Kuti mupereke ntchito ya Hostinger, mukuwoneka kuti mukuwoneka:

1. Akubwera ndi account ya Hostinger yomwe imapereka access ya hPanel
2. API token kuchokera kwa Hostinger
3. Zomwe zikufunika kukhala m'file wanu `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Mwayi wopereka, mupereke kuti:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Zomwe Zikufunika Kukhala (Setup Instructions) {#setup-instructions}

### 1. Panga Hostinger API Token Yanu {#1-generate-your-hostinger-api-token}

1. Kukhala m'account ya Hostinger yanu ndipo pofuna hPanel
2. Phokera ku **Account Settings** → **API Tokens**
3. Phokera ku **Create New Token**
4. Panga dzina lofunika kwa token yanu (mwachitsanzo, "Ultimate Multisite")
5. Koselekera mapeto omwe mukuwoneka:
   - Domain management
   - Subdomain management
6. Kopya token yomwe imapereka ndipo panga m'mwayi wopanga ntchito

### 2. Pseza Account ID Yanu {#2-find-your-account-id}

1. M'hPanel, phokera ku **Account Settings** → **Account Information**
2. Account ID yanu imapereka pa nthawi yomwe imapereka
3. Kopya ndipo panga ID iyi kuti mupereke ntchito ya m'mwayi wopanga ntchito

### 3. Panga Constants ku wp-config.php {#3-add-constants-to-wp-configphp}

Panga constants zina zosangalatsa ku file wanu `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Kungwamba wanu Hostinger account inenge yomwe API endpoint uliwe, muli ndi momwe mungowonje:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Kufuna Kukhazikitsa (Enable the Integration) {#4-enable-the-integration}

1. Mu admin ya WordPress yanu, ndi pansi pa **Ultimate Multisite > Settings**
2. Ndani pa tab ya **Domain Mapping**
3. Ndachulupanga m'moyo pa **Host Integrations**
4. Onje kukhazikitsa (Enable) integration ya **Hostinger (hPanel)**
5. Onje **Save Changes**

## Kuti Imene Kuti Imene (How It Works) {#how-it-works}

### Addon Domains {#addon-domains}

Pamene mungowonje domain mu Ultimate Multisite:

1. Integration imesetsa kusonyeza request ku Hostinger's API kuti ite domain imene monga addon domain
2. Domain imene imefunika kuyenda ku directory yanu ya mukuu (root directory)
3. Pamene mungowonje domain mapping, integration imesetsa kuondoza addon domain ku hPanel

### Subdomains {#subdomains}

Pamene mungapereka subdomain multisite installations, pamene site lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili lili l

- Kufatira kuti token ya API yanu ikho kwayi kwayo ndipo sikukukwera
- Kufatira kuti Account ID yanu ndi luso
- Kufatira kuti token ya API yanu imene nkhau zofunika za ulamulira domain
- Kufatira kuti account ya Hostinger yanu ikho ndikuyenera

### Domain Siyipatsidwa {#important-notes}

- Kufatira logs za Ultimate Multisite kuti muli ndi mafozo a chisoni
- Kufatira kuti domain si imene pansi pa account ya Hostinger yanu
- Kufatira kuti account ya Hostinger yanu sikukukwera kwa limit ya addon domains
- Kufatira kuti domain imene bwino ku nameservers za Hostinger yanu

### Masomo a SSL Certificate {#troubleshooting}

- Integration imene si imene kukhazikitsa SSL certificate
- Hostinger imene imene kumphera SSL certificates zosangalatsa m'AutoSSL
- Muli ndi ulemu wosangalatsa SSL certificates m'hPanel pansi pa **SSL/TLS**
- Mwachidule, simene Let's Encrypt ndi AutoSSL ya Hostinger

## Chisoni {#api-connection-issues}

Pofunsa kuti muli ndi madikitira kwambiri ndi integration ya Hostinger, chonde funsa:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
