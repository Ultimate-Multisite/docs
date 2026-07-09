---
title: Udibaniso lweCloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Uhlanganiso lwe-Cloudflare

## Ushwankathelo
I-Cloudflare yinethiwekhi ekhokelayo yokuhanjiswa komxholo (CDN) kunye nomboneleli wokhuseleko onceda ukukhusela nokukhawulezisa iiwebhusayithi. Olu hlanganiso luvumela ulawulo oluzenzekelayo lwe-domain phakathi kwe-Ultimate Multisite ne-Cloudflare, ngakumbi kufakelo lwe-multisite yee-subdomain.

## Iimpawu
- Ukwenziwa okuzenzekelayo kwe-subdomain kwi-Cloudflare
- Inkxaso yee-subdomain ezine-proxy
- Ulawulo lweerekhodi ze-DNS
- Umboniso ophuculweyo weerekhodi ze-DNS kwi-admin ye-Ultimate Multisite

## Iimfuno
Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Imiyalelo Yokumisela

### 1. Fumana i-Cloudflare API Key Yakho

1. Ngena kwi-dashboard yakho ye-Cloudflare
2. Yiya ku-"My Profile" (cofa kwi-imeyile yakho kwikona ephezulu ngasekunene)
3. Khetha "API Tokens" kwimenyu
4. Yenza i-API token entsha eneemvume ezilandelayo:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Khuphela i-API token yakho

### 2. Fumana i-Zone ID Yakho

1. Kwi-dashboard yakho ye-Cloudflare, khetha i-domain ofuna ukuyisebenzisa
2. I-Zone ID iyabonakala kwithebhu ethi "Overview", kwibar esecaleni lasekunene phantsi kwe-"API"
3. Khuphela i-Zone ID

### 3. Yongeza ii-Constants ku-wp-config.php

Yongeza ezi constants zilandelayo kwifayile yakho `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Yenza Uhlanganiso Lusebenze

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrolela ezantsi ku-"Host Integrations"
4. Yenza uhlanganiso lwe-Cloudflare lusebenze
5. Cofa "Save Changes"

## Indlela Esebenza Ngayo

### Ulawulo lwe-Subdomain

Xa kusenziwa isayithi entsha kufakelo lwe-multisite yee-subdomain:

1. Uhlanganiso luthumela isicelo kwi-API ye-Cloudflare ukongeza irekhodi le-CNAME le-subdomain
2. I-subdomain imiselwa ukuba idlule nge-proxy ye-Cloudflare ngokwendalo (oku kungatshintshwa ngeefilter)
3. Xa isayithi icinyiwe, uhlanganiso luya kususa i-subdomain kwi-Cloudflare

### Umboniso Weerekhodi ze-DNS

Uhlanganiso luphucula umboniso weerekhodi ze-DNS kwi-admin ye-Ultimate Multisite ngokuthi:

1. Luthathe iirekhodi ze-DNS ngqo kwi-Cloudflare
2. Lubonise ukuba iirekhodi zidlula nge-proxy okanye hayi
3. Lubonise ulwazi olongezelelweyo malunga neerekhodi ze-DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (eyayibizwa ngaphambili ngokuba "Cloudflare for SaaS") luphawu lwe-Cloudflare oluvumela abathengi bakho ukuba basebenzise ii-domain zabo nge-SSL kwinethiwekhi yakho ye-multisite. Yindlela ecetyiswayo kufakelo lwe-multisite olunemapping yee-domain olusebenzisa i-Cloudflare, kuba i-Cloudflare ilawula ukukhutshwa nokuhlaziywa kwesatifikethi se-SSL se-domain nganye yesiko ngokuzenzekelayo.

### Indlela eyahlukileyo ngayo kuhlanganiso oluqhelekileyo lwe-Cloudflare

| | Uhlanganiso oluqhelekileyo | Cloudflare Custom Hostnames |
|---|---|---|
| **Injongo** | Yenza ngokuzenzekelayo iirekhodi ze-DNS zee-subdomain | Ivumela ii-domain zesiko (ezimaphwe) nge-SSL elawulwa yi-Cloudflare |
| **Ilungele** | I-multisite yee-subdomain | I-multisite ene-domain mapping |
| **SSL** | Iphathwa ngokwahlukeneyo | Ilawulwa yi-Cloudflare ngokuzenzekelayo |

### Ukumisela i-Cloudflare Custom Hostnames

1. Kwi-dashboard yakho ye-Cloudflare, vula i-zone ye-domain yakho ephambili.
2. Yiya ku-**SSL/TLS > Custom Hostnames**.
3. Yongeza i-fallback origin ekhomba kwi-IP okanye hostname yeseva yakho.
4. Kwi-domain nganye yomthengi emaphwe kwi-Ultimate Multisite, yongeza ungeniso lwe-Custom Hostname kwi-Cloudflare. Ungalenza eli nyathelo ngokuzenzekelayo usebenzisa i-Cloudflare API.
5. I-Cloudflare ikhupha kwaye ihlaziye izatifikethi ze-TLS ze-hostname nganye yesiko ngokuzenzekelayo xa i-DNS yomthengi sele ikhomba kwinethiwekhi yakho.

Ngereferensi epheleleyo ye-API, bona [amaxwebhu e-Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Uhlaziyo lwesigama
Ukusukela kwi-Ultimate Multisite v2.6.1, olu phawu lubhekiswa kulo njenge **Cloudflare Custom Hostnames** kuzo zonke iisetingi neelebhile ze-plugin. Iinguqulelo zangaphambili zasebenzisa igama "Cloudflare for SaaS", eliligama lemveliso ye-Cloudflare engaphantsi kwalo.
:::

## Amanqaku Abalulekileyo

Ukusukela kuhlaziyo lwakutsha nje lwe-Cloudflare, i-wildcard proxying ngoku iyafumaneka kubo bonke abathengi. Oku kuthetha ukuba uhlanganiso oluqhelekileyo lwe-Cloudflare DNS alubalulekanga kakhulu kufakelo lwe-multisite yee-subdomain njengangaphambili, kuba unokumisela nje irekhodi le-wildcard DNS kwi-Cloudflare.

## Ukusombulula Iingxaki

### Iingxaki zoQhagamshelo lwe-API
- Qinisekisa ukuba i-API token yakho ichanekile kwaye ineemvume eziyimfuneko
- Jonga ukuba i-Zone ID yakho ichanekile
- Qinisekisa ukuba i-Cloudflare account yakho ineemvume eziyimfuneko

### I-Subdomain Ayifakwanga
- Jonga iilog ze-Ultimate Multisite ukuze ubone nayiphi na imiyalezo yeempazamo
- Qinisekisa ukuba i-subdomain ayikafakwa sele kwi-Cloudflare
- Qinisekisa ukuba i-Cloudflare plan yakho ixhasa inani leerekhodi ze-DNS ozenzayo

### Iingxaki ze-Proxying
- Ukuba awufuni ukuba ii-subdomain zidlule nge-proxy, ungasebenzisa ifilter `wu_cloudflare_should_proxy`
- Ezinye iimpawu zisenokungasebenzi kakuhle xa zidlula nge-proxy (umz., imisebenzi ethile ye-admin ye-WordPress)
- Cinga ukusebenzisa i-Page Rules ye-Cloudflare ukutsiba i-cache kumaphepha e-admin
