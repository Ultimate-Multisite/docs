---
title: Kugadzirisa Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integration neCloste

## Zvinura (Overview) {#overview}
Closte ndiri platform yekuhost WordPress inotevera Google Cloud infrastructure. Izvi integration inoshandisa kudzidzira zvinhu zvinotevera (automatic domain syncing) uye kuita management we SSL certificates pakati pe Ultimate Multisite neCloste.

## Zvinotevera (Features) {#features}
- Automatic domain syncing
- Management we SSL certificates
- Support yekdomain dzine wildcard
- Haunenge kuitira configuration kana ndichitenderera pakati pe Closte

## Zvinotore (Requirements) {#requirements}
Iyi constant inofanira kuva yakagadzirwa mu file yako `wp-config.php` kana unenge uchitenda neCloste:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Iyi constant chinotore kudzidzira zvakaita kuti iwe uonekane nekuti unenge uchitenda pakati pe Closte.

## Ngano yekutanga (Setup Instructions) {#setup-instructions}

### 1. Kuona API Key yako ya Closte {#1-verify-your-closte-api-key}

Kana unenge uchitenda pakati pe Closte, constant `CLOSTE_CLIENT_API_KEY` inofanira kuva yakagadzirwa mu file yako `wp-config.php`. Unogona kuona izvi nekuti unenge ukutsorera (check) file yako `wp-config.php`.

### 2. Kuva Integration {#2-enable-the-integration}

1. Mu admin ya WordPress yako, ndirira Ultimate Multisite > Settings
2. Ndira kune tab ye "Domain Mapping"
3. Ndira kuenda kumabvazuye pane "Host Integrations"
4. Vaiva (Enable) integration ya Closte
5. Ndira "Save Changes"

## Izvi zvinhu zvinotenderera sei (How It Works) {#how-it-works}

Kana domain inenge yakagadzirwa (mapped) mu Ultimate Multisite:

1. Integration inotenda request kune API ya Closte kuti itambe domain yese pakati pe application yako
2. Closte inotevera management we SSL certificates nekuti iye ndiri inotenderera zvakanaka
3. Kana domain mapping inenge yakadzikwa (removed), integration inozvisira domain iye pakati pe Closte

Integration inozvionawo neDNS check interval setting mu Ultimate Multisite, izvi zvinokupa kuti uweze kuita configuration sei system inotsorera DNS propagation uye SSL certificate issuance.

## Kuita Domain Record Creation {#domain-record-creation}

Iyiwe integration iyi inenge inenge iwe site ineya neva kana kuita, kuti kana site ineya ine yauka kana ine yaingine, zvinhu zvedomain record zvinogadzirwa nekuti. Izvi zviri kuitika zvakakosha pane Closte integration, nekuti kugadzira domain record kunge kuva munhu anogadzira API yeCloste kuti iye inenge inogadzira domain uye SSL certificate.

## Kuti Unzwisise (Troubleshooting) {#troubleshooting}

### Matambudziko ekutanga neAPI Connection Issues {#api-connection-issues}
- Simbisa kuti Closte API key yako ine zvakanaka
- Simbisa kuti account yako yaCloste inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in
