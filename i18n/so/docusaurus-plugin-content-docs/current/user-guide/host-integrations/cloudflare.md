---
title: Isdhexgalka Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Aragtii (In-depth explanation)
Cloudflare waa shirkad weyn oo bixisa adeegga helitaanka waxyaabaha (CDN) iyo amniga, waxayna ka caawisay inay ilaaliyaan web-iyadaas waxayna si dhaqso ah u hagaajiyaan. Isdhexgalka (integration) kan wuxuu kuu oggolaanayaa maamulka domain-ka oo toos ah ee inta u dhaxaysa Ultimate Multisite iyo Cloudflare, gaar ahaan marka aad isticmaalayso subdomain multisite installation.

## Waxyaabaha La Heystay
- Abuurista automatic (automatic) ee subdomain-yada Cloudflare-ka
- Taageerada subdomain-yada la wareejiyay (Proxied subdomain support)
- Maamulka DNS record-yada
- Muujinta heer sare ah oo DNS record-yada ah ee admin-ka Ultimate Multisite

## Shuruudaha La Baahan Yahay
Waxyaabaha soo socda waa in lagu qoro `wp-config.php` faylkaaga:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Tallaabooyinka Qorsheynta (Setup Instructions)

### 1. Hel API Key-gaaga Cloudflare

1. Tag dashboard-kaaga Cloudflare-ka oo ku gasho "My Profile" (ku riix email-kaaga ee goobta sare ee dhanka midig).
2. Dooro "API Tokens" laga bilaabo menu-ga.
3. Abuur API token cusub adiga oo siinaya halkan u ogolaansho (permissions) kuwan:
   - Zone.Zone: Read (Akhris)
   - Zone.DNS: Edit (Wax ka beddel)
4. Nuqul qaadaro API token-kaaga.

### 2. Hel Zone ID-gaaga

1. Dashboard-kaaga Cloudflare, dooro domain-ka aad rabto inaad isticmaasho.
2. Zone ID-gu wuxuu siinayaa tabta "Overview", dhanka midig ee hoos ka yaalla "API".
3. Nuqul qaadaro Zone ID-gaaga.

### 3. Ku dar Constants-ka `wp-config.php`

Ku dar constants-kan `wp-config.php` faylkaaga:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Fur Isticmaalka (Enable the Integration)

1. Admin-ka WordPress-kaaga, tag Ultimate Multisite > Settings.
2. Tag tabta "Domain Mapping".
3. Hoos u soo saar ilaa aad gaarto "Host Integrations".
4. Fur isdhexgalka Cloudflare.
5. Nuqul qaadaro "Save Changes" (Wax ka beddel).

## Sidee U Shaqayso?

### Maamulka Subdomain-yada

Marka la abuuro website cusub oo ku jira subdomain multisite installation:

1. Iskuulka ayaa u diraya codsi API-ga Cloudflare si loo sameeyo diiwaangelinta CNAME oo ku saabsan subdomain-ka.
2. Subdomain-ka waxaa inta badan loo dejiyay inuu si toos ah ugu wareegayo (proxied) Cloudflare (kan ayaa la beddeli karaa filters-ka).
3. Marka website-ka la nisbo, isku-dhafka (integration) wuxuu ka saari doonaa subdomain-ka Cloudflare.

### Muujinta DNS Record-ka

Isku-dhafka wuxuu hagaajinayaa sida loo muujiyo DNS record-ka ee admin-ka Ultimate Multisite iyada oo:

1. Wuxuu si toos ah u soo qaataa DNS records-ka Cloudflare
2. Waxay muujisaa in ma la wareegayo (proxied) ama aysan la wareegin
3. Waxay muujisaa macluumaad dheeri ah ee ku saabsan DNS record-ka

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (oo hore loo yaqay "Cloudflare for SaaS") waa astaamaha Cloudflare oo u oggolaanaysa macaamiisha inay isticmaalaan domain-kooda lahayd SSL ku socda shirkaddaada multisite. Waa habka la talinaya ee lagu isticmaalo multisite-yada la xiriira domain-ka (domain-mapped) ee adeegsada Cloudflare, sababtoo ah Cloudflare wuxuu si toos ah maamulaa bixinta iyo dib-u-soo-qaabid SSL certificate-ka ee domain kasta oo gaar ah.

### Waa maxaca kala duwanaanshaha isku-dhafka standard-ka Cloudflare

| | Isku-dhafka Standard-ka | Cloudflare Custom Hostnames |
|---|---|---|
| **Ujeeddada** | Waxay si toos ah u abuureysaa DNS records-ka subdomains-ka | Waxay oggolaanaysaa domain-yada gaarka ah (mapped) iyadoo la maamulayo SSL-ka Cloudflare |
| **Wax ugu habboon** | Multisite oo ku salaysan subdomain | Multisite oo la xiriira domain-ka |
| **SSL** | Waxay si gaar ah u maamulaa | Wuxuu si toos ah u maamulaa Cloudflare |

### Sida loo dejiyo Cloudflare Custom Hostnames

1. Dashboard-ka Cloudflare ku fur, fur domain-kaaga oo fur.
2. Tag **SSL/TLS > Custom Hostnames**.
3. Add fallback origin oo si uu u tilmaamo IP-ga ama magaca server-kaaga.
4. Ultimate Multisite-ka lagu qabayo macaamiisha kasta, Cloudflare-ka ku addoon entry cusub oo ah Custom Hostname. Waxaad tani samayn kartaa si aad u automatiseeyso isticmaalaya API-ga Cloudflare.
5. Cloudflare waxay soo saartaa oo dib u cusboonaysataa TLS certificates-ka ee custom hostname kasta si toos ah marka DNS-ka macaamiisha la dirto shirkaddaada.

Si aad u hesho macluumaadka API-ga oo dhammaystiran, fiiri [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Cusboonaysiinta ereyada
Hadda, Ultimate Multisite v2.6.1-ka ka dib, waxa la tixraacayaa astaamahan **Cloudflare Custom Hostnames** dhammaan settings-ka iyo labels-ka plugin-ka. Qaybta hore waxay isticmaashay magaca "Cloudflare for SaaS", oo ah magaca badeecadda Cloudflare ee asalka ah.
:::

## Fiiro Muhiim ah

Hadda, cusboonaysiinta ugu dambeeyay ee Cloudflare-ka, waxaa la heli karaa wildcard proxying dhammaan macaamiisha. Tani waxay ka dhigan tahay in isku xirnaanta DNS-ka caadiga ah ee Cloudflare-ka ay si weyn u muhiim uma aha installation-ka multisite-ka subdomain-ka marka la barbardhigo waxyaabaha hore, sababtoo ah waxaad si fudud samayn kartaa record wildcard DNS-ka oo ku jira Cloudflare.

## Xallinta Dhibaatooyinka (Troubleshooting)

### Masalahada Xiriirka API-ga
- Hubi in token-ka API-gaagu yahay mid sax ah oo leh fursadaha loo baahan yahay.
- Hubi in Zone ID-gaagu yahay mid sax ah.
- Hubi in account-ka Cloudflare-kaagu leeyahay furaha (permissions) ee loo baahan yahay.

### Subdomain-ka Aan La Bixin
- Hubi logs-ka Ultimate Multisite-ka wax walba oo qalad ah oo ka yimid.
- Hubi in subdomain-ku aan hore u lahayn Cloudflare ku lahayn.
- Hubi in qorshaha (plan) ee Cloudflare-kaagu uu taageero tirada records DNS-ka aad samaynayso.

### Masalahyada Proxy-ga

- Haddii aad rabto inaad subdomains-ka aysan la proxy-gareyn, waxaad isticmaali kartaa filter-ka `wu_cloudflare_should_proxy`.
- Qaar ka mid ah astaamaha (features) waxay si sax ah u shaqayn karaan marka la proxy-gareeyo (tusaale, qaar ka mid ah shaqooyinka admin-ka WordPress).
- Ka raalihiin inaad isticmaasho Qawaaniinta Bogga (Page Rules) ee Cloudflare si aad u gudbi karto cache-ka bogagga admin-ka.
