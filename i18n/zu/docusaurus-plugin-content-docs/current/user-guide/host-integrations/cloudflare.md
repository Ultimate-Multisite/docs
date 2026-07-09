---
title: Ukuhlanganiswa kwe-Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Ukuhlanganiswa kwe-Cloudflare {#cloudflare-integration}

## Ukubuka konke {#overview}
I-Cloudflare ingumhlinzeki ohamba phambili wenethiwekhi yokulethwa kokuqukethwe (CDN) nokuphepha osiza ukuvikela nokusheshisa amawebhusayithi. Lokhu kuhlanganiswa kunika amandla ukuphathwa kwezizinda ngokuzenzakalelayo phakathi kwe-Ultimate Multisite ne-Cloudflare, ikakhulukazi ekufakweni kwe-subdomain multisite.

## Izici {#features}
- Ukudalwa kwe-subdomain ngokuzenzakalelayo ku-Cloudflare
- Ukusekelwa kwe-subdomain eyenziwe i-proxy
- Ukuphathwa kwamarekhodi e-DNS
- Ukuboniswa okuthuthukisiwe kwamarekhodi e-DNS ku-admin ye-Ultimate Multisite

## Izimfuneko {#requirements}
Ama-constants alandelayo kufanele achazwe efayeleni lakho le-`wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Imiyalelo Yokusetha {#setup-instructions}

### 1. Thola i-Cloudflare API Key yakho {#1-get-your-cloudflare-api-key}

1. Ngena ku-dashboard yakho ye-Cloudflare
2. Iya ku-"My Profile" (chofoza ku-imeyili yakho ekhoneni eliphezulu kwesokudla)
3. Khetha "API Tokens" kumenyu
4. Dala i-API token entsha enezimvume ezilandelayo:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopisha i-API token yakho

### 2. Thola i-Zone ID Yakho {#2-get-your-zone-id}

1. Ku-dashboard yakho ye-Cloudflare, khetha isizinda ofuna ukusisebenzisa
2. I-Zone ID ibonakala kuthebhu ethi "Overview", kubha eseceleni yesokudla ngaphansi kokuthi "API"
3. Kopisha i-Zone ID

### 3. Engeza Ama-constants ku-wp-config.php {#3-add-constants-to-wp-configphp}

Engeza ama-constants alandelayo efayeleni lakho le-`wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Nika amandla Ukuhlanganiswa {#4-enable-the-integration}

1. Ku-admin yakho ye-WordPress, iya ku-Ultimate Multisite > Settings
2. Zulazula uye kuthebhu ethi "Domain Mapping"
3. Skrolela phansi ku-"Host Integrations"
4. Nika amandla ukuhlanganiswa kwe-Cloudflare
5. Chofoza "Save Changes"

## Indlela Okusebenza Ngayo {#how-it-works}

### Ukuphathwa kwe-Subdomain {#subdomain-management}

Lapho isayithi elisha lidalwa ekufakweni kwe-subdomain multisite:

1. Ukuhlanganiswa kuthumela isicelo ku-API ye-Cloudflare ukuze kwengezwe irekhodi le-CNAME le-subdomain
2. I-subdomain ilungiselelwa ukuthi yenziwe i-proxy nge-Cloudflare ngokuzenzakalelayo (lokhu kungashintshwa ngezihlungi)
3. Lapho isayithi lisuswa, ukuhlanganiswa kuzosusa i-subdomain ku-Cloudflare

### Ukuboniswa Kwerekhodi le-DNS {#dns-record-display}

Ukuhlanganiswa kuthuthukisa ukuboniswa kwamarekhodi e-DNS ku-admin ye-Ultimate Multisite ngokuthi:

1. Kulande amarekhodi e-DNS ngokuqondile ku-Cloudflare
2. Kubonise ukuthi amarekhodi enziwe i-proxy noma cha
3. Kubonise ulwazi olwengeziwe mayelana namarekhodi e-DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ngaphambilini ebibizwa ngokuthi "Cloudflare for SaaS") iyisici se-Cloudflare esivumela amakhasimende akho ukuthi asebenzise izizinda zawo nge-SSL kunethiwekhi yakho ye-multisite. Lena indlela enconyiwe yokufakwa kwe-multisite enezizinda ezimephiwe esebenzisa i-Cloudflare, ngoba i-Cloudflare ilawula ukukhishwa nokuvuselelwa kwesitifiketi se-SSL sesizinda sangokwezifiso ngasinye ngokuzenzakalelayo.

### Indlela ehluke ngayo ekuhlanganisweni okujwayelekile kwe-Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Ukuhlanganiswa okujwayelekile | Cloudflare Custom Hostnames |
|---|---|---|
| **Injongo** | Kudala ngokuzenzakalelayo amarekhodi e-DNS ama-subdomain | Kunika amandla izizinda zangokwezifiso (ezimephiwe) nge-SSL elawulwa yi-Cloudflare |
| **Kulungele kakhulu** | I-subdomain multisite | I-multisite enezizinda ezimephiwe |
| **SSL** | Kusingathwa ngokwehlukana | Kulawulwa yi-Cloudflare ngokuzenzakalelayo |

### Ukusetha i-Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Ku-dashboard yakho ye-Cloudflare, vula i-zone yesizinda sakho esiyinhloko.
2. Iya ku-**SSL/TLS > Custom Hostnames**.
3. Engeza i-fallback origin ekhomba ku-IP noma ku-hostname yeseva yakho.
4. Esizindeni sekhasimende ngasinye esimephiwe ku-Ultimate Multisite, engeza ukufakwa kwe-Custom Hostname ku-Cloudflare. Ungazenzakalela lesi sinyathelo usebenzisa i-Cloudflare API.
5. I-Cloudflare ikhipha futhi ivuselele izitifiketi ze-TLS ze-custom hostname ngayinye ngokuzenzakalelayo lapho i-DNS yekhasimende isikhonjiswe kunethiwekhi yakho.

Ukuze uthole ireferensi egcwele ye-API, bona [imibhalo ye-Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Isibuyekezo samagama asetshenziswayo
Kusukela ku-Ultimate Multisite v2.6.1, lesi sici sibizwa ngokuthi **Cloudflare Custom Hostnames** kuzo zonke izilungiselelo namalebula e-plugin. Izinguqulo zangaphambilini zasebenzisa igama elithi "Cloudflare for SaaS", okuyigama lomkhiqizo oyisisekelo we-Cloudflare.
:::

## Amanothi Abalulekile {#important-notes}

Kusukela ezibuyekezweni zakamuva ze-Cloudflare, i-wildcard proxying manje isiyatholakala kuwo wonke amakhasimende. Lokhu kusho ukuthi ukuhlanganiswa okujwayelekile kwe-Cloudflare DNS akusabalulekile kakhulu ekufakweni kwe-subdomain multisite njengoba kwakunjalo ngaphambili, ngoba ungavele usethe irekhodi le-wildcard DNS ku-Cloudflare.

## Ukuxazulula Izinkinga {#troubleshooting}

### Izinkinga Zokuxhumeka kwe-API {#api-connection-issues}
- Qinisekisa ukuthi i-API token yakho ilungile futhi inezimvume ezidingekayo
- Hlola ukuthi i-Zone ID yakho ilungile
- Qinisekisa ukuthi i-Account yakho ye-Cloudflare inezimvume ezidingekayo

### I-Subdomain Ayengeziwe {#subdomain-not-added}
- Hlola ama-log e-Ultimate Multisite ukuze ubone noma yimiphi imiyalezo yamaphutha
- Qinisekisa ukuthi i-subdomain ayikangezwa kakade ku-Cloudflare
- Qinisekisa ukuthi i-plan yakho ye-Cloudflare isekela inani lamarekhodi e-DNS owadalayo

### Izinkinga ze-Proxying {#proxying-issues}
- Uma ungafuni ama-subdomain enziwe i-proxy, ungasebenzisa isihlungi se-`wu_cloudflare_should_proxy`
- Ezinye izici zingase zingasebenzi kahle lapho zenziwe i-proxy (isb., imisebenzi ethile ye-admin ye-WordPress)
- Cabanga ukusebenzisa ama-Page Rules e-Cloudflare ukuze udlule i-cache yamakhasi e-admin
