---
title: Cúram na WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Intégráisi le WP Engine

## Oibríocht {#overview}
Is é WP Engine platform host WordPress leatúil agus curtha chuid, a leonaimníonn foirmeacht, séurtiúil agus scálaí ar fáil do siti WordPress. Cén fáth go bhfuil an chéad seo ag teacht ar ais: leasú domáin go hiomlán (automatic domain syncing) idir Ultimate Multisite agus WP Engine.

## Fáilte-chúinneachais {#features}
- Leasú domáin go hiomlán
- Suídh domáin (subdomain support) do chuid installaíochta multisite
- Intégráisiú leatúil le sísteimacha atá ag WP Engine

## Cuidiúcháin {#requirements}
Bíonn an intégráisiún ag teacht ar ais go hiomlán má tá tú ag host ar WP Engine agus a úsáideann tú an API de WP Engine atá ag cur chuig. Níl aon cheangailt nua ag cur isteach mar thuairisc ifh chomh maith le plugin WP Engine atá ag cur chuig agus ag cur chuig go ceart.

Mar sin féin, má tá tú ag cur cheangailt an intégráisiún go hiomlán, leat a chur in áit aon dearcán seo i `wp-config.php` a bhaineann:

```php
define('WPE_APIKEY', 'your_api_key'); // Méid a bhíonn ag cur chuig
// AN CHUIN
define('WPE_API', 'your_api_key'); // Méid eile
```

## Instructionaí Déanachais {#setup-instructions}

### 1. Déan an t-WP Engine Plugin ar chuid {#1-verify-wp-engine-plugin}
Má tá tú ag host ar WP Engine, caithfidh plugin WP Engine atá curtha agus a chomhtháir. Déan cinnte go bhfuil:

1. An plugin WP Engine curtha
2. An fáil `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ag tairiscint

### 2. Fáil an Intégráisiún ar ais {#2-enable-the-integration}
1. Iar a chuir tú iad ar WordPress admin, cur isteach go Ultimate Multisite > Settings
2. Déan cinnte go bhfuil tú ar an tab "Domain Mapping" (Leasú domáin)
3. Glac go leathanach go "Host Integrations" (Intégráisiún host)
4. Fáil an intégráisiún WP Engine ar ais
5. Cliom ar "Save Changes" (Cur chuig curtha)

## Conas Tá Éifeachtach {#how-it-works}

### Leasú Domáin {#domain-syncing}
Nuair a bhíonn domán ag leasú i Ultimate Multisite:

1. Bain úsáid as an API de WP Engine chun domáin atá ag tairiscint á chomhtháir leat ar do installaíocht WP Engine
2. Buid féachfaidh WP Engine an curtha domáin agus an tairiscint SSL (SSL certificate issuance)
3. Nuair a bhíonn curtha domáin ag iarraidh, beidh an intégráisiún ag cur domáin ar ais ó WP Engine

### Suídh Domáin {#subdomain-support}

Para instaláid multisite ar subdomain:

1. Tá an cur chuim a chomhcheolte each subdomain le WP Engine nuair a bhíonn nua site ag cur isteach.
2. Bheann WP Engine a bheith leis an cur chuim ar an cur chuim ar an subdomain.
3. Nuair a bhíonn site ag déanamh anailís, beidh an cur chuim ag tógáil an subdomain ó WP Engine.

## Nóta Aisneach {#important-notes}

### Domain Wildcard (Wildcard Domains) {#wildcard-domains}

Ar chun instaláid multisite ar subdomain, is féidir leat a bheith ag cur isteach ar support WP Engine agus a ráist ar chuid deacairt domain wildcard. Is féidir leis seo a bheith ag eolais an gcuid subdomains a bheith ag eolais go hiomlán gan a bheith ag cur isteach each one go hiomlán.

### Certat SSL (SSL Certificates) {#ssl-certificates}

Bheann WP Engine a bheith leis an t-aonach ar chuid deacairt agus a nuaigh an certat SSL do gach domain a bhíonn ag cur isteach trí cur chuim seo. Níl aon cur chuim eile ag cur isteach.

## Déanáil (Troubleshooting) {#troubleshooting}

### Cúsaí ar Chuid API (API Connection Issues) {#api-connection-issues}
- Déan cinnte go bhfuil an plugin WP Engine agat ag bheith ar chuid deacairt agus ag cur isteach ar fáil ar fáil.
- Má tá tú ag cur chuim key ar chuid deacairt go hiomlán, déan cinnte go bhfuil sé ceart.
- Tao contact le support WP Engine má tá tú ag cur chuim ar chuid deacairt.

### Domain Níl Ag Cur Chuim (Domain Not Added) {#domain-not-added}
- Déan ar an logacha Ultimate Multisite ar aon rud éifeachtach a bhaineann leis an t-aonach.
- Déan cinnte go bhfuil an domain ag cur isteach ar chuid deacairt le WP Engine.
- Déan cinnte go bhfuil an plan WP Engine agat ag cur chuim ar fáil ar na n-amainneacha a bhíonn tú ag cur isteach.

### Cúsaí ar Subdomains (Subdomain Issues) {#subdomain-issues}
- Má níl subdomains ag eolais, tao contact le support WP Engine agus ráist ar chuid deacairt domain wildcard.
- Déan cinnte go bhfuil an cur chuim DNS agat ceart ar na n-amainneacha a bhaineann leis an domain main agus na subdomains.
