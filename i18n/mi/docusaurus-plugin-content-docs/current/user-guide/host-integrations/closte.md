---
title: Whakawhanaungatanga Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Whakawhanaungatanga me Closte

## Ōrāpō (Overview) {#overview}
Closte he platform hosting WordPress mōhaka (managed) kua tae mai i Google Cloud infrastructure. Ko te whakahoki (integration) này e tino pai ai te syncing o domain ā-auā me te whakamaoritanga SSL certificate mō Ultimate Multisite me Closte.

## Manawa (Features) {#features}
- Automatic domain syncing (whakawhanaungatanga domain ā-auā)
- Management o SSL certificate (whakawāhi/whakamana certificate SSL)
- Wildcard domain support (whakawāhi domain wildcard)
- No configuration needed if running on Closte (kua tino pai ana i te whakamahi anō i runga i Closte)

## Wāhi Whakahaere (Requirements) {#requirements}
Ko te constant tēnei e hiahia ana kia whakahirahira i roto i tō file `wp-config.php` i roto i te wā e hiahia koe i Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Ko te constant tēnei kua tino pai ana i te whakahirahiraa ai ko kua hosting koe i Closte.

## Whakatau (Setup Instructions) {#setup-instructions}

### 1. Titiro i tō API Key o Closte {#1-verify-your-closte-api-key}

Ko te `CLOSTE_CLIENT_API_KEY` e hiahia ana kia tino pai ana i roto i tō file `wp-config.php` ko kua hosting koe i Closte. Ko te whakaoti i tēnei he taea ai i tō file `wp-config.php`.

### 2. Whakawhanaungatanga (Enable the Integration) {#2-enable-the-integration}

1. I tō WordPress admin, pahi ki Ultimate Multisite > Settings
2. Pahi ki te tab "Domain Mapping"
3. Scrolli ki "Host Integrations"
4. Whakawhanaunga i Closte integration
5. Click "Save Changes" (Whakawāhi ngā whakamaoritanga)

## He aha ia mahi ana? (How It Works) {#how-it-works}

I roto i te wā e whakahoki (map) koe i domain i Ultimate Multisite:

1. Ko te integration e tino pai ai te request ki API o Closte kia puta te domain ki tō application
2. Ko Closte e tino pai ai te whakahaere o SSL certificate provisioning
3. I roto i te wā e whero (remove) koe i te mapping o domain, ko te integration e whero i te domain mo Closte

Ko te integration e mahi ana hoki me te setting o DNS check interval i Ultimate Multisite, e tino pai ai tō whakamahi ki te whakarite i te āhuatanga o te system e tino pai ai te checking mō DNS propagation me te issuance o SSL certificate.

## Whakawāhi Domain Record (Domain Record Creation) {#domain-record-creation}

Kua whaiaro tēnei whaiaro ki te whakatika ngā mea e pēnei i te whenua domain akorua. Ko tēnei he tino nui mō te Closte integration, ko te whakamaoritanga o te rekordi domain e whakatau i te API o Closte kia whakatō te domain me te SSL certificate.

## Whakawātea (Troubleshooting) {#troubleshooting}

### Ngā Whainga Whakamahi API (API Connection Issues) {#api-connection-issues}
- Kia titi i te korenga o te key API o Closte ahau.
- Kia tiaki i te mea he tino whaiaro ana i te account o Closte kia puta ake ngā whānau whaiaro e tika ana.

### Ngā Whainga SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}
- He tino kitea ki te whakatō ngā SSL certificates o Closte, ko te wae pēnei i 5-10 miniti.
- Kia tiaki i te mea he tino whaiaro ana i ngā domain ahau ki te IP address o te server o Closte kia puta ake.
- Kia titi i ngā DNS records mō tō domain kia tiaki i te mea he tino tika te whakarite ahau.

### Domain Ka Korea Whakawhiti (Domain Not Added) {#domain-not-added}
- Kia titi i ngā logs o Ultimate Multisite mō ngā pēnei i ngā pēnei e whaiaro ana.
- Kia tiaki i te mea ka kore he domain e tino whaiaro ana i Closte ahau.
- Kia tiaki i te mea he tino tika te whakarite ahau i ngā DNS records o tō domain.

### Ngā Whainga Whakawhiti DNS (DNS Check Interval) {#dns-check-interval}
- Ko te mea, ko te wae pēnei i he tino whaiaro ana i ngā SSL certificates e tino pēnei i te 300 seconds (5 miniti), engari kua taea e koe te whakarere i te wae pēnei i 10 seconds kia mō te whakamārama ahau i te whakapāwhai ahau.
