---
title: Ujumuishaji wa Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Ujumuishaji wa Cloudflare

## Muhtasari
Cloudflare ni mtandao unaoongoza wa uwasilishaji wa maudhui (CDN) na mtoa huduma za usalama unaosaidia kulinda na kuharakisha tovuti. Ujumuishaji huu unawezesha usimamizi wa kiotomatiki wa domain kati ya Ultimate Multisite na Cloudflare, hasa kwa usakinishaji wa multisite za subdomain.

## Vipengele
- Uundaji wa kiotomatiki wa subdomain katika Cloudflare
- Usaidizi wa subdomain zilizowekwa proxy
- Usimamizi wa rekodi za DNS
- Uonyeshaji ulioboreshwa wa rekodi za DNS katika usimamizi wa Ultimate Multisite

## Mahitaji
Constants zifuatazo lazima zifafanuliwe katika faili yako ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Maelekezo ya Usanidi

### 1. Pata Cloudflare API Key Yako

1. Ingia kwenye Cloudflare Dashboard yako
2. Nenda kwenye "Wasifu Wangu" (bofya barua pepe yako kwenye kona ya juu kulia)
3. Chagua "API Tokens" kutoka kwenye menyu
4. Unda tokeni mpya ya API yenye ruhusa zifuatazo:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Nakili tokeni yako ya API

### 2. Pata Zone ID Yako

1. Katika Cloudflare Dashboard yako, chagua domain unayotaka kutumia
2. Zone ID inaonekana kwenye kichupo cha "Muhtasari", kwenye utepe wa kulia chini ya "API"
3. Nakili Zone ID

### 3. Ongeza Constants kwenye wp-config.php

Ongeza constants zifuatazo kwenye faili yako ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Washa Ujumuishaji

1. Katika usimamizi wako wa WordPress, nenda kwenye Ultimate Multisite > Mipangilio
2. Nenda kwenye kichupo cha "Ulinganishaji wa Domain"
3. Sogeza chini hadi "Ujumuishaji wa Host"
4. Washa ujumuishaji wa Cloudflare
5. Bofya "Hifadhi Mabadiliko"

## Jinsi Inavyofanya Kazi

### Usimamizi wa Subdomain

Tovuti mpya inapoundwa katika usakinishaji wa multisite wa subdomain:

1. Ujumuishaji hutuma ombi kwa API ya Cloudflare ili kuongeza rekodi ya CNAME kwa subdomain
2. Subdomain husanidiwa kuwekwa proxy kupitia Cloudflare kwa chaguo-msingi (hili linaweza kubadilishwa kwa filters)
3. Tovuti inapofutwa, ujumuishaji utaondoa subdomain kutoka Cloudflare

### Uonyeshaji wa Rekodi za DNS

Ujumuishaji huboresha uonyeshaji wa rekodi za DNS katika usimamizi wa Ultimate Multisite kwa:

1. Kuchukua rekodi za DNS moja kwa moja kutoka Cloudflare
2. Kuonyesha ikiwa rekodi zimewekwa proxy au la
3. Kuonyesha taarifa za ziada kuhusu rekodi za DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (zamani iliitwa "Cloudflare for SaaS") ni kipengele cha Cloudflare kinachowaruhusu wateja wako kutumia domain zao wenyewe zenye SSL kwenye mtandao wako wa multisite. Ndiyo mbinu inayopendekezwa kwa usakinishaji wa multisite wenye domain zilizolinganishwa unaotumia Cloudflare, kwa sababu Cloudflare husimamia utoaji na usasishaji wa cheti cha SSL kwa kila custom domain kiotomatiki.

### Jinsi inavyotofautiana na ujumuishaji wa kawaida wa Cloudflare

| | Ujumuishaji wa kawaida | Cloudflare Custom Hostnames |
|---|---|---|
| **Madhumuni** | Huunda kiotomatiki rekodi za DNS kwa subdomain | Huwezesha domain maalum (zilizolinganishwa) zenye SSL inayosimamiwa na Cloudflare |
| **Inafaa zaidi kwa** | Multisite ya subdomain | Multisite yenye domain zilizolinganishwa |
| **SSL** | Hushughulikiwa kando | Husimamiwa na Cloudflare kiotomatiki |

### Kusanidi Cloudflare Custom Hostnames

1. Katika Cloudflare Dashboard yako, fungua zone ya domain yako kuu.
2. Nenda kwenye **SSL/TLS > Custom Hostnames**.
3. Ongeza fallback origin inayoelekeza kwenye IP ya seva yako au hostname.
4. Kwa kila domain ya mteja iliyolinganishwa katika Ultimate Multisite, ongeza ingizo la Custom Hostname katika Cloudflare. Unaweza kuendesha hatua hii kiotomatiki kwa kutumia Cloudflare API.
5. Cloudflare hutoa na kusasisha vyeti vya TLS kwa kila custom hostname kiotomatiki mara DNS ya mteja inapoelekezwa kwenye mtandao wako.

Kwa rejeleo kamili la API, tazama [nyaraka za Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Sasisho la istilahi
Kuanzia Ultimate Multisite v2.6.1, kipengele hiki kinarejelewa kama **Cloudflare Custom Hostnames** katika mipangilio na lebo zote za plugin. Matoleo ya awali yalitumia jina "Cloudflare for SaaS", ambalo ndilo jina la bidhaa ya msingi ya Cloudflare.
:::

## Vidokezo Muhimu

Kutokana na masasisho ya hivi karibuni ya Cloudflare, wildcard proxying sasa inapatikana kwa wateja wote. Hii inamaanisha kuwa ujumuishaji wa kawaida wa Cloudflare DNS si muhimu sana kwa usakinishaji wa multisite za subdomain kama ilivyokuwa awali, kwa kuwa unaweza tu kusanidi rekodi ya wildcard DNS katika Cloudflare.

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Thibitisha kuwa tokeni yako ya API ni sahihi na ina ruhusa zinazohitajika
- Hakikisha kuwa Zone ID yako ni sahihi
- Hakikisha kuwa Account yako ya Cloudflare ina ruhusa zinazohitajika

### Subdomain Haijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Thibitisha kuwa subdomain haijaongezwa tayari kwenye Cloudflare
- Hakikisha kuwa mpango wako wa Cloudflare unaauni idadi ya rekodi za DNS unazounda

### Matatizo ya Proxying
- Ikiwa hutaki subdomain ziwekwe proxy, unaweza kutumia filter ya `wu_cloudflare_should_proxy`
- Baadhi ya vipengele huenda visifanye kazi vizuri vikiwa vimewekwa proxy (mfano, baadhi ya kazi za usimamizi wa WordPress)
- Fikiria kutumia Page Rules za Cloudflare kupitisha cache kwa kurasa za usimamizi
