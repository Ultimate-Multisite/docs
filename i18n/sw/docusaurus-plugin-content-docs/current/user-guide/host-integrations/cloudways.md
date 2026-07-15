---
title: Ujumuishaji wa Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Muunganisho wa Cloudways

## Muhtasari {#overview}
Cloudways ni jukwaa la usimamizi wa hosting ya cloud linalokuruhusu kuweka tovuti za WordPress kwenye watoa huduma mbalimbali wa cloud kama DigitalOcean, AWS, Google Cloud, na wengineo. Muunganisho huu huwezesha usawazishaji otomatiki wa domain na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na Cloudways.

## Vipengele {#features}
- Usawazishaji otomatiki wa domain
- Usimamizi wa cheti cha SSL
- Usaidizi wa domain za ziada
- Uthibitishaji wa DNS kwa vyeti vya SSL

## Mahitaji {#requirements}
Constants zifuatazo lazima zifafanuliwe katika faili lako la `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kwa hiari, unaweza pia kufafanua:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Maagizo ya Usanidi {#setup-instructions}

### 1. Pata Credentials Zako za Cloudways API {#1-get-your-cloudways-api-credentials}

1. Ingia kwenye Cloudways Dashboard yako
2. Nenda kwenye "Account" > "Vifunguo vya API"
3. Tengeneza ufunguo wa API ikiwa tayari huna mmoja
4. Nakili barua pepe yako na ufunguo wa API

### 2. Pata Vitambulisho vya Server na Application Vyako {#2-get-your-server-and-application-ids}

1. Katika Cloudways Dashboard yako, nenda kwenye "Seva"
2. Chagua seva ambapo WordPress multisite yako imehifadhiwa
3. Server ID inaonekana kwenye URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Nenda kwenye "Programu" na uchague programu yako ya WordPress
5. App ID inaonekana kwenye URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ongeza Constants kwenye wp-config.php {#3-add-constants-to-wp-configphp}

Ongeza constants zifuatazo kwenye faili lako la `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ikiwa una domain za ziada **za nje** (nje ya mtandao wako wa multisite) ambazo zinapaswa kuwekwa daima kwenye orodha ya aliases ya Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Usijumuishe wildcard ya mtandao wako mwenyewe
**Usiongeze** `*.your-network.com` (au muundo wowote wa subdomain wa mtandao wako mwenyewe) kwenye
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Tazama [Muhimu — mtego wa wildcard SSL](#important--wildcard-ssl-pitfall)
hapa chini ili kuelewa kwa nini hili huzuia vyeti vya SSL vya kila mpangaji kutolewa.
:::

### 4. Wezesha Muunganisho {#4-enable-the-integration}

1. Katika msimamizi wako wa WordPress, nenda kwenye Ultimate Multisite > Mipangilio
2. Nenda kwenye kichupo cha "Uelekezaji wa Domain"
3. Sogeza chini hadi "Miunganisho ya Host"
4. Wezesha muunganisho wa Cloudways
5. Bofya "Hifadhi Mabadiliko"

## Jinsi Unavyofanya Kazi {#how-it-works}

### Usawazishaji wa Domain {#domain-syncing}

Domain inapounganishwa katika Ultimate Multisite:

1. Muunganisho hupata domain zote zilizounganishwa kwa sasa
2. Huongeza domain mpya kwenye orodha (pamoja na toleo la www ikiwa linafaa)
3. Hutuma orodha kamili kwa Cloudways kupitia API
4. Cloudways husasisha aliases za domain kwa programu yako

Kumbuka: Cloudways API inahitaji kutuma orodha kamili ya domain kila wakati, si kuongeza au kuondoa domain moja moja tu.

### Usimamizi wa Cheti cha SSL {#ssl-certificate-management}

Baada ya domain kusawazishwa:

1. Muunganisho hukagua ni domain zipi zina rekodi halali za DNS zinazoelekeza kwenye seva yako
2. Hutuma ombi kwa Cloudways kusakinisha vyeti vya Let's Encrypt SSL kwa domain hizo
3. Cloudways hushughulikia utoaji na usakinishaji wa cheti cha SSL

Muunganisho huomba daima vyeti vya Let's Encrypt vya **kawaida** (visivyo vya wildcard) kutoka
Cloudways. Ikiwa muundo wa wildcard umetolewa katika `WU_CLOUDWAYS_EXTRA_DOMAINS`, sehemu ya mwanzo
`*.` huondolewa kabla ya ombi la SSL — wildcard yenyewe haisakinishwi kamwe na
muunganisho huu. Ili kutumia cheti cha wildcard kwenye Cloudways ungelazimika kukisakinisha
kwa mkono, lakini kufanya hivyo huzuia utoaji wa Let's Encrypt kwa kila domain kwa domain maalum zilizounganishwa
(tazama mtego hapa chini).

## Domain za Ziada {#extra-domains}

Constant ya `WU_CLOUDWAYS_EXTRA_DOMAINS` hukuruhusu kubainisha domain za ziada **za nje**
ambazo zinapaswa kuwekwa daima kwenye orodha ya aliases ya programu ya Cloudways. Itumie kwa:

- Domain za nje ambazo hazisimamiwi na Ultimate Multisite (mf. tovuti tofauti ya masoko inayoshiriki programu ileile ya Cloudways)
- Domain zilizopaki au za staging unazotaka zihifadhiwe kwenye orodha ya aliases ya programu

**Usitumie** constant hii kwa wildcard ya subdomain ya mtandao wako mwenyewe
(mf. `*.your-network.com`). Tazama mtego wa wildcard SSL hapa chini.

## Muhimu — Mtego wa Wildcard SSL {#important--wildcard-ssl-pitfall}

Kosa la kawaida unapofuata usanidi chaguomsingi wa Cloudways ni kuongeza wildcard kama
`*.your-network.com` kwenye `WU_CLOUDWAYS_EXTRA_DOMAINS`, au kusakinisha kwa mkono cheti cha
wildcard SSL cha Cloudways kwa wildcard hiyo.

**Ukifanya hivi, Cloudways itakataa kutoa vyeti vya Let's Encrypt kwa domain maalum
za kila mpangaji ambazo Ultimate Multisite huunganisha.** Cloudways hubadilisha cheti amilifu cha
SSL kwenye programu kila wakati, na cheti cha wildcard kilichopo awali kwenye
programu huzuia utoaji wa Let's Encrypt kwa kila domain ambao muunganisho unautegemea.

### Usanidi wa SSL wa Cloudways unaopendekezwa kwa mtandao wa Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Katika kichupo cha **Cheti cha SSL** cha programu ya Cloudways, sakinisha cheti cha **kawaida
   cha Let's Encrypt** kinachofunika tu `your-network.com` na `www.your-network.com`
   — **si** wildcard.
2. **Usiweke** `*.your-network.com` (au muundo wowote wa subdomain wa mtandao wako mwenyewe) katika
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Hifadhi constant hiyo kwa domain **za nje** pekee.
3. Unda wildcard ya subdomain ya kila mpangaji katika kiwango cha **DNS** pekee (rekodi ya `A` kwa
   `*.your-network.com` inayoelekeza kwenye IP ya seva yako ya Cloudways) ili subsites zifanye resolve. SSL
   kwa domain maalum zilizounganishwa moja moja kisha hutolewa otomatiki na muunganisho
   kupitia Let's Encrypt.

Ikiwa domains maalum za tenants wako zimekwama bila SSL, angalia kichupo cha SSL cha Cloudways. Ikiwa
cheti cha wildcard kinatumika hapo, kiondoe, toa upya cheti cha kawaida cha Let's Encrypt
kwa domain kuu ya network pekee, na uondoe maingizo yoyote ya wildcard kutoka
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Kisha anzisha tena domain mapping (au subiri inayofuata)
na muunganisho utaanza kutoa vyeti vya kila domain tena.

## Utatuzi wa Matatizo {#troubleshooting}

### Matatizo ya Muunganisho wa API {#api-connection-issues}
- Thibitisha kuwa email yako na API key ni sahihi
- Angalia kuwa IDs za server na application zako ni sahihi
- Hakikisha kuwa Account yako ya Cloudways ina ruhusa zinazohitajika

### Matatizo ya Cheti cha SSL {#ssl-certificate-issues}
- Cloudways inahitaji domains ziwe na rekodi halali za DNS zinazoelekeza kwenye server yako kabla ya kutoa vyeti vya SSL
- Muunganisho huthibitisha rekodi za DNS kabla ya kuomba vyeti vya SSL
- Ikiwa vyeti vya SSL havitolewi, angalia kuwa domains zako zinaelekeza ipasavyo kwenye anwani ya IP ya server yako
- **Domains maalum za kila tenant zimekwama bila SSL?** Angalia kichupo cha SSL Certificate cha application ya Cloudways. Ikiwa cheti cha wildcard (kilichosakinishwa kwa mkono, au kinachofunika `*.your-network.com`) kinatumika, Cloudways haitatoa vyeti vya Let's Encrypt kwa domains maalum zilizofanyiwa mapping moja moja. Kibadilishe kwa cheti cha kawaida cha Let's Encrypt kinachofunika tu domain kuu ya network (`your-network.com`, `www.your-network.com`) na uondoe maingizo yoyote ya wildcard kutoka `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kisha anzisha tena domain mapping (au subiri inayofuata) na muunganisho utaomba vyeti vya kila domain.

### Domain Haijaongezwa {#domain-not-added}
- Angalia logs za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Thibitisha kuwa domain haijaongezwa tayari kwenye Cloudways
- Hakikisha kuwa plan yako ya Cloudways inaauni idadi ya domains unazoongeza
