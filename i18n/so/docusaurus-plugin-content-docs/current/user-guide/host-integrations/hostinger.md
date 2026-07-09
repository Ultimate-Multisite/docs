---
title: Isdhexgalka Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Iskuurinta Hostinger (hPanel) {#hostinger-hpanel-integration}

## Guudbin {#overview}

Hostinger waa adeeg web hosting oo caan ah oo leh dashboard casri ah oo la yiraahdo hPanel. Iskuurinta Ultimate Multisite ee Hostinger waxay kuu oggolaataa isku-dubbaridda domain-ka si toos ah u dhexeeya Ultimate Multisite iyo hPanel-ka Hostinger, taasoo kuu ogolaanaysa inaad si toos ah maamushay xiriirka domain-ka iyo subdomain-yada ka dib admin-ka WordPress-kaaga.

## Faahfaahinta {#features}

- Abuurista automatica ee addon domain-ka hPanel-ka
- Abuurista automatica ee subdomain-ka hPanel-ka (haddii aad samaynayso subdomain multisite installations)
- Ka saarista domain-ka marka la nisboorto xiriirka (mappings)

Marka la nisboorto API-ga maamulka domain-ka ee hPanel.

## Shuruudaha {#requirements}

Si aad u isticmaasho iskuurinta Hostinger, waxaad u baahan tahay:

1. Akawlka Hostinger oo leh iibsashada hPanel
2. Token API ka helaya Hostinger
3. Isticmaal qaybta hoose ee `wp-config.php` ee la qoray:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Waxaad sidoo kale doorbidayso (optional) inaad qorto:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint-ka caadiga ah
```

## Tilmaamaha Qaab-dhismeedka {#setup-instructions}

### 1. Samee Token API-ga Hostinger-kaaga {#1-generate-your-hostinger-api-token}

1. Tag akawlka Hostinger-kaaga oo fur hPanel
2. Tag **Account Settings** → **API Tokens**
3. Click **Create New Token** (Abuur Token cusub)
4. Sii magac sharaxsan u bixi token-kaaga (tusaale: "Ultimate Multisite")
5. Dooro fursadaha loo baahan yahay:
   - Domain management (Maamulidda domain-ka)
   - Subdomain management (Maamulidda subdomain-ka)
6. Copy token-ka la soo saaray oo ilaali si ammaan ah

### 2. Hel ID-ga Akawlkaaga {#2-find-your-account-id}

1. HPanel-ka, tag **Account Settings** → **Account Information**
2. ID-ga akawlkaagu wuxuu ku yaal boggan
3. Copy ID-gaas oo ilaali si aad u isticmaasho tallaabada xigta

### 3. Ku dar Constants-ka wp-config.php {#3-add-constants-to-wp-configphp}

Ku dar constants-kan hoose ee faylkaaga `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'hostinger_api_token_ada');
define('WU_HOSTINGER_ACCOUNT_ID', 'hostinger_account_id_ada');
```

Haddii ko account-kaaga Hostinger isticmaalayso API endpoint kale hadda ka beddelaysaa:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Furita isku-xirnaanta (Enable the Integration) {#4-enable-the-integration}

1. Admin-ka WordPress-kaaga, **Ultimate Multisite > Settings**-ka tag.
2. Tab-ka **Domain Mapping**-ka u socda.
3. Hoosta hoos, **Host Integrations**-ka u eeg.
4. Furita isku-xirnaanta **Hostinger (hPanel)**-ka.
5. **Save Changes**-ka ku rii.

## Sidee Waa Inuu Shaqeeyo (How It Works) {#how-it-works}

### Addon Domains (Domainyada Ku Darbada) {#addon-domains}

Marka aad domain-ka Ultimate Multisite-kaaga ka qabato:

1. Isku-xirnaantu waxay codsi u dirtaa API-ga Hostinger si ay domain-ka u darbeeyso addon domain ah.
2. Domain-ka waxaa loo habeeyaa inuu u socdo directory-ga ugu horreeya (root directory).
3. Marka la saaro qabashada domain-ka, isku-xirnaantu waxay si toos ah ka saartaa addon domain-ka hPanel-ka.

### Subdomains (Subdomainyada) {#subdomains}

Subdomain multisite installation-ka loogu talagalay, marka website cusub la abuuro:

1. Isku-xirnaantu waxay ka soo qaaddaa qaybta subdomain-ka oo dhan domain-ka.
2. Waxay codsi u dirtaa API-ga Hostinger si ay u darbeeyso subdomain-ka.
3. Subdomain-ka waxaa loo habeeyaa inuu u socdo directory-ga ugu horreeya (root directory).

## Fiiro Muhiim ah (Important Notes) {#important-notes}

- Isku-xirnaantu waxay isticmaalaysaa REST API-ga Hostinger si ay ula wada hadlaan account-kaaga.
- Token-ka API-gaagu waa inuu leeyahay fursadaha loo baahan yahay maamulka domain iyo subdomain-ka.
- Isku-xirnaantu ma maamaysid DNS configuration-ka; domain-yadu waa inay hore u socdaan account-kaaga Hostinger.
- Codsiyada API-ga waxaa si ammaan ah loo dirayaa HTTPS-ka.
- Hubi in token-ka API-gaagu uu yahay mid ammaan ah oo haad waligood aadan la wadaag.

## Wax Ka Bartida (Troubleshooting) {#troubleshooting}

### Masalahaatada Xiriirka API-ga {#api-connection-issues}

* Hubi tokenka sax ah oo si sax ah u hubi inuu aysan dhicin muddada uu dhammaaday (expired).*
* Hubi in ID-gaaga Account-ka uu yahay mid sax ah.*
* Hubi in hubi tokenkaaga API uu leeyahay fursadaha loo baahan yahay maamulka domain-ka.*
* Hubi in account-kaaga Hostinger uu socdo oo si wanaagsan u shaqaynayo.*

### Domain aan la soo darin (Domain Not Added) {#domain-not-added}

* Hubi logs-ka Ultimate Multisite-ka waxyaabaha qaladka ah ee ay ku jiraan.*
* Hubi in domain-ku aysan la darin account-kaaga Hostinger.
* Hubi in account-kaaga Hostinger uu weli uusan gaarin xaddidaada domain-yada dheeri ah (addon domains).
* Hubi in domain-ku si sax ah loo diray server-ka nameserver-ka Hostinger-kaaga.

### Masalahaatka Sertifikaanka SSL (SSL Certificate Issues) {#ssl-certificate-issues}

* Isku-dhafka (integration)-gu ma maamaynayo bixinta sertifikaanka SSL.*
* Hostinger inta badan si bilaash ah ayuu bixiyaa sertifikaadka SSL-ka iyada oo loo maro AutoSSL.*
* Waxaad si toos ah u maamuli kartaa sertifikaadka SSL-ka hPanel-ka hoose ee **SSL/TLS** (SSL/TLS).*
* Sida kale, isticmaal Let's Encrypt iyo astaanta AutoSSL-ka Hostinger.

## Taageero (Support) {#support}

Si aad u hesho caawimaad dheeri ah oo ku saabsan isku-dhafka Hostinger, fadlan la socda:

* [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Documentation](/)
* [Ultimate Multisite Support](https://ultimatemultisite.com/support)
