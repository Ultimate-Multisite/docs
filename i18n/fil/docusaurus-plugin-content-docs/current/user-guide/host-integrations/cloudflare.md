---
title: Integrasyon ng Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integrasyon ng Cloudflare

## Pangkalahatang-tanaw
Ang Cloudflare ay isang nangungunang content delivery network (CDN) at security provider na tumutulong na protektahan at pabilisin ang mga website. Ang integrasyon na ito ay nagbibigay-daan sa awtomatikong pamamahala ng domain sa pagitan ng Ultimate Multisite at Cloudflare, lalo na para sa mga multisite installation na gumagamit ng subdomain.

## Mga Feature
- Awtomatikong paggawa ng subdomain sa Cloudflare
- Suporta para sa proxied subdomain
- Pamamahala ng DNS record
- Pinahusay na pagpapakita ng DNS record sa admin ng Ultimate Multisite

## Mga Kinakailangan
Ang mga sumusunod na constant ay kailangang i-define sa iyong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Mga Hakbang sa Pag-setup

### 1. Kunin ang Iyong Cloudflare API Key

1. Mag-log in sa iyong Cloudflare dashboard
2. Pumunta sa "My Profile" (i-click ang iyong email sa kanang sulok sa itaas)
3. Piliin ang "API Tokens" mula sa menu
4. Gumawa ng bagong API token na may mga sumusunod na permission:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopyahin ang iyong API token

### 2. Kunin ang Iyong Zone ID

1. Sa iyong Cloudflare dashboard, piliin ang domain na gusto mong gamitin
2. Makikita ang Zone ID sa "Overview" tab, sa kanang sidebar sa ilalim ng "API"
3. Kopyahin ang Zone ID

### 3. Idagdag ang mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang Cloudflare integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Pamamahala ng Subdomain

Kapag may bagong site na ginawa sa isang subdomain multisite installation:

1. Ang integrasyon ay nagpapadala ng request sa API ng Cloudflare para magdagdag ng CNAME record para sa subdomain
2. Ang subdomain ay awtomatikong naka-configure na ma-proxy sa pamamagitan ng Cloudflare bilang default (maaari itong baguhin gamit ang mga filter)
3. Kapag na-delete ang isang site, aalisin ng integrasyon ang subdomain mula sa Cloudflare

### Pagpapakita ng DNS Record

Pinapahusay ng integrasyon ang pagpapakita ng DNS record sa admin ng Ultimate Multisite sa pamamagitan ng:

1. Direktang pagkuha ng mga DNS record mula sa Cloudflare
2. Pagpapakita kung ang mga record ay proxied o hindi
3. Pagpapakita ng karagdagang impormasyon tungkol sa mga DNS record

## Mahahalagang Paalala

Batay sa mga kamakailang update ng Cloudflare, ang wildcard proxying ay available na ngayon para sa lahat ng customer. Ibig sabihin nito, hindi na gaanong kritikal ang Cloudflare integration para sa mga subdomain multisite installation tulad ng dati, dahil maaari ka nang mag-setup ng wildcard DNS record sa Cloudflare.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- Siguraduhing tama ang iyong API token at may kinakailangang mga permission
- Tingnan kung tama ang iyong Zone ID
- Siguraduhing may kinakailangang mga permission ang iyong Cloudflare account

### Hindi Naidagdag ang Subdomain
- Tingnan ang mga log ng Ultimate Multisite para sa mga error message
- I-verify na hindi pa naidagdag ang subdomain sa Cloudflare
- Siguraduhing sinusuportahan ng iyong Cloudflare plan ang bilang ng mga DNS record na ginagawa mo

### Mga Isyu sa Proxying
- Kung ayaw mong ma-proxy ang mga subdomain, maaari mong gamitin ang `wu_cloudflare_should_proxy` filter
- May ilang feature na maaaring hindi gumana nang maayos kapag naka-proxy (hal., ilang function ng WordPress admin)
- Isaalang-alang ang paggamit ng Page Rules ng Cloudflare para i-bypass ang cache para sa mga admin page
