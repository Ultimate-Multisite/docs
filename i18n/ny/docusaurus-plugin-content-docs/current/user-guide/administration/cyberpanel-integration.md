---
title: Kukonza CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

Iyi nkhani limene limenewo lili nkhulupirira bwanji kuti mwezi wanu wa Ultimate Multisite CyberPanel iye yomwezi wanu wamapangidwa (mapped domains) ali ndi kukhala kwa virtual hosts m'CyberPanel, ndipo monga m'auto-SSL (auto-SSL) monga m'Let's Encrypt.

## Iye Limenewo Limenewo {#what-it-does}

- Pamene domain imapangidwa m'Ultimate Multisite, integration imapereka API ya CyberPanel kuti ipereke virtual host yomwezi wamapangidwa.
- Pamene mapangidwa a domain amachitidwa, integration imapereka API kuti idimitsire (delete) virtual host yomwezi wamapangidwa.
- Pamene auto-SSL imapangidwa, integration imapanga Let's Encrypt certificate issuance monga momwe muli mpaka virtual host imaperekedwa.
- M'mwayi, imapereka/imachitidwa alias ya `www.` monga momwe muli ndi "Auto-create www subdomain" m'Domain Mapping settings yanu.

## Zomwe Zilipo M'Mwayi (Prerequisites) {#prerequisites}

- CyberPanel instance imene ikulimbikira (running) (m'v2.3 kapena zokonda zikuwoneka) imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene imene im

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Maonja ya Kufunga (Setup Instructions) {#requirements}

### 1. Kufanya API ya CyberPanel Iwe Yopo {#setup-instructions}

1. Ingia kwenye dashboard ya CyberPanel yako ukifanya kama admin.
2. Nenda kwa **Security** > **SSL** na thibitisha kuti SSL iko yopo kwenye interface ya CyberPanel yenyewe (kuna lazima ili msimbo wa API uweze kufanya kazi vizuri).
3. API ya CyberPanel inapatikana kwa kutumia `https://your-server-ip:8090/api/` kwa kawaida. Hakuna hatua nyingine zinazohitajika ili kuifanya iwe yopo — inakuwa yapo kwa admin wote kwa kiwango cha default.

### 2. Kuongeza Constants kwenye wp-config.php {#1-enable-the-cyberpanel-api}

Ongeza constants hizi kwenye faili yako ya `wp-config.php` kabla ya mstari wa `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ili kuwapa auto-SSL (inashauriwa):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Kuwezesha Ujumuishaji (Enable the Integration) {#2-add-constants-to-wp-configphp}

1. Katika network admin ya WordPress yako, nenda kwa **Ultimate Multisite** > **Settings**.
2. Nenda kwenye tab ya **Domain Mapping**.
3. Shuka chini hadi sehemu ya **Host Integrations**.
4. Washa ujasiri wa **CyberPanel** (Enable the CyberPanel integration).
5. Bonyeza **Save Changes**.

### 4. Kuthibitisha Uunganishaji (Verify Connectivity) {#3-enable-the-integration}

Tumia jaribio la kuunganisha lililopo kwenye wizard ya mipangilio:

1. Tenda ku **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Click **Test Connection**.
3. Message ya ya mufano wa ufanisi unaonyesha kuti plugin imwezi CyberPanel API ndipo imefanikiwa kuingia vyema.

## Uliufanyaje Balo {#4-verify-connectivity}

### Domain Mapping {#how-it-works}

Lelo lero lilo mapeto pa domain muli Ultimate Multisite:

1. Integration inatuma request ya `POST` kwa `/api/createWebsite` pa host wako wa CyberPanel.
2. CyberPanel inakwera virtual host mpya kwa domain iliyowekwa m'package yenu.
3. Directory ya nyaraka (document root) ikerekera kuonyesha directory ya msingi ya mtandao wenu wa WordPress.
4. Lelo lero mapeto pa domain likifutwa, integration inaita `/api/deleteWebsite` ili kufuta virtual host.

### Auto-SSL {#domain-mapping}

Lelo lero `WU_CYBERPANEL_AUTO_SSL` iko `true`:

1. Baadira kuwerekana virtual host, integration inaita `/api/issueSSL` kwa domain.
2. CyberPanel inahudumia cheti cha Let's Encrypt kwa kutumia changamoto ya ACME HTTP-01.
3. Cheti kinarejeshwa kiotomatiki na CyberPanel kabla ya kuisha.

> **Zilipo:** DNS lazima zikwerekwe wote pa anwani ya IP ya seva yenu kabla ya Let's Encrypt kuweza kuthibitisha domain. Koma cheti kinaposhindwa mara moja baada ya mapeto, kuliyelekeza kwa DNS propagation na uanzishe upya SSL kutoka kwenye dashboard ya CyberPanel chini ya **SSL** > **Manage SSL**.

### www Subdomain {#auto-ssl}

Lelo lero **Auto-create www subdomain** iko kuliwekea m'Domain Mapping settings yenu, integration inakwera alias ya virtual host kwa `www.<domain>` ndipo, ikipokuwa na auto-SSL, inatoa cheti kinachofunika variants zote za apex na www.

### Email Forwarders {#www-subdomain}

Pambere pamene [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ikulu, CyberPanel yeki chifukwa kuchiimira kuti muli ndi customer email forwarders. Forwarders imapasa maithandizo (messages) kuchokera kwa domain address ku inbox ine inayo monga momwe si kupanga mailbox yomwe yomwe yomwe wokhala, komwe ndi yofunika kwa aliases monga `info@customer-domain.test` kapena `support@customer-domain.test`.

Mmodzi mwa kukhazikitsa forwarders kwa customers:

1. Onani kuti constants za CyberPanel zomwe tikupereka zikuluziye ndipo kuyesa kukhazikitsa kuwoneka.
2. Onani kuti provider ya email ya CyberPanel ikuluza m'settings ya Emails addon.
3. Onani kuti domain ya customer imayepo m'CyberPanel monga momwe muli kupanga forwarder.
4. Panga forwarder yomwe ndi woyesa ndipo panga message kuchokera kwawo monga momwe muli kupereka feature iwo pa production plans.

Ngati kukhazikitsa forwarder kumfunika, onani m'Ultimate Multisite activity logs pamwamba, ndipo onani m'CyberPanel kuti domain ya chifukwa imayepo ndipo API user ali ndi udindo wopanga email (email-management permissions).

## Configuration Reference {#email-forwarders}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | URL yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yom

Kutete API ya CyberPanel imapereka kwa kutumia token inayotokana na session. Integration inalipika token moja kwa moja kwenye kila api call.
Kutegereza admin account yako ya CyberPanel ikuti ruhuso za kuunda na kufuta websites.
CyberPanel inafanya kazi kwa port `8090` kwa kawaida. Nekho yako inatumia firewall, shauri hakikisha port hii inawezekana kutoka kwenye WordPress application server.
Integration haifanyi usimamizi wa DNS records. Unapaswa kuweka domain DNS kwenda kwenye IP address ya seva yako kabla ya kuunda domain katika Ultimate Multisite.
Ikiwa unatumia OpenLiteSpeed (OLS), restart ya laini inatokea kiotomatiki baada ya kubadilisha virtual host. Hakuna haja ya kuingilia kati kwa mkono.

## Kujitahidi Kutafuta Matatizo (Troubleshooting) {#configuration-reference}

### API Connection Inarejelea {#important-notes}

- Angalia kwamba port `8090` imefunguliwa kwenye firewall ya seva yako.
- Thibitisha kwamba thamani ya `WU_CYBERPANEL_HOST` inajumuisha itoleo sahihi cha protocol (`https://`) na port.
- Angalia kwamba cheti cha SSL cha CyberPanel chako kina uthibitisho; cheti ambacho kinajitegemea (self-signed) kinaweza kusababisha kushindwa la TLS verification. Weka `WU_CYBERPANEL_VERIFY_SSL` kuwa `false` tu katika mazingira ya mtandao binafsi unayotii.

### Makosa ya Utambulisho (Authentication Errors) {#troubleshooting}

- Thibitisha kwamba `WU_CYBERPANEL_USERNAME` na `WU_CYBERPANEL_PASSWORD` yako ni sahihi kwa kuingia moja kwa moja kwenye CyberPanel.
- CyberPanel inalaza akaunti baada ya majaribio yaliyofeli ya kuingia mara kwa mara. Angalia **Security** > **Brute Force Monitor** katika CyberPanel ikiwa kuna kuzuiliwaji (lockouts).

### Domain Haikuundwi {#api-connection-refused}

- Angalia kumbukumbu ya shughuli ya Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) kwa ujumbe wa makosa ya API.
- Thibitisha kwamba package iliyofafanwa katika `WU_CYBERPANEL_PACKAGE` ipo kwenye CyberPanel (**Packages** > **List Packages**).
- Hakikisha domain haikuundwa tayari kama website katika CyberPanel — kuunda website mara mbili kunatoa makosa.

### Cheti cha SSL Hakijatolewa {#authentication-errors}

Kumbuk kuti DNS yaliye yomwezi bwino (fully propagated): `dig +short your-domain.com` yomwezi bwino yomwezi bwino (your server's IP) yomwezi bwino.
Let's Encrypt imaliza m'maka ya kuwamba (rate limits). Ngati mwamvuka kuti mwapanga sertifiketi zambiri za domain yomwezi bwino, mupanga m'maka mu kulemba pano.
Mvetsa logs ya SSL ya CyberPanel mu **Logs** > **Error Logs** kuti muli ndi mavuto pa kupanga sertifiketi.
Kuti muli ndi chinthu chosiyanasiyana (fallback), muli ndi ulemu wopanga SSL m'maka ku CyberPanel: **SSL** > **Manage SSL** > sele domain yomwezi bwino > **Issue SSL**.

## References {#domain-not-created}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
