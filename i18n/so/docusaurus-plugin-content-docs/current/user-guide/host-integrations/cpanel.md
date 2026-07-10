---
title: Isdhexgalka cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Intégrasiya-da cPanel {#cpanel-integration}

## Aragtida {#overview}
cPanel waa mid ka mid ah hababka ugu caansan ee maamulka web hosting-ka loo isticmaalo dad badan oo adeegsada hosting-ka wadaagga ah iyo kuwa gaarka ah. Isku xirnaanshaha (integration) kan waxay kuu oggolaanaysaa isdhaafsiga tooska ah ee domain-ka (domain syncing) inta u dhaxaysa Ultimate Multisite iyo cPanel, taasoo kuu ogolaanaysa inaad si toos ah u ku dari lahayd alias-yada domain-ka iyo subdomain-yada barnaamijkaaga cPanel.

## Faahfaahinta {#features}
- Abuurista automatic oo addon domain ah cPanel-ka
- Abuurista automatic oo subdomain ah cPanel-ka (haddii aad ku samaynayso subdomain multisite installations)
- Ka saarista domain-ka marka la nisboonayo isbeddelada mappings

## Shuruudaha {#requirements}
Waxyaabahan waa in lagu qoro badankood ee `wp-config.php` faylkaaga:

```php
define('WU_CPANEL_USERNAME', 'username-ka-cpanel-kaaga');
define('WU_CPANEL_PASSWORD', 'password-ka-cpanel-kaaga');
define('WU_CPANEL_HOST', 'host-ka-cpanel-kaaga');
```

Waxaad doorbidayso si xaddidan inaad qorto:

```php
define('WU_CPANEL_PORT', 2083); // Default-ku waa 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default-ku waa /public_html
```

## Tilmaamaha Dejinta (Setup Instructions) {#setup-instructions}

### 1. Hel Xogta CPanel-kaaga {#1-get-your-cpanel-credentials}

1. Hel username-ka iyo password-ka cPanel-kaaga lagaa helid hosting-kaaga.
2. Ogaad host-ka cPanel-kaaga (badankood waa `cpanel.yourdomain.com` ama `yourdomain.com:2083`).

### 2. Ku Dari Constants-ka wp-config.php {#2-add-constants-to-wp-configphp}

Ku dari constants-kan faylkaaga `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'username-ka-cpanel-kaaga');
define('WU_CPANEL_PASSWORD', 'password-ka-cpanel-kaaga');
define('WU_CPANEL_HOST', 'host-ka-cpanel-kaaga');
```

Waxaad doorbidayso si xaddidan port-ka iyo directory-ga asalka ah:

```php
define('WU_CPANEL_PORT', 2083); // Beddel haddii cPanel-kaagu isticmaalo port kale
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Beddel haddii directory-gaaga asalka ah uu yahay mid kale
```

### 3. Fur Isticmaalidda (Enable the Integration) {#3-enable-the-integration}

1. Admin-ka WordPress-kaaga, tag ciyaarsan (Ultimate Multisite) > Settings-ka u socda.
2. Tab-ka "Domain Mapping" (Xogta Domain-ka) ku socda.
3. Hoosta hoos u soo dejinta "Host Integrations" (Isdhaaran Host-ka).
4. Cign-ka cPanel-ka shaqeyso (Enable the cPanel integration).
5. Guji "Save Changes" (Kaydi Isbeddellada).

## Sidaa U Shaqayso {#how-it-works}

### Addon Domains (Domain-yada Ku Darbada) {#addon-domains}

Marka domain-ka lagu xogto (mapped) Ultimate Multisite-ka, waxyaabahan soo socota ayaa dhaca:

1. Isdhaarku wuxuu u dirayaa codsi API-ga cPanel-ka si uu domain-ka u daro sidii addon domain ah.
2. Domain-ku waxaa loo dejiyay inuu u socdo directory-ga ugu horreeya (root directory).
3. Marka la saaro xogta domain-ka, isdhaarku wuxuu ka saari doonaa addon domain-ka cPanel-ka.

### Subdomains (Subdomain-yada) {#subdomains}

Haddii aad isticmaalayso subdomain multisite installation ah, marka la abuuro website cusub:

1. Isdhaarku wuxuu ka soo saaraa qaybta subdomain-ka oo dhan domain-ka.
2. Wuxuu u dirayaa codsi API-ga cPanel-ka si uu subdomain-ka u daro.
3. Subdomain-ku waxaa loo dejiyay inuu u socdo directory-ga ugu horreeya (root directory).

## Fiiro Muhiim ah {#important-notes}

- Isdhaarku wuxuu isticmaalayaa API2-da cPanel-ka si uu la xiriiro ciyaartaada cPanel.
- Ciyaartaada cPanel-ku waa inay leedahay fursadaha lagu daro addon domains iyo subdomains.
- Qaar ka mid ah bixiyeya hosting-ka waxay xaddidan karaan tirada addon domains ama subdomains ee aad samayn karto.
- Isdhaarku ma maamaynayo dejinta DNS-ka; weli waxaad u baahan tahay inaad domain-yadaada u socoto IP address-ka server-kaaga.

## Xallinta Dhibaatooyinka (Troubleshooting) {#troubleshooting}

### Masalahaat Lagu La Xiriira API Connection {#api-connection-issues}
- Hubi in magaca isticmaalka iyo sirta cPanel-kaadu ay sax yihiin.
- Hubi in host-ka cPanel-kaagu uu sax yahay oo la heli karo.
- Hubi in ciyaartaada cPanel-ku leedahay fursadaha loo baahan yahay.
- Isku day inaad isticmaasho URL-ka oo dhan ee host-ka (tusaale: `https://cpanel.yourdomain.com`).

### Domain-ka Aan La Darin {#domain-not-added}
- Hubi logs-ka Ultimate Multisite-ka si aad u hesho warar qalad ah (error messages).
- Hubi in domain-ku aysan la darin cPanel-ka hadda.
- Hubi in ciyaartaada cPanel-ku aanay gaarin xaddidaadda addon domains ama subdomains-ka.

### Masalahyada Sertifikalka SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Isdhexgalka (integration) ma maareynayo bixinta sertifikalka SSL.
- Waxaad u baahan doontaa inaad isticmaasho qalabka SSL/TLS ee cPanel ama astaanta AutoSSL si aad u bixiso sertifikalka SSL-ka domain-kaaga.
- Sida kale, waxaad isticmaali kartaa adeeg la mid ah Let's Encrypt iyadoo la isticmaalayo AutoSSL-ka cPanel.
