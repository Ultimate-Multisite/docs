---
title: Integrasyon sa WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrasyon sa WP Engine {#wp-engine-integration}

## Panan-aw (Overview) {#overview}
Ang WP Engine kay usa ka premium managed WordPress hosting platform nga naghatag og optimized performance, seguridad, ug scalability para sa mga WordPress site. Kini nga integrasyon nagtugot sa awtomatikong pag-sync sa domain tali sa Ultimate Multisite ug WP Engine.

## Mga Tampo (Features) {#features}
- Awtomatikong pag-sync sa domain
- Suporta sa subdomain alang sa multisite installations
- Luwas nga integrasyon sa mga kasamtang sistema sa WP Engine

## Mga Kinahanglanon (Requirements) {#requirements}
Ang integrasyon awtomatikong makadiskubre kung nag-host ka sa WP Engine ug mogamit sa built-in WP Engine API. Walay dugang configuration ang gikinahanglan kung aktibo ug maayo nga naka-configure ang WP Engine plugin.

Bisan pa, kung kinahanglan nimo i-manually i-configure ang integrasyon, pwede nimong mag-define ni isa sa mga constant ani sa imong `wp-config.php` file:

```php
define('WPE_APIKEY', 'your_api_key'); // Gipaboritang pamaagi
// O
define('WPE_API', 'your_api_key'); // Alternatibong pamaagi
```

## Mga Instruksyon sa Setup (Setup Instructions) {#setup-instructions}

### 1. I-verify ang WP Engine Plugin {#1-verify-wp-engine-plugin}

Kung nag-host ka sa WP Engine, ang WP Engine plugin dapat na nga na-install ug na-activate. Siguraduhon nga:

1. Aktibo ang WP Engine plugin
2. Ang file `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` anaa

### 2. I-enable ang Integrasyon {#2-enable-the-integration}

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Magpadulong sa tab nga "Domain Mapping"
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang WP Engine integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok (How It Works) {#how-it-works}

### Domain Syncing {#domain-syncing}

Kung adunay domain nga gipamapa sa Ultimate Multisite:

1. Ang integrasyon mogamit sa WP Engine API aron iapil ang domain sa imong WP Engine installation
2. Ang WP Engine maoy mag-handle sa configuration sa domain ug pag-issue sa SSL certificate
3. Kung alihon ang domain mapping, ang integrasyon kini kuhaon gikan sa WP Engine

### Subdomain Support {#subdomain-support}

Para sa mga subdomain multisite installations:

1. Ang integration nagdadagdag sa matag subdomain sa WP Engine kung adunay bagong site nga gihimo.
2. Ang WP Engine maoy mag-handle sa configuration sa subdomain.
3. Kung ma-delete ang usa ka site, ang integration makuha ang subdomain gikan sa WP Engine.

## Importante nga mga Nota {#important-notes}

### Wildcard Domains {#wildcard-domains}

Para sa subdomain multisite installations, gipakaon nga kontaka ang WP Engine support para mangayo og wildcard domain configuration. Kini nagtugot nga ang tanang subdomains molihok awtomatiko nga dili na kinahanglan nga i-add ang matag usa nang usa.

### SSL Certificates {#ssl-certificates}

Awtomatiko ma-handle sa WP Engine ang pag-issue ug renewal sa SSL certificate para sa tanang domains nga gi-add pinaagi niini nga integration. Walay dugang configuration nga gikinahanglan.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Siguraduhon nga aktibo ug saktong na-configure ang WP Engine plugin.
- Kung ikaw mismo ang nag-define sa API key, siguroha nga tama kini.
- Kontaka ang WP Engine support kung naa kay problema sa API.

### Domain Dili Gitabang {#domain-not-added}
- Siguraduhon nga adunay bisan unsang error messages sa Ultimate Multisite logs.
- Siguraduhon nga wala pa ma-add ang domain sa WP Engine.
- Siguraduhon nga ang imong WP Engine plan nagsuporta sa gidaghanon sa mga domain nga imong gi-add.

### Subdomain Issues {#subdomain-issues}
- Kung dili molihok ang mga subdomain, kontaka ang WP Engine support para mangayo og wildcard domain configuration.
- Siguraduhon nga tama ang imong DNS settings alang sa main domain ug subdomains.
