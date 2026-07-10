---
title: Ho-lapa le Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integration le Cloudflare {#cloudflare-integration}

## Le Tšhobo (Overview) {#overview}
Cloudflare ke mo le ntlha ya go thusa le website tsa go tsamaya ka metlha, e le sefapso sa go rona le go tsamaya. Ho fana ka ho na le management a domain automatic ho Ultimate Multisite le Cloudflare, ho feta moo ho na le installations tsa subdomain multisite.

## Le Litlhokwa (Features) {#features}
- Go dira subdomain automatically mo Cloudflare
- Ho tseba subdomain e fetang (Proxied subdomain support)
- Management a DNS records
- Ho bona DNS record ka tšho ya Ultimate Multisite admin

## Boitshwaro (Requirements) {#requirements}
Ho batla ho fana ka constants tse di fetang mo file ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Boitshwaro (Setup Instructions) {#setup-instructions}

### 1. Get API Key ya Cloudflare {#1-get-your-cloudflare-api-key}

1. Tsamaela mo dashboard ya Cloudflare
2. Tsamaela mo "My Profile" (tsheba email ya hau mo tšho ya mmele le mmele wa ntlha)
3. Select "API Tokens" mo menu
4. Fetola API token e ntshwago le litlhokwa tse di fetang:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopanya API token ya hau

### 2. Get Zone ID ya hau {#2-get-your-zone-id}

1. Mo dashboard ya Cloudflare, select domain o batlang ho u sebelisa
2. Zone ID e le mo tab ya "Overview", mo sidebar ya tšho ya mmele le mmele wa ntlha ka "API"
3. Kopanya Zone ID

### 3. Add Constants mo wp-config.php {#3-add-constants-to-wp-configphp}

Ho fana constants tse di fetang mo file ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Enable Integration {#4-enable-the-integration}

1. Mo WordPress admin ya hau, tsamaela mo Ultimate Multisite > Settings
2. Tsamaela mo tab ya "Domain Mapping"
3. Scroll ho le mo "Host Integrations"
4. Enable integration ya Cloudflare
5. Kopanya "Save Changes"

## Ho Baola (How It Works) {#how-it-works}

### Management a Subdomain {#subdomain-management}

Ho nna le site e ntshwago mo installation ya subdomain multisite:

1. Ho fana a fetoga (integration) ho fana ha fel API ea Cloudflare ho fana record ea CNAME ho subdomain.
2. Subdomain e le fetoga ho ba proxied kae ea lala (this kaetsoho ho fetoga). (Kae e ka fetoga ka filter)
3. Ho feta site e le fetoga, fetoga e tla fetola subdomain ho Cloudflare.

### Ho Ba Leano la DNS (DNS Record Display) {#dns-record-display}

Fetoga e fetola leano la DNS ho ba lehle ka admin ea Ultimate Multisite ka:

1. Ho tsamaetsa leano la DNS ka lala ho Cloudflare
2. Ho bona hore leano li ba proxied kae a le ka
3. Ho bona litšepetso tse nyane ka leano la DNS

## Leano la Hostnames ea Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Leano la Hostnames ea Cloudflare** (le tla fana ka ho batla ba ba bang ba ba le domain ba ba ba le SSL ka sebo ea lala la hau la multisite. E le tsela e fetang e e fetang ho ba le multisite e ba le mapped le e ba le Cloudflare, ka ho feta hore Cloudflare e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e

1. Moho ka dashboard ya Cloudflare, ule zone ya domain ya hau le hau.
2. Go kwa **SSL/TLS > Custom Hostnames**.
3. Add fallback origin e tšoa (pointing) ku IP ya server ya hau kapa hostname ya hau.
4. Ho go bona ho ntlha (mapping) la customer domain le le mo Ultimate Multisite, add entry ya Custom Hostname e Cloudflare. U ka etsa tsela ena ka u fetola se le API ya Cloudflare.
5. Cloudflare o fetola le o fetola upolofonelo (renew) tsa TLS certificates ho ntlha ho mmele le mmele le le mo customer DNS e fetileng ka network ya hau.

Ho bona tsela ena efelelo, go bona [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Lefatsa le litlhaka
Ka ntlha ya Cloudflare e fetileng, wildcard proxying o ka etsa ho mmele le mmele le mo customer. Le diketlo tsa DNS (DNS) tsa Cloudflare di fana le diketlo tse di hlokang ho tshepa haholo mo installation ya multisite ya subdomain le le le mo a ntlha. Ho na le sefalo, o ka fetola record ya DNS e wildcard mo Cloudflare.

## Go bona Lefatsa (Troubleshooting) {#how-it-differs-from-the-standard-cloudflare-integration}

### Morero wa Leletsi la API {#setting-up-cloudflare-custom-hostnames}
- Re ke tla bona gore token ya hau ya API e tshepa le e na le diketlo tse di hlokang.
- Re tla bona gore Zone ID ya hau e tshepa.
- Re ke tla ntlha gore account ya hau ya Cloudflare e na le diketlo tse di hlokang.

### Subdomain E Ntšoa (Not Added) {#important-notes}
- Re ke tla bona logs ya Ultimate Multisite ho bona sefalo sa mofuta.
- Re ke tla ntlha gore subdomain e fetileng e ntse e fana mo Cloudflare.
- Re ke tla ntlha gore plan ya hau ya Cloudflare e etsa diketlo tsa DNS tse o fetang di hlokang.

### Matlala a Mabotse (Proxying Issues) {#troubleshooting}
- Ha u batla hore subdomains a a fana (proxied), u ka u sebelisa `wu_cloudflare_should_proxy` filter.
- Ho some features a sa baetse kae a lehle (work correctly) ha a fana, eona (e.g., certain WordPress admin functions).
- Re kopa hore u sebelise Page Rules ea Cloudflare ho hlakanya cache ho tloha le pages ea admin.
