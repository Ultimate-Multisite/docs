---
title: Integrasyon ng Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Pagsasama ng Closte

## Pangkalahatang-tanaw
Ang Closte ay isang managed WordPress hosting platform na ginawa sa Google Cloud infrastructure. Ang pagsasamang ito ay nagbibigay-daan sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Closte.

## Mga Tampok
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Suporta sa wildcard domain
- Hindi na kailangan ng configuration kung nakapatakbo sa Closte

## Mga Kinakailangan
Ang sumusunod na constant ay kailangang ideklara sa iyong `wp-config.php` file kung gumagamit ka ng Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Ang constant na ito ay karaniwang nakadeklara na kung naka-host ka sa Closte.

## Mga Tagubilin sa Pag-setup

### 1. I-verify ang Iyong Closte API Key

Kung naka-host ka sa Closte, ang `CLOSTE_CLIENT_API_KEY` constant ay dapat nakadeklara na sa iyong `wp-config.php` file. Maaari mo itong i-verify sa pamamagitan ng pagtingin sa iyong `wp-config.php` file.

### 2. I-enable ang Pagsasama

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang Closte integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

Kapag may domain na na-map sa Ultimate Multisite:

1. Magpapadala ng request ang integration sa API ng Closte para idagdag ang domain sa iyong application
2. Awtomatikong hahawakin ng Closte ang pag-provision ng SSL certificate
3. Kapag tinanggal ang domain mapping, aalisin ng integration ang domain mula sa Closte

Gumagana rin ang integration na ito kasama ang DNS check interval setting sa Ultimate Multisite, na nagbibigay-daan sa iyong i-configure kung gaano kadalas susuriin ng system ang DNS propagation at pag-isyu ng SSL certificate.

## Paggawa ng Domain Record

Tinitiyak ng integration na ito na kapag gumawa o nag-duplicate ng site, awtomatikong nagagawa ang domain record. Mahalaga ito lalo na para sa Closte integration, dahil ang paggawa ng domain record ang nagti-trigger sa Closte API para gawin ang domain at SSL certificate.

## Pag-troubleshoot

### Mga Isyu sa API Connection
- I-verify na tama ang iyong Closte API key
- Tiyaking may kinakailangang mga permission ang iyong Closte account

### Mga Isyu sa SSL Certificate
- Maaaring tumagal ang Closte sa pag-isyu ng SSL certificates (karaniwang 5-10 minuto)
- I-verify na ang iyong mga domain ay wastong nakaturo sa IP address ng iyong Closte server
- Suriin ang DNS records ng iyong domain para matiyak na tama ang configuration

### Hindi Naidagdag ang Domain
- Suriin ang Ultimate Multisite logs para sa anumang error messages
- I-verify na hindi pa naidagdag ang domain sa Closte
- Tiyaking tama ang configuration ng DNS records ng iyong domain

### DNS Check Interval
- Kung masyadong matagal ang pag-isyu ng SSL certificates, maaari mong i-adjust ang DNS check interval sa Domain Mapping settings
- Ang default na interval ay 300 segundo (5 minuto), pero maaari mo itong itakda na kasing-baba ng 10 segundo para sa mas mabilis na pagsusuri habang nagti-test
