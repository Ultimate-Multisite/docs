---
title: Integrasyon ng Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrasyon ng Closte

## Pangkalahatang-ideya
Ang Closte ay isang managed WordPress hosting platform na binuo sa Google Cloud infrastructure. Ang integrasyong ito ay nagbibigay-daan para sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Closte.

## Mga Katangian
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Suporta para sa wildcard domain
- Walang kailangang i-configure kung tumatakbo ito sa Closte

## Mga Kinakailangan
Ang sumusunod na constant ay dapat itakda sa iyong `wp-config.php` file kung gumagamit ka ng Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Karaniwan nang naka-define ang constant na ito kung nagho-host ka sa Closte.

## Mga Panuto sa Pag-set Up

### 1. Beripikahin ang Iyong Closte API Key

Kung nagho-host ka sa Closte, dapat ay naka-define na ang `CLOSTE_CLIENT_API_KEY` constant sa iyong `wp-config.php` file. Maaari mo itong beripikahin sa pamamagitan ng pagtingin sa iyong `wp-config.php` file.

### 2. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang Closte integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

Kapag may domain na naka-map sa Ultimate Multisite:

1. Ang integrasyon ay magpapadala ng request sa API ng Closte para idagdag ang domain sa iyong application
2. Awtomatikong hinahawakan ng Closte ang pagbibigay (provisioning) ng SSL certificate
3. Kapag tinanggal ang domain mapping, tatanggalin ng integrasyon ang domain mula sa Closte

Gumagana rin ang integrasyon kasama ng setting para sa DNS check interval sa Ultimate Multisite, na nagpapahintulot sa iyo na i-configure kung gaano kadalas tinitingnan ng sistema para sa DNS propagation at paglalabas ng SSL certificate.

## Paglikha ng Domain Record

Tinitiyak ng integration na ito na kapag may bagong site o duplicate, awtomatikong gagawa ang domain record. Napakahalaga nito lalo para sa Closte integration, dahil ang paggawa ng domain record ang mag-trigger sa Closte API para gumawa ng domain at SSL certificate.

## Pag-troubleshoot

### Mga Problema sa Koneksyon ng API
- Siguraduhin na tama ang iyong Closte API key
- Tiyakin na may kaukulang pahintulot (permissions) ang iyong Closte account

### Mga Problema sa SSL Certificate
- Maaaring tumagal ng ilang oras ang pag-issue ng SSL certificates ng Closte (karaniwan ay 5-10 minuto)
- I-verify kung tama ang pagtuturo (pointing) ng iyong mga domain sa IP address ng server ng Closte mo
- Tingnan ang DNS records para sa iyong domain para masigurong tama ang pagkaka-configure nito

### Hindi Naisama ang Domain
- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- I-verify na hindi pa kasama ang domain sa Closte
- Siguraduhin na tama ang pagka-configure ng DNS records ng iyong domain

### Interval ng DNS Check
- Kung masyadong matagal ang pag-issue ng SSL certificates, maaari mong i-adjust ang interval ng DNS check sa Domain Mapping settings
- Ang default na interval ay 300 seconds (5 minuto), pero pwede mo itong itakda sa 10 segundo para mas mabilis ang pag-check habang nagte-test
