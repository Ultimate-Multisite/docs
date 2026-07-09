---
title: Fampifandraisana cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Fandahana amin'ny cPanel {#cpanel-integration}

## Famarahabana (Overview) {#overview}
Ny cPanel dia iray amin'ireo panel fitantanana web hosting malaza indrindra ampiasain'ny mpamatsy hosting maro, na ireo manome hosting manokana. Ity fampifandraisana ity dia mamela ny fametrahana automatique an'ny domain syncing eo amin'ny Ultimate Multisite sy cPanel, izay ahafahanao manampy alias domain sy subdomain ho azy ao amin'ny kaontinao cPanel.

## Toetran'ny Fampiasana (Features) {#features}
- Famoronana addon domain automatic ao amin'ny cPanel
- Famoronana subdomain automatic ao amin'ny cPanel (ho an'ny fametrahana subdomain multisite)
- Fandefasana ny domain rehefa esorina ireo mapping

## Fepetra Takiana (Requirements) {#requirements}
Ireo constants manaraka dia tsy maintsy voarakitra ao amin'ny rakitra `wp-config.php` anao:

```php
define('WU_CPANEL_USERNAME', 'anaran'ny_cpanel');
define('WU_CPANEL_PASSWORD', 'teny_kodin'ny_cpanel');
define('WU_CPANEL_HOST', 'host_an'ny_cpanel');
```

Mba hanampiana, afaka mamaritra koa ianao:

```php
define('WU_CPANEL_PORT', 2083); // Ny default dia 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ny default dia /public_html
```

## Toromarika Fampidirana (Setup Instructions) {#setup-instructions}

### 1. Fahazoana ny Fandaharam-potoana cPanel anao {#1-get-your-cpanel-credentials}

1. Fantaro ny anaran'ny mpampiasa sy ny teny kodin'ny cPanel avy amin'ny manome hosting anao
2. Fantaro ny host an'ny cPanel anao (matetika dia `cpanel.yourdomain.com` na `yourdomain.com:2083`)

### 2. Fametrahana ireo Constants ao amin'ny wp-config.php {#2-add-constants-to-wp-configphp}

Ampidiro ireo constants manaraka ao amin'ny rakitra `wp-config.php` anao:

```php
define('WU_CPANEL_USERNAME', 'anaran'ny_cpanel');
define('WU_CPANEL_PASSWORD', 'teny_kodin'ny_cpanel');
define('WU_CPANEL_HOST', 'host_an'ny_cpanel');
```

Mba hanampiana, afaka manova ny port sy ny root directory ianao:

```php
define('WU_CPANEL_PORT', 2083); // Ovay raha mampiasa port hafa ny cPanel anao
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ovay raha hafa ny document root anao
```

### 3. Fanondroana ny Fampifandraisana (Enable the Integration) {#3-enable-the-integration}

1. Ao amin'ny WordPress admin anao, mandehin'ny **Ultimate Multisite > Settings**

2. Mandehin'ilay "Domain Mapping" tab

3. Mandroso any ambany ka hatrany amin'ny "Host Integrations"

4. Ampirisihina ny integration cPanel (Enable the cPanel integration)

5. Kiti eo amin'ny "Save Changes"

## Ahoana no Asa Izy? {#how-it-works}

### Addon Domains {#addon-domains}

Rehefa misy domain iray voafidy (mapped) ao amin'ny Ultimate Multisite:

1. Ny integration dia mandefa fangatahana mankany amin'ny API an'ny cPanel mba hanampiana ny domain ho addon domain
2. Ny domain dia voafidy mba htanana ny root directory anao
3. Rehefa esorina ny mapping domain iray, ny integration dia hamoaka ilay addon domain avy ao amin'ny cPanel

### Subdomains {#subdomains}

Ho an'ny fanamboarana subdomain multisite, rehefa misy toerana vaovao (new site) noforonina:

1. Ny integration dia mandray ny ampahany subdomain avy amin'ilay domain feno
2. Mandefa fangatahana mankany amin'ny API an'ny cPanel mba hanampiana ilay subdomain
3. Ny subdomain dia voafidy mba htanana ny root directory anao

## Fanamarihana Manan-danja {#important-notes}

- Mampiasa ny API2 an'ny cPanel ny integration mba hiatrika ny kaontinao ao amin'ny cPanel
- Mila fahazoana alalana (permissions) ianao ao amin'ny kaontinao CPanel mba hanampiana addon domains sy subdomains
- Ny mpamatsy hosting sasany dia mety manala ny isan'ny addon domains na subdomain azonao ataona
- Tsy mitantana ny fandrindrana DNS (DNS configuration) ity integration ity; mila mbola manondro ny domain anao amin'ny IP address an'ny server ianao

## Fandresena Olana (Troubleshooting) {#troubleshooting}

### Olana Amin'ny Fifandraisana API {#api-connection-issues}
- Fantaro raha marina ny anarana sy ny teny fidirana (username and password) an'ny cPanel anao
- Jereo raha marina ny host CPanel anao ary azo ifandraisana (accessible)
- Antsoy fa manana alalana ilaina ao amin'ny kaontinao CPanel ianao

### Domain Tsy Nampidirina {#domain-not-added}
- Jereo ny logs an'ny Ultimate Multisite mba hahitana hafatra fahadisoana (error messages)
- Fantaro raha efa voafidy (already added) ilay domain ao amin'ny cPanel
- Antsoy fa tsy nahatratra ny fetrany (limit) ianao ho an'ny addon domains na subdomains

### Olana momba ny Sertifika SSL {#ssl-certificate-issues}

- Tsy afaka mandray na manome ny sertifika SSL ny integration (fanampiana).
- Mila mampiasa ireo fitaovana SSL/TLS ao amin'ny cPanel ianao na ny AutoSSL feature mba hanomezana sertifika SSL ho an'ny domain-nao.
- Na dia azo atao koa izany, azona ampiasaina ny serivisy toy ny Let's Encrypt miaraka amin'ny AutoSSL ao amin'ny cPanel.
