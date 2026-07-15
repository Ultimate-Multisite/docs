---
title: یەکگرتووکردنی Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrationê bi Cloudways

## Pêşîtiye (Overview) {#overview}
Cloudways platformekîyek ji aliyê xwediyê hatî ye ku hûn siteyên WordPress rastkirinên xwe li ser gelek pîvakên nû bêne derxistin, wekî DigitalOcean, AWS, Google Cloud û gelekî din. Ev integrasyon bi karê şeşandina domên (domain syncing) û rænsetkirina sertifikateyên SSL ji nû ve hatî damezrandin li kêra Ultimate Multisite û Cloudways.

## Hicapên Karê (Features) {#features}
- Şeşandina awtomatî yê domên (Automatic domain syncing)
- Rænsetkirina sertifikateyên SSL (SSL certificate management)
- Pêşketin a domênyên zêde (Support for extra domains)
- Raşandina DNS ji bo sertifikateyên SSL

## Pêşrevî (Requirements) {#requirements}
Pêşê kêtînin diove li fîla `wp-config.php` yê we:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_a_cloudways_ya_we');
define('WU_CLOUDWAYS_API_KEY', 'api_key_a_we');
define('WU_CLOUDWAYS_SERVER_ID', 'id_a_server_ê_we');
define('WU_CLOUDWAYS_APP_ID', 'id_a_application_ê_we');
```

Bi rêbaz, hûn dikarin jî didef definekirin:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'list_a_domênan_bi_virgül_pêk_kirin');
```

## Rêzên Rêveberî (Setup Instructions) {#setup-instructions}

### 1. Girtina Mînakî API ya Cloudways (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. Ji bo dashboard-a Cloudways xwe login bike.
2. Rêbûn ji "Account" > "API Keys" bişîne.
3. API key vekirin heger we li dengê wê nîne.
4. Email û API key ya xwe kopîzîne.

### 2. Girtina ID-yên Server û Uygulasyon (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

1. Li dashboard-a Cloudways, ji "Servers" bişîne.
2. Serverê yê ku WordPress multisite ya we rastkirin kirine li ser biyan.
3. Server ID di URL de nêrve dikare dinî: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ji bo "Applications" bişîne û application-a WordPress yê xwe bişîne.
5. App ID di URL de nêrve dikare dinî: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Zêdekirina Kôtên (Constants) li wp-config.php {#3-add-constants-to-wp-configphp}

Kôtên lê hat ku li fîla `wp-config.php` yê we zêde bikin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ئە ئەگەر دۆمێنافەکانی دیکەی **دەرەکی** (لە دەرەوەی تۆڕی میدیاکەت) هەیە کە دەبێت هەمیشە لە لیستەکەی Cloudways بێت:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning دۆمێنافەکانی تۆڕی خۆت (wildcard) ناهێنە
`*.your-network.com` (یان هەر پترۆنێکی زیرەکی تۆڕی خۆت) لە `WU_CLOUDWAYS_EXTRA_DOMAINS` ناهێنە. بۆ ئەوەی بزانین بەهۆی ئەمە چی ڕوودەدات کە گواستنەوەی SSL تایبەت بە هەر یەکێک لە ناوچەکانی (per-tenant) دەبێت.
:::

### 4. چالاککردنی یەکگرتوو (Integration) {#4-enable-the-integration}

1. لە ئامێرەی ایڈمنتی وۆردپریسدا، بگواشبە Ultimate Multisite > Settings
2. بۆ تابلۆی "Domain Mapping" (مێژووی دۆمێنافەکان) دەربکەویت
3. بەرەو خوارەوە ببەستەرە بۆ "Host Integrations" (یەکگرتووە میزبان)
4. یەکگرتووی Cloudways چالاک بکە
5. لەسەر دڵنیایی کردنی گۆڕانکارییەکان clique "Save Changes" (گۆڕینی گۆڕانکارییەکان)

## چۆن کار دەکات؟ {#how-it-works}

### هەڵگرتنی دۆمێنافەکان (Domain Syncing) {#domain-syncing}

کاتێک یەک دۆمێناف لە Ultimate Multisite دا مێژووبوون:

1. یەکگرتووەکە هەموو دۆمێنافەکانی ئێستا کە مێژووبوون دەگەڕێتەوە
2. ئەو دۆمێنافە نوێیە بە لیستەکە زیاد دەکات (لەگەڵ وەرگرتنی www ئەگەر پێویست بێت)
3. لیستێکی تەواوە بۆ Cloudways لە ڕێگەی API دەنێرێت
4. Cloudways ئالیزەکانی دۆمێنافەکان بۆ بەرنامەی تۆ به‌روزرسانی دەکات

ئامانج: APIی Cloudways هەر جارێک پێویستی بە ناردنی لیستێکی تەواوەی دۆمێنافەکان هەیە، نەک تەنها زیادکردن یان لەناوچوون.

### بەڕێوەبردنی پڕۆتۆکۆڵی SSL (SSL Certificate Management) {#ssl-certificate-management}

پاش ئەوەی دۆمێنافەکان هەڵگرتراون:

1. یەکگرتووەکە دەبینێت کە چ دۆمێنافێک مافی DNS دروست هەیە کە ئاماژەی بە خەرجەکە دەکات
2. داواکارییەکی ناردێت بۆ Cloudways بۆ دامەزراندنی پڕۆتۆکۆڵی SSL ی Let's Encrypt بۆ ئەو دۆمێنافانە
3. Cloudways کارکردن لە دامەزراندنی و جێبەجێ کردنی پڕۆتۆکۆڵی SSL

```php
// Custom logic when checkout completes
```

Integrationu hamesha ji **standard** (non-wildcard) sertifikatên Let's Encrypt ji Cloudwaysê xwest dikir. Heger heger, heger `WU_CLOUDWAYS_EXTRA_DOMAINS` de wildcard pattern bişî ye, pirreka `*.` tê rûkirin berî xwesta SSL — ew wildcard bi xwe naxwîne. Ji bo ku ji sertifikata wildcard li Cloudways bikaribî, tu hejmara manavê wê dike, lê ev kar jî ji bo ferxandina Let's Encrypt ji bo domên custom ên hîn dikirin (li wepêjo pirreka paşê din).

## Domên Diheltirîn (Extra Domains) {#extra-domains}

Constant-a `WU_CLOUDWAYS_EXTRA_DOMAINS` getirine tu dikarin domên **dıştirin** (external) ku her dem ji li li lîstaya alias'ên aplikasyona Cloudwaysê hatin qelemandin. Ji bo vê yekê ji wezik bike:

- Domên dıştirin ku ji aliyê Ultimate Multisite ve hatine xwestin (məsəlana, siteyek taybetxweş ji hev ferxandina same aplikasyona Cloudways).
- Domênkên parke kirin an staging ku tu dixwazî li lîstaya alias'ên aplikasyonê bihin.

**Ji kerema xwe** ji bo wildcard subdomain-a résega xwe nîşan nebin (məsəlana, `*.your-network.com`). Ji bo pirreka SSL a wildcard li paşê din lê wisa jî wekî paşê din li wepêjo ez dê ji we re biaxivim.

## Girîng — Pirreka SSL a Wildcard {#important--wildcard-ssl-pitfall}

Pirreka hevpar bi rastkirina set-upê pêşvexe ye ku hûn wildcard vê wekî `*.your-network.com` ji `WU_CLOUDWAYS_EXTRA_DOMAINS` bişînin, an jî sertifikata SSL a wildcard ji Cloudways bi manavê wê li ser wê wildcard hatine nîşan biken.

**Heger tu ev kar dike, Cloudways ji bo ferxandina sertifikatên Let's Encrypt ji bo domên custom ên hîn dikirin ku Ultimate Multisite map kirin, têkîna ye.** Cloudways her dem sertifikata SSL-a aktif li ser aplikasyonê gelek ebadî, û sertifikata wildcard-a berî ku li ser aplikasyonê hewceye bû, ji bo ferxandina Let's Encrypt ji bo domên hîn dikirin ku ev integration neraxwîne.

### Set-upê SSL a Cloudways ji bo résega Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

١. لە تابلۆی **SSL Certificate**ی ئەپڵیکەیشنی Cloudways، یەک **Let's Encrypt certificate**ی ستاندارد دامەزرێنە کە تەنها `your-network.com` و `www.your-network.com` دەگرێتەوە — **نەگرێت** wildcard (زانیارییەکی گشتی).
٢. لە `WU_CLOUDWAYS_EXTRA_DOMAINS`دا `*.your-network.com` (یان هەر پترۆنی ناوچەی تایبەتی خۆت) ناهێنیت. ئەو کۆنستەرییە تەنها بۆ دۆمەینەکانی **دەرەوەی** (external) پارێزراو بێت.
٣. wildcard ی دۆمەینی بەپێی تەنها لە ئاستی **DNS** دروست بکە (ئاردی `A` بۆ `*.your-network.com` کە ئاماژەیەکی دەداتە IPی خوادەی Cloudways). ئەمەش وادەکات زیرەکی دۆمەینەکان بە شێوەیەکی ورد بگەڕێنەوە. SSL بۆ دۆمەینی تایبەت کە تۆ manually مَپ کردووە، بە شێوەیەکی ئۆتۆماتیک لەلایەن یەکگرتووییەکە (integration) بە ڕێگەی Let's Encrypt دەدرێت.

ئەگەر دۆمەینە تایبەتی تالنتەکانتان بدون SSL گیر کردووە، تابلۆی Cloudways SSLی بزانە. ئەگەر wildcard certificateێک لەوێ چالاکە، بەهێڵ بکە و یەک Let's Encrypt certificateی ستاندارد بۆ دۆمەینی سەرەکی ناوچەکە دەدرێتەوە، و هەر تۆمارێکی wildcard لە `WU_CLOUDWAYS_EXTRA_DOMAINS`دا هەڵبژێرە. پاشان domain mapping (یان چاوەڕێ بکە بۆ یەکەمێک) دەستپێکردنەوە و یەکگرتووییەکە دەست بە دروستکردنی certificateی دۆمەینەکان لەسەر بنەمای هەر دۆمەینی دووبارە دەبێت.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی API {#api-connection-issues}
- بزانە کە ئیمەیڵ و API keyی تۆ دروستن؟
- چاک بکە کە IDی خوادەت و ئەپڵیکاتەکە ڕاستن؟
- دڵنیابە کە هەژمارەکەت لە Cloudways پێویستەکان دەگرێت.

### پروبلیمات لەسەر گوازارنی SSL Certificate {#ssl-certificate-issues}

- Cloudways پێویستی بەوەیە کە دامەنانەکان تۆمارنامەی DNSی ڕاست و هەڵسوکەوتکراوەکانی بۆ خزمەتگوزاریەک دەبێت پاش ئەوەی SSL certificate دروست بکەن.
- ئەم یەکێک لە تایبەتمەندییە داتای DNSی پێش داواکردنی SSL certificateی پارێزراوەتەوە.
- ئەگەر SSL certificate دروست نەکردن، چاک بکە کە دامەنانەکان بە شێوەیەکی دروست بۆ پیت (IP address)ی خزمەتگوزارییەک دەچن.
- **دامەنانەکانی تایبەت بە هەر یەکێک لە کارمەندانی باوەڕ ناکەن و SSL نییە؟** سەیر بکە بەشی SSL Certificateی ئەپڵیکەیشنی Cloudways. ئەگەر SSL wildcard (کە بە دەستکرد دامەزرێنراوە، یان کە بۆ `*.your-network.com` دەگرێت) چالاک بێت، Cloudways SSL certificateی Let's Encrypt بۆ دامەنانەکانی تایبەت کە بە شێوەیەکی تاکەکەسی مابوونی پێشکەش ناکات. لە شوێنەکەدا بە یەکەم SSL standard (Let's Encrypt) دروست بکە کە تەنها دامەنانە سەرەکیی تۆڕەکەت دەگرێت (`your-network.com`، `www.your-network.com`) و هەر تۆمارەی wildcard لە `WU_CLOUDWAYS_EXTRA_DOMAINS` هەڵبژێرە. پاشان یەک دانووشنی دامەنان (domain mapping) دووبارە دەستپێدات (یان بۆ دانووشنی دووەم چاوەڕێ بکە) و ئەم integrationی SSL certificateی تایبەت بە هەر یەکێک لە دامەنانەکان داوا دەکات.

### دامەنانەکە زیاد نەکراوە {#domain-not-added}

- لە لاگەکانی Ultimate Multisite بۆ هەر پەیامێکی هەڵە چاک بکە.
- دڵنیابە کە دامەنانەکە پێشتر لە Cloudways زیاد نەکراوەتەوە.
- دڵنیابە پلانی Cloudways تۆڕی ئێستات پاڵپێزێت بە ژمارەی دامەنانەکان کە دەبێت زیاد بکەیت.
