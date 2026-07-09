---
title: Whakawhanaungatanga Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Whakawhanaungatanga me Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## Whakataki {#overview}

Hostinger he whānau wahi hoakoa web nui, me panel kontrol hou ingoa i a ia hPanel. He tino whakatika (Ultimate Multisite) integration o Hostinger e tino whaiaro te syncing o domain automatically i antara Ultimate Multisite me hPanel o Hostinger, e tino kitea ana ki te whakamaoritanga o domain mapping me subdomain directly i runga i tō WordPress admin.

## Manawa (Features) {#features}

- Whakawhanaungatanga automatic o addon domains i a hPanel
- Whakawhanaungatanga automatic o subdomains i a hPanel (mō mga installation multisite subdomain)
- Whakamutunga o domain i roto i te whakamutunga o mapping
- Whakatika whakamahi seamless me API o whakamaoritanga domain o hPanel

## Mga Wāhi Whakahaere (Requirements) {#requirements}

Mō te whakamahi integration o Hostinger, koe e puke ana:

1. He account Hostinger me access ki a hPanel
2. He API token mai i Hostinger
3. Ngā constants berikut e tino whakahirahira i tō file `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Mō te whakatika (Optionally), koe e taea ai te tino whakahirahira:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Whakahaere Whakamahi (Setup Instructions) {#setup-instructions}

### 1. Whakawhanaunga Iro Token o Hostinger {#1-generate-your-hostinger-api-token}

1. Puke ki tō account Hostinger me whai i a hPanel
2. Pāinga ki **Account Settings** → **API Tokens**
3. Whakawatea **Create New Token**
4. Give tō token ingoa tino kitea (e.g., "Ultimate Multisite")
5. Select ngā whānau whakahirahira:
   - Domain management
   - Subdomain management
6. Copy tō token e whakatika ana i te wāhi āhua me te whaiaro

### 2. Whakawaha Iro o Tō Account ID {#2-find-your-account-id}

1. I a hPanel, pāinga ki **Account Settings** → **Account Information**
2. Ko tō Account ID e kite ana i tēnei manawa
3. Copy me te ID ko e whakatika ana i te wāhi āhua mō te whakamārama (for the next step)

### 3. Whakawhiti Constants ki wp-config.php {#3-add-constants-to-wp-configphp}

Whakawhiti ngā constants berikut ki tō file `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ko te whaiaro i te endpoint API o aua Hostinger, he tino pai ana ki te whakaiti i ai:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Whakawhanaungatanga (Enable the Integration) {#4-enable-the-integration}

1. I roto i te admin o WordPress, pahu ki **Ultimate Multisite > Settings**
2. Pahu ki te tab **Domain Mapping**
3. Scroll ki te **Host Integrations**
4. Whakawhanaunga (Enable) te whaiwhatanga **Hostinger (hPanel)**
5. Whakawatea i **Save Changes**

## He aha ia mahi? (How It Works) {#how-it-works}

### Addon Domains (Domain Whakawāhi) {#addon-domains}

I roto i te Ultimate Multisite, i roto i te whakawāhia domain:

1. Ka tino rite te whaiwhatanga ki te API o Hostinger kia whaiaro te domain ahau he addon domain
2. Ka whakatika te domain kia pōutu ki te root directory (te wāhi nui) o koe
3. I roto i te wā ka whakatika ai te whakawāhia domain, ka whakatika anō te whaiwhatanga ki te hPanel

### Subdomains (Subdomains) {#subdomains}

Mō ngā installation multisite subdomain, i roto i te wā ka whakahou koe i te site hou:

1. Ka whakatika te whaiwhatanga ahau i te whakamahi o te subdomain mai i te domain katoa
2. Ka tino rite te whaiwhatanga ki te API o Hostinger kia whaiaro te subdomain
3. Ka whakatika te subdomain kia pōutu ki te root directory (te wāhi nui) o koe

## Ngā Tohutohu Whiti (Important Notes) {#important-notes}

- Ka whakamahi te whakawhanaungatanga ahau i te REST API o Hostinger mō te whaiwhatanga ana ki tō account
- Me heke i tō token API i ngā whānau whai mana anō ki te whakairo domain me subdomain
- Ka āwhina ai te whakawhanaungatanga i te whakarite DNS; ka mea e hiahia ana ko te domain i pōutu i tō account o Hostinger anō
- Ka whakamahia ngā whaiwhatanga API i runga i HTTPS, he pūkaha.
- Kia mau tonu i tō token API i āhua haumati me kia kore e whakawhiti ai ki te ao.

## Whakawātea (Troubleshooting) {#troubleshooting}

### Ngā Pānga o te Whaiwhatanga API (API Connection Issues) {#api-connection-issues}

- Kia kaha, he tino whakamārama ki te token API mo te tika me te whakahou i tōna wā.
- Kia tiaki i te Account ID mo tika.
- Kia tiaki i te token API mo ngā whānau whaiora (permissions) mo te whakamaoritanga o te domain.
- Kia tiaki i tō account Hostinger mo tika me ia ora ana.

### Domain Eke nei {#domain-not-added}

- Kia whakaoti i ngā logs o Ultimate Multisite mo ngā pēpi (error messages).
- Kia tiaki i te domain mo tika, kia kore ai he hoki i tō account Hostinger.
- Kia tiaki i tō account Hostinger mo kore ai e hoki i tō limit mo addon domains.
- Kia whakaae mo tika te pointing o te domain ki ngā nameservers o Hostinger.

### Ngā Whainga SSL Certificate {#ssl-certificate-issues}

- Ko te whaiaro (integration) ko kāore e whakahaere ai te whakamahi SSL certificate.
- E tōna kaha, ko Hostinger e hihau i SSL certificates mo te free qua he whakahou (AutoSSL).
- Kei te taea te whakamaoritanga ngā SSL certificates mo te tika i hPanel ki te whakataki **SSL/TLS**.
- He aha, he whakamahi Let's Encrypt me te AutoSSL o Hostinger.

## Whakawhanaungatanga (Support) {#support}

Mo āhua whaihohi nui atu mo te integration o Hostinger, kia whai i:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
