---
title: Ubwumvikane bw'Ubushobozi bwa CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Uburyo Integration

Iyi gushyaho uburyo bwo gutegura uburyo bwa Ultimate Multisite CyberPanel. Igiheki n'ibyo uburyo bwa mapangwa (mapped domains) mu network yawe, byo bitangirwa (and bitakwiriwe) ngufi cyo kuba virtual hosts muri CyberPanel, kandi hari ubushobozi bwo gukoresha auto-SSL ku buryo bw'ubwujubi bwa Let's Encrypt.

## Iyo Ibyo Bifata Icyo?

- Iyo domain yirindwe (mapped) mu Ultimate Multisite, uburyo bwa gutegura bishobora gukoresha API ya CyberPanel kugira ngo yitangire virtual host ku gihe cy'ibyo byo.
- Iyo mapangwa y'domain irindwe, uburyo bwa gutegura bishobora gukoresha API kugira ngo yiyumve (delete) virtual host yashoboye.
- Iyo auto-SSL iri mu gihe cyo, uburyo bwa gutegura bishobora gushyira cyangwa guhagarara (add/remove) certificate ya Let's Encrypt mu gihe cyo cyiza cyane cyizera virtual host yashoboye.
- Hari ubushobozi bwo gushyira cyangwa guhagarara alias `www.` mu gihe cyo, byo bitewe n'ubwoko w'Auto-create www subdomain muri Domain Mapping settings yawe.

## Icyo Cyiza Kumenya (Prerequisites)

- Uburyo bwa CyberPanel ugiye (v2.3 cyangwa uyu hejuru niho) kandi ufite uburyo bwo gukoresha (reachable) ku server yawe ya WordPress.
- Uburyo bwa website yari mu CyberPanel kandi yashoboye guhagarara root ya network yawe ya WordPress. Iyo uburyo bwa gutegura bishobora gushyira virtual hosts zishya kuri uyu server.
- Gutegura uburenganzira (API access) muri CyberPanel. Uburyo bwo gukoresha ubwujubi ni cyo mu gihe cyo cyiza cyane cyizera admin username n'ubwujubi yawe.
- Icyo cyiza cyane cyane, DNS records za domain zishoboye guhagarara kuri IP ya server yawe mbere y'ibyo byo bwo auto-SSL gushyira certificate yiza.

## Ingozi (Requirements)

Icyo cyiza cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Uburyo: true — yemeza Let's Encrypt SSL nyuma yemezo ry'umunsi
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Uburyo: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Icyemo cyo gukoreshwa mu kumenya certificate y'umunsi

## Inshingiro ry'Ubwumvikane (Setup Instructions)

### 1. Gukoresha API ya CyberPanel

1. Log in ku dashboard ya CyberPanel nk'umuntu w'ubwumvikane (administrator).
2. Gukora **Security** > **SSL** kandi ugutera ko SSL yari yisanzwe kuri interface ya CyberPanel yเอง (iki ni ikoreshwa mu gukoresha API zishya cyemezo).
3. API ya CyberPanel igaragaza ku URL `https://your-server-ip:8090/api/` nk'umunsi. Nta ngingo zikurikira zishobora guhindura kugira ngo yitandukanye — yari isanzwe mu gihe cyo gukoresha kuri admin users.

### 2. Gufasha Constants ku wp-config.php

Gusobanura uburyo bwo gukoresha constants (izindi nshingiro z'ubwumvikane) mu file ya `wp-config.php` mbere y'indwara `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kugira ngo uhereze auto-SSL (iki ni ikoreshwa cyane):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Gufasha Ubwumvikane (Enable the Integration)

1. Mu network admin ya WordPress yawe, gukora **Ultimate Multisite** > **Settings**.
2. Gukoresha tab ya **Domain Mapping**.
3. Gushyira ku mwera **Host Integrations**.
4. Gufasha (Enable) integration ya **CyberPanel**.
5. Gukora **Save Changes**.

### 4. Gushyira Umuco (Verify Connectivity)

Gukoresha uburyo bwo gukoresha connection test cyari yisanzwe mu wizard ya settings:

1. Kwibuka **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Click **Test Connection**.
3. Umugwisha w'ubwujyu uyu nshingiro ukunda ko plugin yashobora gutanga API ya CyberPanel kandi yashobora gukoresha neza.

## Uburyo Bwo Gukora Icyo Kuriwe

### Domain Mapping (Ubwujyu bw'Icyemezo cy'Domain)

Iyo domain ikorwa mu Ultimate Multisite:

1. Icyemezo cy'integration kigenda ku `POST` request kuri `/api/createWebsite` kuri host ya CyberPanel yawe.
2. CyberPanel igira virtual host yshya ku domain uyu mu package wakoze.
3. Document root ikorwa kugira ngo ikoreshe neza ku directory ya WordPress network yawe.
4. Iyo gukorwa cy'domain mapping, i cyemezo cy'integration kigenda kuri `/api/deleteWebsite` kugira ngo yitanye (clean up) virtual host.

### Auto-SSL (Auto-SSL)

Iyo `WU_CYBERPANEL_AUTO_SSL` ikorwa nk'iki:

1. Nyuma yo gukora virtual host, i cyemezo cy'integration kigenda kuri `/api/issueSSL` ku domain uyu.
2. CyberPanel igenda kugira certificate ya Let's Encrypt iteguye ku ACME HTTP-01 challenge.
3. Certificate ikorwa neza (renewed) na CyberPanel mbere yitera mu gihe cyo gukoreshwa.

> **Inshingiro Zikomeye:** DNS igomba kwibanda neza kuri IP yawe ya server mbere y'Let's Encrypt yashobora guhagarara domain. Niba SSL ikorwa mu gihe cyo gukora mapping, ugomba kwibanda neza ku DNS kandi ugaragareya SSL ku dashboard ya CyberPanel muri **SSL** > **Manage SSL**.

### www Subdomain (Subdomain ya www)

Niba **Auto-create www subdomain** ikorwa nk'iki mu gihe cyo gukora mapping, i cyemezo cy'integration kigira uburyo bwo gukora virtual host alias kuri `www.<domain>` kandi, iyo Auto-SSL ikorwa, ikorera certificate ikoresha ku variants zose (apex na www).

### Email Forwarders (Ubwujyu bw'Email Forwarders)

Iyo [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon yariye, CyberPanel yariye umukuriya cyo mu gihe cy'ubwitonzi bwa umukundzi (customer email forwarders) nshobora gukoresha. Iyo uyu forwarder, igice cyo kumenya ibyerekezo byo mu gihe cyo kwandika (domain address), igenda amakuru ku inbox ikindi nta gukora mailbox yakuriye, kandi iki ni ikindi gikomeye kuri aliases nk'ibyo: `info@customer-domain.test` cyangwa `support@customer-domain.test`.

Mu gihe cyo gukoresha forwarders ku muntu wese (customers):

1. Gukoresha ibyerekezo byo mu gihe cyo kwandika (constants) byo mu gihe cyo kumenya CyberPanel ni yiza kandi uburyo bwo gukora connection test buri gihe buri gihe buri gihe buri gihe.
2. Gukoresha umukundzi w'email kuri Emails addon settings.
3. Gukoresha ibyerekezo byo mu gihe cyo kwandika (domain) ni yiza mu CyberPanel mbere y'ugufasha forwarder.
4. Gukora test forwarder kandi genda amakuru ku yisobanuro bwawe mbere y'ugufasha uyu feature kuri production plans.

Niba gukoresha forwarder bikorera, gukoresha activity logs byo Ultimate Multisite mbere, nyuma gukoresha CyberPanel kugira ngo umukundzi w'email yisobanuro (source domain) yari yiza kandi ko API user agira uburyo bwo kwemera email-management.

## Urugero rw'Ubwitonzi (Configuration Reference)

| Constant | Yose Icyiza? | Inshingiro (Default) | Uburyo bw'Icyerekezo |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | URL yose ya CyberPanel yawe ikoresheje, ukoreshe uburyo bwo gukora port, urugero: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Username ya admin ya CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Password ya admin ya CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Package ya hosting ya CyberPanel yashobora gukoreshwa kuri virtual hosts zishya |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Gukora Let's Encrypt SSL certificate nyuma yo gukora domain |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | PHP version ya virtual hosts zishya (ni yiza kumenya version yakoresheje mu CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Email ya kurinda SSL certificate |

## Inama Zikomeye (Important Notes)

API ya CyberPanel yashobora gukoreshwa ku buryo bwo guhindura token (session-based token authentication). Umuco utera uburyo bwo gutanga iyo token mu gihe cyo gukoresha API.
Icyemezo cy'umuntu w'ubwoko bw'Ubwuzine (admin account) mu CyberPanel ni ko yashobora gukora no guhindura websites.
CyberPanel yitera ku port `8090` mu gihe cyo gukoresha uburyo bwo gukoresha (default). Niba umusaruro w'ubwoko (server) wako ugiye kuri firewall, ugomba kwerekana ko iyo port irashobora gutungwa ku kera ry'Ubwuzine bw'WordPress.
Icyemezo cyo guhindura DNS (DNS records) ntacyo cyitera. Ugomba gukoresha domain DNS kugira ngo ugiye kuri IP address ya server yawe mbere yagize iyo domain mu Ultimate Multisite.
Niba ugiye gukoresha OpenLiteSpeed (OLS), uburyo bwo guhindura virtual host bitera gukora buri gihe cyo kubyara (graceful restart). Nta ngombwa kw'ubwoko bw'umuntu kugira ngo ubone uburyo bwo gukora.

## Gukoresha Icyemezo (Troubleshooting)

### API Connection Refused (Ubwuzine bwo API guhindurwa)

- Yerekana ko port `8090` irashobora gutungwa mu firewall yawe y'ubwoko.
- Gukoresha uburyo bwo gukoresha `WU_CYBERPANEL_HOST` ugomba kwerekana ko yitera uburyo bw'ubwoko (protocol) cyangwa port igaragaza (https://).
- Yerekana ko SSL certificate ya CyberPanel yawe iryo; ibyerekeye certificates byiza mu gihe cyo gukoresha TLS bitera guhindura. Gukoresha `WU_CYBERPANEL_VERIFY_SSL` kugira ngo yitera `false` gusa mu gihe cyo gukoresha uburyo bwo kubyara (trusted private network environments).

### Authentication Errors (Uburyo bwo guhindura uburyo bwo gutanga)

- Gukoresha `WU_CYBERPANEL_USERNAME` n'WU_CYBERPANEL_PASSWORD` kugira ngo ubone ko yashobora gukoreshwa mu CyberPanel cyangwa gukoresha uburyo bwo guhindura.
- CyberPanel itera uburyo bwo gutanga (accounts) iyo ugiye gukoresha uko ugiye gukoresha buri gihe cyo gutanga. Yerekana ku **Security** > **Brute Force Monitor** mu CyberPanel niba hari ibyo byitera guhindura.

### Domain Not Created (Domain ntacyo yashobora gukorwa)

- Gukoresha uburyo bwo gukoresha activity log ya Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) kugira ngo ubone ibyemezo by'API.
- Yerekana ko package yitera mu `WU_CYBERPANEL_PACKAGE` yishobora gutangwa mu CyberPanel (**Packages** > **List Packages**).
- Gukoresha uburyo bwo gukoresha domain ntacyo yashobora gukorwa mu CyberPanel — guhindura website cyiza bitera ibyemezo.

### SSL Certificate Not Issued (SSL Certificate ntacyo yitangwa)

- Gukorera DNS yashobora yemerera gusa: `dig +short your-domain.com` yoroshye kugukoresha IP ya server yawe.
- Let's Encrypt yitera uburyo bwo kwizera (rate limits). Niba wari utera certificate nyinshi mu gihe cyiza ku domain yashya, wumva mbere yo kurya mu gihe cyiza.
- Gushyira ibyemezo by'ubwumvikane (SSL logs) mu **Logs** > **Error Logs** kugira ngo umenye ibyo bishobora yitera mu gukoresha certificate.
- Niba hari ikindi kintu cyo kwibanda, uza kuba ufite ubushobozi bwo gukora SSL mu buryo bw'umwihariko (manually) ku CyberPanel: **SSL** > **Manage SSL** > ugira umuduro w'domain > **Issue SSL**.

## Inyandiko z'ibyo (References)

- Inyandiko z'API ya CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Uburyo bwo gukoresha SSL ku CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Rate Limits za Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
