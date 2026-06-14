---
title: Integrasyon sa Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Pagsugod sa Integrasyon

## Panan-aw (Overview)
Ang Closte kay usa ka managed WordPress hosting platform nga gihimo gamit ang Google Cloud infrastructure. Kini nga integrasyon nagtugot sa awtomatikong pag-sync sa domain ug pagdumala sa SSL certificate tali sa Ultimate Multisite ug Closte.

## Mga Tampo (Features)
- Awtomatikong pag-sync sa domain
- Pagdumala sa SSL certificate
- Suporta sa Wildcard domain
- Walay kinahanglan nga i-configure kung nagpadagan ka sa Closte

## Mga Kinahanglanon (Requirements)
Kinahanglan definisyon ang mosunod nga constant sa imong `wp-config.php` file kung naggamit ka og Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'imong_api_key');
```

Kini nga constant kasagaran na nga gi-define kung naghost ka sa Closte.

## Mga Instruksyon sa Pag-set Up (Setup Instructions)

### 1. Siguraduhon ang Imong Closte API Key

Kung naghost ka sa Closte, ang `CLOSTE_CLIENT_API_KEY` constant kinahanglan na nga gi-define sa imong `wp-config.php` file. Mahimo nimo kini i-verify pinaagi sa pagtan-aw sa imong `wp-config.php` file.

### 2. I-enable ang Integrasyon (Enable the Integration)

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Mag-navigate sa tab nga "Domain Mapping"
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang Closte integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok (How It Works)

Kung adunay domain nga gi-map sa Ultimate Multisite:

1. Ang integrasyon magpadala og request ngadto sa API sa Closte aron iapil ang domain sa imong application
2. Ang Closte mismo ang awtomatikong magdumala sa paghatag (provisioning) sa SSL certificate
3. Kung alihon nimo ang domain mapping, ang integrasyon kini kuhaon gikan sa Closte

Ang integrasyon usab nagtrabaho uban sa setting sa DNS check interval sa Ultimate Multisite, nga nagtugot kanimo sa pag-configure kung unsa ka kasagaran ang sistema mag-check para sa DNS propagation ug paghatag og SSL certificate.

## Paghimo og Domain Record (Domain Record Creation)

Kini sigurado ni integration nga kung maghimo o magduplika og site, awtomatikong maghimo og domain record. Importante gyud ni para sa Closte integration kay ang paghimo sa domain record maoy mag-trigger sa Closte API aron makahimo og domain ug SSL certificate.

## Troubleshooting

### Mga Problema sa API Connection
- Siguraduhon nga tama ang imong Closte API key
- Siguraduhon nga ang imong Closte account adunay kinahanglanon nga mga permiso

### Mga Problema sa SSL Certificate
- Ang Closte mahimong magkinahanglan og gamay nga oras aron mag-issue og SSL certificates (kasagaran 5-10 minutos)
- Siguraduhon nga ang imong mga domain tama gyud nga nagtudlo sa IP address sa server sa Closte
- Susihon ang DNS records para sa imong domain aron masiguro nga tama ang pagka-configure niini

### Domain Wala Dugang
- Susihon ang Ultimate Multisite logs para sa bisan unsang error messages
- Siguraduhon nga wala pa kini gi-add sa Closte ang domain
- Siguraduhon nga tama ang pagka-configure sa DNS records sa imong domain

### DNS Check Interval
- Kung ang SSL certificates nagkinahanglan og sobra nga dugay aron ma-issue, pwede nimo i-adjust ang DNS check interval sa Domain Mapping settings
- Ang default interval kay 300 seconds (5 minutos), pero pwede nimo iposisyon kini ngadto sa 10 seconds para mas dali ang pag-check in testing
