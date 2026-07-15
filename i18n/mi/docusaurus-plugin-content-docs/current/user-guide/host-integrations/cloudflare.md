---
title: Whakawhanaungatanga Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Whakawhiti me Cloudflare

## Pātaiwhiri (Overview) {#overview}
Cloudflare he whānau nui o ngā wero mō te whaiwhihi i mō te wāhi (content delivery network - CDN) me te pūmanawa ā-whakamahinga (security provider) ki te whakamahi i te wero me te whakaaturanga o ngā website. Ka tino whaiārahi tēnei whakawhiti i te whakamaoritanga o te domain (domain management) anōanō i antara Ultimate Multisite me Cloudflare, tekaui tekau mō ngā installation multisite subdomain.

## Manawa (Features) {#features}
- Whakawhiti subdomain anōanō i Cloudflare
- Whakawhanaungatanga subdomain e whaiwhihi (Proxied subdomain support)
- Whakawhiti rekordi DNS (DNS record management)
- Whakawhiti whakaaturanga rekordi DNS e whero ana i Ultimate Multisite admin

## Wāhi Whakamahi (Requirements) {#requirements}
Me tino whakamahinga ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Whakatau (Setup Instructions) {#setup-instructions}

### 1. Whakawātea Tō API Key o Cloudflare {#1-get-your-cloudflare-api-key}

1. Whakawātea ki tō dashboard o Cloudflare
2. Pāinga ki "My Profile" (whakawatea i tō email i te kura whero i te ngāhi whero i te whakatū)
3. Whakarongo ki "API Tokens" mai i te menu
4. Whakawātea token API hou me ngā whānau whai mana berikutu:
   - Zone.Zone: Read (Whakawātea mō te whakawhiti o te zone)
   - Zone.DNS: Edit (Whakawātea mō te whakarereke rekordi DNS)
5. Kopiko tō API token

### 2. Whakawātea Tō Zone ID {#2-get-your-zone-id}

1. I tō dashboard o Cloudflare, whakatū i te domain e tino pai ana ki te whakamahi
2. Ko te Zone ID e hoki ana i te tab "Overview", i te ngāhi whero i te whare pō (right sidebar) i runga i "API"
3. Kopiko tō Zone ID

### 3. Whakawhiti Constants ki wp-config.php {#3-add-constants-to-wp-configphp}

Whakawātea ngā constants berikut ki tō file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Whakawhanaungatanga te Whakawhiti (Enable the Integration) {#4-enable-the-integration}

1. I tō WordPress admin, pāinga ki Ultimate Multisite > Settings
2. Pāinga ki te tab "Domain Mapping"
3. Whakarongo ki "Host Integrations"
4. Whakawhanaunga te Cloudflare integration
5. Whakawatea i "Save Changes"

## He aha ia mahi ana (How It Works) {#how-it-works}

### Whakawhiti Subdomain (Subdomain Management) {#subdomain-management}

I tō wā e whakatō ahau website hou i installation multisite subdomain:

1. Te whaiwhi (integration) i rite whakaaro ki API o Cloudflare kia āwhitu whakamāhi CNAME record mō te subdomain.
2. He tino tika ana te subdomain hei whakawhiti (proxy) mō Cloudflare e ngāwari (he taea te whak whakarēhia pēnei i filter).
3. I roto i te wā e whakatika/whakamutunga te site, ka whero te integration te subdomain mai Cloudflare.

### Whakaritenga DNS Record Display {#dns-record-display}

Whakahaere ai te integration te whakaatu o ngā DNS record i te admin o Ultimate Multisite i te mea:

1. Whakawātea ngā DNS records tika mai Cloudflare
2. Whakaahua mō te mea he proxied (whakatika) au he nui
3. Whakaahua mō korero whaiaro anō mō ngā DNS records

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (he tino tika ana i te whakatō "Cloudflare for SaaS") he āhuatanga o Cloudflare e hiahia ana ki te whakamahi o ngā domain o koe me SSL mo te wāhi multisite o koe. He te whakataunga tika mō ngā installation multisite e whai ana i te domain mapping (whakatō domain) e hāpai i Cloudflare, i te mea e whaiaro ai Cloudflare te whakamahi i te certificate SSL ki te whakatū me te whakatutuki i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto

1. I roto i te dashboard o au Cloudflare, titi i te zone (domain) o au domain nui.
2. Pā te **SSL/TLS > Custom Hostnames**.
3. Whā te origin fallback (origin e whai ake) whakamahi ana ki IP o au servertake pei o hostname.
4. Mo every customer domain (domain o ngā mea whai ake) i whakawātea i Ultimate Multisite, whānui i te entry Custom Hostname i Cloudflare. Kei te taea ai koe te whakamahi i te Cloudflare API mō te whakamwahine i tēnei apa.
5. Whakawāhia me whakatere anō (renew) ngā TLS certificates mo every custom hostname automatically i tō pēpi i te DNS o te customer e whakawātea ki tō wāhi network.

Mo te whakamārama mō te API reference katoa, he tino pai te whakaatu i [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Whakamutunga terminology
I tēnei v2.6.1 o Ultimate Multisite, ko te whānau (feature) tenei e whakawāhia ana i **Cloudflare Custom Hostnames** i ngā settings me ngā label katoa o te plugin. I ngā versione purine, i whakamahia te ingoa "Cloudflare for SaaS", he ingoa o te au product o Cloudflare.
:::

## Ngā Pātai Whakamahalata (Important Notes) {#how-it-differs-from-the-standard-cloudflare-integration}

I tēnei wā, e hoki mai te wildcard proxying mō ngā customer katoa. He tino whakamua ana ko he pēnei i te standard Cloudflare DNS integration he nui te mana ana mo installation multisite subdomain kei te whakawātea i te mea, he taea ai koe te whakarite i he record DNS wildcard i Cloudflare.

## Whakamutunga (Troubleshooting) {#setting-up-cloudflare-custom-hostnames}

### Ngā Pātai o te Connection API {#important-notes}
- Kia tino mārama ko te API token o koe he tino pai ana me he nui ngā manawa (permissions) e pēnei.
- Kia tino mārama ko te Zone ID o koe he tino pai ana.
- Kia tino mārama ko he nui ngā manawa (permissions) e pēnei i tō account Cloudflare.

### Subdomain Ka Rongotai Nahi {#troubleshooting}
- Kia tino mārama i ngā logs o Ultimate Multisite mō ngā error messages katoa.
- Kia tino mārama ko a te subdomain ka whakahou ana koe he tino pai ana ki Cloudflare.
- Kia tino mārama ko he nui te mana (plan) o au Cloudflare e pēnei i te hāpai i te ahua (number) o ngā DNS records i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i

### Ngā Wāhi Whakamārama (Proxying Issues) {#api-connection-issues}
- Ko koe e tino i te whai whakaaro ana ahau ki te whakamahi `wu_cloudflare_should_proxy` filter, kia tautoko i te subdomains (whakawāhi hoki) katoa.
- He tino pai na ngā āhuatanga taketake (features) mōhanga i roto i te whenua e pēnei i te whai whakamahi proxy (e.g., nekehanga admin o WordPress).
- He tino pai na koe ki te whakamahi Cloudflare Page Rules kia whakawātea (bypass) te cache mo ngā manawa admin (admin pages).
