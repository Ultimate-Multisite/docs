---
title: cPanel samstarf
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Samning við cPanel

## Áhersla
cPanel er einn af mest þekktum web hostingu stjórnunarbandnum sem mörgum samaðar og sérstök hostingsþjónustilboðum eru notað. Þessi samning skilar sjálfvirkan samningu fyrir domænar á milli Ultimate Multisite og cPanel, sem gerir þér möguleika að bæta domæna-alias og subdomænar í cPanel reikningnum þínum sjálfvirklega viðkomandi.

## Stöðvar
- Sjálfvirkt sköpun addon domain á cPanel
- Sjálfvirkt sköpun subdomains í cPanel ( fyrir subdomain multisite installa)
- Fjarlagning domæna þegar málmatar eru fjarlögðu

## Kravik
Fylgja eftir að þessar konstantir eru sést í lausnari `wp-config.php` skjalinu:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valfræðlega geturðu einnig sést:

```php
define('WU_CPANEL_PORT', 2083); // Standard er 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Standard er /public_html
```

## Stöðvarferli

### 1. Fá þína cPanel upplýsingar

1. Fá notkunann og lykillinn fyrir cPanel frá hostingsþjónustilboði þínum
2. Bestemiðu hvar þin cPanel er (oftast `cpanel.yourdomain.com` eða `yourdomain.com:2083`)

### 2. Búa konstantir í wp-config.php

Búa eftirfarandi konstantir í lausnari `wp-config.php` skjalinu:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valfræðlega geturðu breytt port og grunnforðun:

```php
define('WU_CPANEL_PORT', 2083); // Breytt ef cPanel þinn notar annar port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Breytt ef skráningurinn er annlið
```

### 3. Skynja samningann

1. Fá varðu í WordPress admin, gae til Ultimate Multisite > Settings
2. Navigeraðu yfir yfir "Domain Mapping" tabinn
3. Skoli niður yfir "Host Integrations"
4. Ákveða cPanel integrationn (enabled)
5. Klikkaðu á "Save Changes"

## Hvernig þetta virkar

### Addon Domains

Þegar domén er mappa í Ultimate Multisite:

1. Sendur integrationn skýrslu til API-s cPanelins til að bæta doméni við sem addon domain
2. Doménið er sett upp til að reikna á hlutvirkum forðunni (root directory) þinn
3. Þegar mappa doméns er fjarlægð, fjarlægir integrationn addon domaininn frá cPanel

### Subdomains

Til subdomain multisite installationa, þegar nýtt síti er skráð:

1. Fjarlægja integrationn subdomain hluta úr fullu doméni
2. Sendur skýrslu til API-s cPanelins til að bæta subdomain við
3. Subdomaininn er sett upp til að reikna á hlutvirkum forðunni (root directory) þinn

## Mikilvægar athugasemdir

- Integrationin notar cPanel API2 til samskiptar með cPanel reikningnum þínum
- Þín cPanel reikningur verður að hafa réttindi til að bæta við addon domains og subdomains
- Nok áframleiðendur geta takmarkað fjölda addon domains eða subdomains sem þú getur skráð
- Integrationin skilar ekki með DNS uppsetningu; þú þarft enn að reikna doménunum til IP-heiti serverinnar

## Feilfellingar

### Vætur á API tengingu
- Staðfestu að notafólk og lykill cPanelins þín séu rétt
- Skenni hvort host cPanelins þinn er rétt og aðgengilegur
- Tryggðu það að cPanel reikningurinn þinn hefur nauðsynleg réttindi

### Domén ekki bætt við
- Skenni Ultimate Multisite logs fyrir nánastilka villum
- Staðfestu hvort doménið ekki séu á við cPanel
- Tryggðu það að cPanel reikningurinn þinn hefur ekki náð takmarki fyrir addon domains eða subdomains

### Vấn đề Chứng chỉ SSL
- Tích hợp này không xử lý việc cấp chứng chỉ SSL.
- Bạn sẽ cần sử dụng các công cụ SSL/TLS của cPanel hoặc tính năng AutoSSL để cấp chứng chỉ SSL cho tên miền của mình.
- Hoặc, bạn có thể sử dụng một dịch vụ như Let's Encrypt với AutoSSL của cPanel.
