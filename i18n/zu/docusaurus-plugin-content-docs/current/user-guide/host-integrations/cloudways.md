---
title: Ukuhlanganiswa ne-Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Ukuhlanganiswa kwe-Cloudways

## Uhlolojikelele {#overview}
I-Cloudways iyinkundla ye-cloud hosting ephethwe ekuvumela ukuthi ufake amasayithi e-WordPress kubahlinzeki be-cloud abahlukene njenge-DigitalOcean, AWS, Google Cloud, nokunye. Lokhu kuhlanganiswa kunika amandla ukuvumelanisa okuzenzakalelayo kwama-domain nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite ne-Cloudways.

## Izici {#features}
- Ukuvumelanisa ama-domain okuzenzakalelayo
- Ukuphathwa kwezitifiketi ze-SSL
- Ukusekelwa kwama-domain angeziwe
- Ukuqinisekisa i-DNS kwezitifiketi ze-SSL

## Izimfuneko {#requirements}
Ama-constant alandelayo kufanele achazwe efayeleni lakho le-`wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ngokuzikhethela, ungachaza futhi:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Imiyalelo Yokusetha {#setup-instructions}

### 1. Thola Imininingwane Yakho ye-Cloudways API {#1-get-your-cloudways-api-credentials}

1. Ngena ku-Cloudways Dashboard yakho
2. Iya ku-"Account" > "API Keys"
3. Khiqiza ukhiye we-API uma ungenawo vele
4. Kopisha i-imeyili yakho nokhiye we-API

### 2. Thola ama-ID Eseva Ne-Application {#2-get-your-server-and-application-ids}

1. Ku-Cloudways Dashboard yakho, iya ku-"Servers"
2. Khetha iseva lapho i-WordPress multisite yakho isingathwe khona
3. I-Server ID ibonakala ku-URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Iya ku-"Applications" bese ukhetha i-WordPress application yakho
5. I-App ID ibonakala ku-URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Engeza Ama-constant ku-wp-config.php {#3-add-constants-to-wp-configphp}

Engeza ama-constant alandelayo efayeleni lakho le-`wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Uma unama-domain **angaphandle** angeziwe (ngaphandle kwenethiwekhi yakho ye-multisite) okufanele ahlale egcinwe ohlwini lwama-alias e-Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ungafaki i-wildcard yenethiwekhi yakho
**Ungayifaki** i-`*.your-network.com` (noma iyiphi iphethini ye-subdomain yenethiwekhi yakho) ku-
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Bheka [Okubalulekile — ugibe lwe-wildcard SSL](#important--wildcard-ssl-pitfall)
ngezansi ukuze ubone ukuthi kungani lokhu kuvimbela ukukhishwa kwezitifiketi ze-SSL zomqashi ngamunye.
:::

### 4. Nika Amandla Ukuhlanganiswa {#4-enable-the-integration}

1. Ku-WordPress admin yakho, iya ku-Ultimate Multisite > Settings
2. Zulazula uye kuthebhu ethi "Domain Mapping"
3. Skrolela phansi ku-"Host Integrations"
4. Nika amandla ukuhlanganiswa kwe-Cloudways
5. Chofoza "Save Changes"

## Kusebenza Kanjani {#how-it-works}

### Ukuvumelanisa Ama-domain {#domain-syncing}

Lapho i-domain imappwa ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthola wonke ama-domain amappwe njengamanje
2. Kwengeza i-domain entsha ohlwini (kanye nenguqulo ye-www uma kusebenza)
3. Kuthumela uhlu oluphelele ku-Cloudways nge-API
4. I-Cloudways ibuyekeza ama-domain aliases e-application yakho

Qaphela: I-Cloudways API idinga ukuthumela uhlu oluphelele lwama-domain isikhathi ngasinye, hhayi nje ukwengeza noma ukususa ama-domain ngamanye.

### Ukuphathwa Kwezitifiketi ze-SSL {#ssl-certificate-management}

Ngemva kokuthi ama-domain evumelanisiwe:

1. Ukuhlanganiswa kuhlola ukuthi yimaphi ama-domain anama-DNS records asebenzayo akhomba kuseva yakho
2. Kuthumela isicelo ku-Cloudways sokufaka izitifiketi ze-Let's Encrypt SSL zalawo ma-domain
3. I-Cloudways iphatha ukukhishwa nokufakwa kwesitifiketi se-SSL

Ukuhlanganiswa kuhlala kucela izitifiketi ze-Let's Encrypt **ezijwayelekile** (ezingeyona i-wildcard) ku-
Cloudways. Uma iphethini ye-wildcard inikezwa ku-`WU_CLOUDWAYS_EXTRA_DOMAINS`, okuholayo
`*.` kuyasuswa ngaphambi kwesicelo se-SSL — i-wildcard ngokwayo ayifakwa yilokhu
kuhlanganiswa. Ukuze usebenzise isitifiketi se-wildcard ku-Cloudways kuzodingeka usifake
ngesandla, kodwa ukwenza kanjalo kuvimbela ukukhishwa kwe-Let's Encrypt kwe-domain ngayinye kuma-domain angokwezifiso amappwe
(bheka ugibe ngezansi).

## Ama-domain Angeziwe {#extra-domains}

I-constant ethi `WU_CLOUDWAYS_EXTRA_DOMAINS` ikuvumela ukuthi ucacise ama-domain **angaphandle**
angeziwe okufanele ahlale egcinwe ohlwini lwama-alias e-application ye-Cloudways. Yisebenzisele:

- Ama-domain angaphandle angaphathwa yi-Ultimate Multisite (isb. isayithi lokumaketha elihlukile elabelana nge-application efanayo ye-Cloudways)
- Ama-domain apakiwe noma e-staging ofuna agcinwe ohlwini lwama-alias e-application

**Ungayisebenzisi** le constant ku-wildcard ye-subdomain yenethiwekhi yakho
(isb. `*.your-network.com`). Bheka ugibe lwe-wildcard SSL ngezansi.

## Okubalulekile — Ugibe lwe-Wildcard SSL {#important--wildcard-ssl-pitfall}

Iphutha elivamile lapho kulandelwa ukusetha okuzenzakalelayo kwe-Cloudways ukwengeza i-wildcard efana ne-
`*.your-network.com` ku-`WU_CLOUDWAYS_EXTRA_DOMAINS`, noma ukufaka ngesandla isitifiketi se-Cloudways
wildcard SSL saleyo wildcard.

**Uma wenza lokhu, i-Cloudways izokwenqaba ukukhipha izitifiketi ze-Let's Encrypt zama-domain
angokwezifiso omqashi ngamunye amappwa yi-Ultimate Multisite.** I-Cloudways ishintsha isitifiketi se-
SSL esisebenzayo ku-application isikhathi ngasinye, futhi isitifiketi se-wildcard esivele sikhona ku-
application sivimbela ukukhishwa kwe-Let's Encrypt kwe-domain ngayinye okuncike kukho ukuhlanganiswa.

### Ukusetha kwe-Cloudways SSL okunconyiwe kwenethiwekhi ye-Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Kuthebhu ye-**SSL Certificate** ye-application ye-Cloudways, faka **isitifiketi se-Let's Encrypt
   esijwayelekile** esimboza kuphela `your-network.com` kanye ne-`www.your-network.com`
   — **hhayi** i-wildcard.
2. **Ungafaki** i-`*.your-network.com` (noma iyiphi iphethini ye-subdomain yenethiwekhi yakho) ku-
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Gcina leyo constant yama-domain **angaphandle** kuphela.
3. Dala i-wildcard ye-subdomain yomqashi ngamunye ezingeni le-**DNS** kuphela (i-`A` record ye-
   `*.your-network.com` ekhomba ku-IP yeseva yakho ye-Cloudways) ukuze amasayithi angaphansi axazululeke. I-SSL
   yama-domain angokwezifiso amappwe ngamanye bese ikhishwa ngokuzenzakalelayo ukuhlanganiswa
   nge-Let's Encrypt.

Uma ama-domain angokwezifiso abaqashi bakho ebambekile engenayo i-SSL, hlola ithebhu ye-SSL ye-Cloudways. Uma
isitifiketi se-wildcard sisebenza lapho, sisuse, ukhiphe kabusha isitifiketi esijwayelekile se-Let's Encrypt
se-domain yenethiwekhi enkulu kuphela, bese ususa noma yikuphi okufakiwe kwe-wildcard ku-
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Bese uqalisa kabusha i-domain mapping (noma ulinde okulandelayo)
futhi ukuhlanganiswa kuzoqala ukukhipha izitifiketi ze-domain ngayinye futhi.

## Ukuxazulula izinkinga {#troubleshooting}

### Izinkinga zokuxhumeka kwe-API {#api-connection-issues}
- Qinisekisa ukuthi i-imeyili yakho ne-API key yakho kulungile
- Hlola ukuthi ama-ID eseva nawesicelo akho alungile
- Qinisekisa ukuthi i-Account yakho ye-Cloudways inezimvume ezidingekayo

### Izinkinga zezitifiketi ze-SSL {#ssl-certificate-issues}
- I-Cloudways idinga ukuthi ama-domain abe namarekhodi e-DNS avumelekile akhomba kuseva yakho ngaphambi kokukhipha izitifiketi ze-SSL
- Ukuhlanganiswa kuqinisekisa amarekhodi e-DNS ngaphambi kokucela izitifiketi ze-SSL
- Uma izitifiketi ze-SSL zingakhishwa, hlola ukuthi ama-domain akho akhomba kahle ekhelini le-IP leseva yakho
- **Ama-domain angokwezifiso omqashi ngamunye abambekile engenayo i-SSL?** Hlola ithebhu ye-SSL Certificate yesicelo se-Cloudways. Uma isitifiketi se-wildcard (esifakwe ngesandla, noma esimboza `*.your-network.com`) sisebenza, i-Cloudways ngeke ikhiphe izitifiketi ze-Let's Encrypt zama-domain angokwezifiso amakwe ngayinye. Sifake esikhundleni ngesitifiketi esijwayelekile se-Let's Encrypt esimboza kuphela i-domain yenethiwekhi enkulu (`your-network.com`, `www.your-network.com`) bese ususa noma yikuphi okufakiwe kwe-wildcard ku-`WU_CLOUDWAYS_EXTRA_DOMAINS`. Bese uqalisa kabusha i-domain mapping (noma ulinde okulandelayo) futhi ukuhlanganiswa kuzocela izitifiketi ze-domain ngayinye.

### I-domain Ayengeziwe {#domain-not-added}
- Hlola ama-log e-Ultimate Multisite ukuze uthole noma yimiphi imilayezo yephutha
- Qinisekisa ukuthi i-domain ayikangezwa kakade ku-Cloudways
- Qinisekisa ukuthi i-plan yakho ye-Cloudways isekela inani lama-domain owangezayo
