---
title: Ubwumvikane bw'Ubukoranyi
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Urugerer Ubwumwe n'Ubwumelera (Closte Integration)

## Inshuro {#overview}

Closte ni platform y'ubwumelera ya WordPress yakuzwi kandi yashyizwe ku infrastructure ya Google Cloud. Iyi nshingano ituma uburyo bwo gukoresha domain (domain syncing) no gukemura SSL certificate management mu buryo bw'umwihariko hagati ya Ultimate Multisite na Closte.

## Icyiciro cy'Ubwumelera (Features) {#features}
- Gukora domain syncing mu buryo bw'umwihariko
- Gukemura SSL certificate management
- Gutera uburyo bwo gukoresha wildcard domains
- Nta ko ugomba gukora ibindi n'ubwumelera niba wuriye Closte

## Icyemezo (Requirements) {#requirements}
Urugero uyu cyiciro (constant) ukenewe kugira ngo uhereye mu file yawe ya `wp-config.php` niba ugiye gukoresha Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Icyiciro cyo (constant) kenshi cyari cyihereye nawe niba wuriye hosting ku Closte.

## Inshuro z'Ubwumelera (Setup Instructions) {#setup-instructions}

### 1. Gushyira Uburyo bwo gukoresha API Key yawe ya Closte {#1-verify-your-closte-api-key}

Niba uriye hosting ku Closte, cyiciro `CLOSTE_CLIENT_API_KEY` kenshi cyari cyihereye mu file yawe ya `wp-config.php`. Ubahererera ibi bishobora gushyira uburyo bwo gukoresha kuri file yawe ya `wp-config.php`.

### 2. Gukora Ubwumelera (Enable the Integration) {#2-enable-the-integration}

1. Mu admin ya WordPress yawe, yaba ku Ultimate Multisite > Settings
2. Hereye ku tab "Domain Mapping"
3. Gukoresha ibi bishobora gushyira uburyo bwo gukoresha: "Host Integrations"
4. Shyira ubwumelera bw'Closte (Enable the Closte integration)
5. Clickya "Save Changes"

## Uburyo Bwo Gukora Icyemezo (How It Works) {#how-it-works}

Iyo domain ikorwa mu Ultimate Multisite:

1. Ubwumelera ugiye gukoresha request ku API ya Closte kugira ngo yafashe domain yawe mu application yawe
2. Closte yashyira SSL certificate mu buryo bw'umwihariko (automatically handles SSL certificate provisioning)
3. Iyo domain ikorwa, ubwumelera ugiye gukoresha ibi bishobora gushyira: DNS check interval setting mu Ultimate Multisite, kugira ngo uburyo bwo gukora system yashaka DNS propagation n'SSL certificate issuance ni cyakoze.

## Gukora Icyemezo cy'Urundi (Domain Record Creation) {#domain-record-creation}

Iyi gukoresha uburyo uyuho kugira ngo iyo umwihariko (site) ugushyirwa cyangwa ugushyirwa mu buryo bwo gukoresha (duplicated), igikorwa cyo gukora rekodi ya domain (domain record) kigira ngo kurewe mu buryo bw'ibyo. Icyo ni cyiza cyane ku Closte integration, kuko gukora rekodi ya domain kigaragaza API ya Closte kugira ngo ikora domain n'SSL certificate.

## Gukoresha Uburyo (Troubleshooting) {#troubleshooting}

### Icyubahiro ry'API Connection Issues {#api-connection-issues}
- Guhura ko uwo Closte API key wako ni mwiza
- Guhura ko uwo account wa Closte ugira uburenganzira bwo gukora ibyo byose

### Icyubahiro ry'SSL Certificate Issues {#ssl-certificate-issues}
- Closte yashobora guteka igihe kire cyane kugira ngo ikoreshe SSL certificates (gusa 5-10 min)
- Guhura ko uwo domain wako ugire uburyo bwiza bwo gukoresha IP address ya server yawe ya Closte
- Guhura DNS records za domain yawe kugira ngo uhereye neza

### Domain Itarashyirwe (Domain Not Added) {#domain-not-added}
- Guhura Ultimate Multisite logs kugira ngo ugerere ibindi byo mu gihe cyo gukora makuru y'ibindi byo.
- Guhura ko domain yawe yari yashyirwe ku Closte mu gihe cyo gukoresha.
- Guhura ko DNS records za domain yawe zishobora gukoreshwa neza

### Icyubahiro ry'DNS Check Interval {#dns-check-interval}
- Niba SSL certificates zikora igihe kire cyane kugira ngo zikore, uza kuba wumva kwerekera (adjust) DNS check interval mu Domain Mapping settings.
- Icyo cyiza cyangwa cyo gukoresha ni 300 seconds (5 minutes), ariko uza kuba wiboneho nk'igice cyo 10 seconds kugira ngo ubone neza mu gihe cyo gukora makuru mu gihe cyo gukora makuru.
