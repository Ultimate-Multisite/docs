---
title: Uunganishaji wa Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Uunganishaji na Hostinger (hPanel) {#hostinger-hpanel-integration}

## Muhtasari {#overview}

Hostinger ni mtoa huduma maarufu wa hosting ya tovuti mwenye control panel ya kisasa inayoitwa hPanel. Uunganishaji wa Ultimate Multisite na Hostinger unaruhusu kuunganishwa kiotomatiki cha nyanja (domain syncing) kati ya Ultimate Multisite na hPanel ya Hostinger. Hii inakuruhusu kusimamia ramani za nyanja (domain mappings) na subdomains kiotomatiki moja kwa moja kutoka kwenye admin yako ya WordPress.

## Vipengele {#features}

- Kuunda addon domains kiotomatiki katika hPanel
- Kuunda subdomains kiotomatiki katika hPanel (kwa usakinishaji wa multisite wa subdomains)
- Kuondoa nyanja wakati ramani zake zinapofutwa
- Uunganishaji laini na API ya usimamizi wa nyanja ya hPanel

## Mahitaji {#requirements}

Ili kutumia uunganishaji wa Hostinger, unahitaji:

1. Akaunti ya Hostinger yenye ufikiaji wa hPanel
2. Token ya API kutoka Hostinger
3. Thamani zifuatazo za *constant* kufafanuliwa katika faili yako ya `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Kwa hiari, pia unaweza kufafanua:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint ya kiwango
```

## Maelekezo ya Usakinishaji {#setup-instructions}

### 1. Tengeneza Token yako ya API ya Hostinger {#1-generate-your-hostinger-api-token}

1. Ingia kwenye akaunti yako ya Hostinger na ufikie hPanel
2. Nenda kwenye **Account Settings** → **API Tokens**
3. Bonyeza **Create New Token**
4. Mpe token yako jina la kuelezea (k.m., "Ultimate Multisite")
5. Chagua ruhusa muhimu:
   - Usimamizi wa nyanja (Domain management)
   - Usimamizi wa subdomains (Subdomain management)
6. Nakili token iliyotengenezwa na kuihifadhi kwa usalama

### 2. Tafuta Account ID yako {#2-find-your-account-id}

1. Katika hPanel, nenda kwenye **Account Settings** → **Account Information**
2. Account ID yako inaonyeshwa kwenye ukurasa huu
3. Nakili na hifadhi ID hii kwa hatua inayofuata

### 3. Ongeza Constants kwenye wp-config.php {#3-add-constants-to-wp-configphp}

Ongeza *constants* zifuatazo kwenye faili yako ya `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ikiwa akaunti yako ya Hostinger inatumia *API endpoint* tofauti, unaweza kuifanya iwe tofauti:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Washa Uunganishaji {#4-enable-the-integration}

1. Katika admin yako ya WordPress, nenda kwenye **Ultimate Multisite > Settings**
2. Nenda kwenye tab ya **Domain Mapping**
3. Skrola chini hadi **Host Integrations**
4. Washa uunganishaji wa **Hostinger (hPanel)**
5. Bonyeza **Save Changes**

## Jinsi Inavyofanya Kazi {#how-it-works}

### Addon Domains {#addon-domains}

Unapoweka ramani ya nyanja (domain) katika Ultimate Multisite:

1. Uunganishaji unatuma ombi kwa API ya Hostinger kuongeza nyanja hiyo kama *addon domain*
2. Nyanja hiyo inaanwaniwa kuonyesha kwenye *root directory* yako
3. Wakati ramani ya nyanja inapotolewa, uunganishaji unatoa *addon domain* kiotomatiki kutoka hPanel

### Subdomains {#subdomains}

Kwa usakinishaji wa multisite wa subdomains, wakati tovuti mpya inapotengenezwa:

1. Uunganishaji unatoa sehemu ya subdomain kutoka kwenye nyanja kamili
2. Unatuma ombi kwa API ya Hostinger kuongeza subdomain hiyo
3. Subdomain hiyo inaanwaniwa kuonyesha kwenye *root directory* yako

## Vidokezo Muhimu {#important-notes}

- Uunganishaji unatumia REST API ya Hostinger kuwasiliana na akaunti yako
- Token yako ya API lazima iwe na ruhusa muhimu kwa usimamizi wa nyanja na subdomains
- Uunganishaji hausimami usanidi wa DNS; nyanja lazima zionyeshwe tayari kwenye akaunti yako ya Hostinger
- Maombi ya API yanatumiwa kwa usalama kupitia HTTPS
- Hifadhi token yako ya API kwa usalama na usiwahi kushiriki hadharani

## Kutatua Matatizo {#troubleshooting}

### Matatizo ya Muunganisho wa API {#api-connection-issues}

- Thibitisha kuwa token yako ya API ni sahihi na haijapita muda wake
- Angalia kuwa Account ID yako ni sahihi
- Hakikisha kuwa token yako ya API ina ruhusa muhimu kwa usimamizi wa nyanja
- Thibitisha kuwa akaunti yako ya Hostinger ni hai na katika hali nzuri

### Nyanja Haiongezekwi {#domain-not-added}

- Angalia logi za Ultimate Multisite kwa ujumbe wowote wa makosa
- Thibitisha kuwa nyanja hiyo haiongezekwaje tayari kwenye akaunti yako ya Hostinger
- Hakikisha kuwa akaunti yako ya Hostinger haifiki kikomo chake cha *addon domains*
- Thibitisha kuwa nyanja hiyo inaonyeshwa ipasavyo kwenye *nameservers* za Hostinger

### Matatizo ya Cheti cha SSL {#ssl-certificate-issues}

- Uunganishaji hausimami kutoa cheti cha SSL
- Hostinger kwa kawaida hutoa cheti cha SSL bure kupitia AutoSSL
- Unaweza kusimamia cheti cha SSL moja kwa moja katika hPanel chini ya **SSL/TLS**
- Badala yake, tumia Let's Encrypt na kipengele cha AutoSSL cha Hostinger

## Wasili {#support}

Kwa msaada zaidi kuhusu uunganishaji wa Hostinger, tafadhali rejelea:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
