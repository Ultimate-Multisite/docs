---
title: WP Engine Integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Pagsasama ng WP Engine

## Pangkalahatang-tanaw
Ang WP Engine ay isang premium na managed WordPress hosting platform na nagbibigay ng optimized na performance, seguridad, at scalability para sa mga WordPress site. Ang pagsasamang ito ay nagbibigay-daan sa automatic na pag-sync ng domain sa pagitan ng Ultimate Multisite at WP Engine.

## Mga Feature
- Automatic na pag-sync ng domain
- Suporta sa subdomain para sa mga multisite installation
- Walang-putol na pagsasama sa mga kasalukuyang sistema ng WP Engine

## Mga Kinakailangan
Awtomatikong nade-detect ng integration kung naka-host ka sa WP Engine at ginagamit nito ang built-in na WP Engine API. Hindi na kailangan ng karagdagang configuration kung aktibo at maayos na naka-configure ang WP Engine plugin.

Gayunpaman, kung kailangan mong manu-manong i-configure ang integration, maaari mong i-define ang isa sa mga constant na ito sa iyong `wp-config.php` file:

```php
define('WPE_APIKEY', 'your_api_key'); // Inirerekomendang paraan
// O KAYA
define('WPE_API', 'your_api_key'); // Alternatibong paraan
```

## Mga Tagubilin sa Pag-setup

### 1. I-verify ang WP Engine Plugin

Kung naka-host ka sa WP Engine, dapat naka-install at naka-activate na ang WP Engine plugin. Tiyaking:

1. Aktibo ang WP Engine plugin
2. Umiiral ang file na `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. I-enable ang Integration

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang WP Engine integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Pag-sync ng Domain

Kapag may domain na na-map sa Ultimate Multisite:

1. Ginagamit ng integration ang WP Engine API para idagdag ang domain sa iyong WP Engine installation
2. Hinahawakan ng WP Engine ang domain configuration at pag-isyu ng SSL certificate
3. Kapag tinanggal ang isang domain mapping, aalisin ng integration ang domain mula sa WP Engine

### Suporta sa Subdomain

Para sa mga subdomain multisite installation:

1. Idinadagdag ng integration ang bawat subdomain sa WP Engine kapag may bagong site na ginawa
2. Hinahawakan ng WP Engine ang subdomain configuration
3. Kapag na-delete ang isang site, aalisin ng integration ang subdomain mula sa WP Engine

## Mahahalagang Paalala

### Mga Wildcard Domain

Para sa mga subdomain multisite installation, inirerekomenda na makipag-ugnayan sa WP Engine support para humiling ng wildcard domain configuration. Pinapayagan nito ang lahat ng subdomain na awtomatikong gumana nang hindi na kailangang idagdag ang bawat isa nang isa-isa.

### Mga SSL Certificate

Awtomatikong hinahawakan ng WP Engine ang pag-isyu at pag-renew ng SSL certificate para sa lahat ng domain na idinagdag sa pamamagitan ng integration na ito. Hindi na kailangan ng karagdagang configuration.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- Tiyaking aktibo at maayos na naka-configure ang WP Engine plugin
- Kung manu-mano mong ni-define ang API key, suriin kung tama ito
- Makipag-ugnayan sa WP Engine support kung nagkakaproblema ka sa API

### Hindi Naidagdag ang Domain
- Suriin ang mga log ng Ultimate Multisite para sa anumang mga error message
- Tiyaking hindi pa naidagdag ang domain sa WP Engine
- Siguraduhing sinusuportahan ng iyong WP Engine plan ang bilang ng mga domain na idinadagdag mo

### Mga Isyu sa Subdomain
- Kung hindi gumagana ang mga subdomain, makipag-ugnayan sa WP Engine support para humiling ng wildcard domain configuration
- Tiyaking tama ang configuration ng iyong DNS settings para sa main domain at mga subdomain
