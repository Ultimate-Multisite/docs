---
title: Integrazzjoni cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrà cPanel {#cpanel-integration}

## Panoramika {#overview}
Il cPanel huwa wieħed mill-popolari pannell tal kontroll web li jinkludi l-web hosting għal ħafna fornituri ta hosting, sia shared (komuni) u dedicated (dedikati). Dan l-integrazzjoni tispjega is-sync awtomatiku tal-domain bejn Ultimate Multisite u cPanel, li jagħti possibilja li ti aġġixxi awtomatik alias tal-domain u subdomain għall-account tiegħek f'cPanel.

## Funzjonijiet {#features}
- Kreawja awtomatika ta addon domain f'cPanel
- Kreawja awtomatika ta subdomain f'cPanel (għal installazzjonijiet multisite b subdomain)
- Eliminazzjoni tal-domain meta jkun il-mapping deleted

## Reġistrazzjonijiet {#requirements}
Il-konstanti li sigurtabbil għandhom definita fil-file `wp-config.php` tiegħek:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

B'opzjoni, tista definixxi wkoll:

```php
define('WU_CPANEL_PORT', 2083); // Il default huwa 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Il default huwa /public_html
```

## Istruzzjonijiet ta l-setup {#setup-instructions}

### 1. Ottien il-Credentials tal-cPanel tiegħek {#1-get-your-cpanel-credentials}

1. Oħti l-username u password tal-cPanel tiegħek mill-fornitur tal-hosting tiegħek.
2. Determina l-host tal-cPanel tiegħek (solit huwa `cpanel.yourdomain.com` jew `yourdomain.com:2083`).

### 2. Aggiungi i Konstanti għal wp-config.php {#2-add-constants-to-wp-configphp}

Aggiungi il-konstanti fil-file tiegħek `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

B'opzjoni, tista tistaġġiżxi il-port u l-root directory:

```php
define('WU_CPANEL_PORT', 2083); // Badil se jiddefina cPanel tiegħek port differenti
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Badil se il root tal-dokument tiegħek huwa differenti
```

### 3. Ifilja l-Integrazzjoni {#3-enable-the-integration}

1. F'admin WordPress tiegħek, għandi itra għal Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping" (Mappatura tal-Dominji)
3. Scroll' għall-lejlija għal "Host Integrations" (Integrazzjonijiet taċ-Server)
4. Iżżewwila l-integrazzjoni ta cPanel (cPanel integration)
5. Klikka fuq "Save Changes" (Saħħa Bidżi)

## Come Funziona {#how-it-works}

### Addon Domains (Dominji Aggiuntivi) {#addon-domains}

Meta domin huwa mappat f'Ultimate Multisite:

1. L-integrazzjoni tiffaċċja richiesta għall-API ta cPanel biex tiddarba d-domin f'add-on domain
2. Id-domin huwa konfigurat biex jidirettaw għall-root directory tiegħek
3. Meta tiddirba l-mappatura tal-domin, l-integrazzjoni tiddirba d-addon domain min cPanel

### Subdomains (Subdomeni) {#subdomains}

B'mod kif jomm it-installazzjoni ta multisite subdomini, meta jitcrea siti ġdidi:

1. L-integrazzjoni tistratti l-parti tal-subdomain mill-domin kumpli
2. Tiffaċċja richiesta għall-API ta cPanel biex tiddarba d-subdomain
3. Id-subdomain huwa konfigurat biex jidirettaw għall-root directory tiegħek

## Nota Importanti {#important-notes}

- L-integrazzjoni tista' tiffaċċja reqsi l-API2 ta cPanel biex tkomunika mal-account tiegħek ta cPanel
- L-account tiegħek ta cPanel għandu permess biex jiddaħħl addon domains u subdomains
- X'tra fornituri ta hosting jistgħu jħasslu l-numru ta addon domains jew subdomains li tista' tgħmli
- L-integrazzjoni ma tidirx xogħol għall-DNS; għad tkun għandek tiddirettaw id-dominijiet tiegħek għall-IP address tal-server tiegħek

## Problemi (Troubleshooting) {#troubleshooting}

### Problemi b'Konnekkizzjoni API {#api-connection-issues}
- Verifika li l-username u il-password ta cPanel tiegħek huma korretti
- Kontrolla li l-host ta cPanel tiegħek huwa korrett u aġġustabbli
- Assicurajt li l-account tiegħek ta cPanel għandu l-permessijiet neċessarji
- Iżrob istuqsu l-URL kumpli għall-host (e.g., `https://cpanel.yourdomain.com`)

### Domin ma jiddaħħl {#domain-not-added}
- Kontrolla l-logs ta Ultimate Multisite għal pirċa msgjiġi diġitali
- Verifika li d-domin ma hijax giàma additta f'cPanel
- Assicurajt li l-account tiegħek ta cPanel ma għandu x'tra għall-addon domains jew subdomains

### Problemi maħsori (SSL Certificate Issues) {#ssl-certificate-issues}
- Il-integrazzjoni ma tiffaħlix l-issodda tal-ċertifikat SSL.
- Se għandek uffuda li u għandu u l-AutoSSL feature ta cPanel biex ti emetti ċertifikati SSL għall-domainijiet tiegħek.
- Alternattivament, tista' u għandek u l-servizz kif Let's Encrypt مع AutoSSL ta cPanel.
