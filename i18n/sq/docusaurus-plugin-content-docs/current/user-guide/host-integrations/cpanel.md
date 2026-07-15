---
title: Integrimi me cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrimi me cPanel

## Përmbledhje {#overview}
cPanel është një nga paneli i kontrollit më popullor për hosting web, i përdorur nga shumë ofrues shërbimesh të ndara dhe dedikuara. Kjo integrim lejon synkronizimin automatik të domenve midis Ultimate Multisite dhe cPanel, duke ju lejuar të shtoni automatikisht alias-e domene dhe subdomene në llogarinë tuaj cPanel.

## Karakteristikat {#features}
- Krijimi automatik i addon domain në cPanel
- Krijimi automatik i subdomene në cPanel (për instalime multisite të subdomenve)
- Fshirja e domeneve kur hiqet mape

## Kërkesat {#requirements}
Këto konstanta duhet të përcaktohen në skedarin tuaj `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'emri_i_cpanel_tuaj');
define('WU_CPANEL_PASSWORD', 'fjalja_e_cpanel_tuaj');
define('WU_CPANEL_HOST', 'host_i_cpanel_tuaj');
```

Opsionale, ju mund të përcaktoni gjithashtu:

```php
define('WU_CPANEL_PORT', 2083); // Vifiko nëse cPanel tuaj përdor një port tjetër
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Vifiko nëse rrëshqitja juaj e dokumenteve është ndryshe
```

## Udhëzimet për Konfigurim {#setup-instructions}

### 1. Merrni Kredencat tuaja cPanel {#1-get-your-cpanel-credentials}

1. Marrni emrin dhe fjalën e cPanel nga ofruesi juaj hosting
2. Përcaktoni host-in tuaj të cPanel (zakonisht `cpanel.yourdomain.com` ose `yourdomain.com:2083`)

### 2. Shtoni Konstanta në wp-config.php {#2-add-constants-to-wp-configphp}

Shtoni konstantit më poshtë në skedarin tuaj `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'emri_i_cpanel_tuaj');
define('WU_CPANEL_PASSWORD', 'fjalja_e_cpanel_tuaj');
define('WU_CPANEL_HOST', 'host_i_cpanel_tuaj');
```

Opsionale, ju mund të personalizoni portin dhe direktori kryesor:

```php
define('WU_CPANEL_PORT', 2083); // Ndryshoni nëse cPanel tuaj përdor një port tjetër
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ndryshoni nëse rrëshqitja juaj e dokumenteve është ndryshe
```

### 3. Aktivizoni Integrimin {#3-enable-the-integration}

1. Në adminin tuaj të WordPress, shko te Ultimate Multisite > Settings
2. Navigo te tabu "Domain Mapping" (Mapele Domenet)
3. Scroll poshtë deri në "Host Integrations" (Integrime me Host)
4. Aktivizo integrimin e cPanel
5. Kliko te "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

### Addon Domains (Domenet Shtesë) {#addon-domains}

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi dërgon një kërkesë API të cPanel për të shtuar domenit si addon domain
2. Domeni konfigurohet të tregojë drejt direktori juaj kryesor (root directory)
3. Kur fshihet mapeimi i domeneve, integrimi do të hiqë addon domain-in nga cPanel

### Subdomains (Subdomenet) {#subdomains}

Për instalime multisite me subdomene, kur krijohet një faqe e re:

1. Integrimi nxjerr pjesën e subdomene nga domeni i plotë
2. Ai dërgon një kërkesë API të cPanel për të shtuar subdomenien
3. Subdomena konfigurohet të tregojë drejt direktori juaj kryesor (root directory)

## Shënim të Rëndësishëm {#important-notes}

- Integrimi përdor API2 të cPanel për të komunikuar me llogarinë tuaj në cPanel
- Llogaria juaj në cPanel duhet të ketë leje për shtimin e addon domain-eve dhe subdomeneve
- Disa ofrues shërbimesh hostinge mund të kufizojnë numrin e addon domain-ëve ose subdomenive që mund të krijoni
- Integrimi nuk menaxhon konfigurimin e DNS; ende duhet të tregojë domenët tuaj drejt adresës IP të serverit tuaj

## Zgjidhja e Problemeve (Troubleshooting) {#troubleshooting}

### Probleme me Lidhurin me API (API Connection Issues) {#api-connection-issues}
- Verifikoni që emri dhe fjalëkalimi i cPanel-it tuaj janë të sakta
- Kontrolloni që hosti juaj në cPanel është i saktë dhe i aksesueshëm
- Sigurohuni që llogaria juaj në cPanel ka lejet e nevojshme
- Provoni të përdorni URL-in plot (p.sh., `https://cpanel.yourdomain.com`) për hostin

### Domeni Nuk Shtohet (Domain Not Added) {#domain-not-added}
- Kontrolloni logjet e Ultimate Multisite për çdo mesazh gabimi
- Verifikoni që domeni nuk është shtuar tashmë në cPanel
- Sigurohuni që llogaria juaj në cPanel nuk ka arritur kufirin e saj për addon domain-e ose subdomene

### Problemet me Sertifikatët SSL {#ssl-certificate-issues}

- Integrimi nuk menaxhon dhënie të sertifikave SSL.
- Do të duhet të përdorni mjetet e cPanel për SSL/TLS ose funksionin AutoSSL për dhënien e sertifikave SSL për domenët tuaj.
- Alternativisht, mund të përdorni një shërbim si Let's Encrypt me AutoSSL të cPanel.
