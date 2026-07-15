---
title: Ho lula le ho fana
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration

## Le Tšhobo (Overview) {#overview}
Closte ke le platform ya WordPress e ebeletse (managed hosting) e e beletse ka Google Cloud infrastructure. Ho fana ka ho fetola domain automatically le ho fana certificate ya SSL ho tloha-tloha (between Ultimate Multisite le Closte).

## Le Litlho (Features) {#features}
- Ho fetola domain automatically
- Ho fana certificate ya SSL
- Ho feta wildcard domain
- Ha na ho fetola haholo ha u beletse ka Closte

## Boitlhokwa (Requirements) {#requirements}
Ho batla constant e ebeletse ka file ya `wp-config.php` ha u beletse ka Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Constant ya hau e le fetola ho a re, ha u beletse ka Closte.

## Boitlhokwa (Setup Instructions) {#setup-instructions}

### 1. Ho tloha API Key ya hau ya Closte {#1-verify-your-closte-api-key}

Ha u beletse ka Closte, constant `CLOSTE_CLIENT_API_KEY` e le fetola ho a re ha u beletse ka file ya `wp-config.php`. U ka fetola seo ka go tloha file ya hau ya `wp-config.php`.

### 2. Ho fetola Integration (Enable the Integration) {#2-enable-the-integration}

1. Ka admin ya WordPress ya hau, go tla ka Ultimate Multisite > Settings
2. Laela ho tab ya "Domain Mapping"
3. Laela ho leka ho "Host Integrations"
4. Fetola integration ya Closte
5. Leela ho fetola "Save Changes"

## Ho Batla (How It Works) {#how-it-works}

Ka nako fa domain e fetolwa ka Ultimate Multisite:

1. Integration e feta request ho API ya Closte ho feta domain ya hau ka application ya hau
2. Closte e fana certificate ya SSL automatically
3. Ka nako fa domain mapping e fetola, integration e tla fetola domain ya hau ka Closte

Integration e leka ho ba le ho fetola le setso sa DNS check interval ka Ultimate Multisite, ho u fetola hore na nako efe system e fetola ho hlalosa DNS le ho fana certificate ya SSL.

## Ho Fetola Record ya Domain (Domain Record Creation) {#domain-record-creation}

O tšhobo o fana'a ho seka kaofela, ke fana'a hore fa le site e fetola kapa e fetola, se tla fana'a hore go na le record ya domain (domain record) e fetola ka molao. Ke fetoga lefetoga le fetoga ho ba le bohloko lehle ho Closte, ka ntlha hore ho fetola record ya domain ho fana'a hore API ya Closte e fetole domain le SSL certificate.

## Ho Fetola Matlha (Troubleshooting) {#troubleshooting}

### Morero wa Leano la API (API Connection Issues) {#api-connection-issues}
- Re ke tla bona hore key ya Closte API ya hau e tsamaea ka bonako.
- Re ke tla bona hore account ya hau ya Closte e na le tsela e hloka ho fetola.

### Matlha a SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}
- Closte e ka na le nako e fana'a SSL certificates (go lina 5-10 minutsa).
- Re ke tla bona hore domain ya hau e tsamaea ka molao kwa IP address ya server ya Closte.
- Re ke tla bona records ya DNS ya domain ya hau ho bona hore e fetola ka bonako.

### Domain E Ntšhobo (Domain Not Added) {#domain-not-added}
- Re ke tla bona logs ea Ultimate Multisite ho bona sefalo sa matlha.
- Re ke tla bona hore domain e na le fetola ka Closte.
- Re ke tla bona hore records ya DNS ya domain ya hau e fetola ka bonako.

### Nako ea Ho Tsamaea Records ya DNS (DNS Check Interval) {#dns-check-interval}
- Ha SSL certificates e tsamaea ka nako e le thata ho fana'a, u ka fetola nako ea ho tsamaea records ya DNS ka tsela ea Domain Mapping settings.
- Nako ea default ke 300 seconds (5 minutsa), empa u ka e setse ka 10 seconds hore ho tsamaea ka bonako lehle haholo ho fana'a ka nako ea testing.
