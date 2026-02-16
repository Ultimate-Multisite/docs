---
title: Ujumuishaji wa Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Kuunganishwa na Cloudflare

## Muhtasari
Cloudflare ni mtandao wa usambazaji wa maudhui (CDN) unaoongoza na mtoa huduma za usalama unaosaidia kulinda na kuharakisha tovuti. Kuunganishwa huku kunawezesha usimamizi wa moja kwa moja wa vikoa kati ya Ultimate Multisite na Cloudflare, hasa kwa usakinishaji wa multisite wa subdomain.

## Vipengele
- Uundaji wa moja kwa moja wa subdomain katika Cloudflare
- Msaada wa subdomain zinazopitia proxy
- Usimamizi wa rekodi za DNS
- Uonyeshaji ulioimarishwa wa rekodi za DNS katika admin ya Ultimate Multisite

## Mahitaji
Vigezo vifuatavyo lazima vifafanuliwe katika faili yako ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Maelekezo ya Usanidi

### 1. Pata API Key Yako ya Cloudflare

1. Ingia kwenye dashibodi yako ya Cloudflare
2. Nenda "My Profile" (bofya barua pepe yako kwenye kona ya juu kulia)
3. Chagua "API Tokens" kutoka kwenye menyu
4. Unda API token mpya yenye ruhusa zifuatazo:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Nakili API token yako

### 2. Pata Zone ID Yako

1. Katika dashibodi yako ya Cloudflare, chagua kikoa unachotaka kutumia
2. Zone ID inaonekana katika kichupo cha "Overview", kwenye upau wa pembeni kulia chini ya "API"
3. Nakili Zone ID

### 3. Ongeza Vigezo kwenye wp-config.php

Ongeza vigezo vifuatavyo kwenye faili yako ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Wezesha Kuunganishwa

1. Katika admin yako ya WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Wezesha kuunganishwa na Cloudflare
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

### Usimamizi wa Subdomain

Wakati tovuti mpya inaundwa katika usakinishaji wa multisite wa subdomain:

1. Kuunganishwa kunatuma ombi kwa API ya Cloudflare kuongeza rekodi ya CNAME kwa subdomain
2. Subdomain inasanidiwa kupitia proxy ya Cloudflare kwa chaguo-msingi (hii inaweza kubadilishwa na filters)
3. Wakati tovuti inafutwa, kuunganishwa kutaondoa subdomain kutoka Cloudflare

### Uonyeshaji wa Rekodi za DNS

Kuunganishwa kunaboresha uonyeshaji wa rekodi za DNS katika admin ya Ultimate Multisite kwa:

1. Kuleta rekodi za DNS moja kwa moja kutoka Cloudflare
2. Kuonyesha kama rekodi zinapitia proxy au la
3. Kuonyesha maelezo ya ziada kuhusu rekodi za DNS

## Mambo Muhimu ya Kuzingatia

Kulingana na masasisho ya hivi karibuni ya Cloudflare, proxy ya wildcard sasa inapatikana kwa wateja wote. Hii inamaanisha kuwa kuunganishwa na Cloudflare si muhimu sana kwa usakinishaji wa multisite wa subdomain kama ilivyokuwa awali, kwani unaweza tu kusanidi rekodi ya DNS ya wildcard katika Cloudflare.

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Thibitisha kuwa API token yako ni sahihi na ina ruhusa zinazohitajika
- Hakikisha kuwa Zone ID yako ni sahihi
- Hakikisha kuwa akaunti yako ya Cloudflare ina ruhusa zinazohitajika

### Subdomain Haijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Thibitisha kuwa subdomain haijaongezwa tayari kwenye Cloudflare
- Hakikisha kuwa mpango wako wa Cloudflare unasaidia idadi ya rekodi za DNS unazozunda

### Matatizo ya Proxy
- Ikiwa hutaki subdomain zipitie proxy, unaweza kutumia filter ya `wu_cloudflare_should_proxy`
- Baadhi ya vipengele huenda visifanye kazi vizuri vinapopitia proxy (k.m., kazi fulani za admin ya WordPress)
- Fikiria kutumia Page Rules za Cloudflare kupuuza cache kwa kurasa za admin
