---
title: Integrasyon ng WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrasyon sa WP Engine {#wp-engine-integration}

## Pangkalahatang-ideya {#overview}
Ang WP Engine ay isang premium na managed WordPress hosting platform na nagbibigay ng optimized performance, seguridad, at scalability para sa mga WordPress site. Ang integrasyong ito ay nagpapagana ng awtomatikong pag-sync ng domain sa pagitan ng Ultimate Multisite at WP Engine.

## Mga Katangian {#features}
- Awtomatikong pag-sync ng domain
- Suporta para sa subdomain para sa multisite installations
- Madaling integrasyon sa mga kasalukuyang sistema ng WP Engine

## Mga Kinakailangan {#requirements}
Awtomatikong nakikita ng integrasyon kung nagho-host ka sa WP Engine at gumagamit ito ng built-in na WP Engine API. Walang karagdagang configuration ang kailangan kung aktibo at tama ang pag-configure ng WP Engine plugin.

Gayunpaman, kung kailangan mong i-configure nang mano-mano ang integrasyon, maaari mong tukuyin ang isa sa mga constant na ito sa iyong `wp-config.php` file:

```php
define('WPE_APIKEY', 'your_api_key'); // Mas pinapaboran na paraan
// O kaya
define('WPE_API', 'your_api_key'); // Alternatibong paraan
```

## Mga Panuto sa Pag-set Up {#setup-instructions}

### 1. Beripikahin ang WP Engine Plugin {#1-verify-wp-engine-plugin}

Kung nagho-host ka sa WP Engine, dapat na naka-install at aktibo na ang WP Engine plugin. Siguraduhin na:

1. Ang WP Engine plugin ay aktibo
2. Ang file `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ay umiiral

### 2. I-enable ang Integrasyon {#2-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang WP Engine integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana {#how-it-works}

### Domain Syncing {#domain-syncing}

Kapag may domain na naka-map sa Ultimate Multisite:

1. Gagamitin ng integrasyon ang WP Engine API para idagdag ang domain sa iyong WP Engine installation
2. Ang WP Engine ang bahalang mag-configure ng domain at magbigay ng SSL certificate
3. Kapag tinanggal ang domain mapping, tatanggalin ng integrasyon ang domain mula sa WP Engine

### Subdomain Support {#subdomain-support}

Para sa mga instalasyon ng subdomain multisite:

1. Ang integration na ito ay nagdaragdag sa bawat subdomain sa WP Engine kapag may bagong site ang ginawa.
2. Ang WP Engine ang bahala sa pag-configure ng subdomain.
3. Kapag tinanggal ang isang site, aalisin ng integration ang subdomain mula sa WP Engine.

## Mahalagang Paalala {#important-notes}

### Wildcard Domains {#wildcard-domains}

Para sa mga instalasyon ng subdomain multisite, inirerekomenda na makip ugnayan sa suporta ng WP Engine para humiling ng wildcard domain configuration. Pinapayagan nito ang lahat ng subdomain na gumana nang awtomatiko nang hindi na kailangang idagdag ang bawat isa nang paisa-isa.

### SSL Certificates {#ssl-certificates}

Awtomatikong hinahawakan ng WP Engine ang paglalabas at pag-renew ng SSL certificate para sa lahat ng domain na idinagdag sa pamamagitan ng integration na ito. Walang karagdagang configuration ang kailangan.

## Pag-troubleshoot {#troubleshooting}

### Mga Isyu sa Koneksyon ng API {#api-connection-issues}
- Siguraduhin na aktibo at tama ang pag-configure ng WP Engine plugin.
- Kung ikaw mismo ang nagtakda ng API key, tingnan kung tama ito.
- Makip ugnayan sa suporta ng WP Engine kung may problema ka sa API.

### Hindi Naisang Domain {#domain-not-added}
- Tingnan ang Ultimate Multisite logs para sa anumang error messages.
- Siguraduhin na hindi pa idinadagdag ang domain sa WP Engine.
- Tiyakin na sinusuportahan ng iyong WP Engine plan ang bilang ng mga domain na idinadagdag mo.

### Mga Isyu sa Subdomain {#subdomain-issues}
- Kung hindi gumagana ang mga subdomain, makip ugnayan sa suporta ng WP Engine para humiling ng wildcard domain configuration.
- Siguraduhin na tama ang pag-configure ng iyong DNS settings para sa pangunahing domain at mga subdomain.
