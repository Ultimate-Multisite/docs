---
title: Boresha Muunganisho wa Paneli ya Kudhibiti
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Kuunganisha na Enhance Control Panel

## Muhtasari
Enhance ni paneli ya kisasa ya kudhibiti ambayo inatoa uwezo wa kiotomatiki wa kusimamia na kudhibiti seva ya wavuti. Muunganiko huu unawezesha ulandanishaji wa kiotomatiki wa kikoa na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na Enhance Control Panel.

**Majadiliano Yanayohusiana:** Tazama [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) kwa vidokezo vya jamii na maelezo zaidi.

## Vipengele
- Ulandanishaji wa kiotomatiki wa kikoa wakati kikoa kinapounganishwa kwenye Ultimate Multisite
- Utoaji wa kiotomatiki wa cheti cha SSL kupitia LetsEncrypt wakati DNS inaposuluhishwa
- Msaada wa subdomain kwa mitandao inayofanya kazi katika hali ya subdomain
- Kuondoa kikoa wakati ramani zinapofutwa
- Upimaji wa muunganisho ili kuthibitisha vithibitisho vya API

## Mahitaji

### Mahitaji ya Mfumo
- Enhance Control Panel imewekwa na inaweza kufikiwa
- Usakinishaji wa WordPress Multisite unaohifadhiwa au kuunganishwa na seva ya Enhance
- Seva ya wavuti ya Apache (Enhance kwa sasa inasaidia mipangilio ya Apache; LiteSpeed Enterprise inapatikana kwa bei nafuu)

### Ufikiaji wa API
Lazima uwe na ufikiaji wa msimamizi kwenye Enhance Control Panel ili kuunda tokeni za API.

## Kupata Vithibitisho Vyako vya API

### 1. Unda Tokeni ya API

1. Ingia kwenye Enhance Control Panel yako kama msimamizi
2. Bofya **Settings** kwenye menyu ya urambazaji
3. Nenda kwenye **Access Tokens**
4. Bofya **Create Token**
5. Ipe tokeni jina linaloelezea (k.m., "Ultimate Multisite Integration")
6. Teua jukumu la **System Administrator**
7. Kwa tarehe ya kumalizika:
   - Acha tupu ikiwa unataka tokeni isimalizike kamwe
   - Au weka tarehe maalum ya kumalizika kwa sababu za usalama
8. Bofya **Create**

Baada ya kuunda, **Access Token** yako na **Organization ID** yako zitaonyeshwa. **Zihifadhi mara moja** kwani tokeni itaonyeshwa mara moja tu.

### 2. Pata Organization ID Yako

Organization ID inaonyeshwa kwenye ukurasa wa Access Tokens katika sanduku la habari la bluu lililoandikwa "Org ID: {your_id}".

Organization ID iko katika muundo wa UUID kama: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Unaweza pia kupata Organization ID ya mteja kwa:
1. Nenda kwenye ukurasa wa **Customers**
2. Bofya **Manage customer** kwa mteja husika
3. Angalia URL - Organization ID ni herufi na nambari baada ya `/customers/`

### 3. Pata Server ID Yako

Ili kupata Server ID yako (inahitajika kwa shughuli za kikoa):

1. Katika Enhance Control Panel, nenda kwenye **Servers**
2. Bofya kwenye seva ambapo usakinishaji wako wa WordPress unafanya kazi
3. Server ID (muundo wa UUID) itaonekana kwenye URL au maelezo ya seva
4. Vinginevyo, unaweza kutumia API kuorodhesha seva:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID inafuata muundo wa UUID: `00000000-0000-0000-0000-000000000000`

### 4. Pata URL Yako ya API

URL yako ya API ni URL ya Enhance Control Panel yako ikiwa na `/api/` imeongezwa:

```
https://your-enhance-panel.com/api/
```

**Muhimu:** Njia ya `/api/` inahitajika. Makosa ya kawaida ni pamoja na:
- Kutumia kikoa pekee bila `/api/`
- Kutumia HTTP badala ya HTTPS (HTTPS inahitajika kwa usalama)

## Usanidi

### Viunga Vinavyohitajika

Ongeza viunga vifuatavyo kwenye faili yako ya `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Usanidi kupitia Mchawi wa Muunganiko

1. Katika paneli ya msimamizi ya WordPress, nenda **Ultimate Multisite** > **Settings**
2. Nenda kwenye kichupo cha **Integrations**
3. Tafuta **Enhance Control Panel Integration** na bofya **Configuration**
4. Mchawi utakuongoza kupitia usanidi:
   - **Hatua ya 1:** Utangulizi na muhtasari wa vipengele
   - **Hatua ya 2:** Ingiza vithibitisho vyako vya API (Token, URL ya API, Server ID)
   - **Hatua ya 3:** Jaribu muunganisho
   - **Hatua ya 4:** Kagua na uamilishe

Unaweza kuchagua:
- Kuruhusu mchawi kuingiza viunga kwenye faili yako ya `wp-config.php` kiotomatiki
- Nakili fasili za viunga na uziongeze mwenyewe

## Usanidi wa Ziada wa WordPress

Kulingana na maoni ya jamii ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), huenda ukahitaji kusanidi mipangilio hii ya ziada:

### Usanidi wa .htaccess

Ikiwa unapata matatizo na ramani ya kikoa:
1. Futa faili ya awali ya `.htaccess` ya Enhance
2. Ibadilishe na faili ya kawaida ya `.htaccess` ya WordPress Multisite

### Viunga vya Cookie

Ongeza viunga hivi kwenye `wp-config.php` kuhakikisha usimamizi sahihi wa cookie katika vikoa vilivyounganishwa:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Jinsi Inavyofanya Kazi

### Wakati Kikoa Kinapounganishwa

1. Mtumiaji anaunganisha kikoa maalum katika Ultimate Multisite (au tovuti mpya inaundwa katika hali ya subdomain)
2. Muunganiko unatuma ombi la POST kwa API ya Enhance: `/servers/{server_id}/domains`
3. Enhance inaongeza kikoa kwenye usanidi wa seva yako
4. Wakati DNS inaposuluhishwa kwa seva yako, Enhance inatoa kiotomatiki cheti cha SSL kupitia LetsEncrypt
5. Kikoa kinakuwa hai na HTTPS

### Wakati Kikoa Kinapoondolewa

1. Ramani ya kikoa inafutwa katika Ultimate Multisite
2. Muunganiko unahoji Enhance kupata ID ya kikoa
3. Ombi la DELETE linatumwa kwa: `/servers/{server_id}/domains/{domain_id}`
4. Enhance inaondoa kikoa kutoka kwenye usanidi wa seva yako

### Ukaguzi wa DNS na SSL

Ultimate Multisite inajumuisha ukaguzi wa ndani wa DNS na SSL:
- Unaweza kusanidi muda wa ukaguzi katika **Domain Mapping Settings** (chaguo-msingi: sekunde 300/dakika 5)
- Mfumo utathibitisha usambazaji wa DNS kabla ya kuashiria kikoa kuwa hai
- Uhalali wa cheti cha SSL unakaguliwa kiotomatiki
- Enhance inashughulikia utoaji wa SSL kiotomatiki, kwa hivyo usanidi wa mikono wa SSL hauhitajiki

## Kuthibitisha Usanidi

### Jaribu Muunganisho

1. Katika Mchawi wa Muunganiko, tumia hatua ya **Test Connection**
2. Plugin itajaribu kuorodhesha vikoa kwenye seva yako
3. Ujumbe wa mafanikio unathibitisha:
   - Vithibitisho vya API ni sahihi
   - URL ya API inaweza kufikiwa
   - Server ID ni halali
   - Ruhusa zimewekwa vizuri

### Baada ya Kuunganisha Kikoa

1. Unganisha kikoa la majaribio katika Ultimate Multisite
2. Angalia kumbukumbu za Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Thibitisha katika Enhance Control Panel kwamba kikoa kiliongezwa:
   - Nenda **Servers** > **Seva Yako** > **Domains**
   - Kikoa kipya kinapaswa kuonekana kwenye orodha
4. Mara DNS inaposambazwa, thibitisha SSL imetolewa kiotomatiki

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API

**Hitilafu: "Failed to connect to Enhance API"**
- Thibitisha `WU_ENHANCE_API_URL` inajumuisha `/api/` mwishoni
- Hakikisha unatumia HTTPS, si HTTP
- Angalia kwamba paneli ya Enhance inaweza kufikiwa kutoka seva yako ya WordPress
- Thibitisha hakuna sheria za ngome zinazozuia muunganisho

**Hitilafu: "Enhance API Token not found"**
- Hakikisha `WU_ENHANCE_API_TOKEN` imefasiliwa katika `wp-config.php`
- Thibitisha tokeni haijafutwa au kuisha muda katika Enhance
- Angalia makosa ya uandishi katika thamani ya tokeni

**Hitilafu: "Server ID is not configured"**
- Thibitisha `WU_ENHANCE_SERVER_ID` imefasiliwa katika `wp-config.php`
- Hakikisha Server ID iko katika muundo halali wa UUID
- Thibitisha seva ipo katika paneli yako ya Enhance

### Kikoa Hakijaongezwa

**Angalia kumbukumbu:**
1. Nenda **Ultimate Multisite** > **Logs**
2. Chuja kwa **integration-enhance**
3. Tafuta ujumbe wa hitilafu unaoonyesha tatizo

**Sababu za kawaida:**
- Muundo batili wa jina la kikoa
- Kikoa tayari kipo katika Enhance
- Ruhusa za API hazitoshi (hakikisha tokeni ina jukumu la System Administrator)
- Server ID hailingani na seva halisi katika Enhance

### Matatizo ya Cheti cha SSL

**SSL haijatolewa:**
- Thibitisha DNS inaelekeza kwa anwani ya IP ya seva yako
- Angalia kwamba kikoa kinasuluhishwa kwa usahihi: `nslookup yourdomain.com`
- Enhance inahitaji DNS kusuluhishwa kabla ya kutoa SSL
- Utoaji wa SSL kawaida huchukua dakika 5-10 baada ya usambazaji wa DNS
- Angalia kumbukumbu za Enhance Control Panel kwa hitilafu maalum za SSL

**Utatuzi wa mikono wa SSL katika Enhance:**
1. Nenda **Servers** > **Seva Yako** > **Domains**
2. Tafuta kikoa chako na angalia hali yake ya SSL
3. Unaweza kuchochea utoaji wa SSL kwa mikono ikiwa inahitajika

### Muda wa Ukaguzi wa DNS

Ikiwa vikoa au vyeti vya SSL vinachukua muda mrefu kuamilishwa:
1. Nenda **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Tafuta mpangilio wa **DNS Check Interval**
3. Rekebisha kutoka chaguo-msingi la sekunde 300 hadi thamani ndogo (kiwango cha chini: sekunde 10)
4. **Kumbuka:** Vipindi vifupi vinamaanisha ukaguzi wa mara kwa mara lakini mzigo mkubwa wa seva

### Hitilafu za Uthibitishaji

**Hitilafu za HTTP 401/403:**
- Tengeneza upya tokeni yako ya API katika Enhance
- Thibitisha tokeni ina jukumu la **System Administrator**
- Angalia kwamba tokeni haijaisha muda
- Hakikisha unatumia Organization ID sahihi (ingawa kawaida haihitajiki kwenye URL)

### Uchambuzi wa Kumbukumbu

Wezesha kumbukumbu za kina:
```php
// Ongeza kwenye wp-config.php kwa utatuzi wa kina
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kisha angalia kumbukumbu kwenye:
- Kumbukumbu za Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Kumbukumbu ya utatuzi wa WordPress: `wp-content/debug.log`
- Kumbukumbu za paneli ya Enhance: Zinapatikana katika kiolesura cha msimamizi cha Enhance

## Rejea ya API

### Uthibitishaji
Maombi yote ya API yanatumia uthibitishaji wa tokeni ya Bearer:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Sehemu za Mwisho Zinazotumika Mara kwa Mara

**Orodhesha Seva:**
```
GET /servers
```

**Orodhesha Vikoa kwenye Seva:**
```
GET /servers/{server_id}/domains
```

**Ongeza Kikoa:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Futa Kikoa:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Nyaraka Kamili za API
Nyaraka kamili za API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Mazoea Bora

### Usalama
- **Kamwe usitume tokeni za API kwenye udhibiti wa toleo**
- Hifadhi tokeni katika `wp-config.php` ambayo inapaswa kutengwa na Git
- Tumia tokeni zenye ruhusa zinazofaa (System Administrator kwa muunganiko kamili)
- Weka tarehe za kuisha kwa tokeni kwa mazingira ya uzalishaji
- Badilisha tokeni mara kwa mara

### Utendaji
- Tumia muda wa chaguo-msingi wa ukaguzi wa DNS (sekunde 300) ili kuepuka wito kupita kiasi wa API
- Fuatilia rasilimali za seva ya Enhance unapoendesha shughuli kubwa za kikoa
- Fikiria kupanga kuongeza kikoa ikiwa unaunganisha vikoa vingi kwa wakati mmoja

### Ufuatiliaji
- Angalia mara kwa mara kumbukumbu za Ultimate Multisite kwa hitilafu za muunganiko
- Weka ufuatiliaji kwa kuongeza vikoa vilivyoshindwa
- Thibitisha vyeti vya SSL vinatoa kwa usahihi
- Fuatilia uwezo wa seva ya Enhance na vikomo vya kikoa

## Rasilimali za Ziada

- **Nyaraka Rasmi za Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Nyaraka za API za Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Jukwaa la Jamii la Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Majadiliano ya GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Mwongozo wa Ramani ya Kikoa wa Ultimate Multisite:** Tazama ukurasa wa wiki "How to Configure Domain Mapping v2"

## Msaada

Ikiwa unakutana na matatizo:
1. Angalia sehemu ya Utatuzi wa Matatizo hapo juu
2. Kagua kumbukumbu za Ultimate Multisite
3. Shauriana na [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Wasiliana na msaada wa Enhance kwa matatizo maalum ya paneli
5. Unda majadiliano mapya na kumbukumbu za kina za hitilafu kwa msaada wa jamii

## Vidokezo

- Muunganiko huu unashughulikia majina mbadala ya kikoa pekee; Enhance inasimamia SSL kiotomatiki
- Muunganiko unasaidia ramani za kikoa maalum na tovuti zinazotegemea subdomain
- Uundaji wa kiotomatiki wa subdomain ya www unaweza kusanidiwa katika mipangilio ya Domain Mapping
- Enhance kwa sasa inasaidia mipangilio ya Apache (LiteSpeed Enterprise inapatikana)
- Kuondoa kikoa kutoka Ultimate Multisite kutaondoa kikoa kutoka Enhance lakini huenda hakutafuta vyeti vya SSL vilivyohusishwa mara moja
