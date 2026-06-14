---
title: Ho Hlahlobo le WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integration le WP Engine

## Le Tsela (Overview)
WP Engine ke platform ya WordPress management a premium eke a tsela (hosting) a tsela, eke a nthela performance, security, le scalability ho WordPress sites. Ho integration eke a nthela domain syncing automatic eo Ultimate Multisite le WP Engine.

## Le Fitur (Features)
- Domain syncing automatic
- Subdomain support ho multisite installations
- Integration seamless ho systems yaWP Engine a nthela

## Le Mokgwa (Requirements)
Ho integration automatically eke a tseba ka o tsela eo WP Engine le e use built-in WP Engine API. Ha o na plugin yaWP Engine eke a active le e configured betul, ha o na configuration e leng e hloka.

Ha se, ha o na ho na manual configuration ho integration, o ka define ena constants e leng mo file ya `wp-config.php` ya gago:

```php
define('WPE_APIKEY', 'your_api_key'); // Metodo a tsela
// Ha se
define('WPE_API', 'your_api_key'); // Metodo a leng
```

## Litshuo tsa Ho Set (Setup Instructions)

### 1. Goela Plugin ya WP Engine

Ha o tsela eo WP Engine, plugin ya WP Engine eba e installa le e active. Goela ho tseba:

1. Plugin ya WP Engine eba e active
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` e ba e fa

### 2. Enable Ho Integration

1. Mo admin ya WordPress ya gago, goela Ultimate Multisite > Settings
2. Goela ho tab ya "Domain Mapping"
3. Scroll down ho "Host Integrations"
4. Enable integration ya WP Engine
5. Click "Save Changes"

## Ee Etsa Kae (How It Works)

### Domain Syncing

Ha domain e ba e mapilwa mo Ultimate Multisite:

1. Integration e use WP Engine API eba e nthela domain eo mo installation ya WP Engine ya gago
2. WP Engine eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba eba

Ho fana le fa'aiga multisite o subdomain:

1. O le fa'aiga e fa'aofia ai o subdomain uma i WP Engine lea ua e fa'aiga fou.
2. WP Engine o fa'aofia ai le fa'aiga o subdomain.
3. O le fa'aiga ua e fa'aiga ai le subdomain o WP Engine lea ua fa'aiga fou, o le a fa'aiga fou ua fa'aiga fou.

## Aiga Fa'aoniga Muamua (Important Notes)

### Wildcard Domains

I le fa'aiga multisite o subdomain, e leai ai ona fa'aoniga i WP Engine support lea ua fa'aoniga wildcard domain. O lona fa'aoniga ua su'esu'e ai o subdomains uma ua e leai ai ona fa'aofia i tasi-tasi.

### SSL Certificates

WP Engine o fa'aofia ai le fa'aiga SSL certificate issuance lea ua fa'aiga fou mo ona domaini uma ua fa'aofia i le a fa'aiga fou. E leai ai ona fa'aoniga e tatau.

## Aiga Fa'amalosia (Troubleshooting)

### API Connection Issues
- Fa'amalosia o le WP Engine plugin ua fa'aiga ma ua fa'aofia i lona fa'aoniga.
- O le a fa'aofia ai le API key manuia, fa'amalosia o se fa'aoniga e tatau.
- Fa'amalosia WP Engine support ae o leai ona fa'aoniga i le API.

### Domain Not Added
- Fa'amalosia o le Ultimate Multisite logs lea ua fa'aofia ai se fa'aoniga e tatau.
- Fa'amalosia o le domain ua leai ona fa'aofia i WP Engine.
- Fa'amalosia o le a fa'aofia ai le plan o WP Engine ua su'esu'e ai le fa'aiga o se tau o subdomain uma ua e tatau.

### Subdomain Issues
- O le subdomains ua leai ona fa'aofia, fa'amalosia WP Engine support ae o leai ona fa'aoniga i lona fa'aoniga wildcard domain.
- Fa'amalosia o le DNS settings ua tatau mo le main domain lea subdomain uma.
