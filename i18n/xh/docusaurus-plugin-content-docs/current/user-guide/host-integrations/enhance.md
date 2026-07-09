---
title: Phucula ukudityaniswa kwePhaneli Yolawulo
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Phucula Udityaniso lwe-Control Panel

## Isishwankathelo
Enhance yi-control panel yale mihla ebonelela nge-automation enamandla yokusingatha kunye nezakhono zolawulo. Olu dityaniso luvumela ukuvumelanisa ngokuzenzekelayo kweedomain kunye nolawulo lwezatifikethi ze-SSL phakathi kwe-Ultimate Multisite kunye ne-Enhance Control Panel.

**Ingxoxo Enxulumene Noku:** Bona [Ingxoxo ye-GitHub #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ukuze ufumane iingcebiso zoluntu kunye nolwazi olongezelelweyo.

## Iimpawu
- Ukuvumelanisa ngokuzenzekelayo kweedomain xa iidomain zidityaniswa kwi-Ultimate Multisite
- Ukubonelela ngokuzenzekelayo ngesatifikethi se-SSL nge-LetsEncrypt xa i-DNS isombuluka
- Inkxaso yeesubdomain kuthungelwano olusebenza kwimowudi yesubdomain
- Ukususwa kwedomain xa ukudityaniswa kucinyiwe
- Uvavanyo loqhagamshelo ukuqinisekisa iinkcukacha ze-API

## Iimfuno

### Iimfuno zeNkqubo
- I-Enhance Control Panel ifakiwe kwaye iyafikeleleka
- Ufakelo lwe-WordPress Multisite olubanjwe okanye oluqhagamshelwe kwiserver ye-Enhance
- Iseva yewebhu ye-Apache (Enhance okwangoku ixhasa ulungiselelo lwe-Apache; i-LiteSpeed Enterprise iyafumaneka ngexabiso elincitshisiweyo)

### Ufikelelo lwe-API
Kufuneka ube nofikelelo lomlawuli kwi-Enhance Control Panel ukuze wenze ii-token ze-API.

## Ukufumana Iinkcukacha Zakho ze-API

### 1. Yenza i-API Token

1. Ngena kwi-Enhance Control Panel yakho njengomlawuli
2. Cofa ku-**Settings** kwimenyu yokukhangela
3. Yiya ku-**Access Tokens**
4. Cofa **Create Token**
5. Nika i-token igama elichazayo (umz., "Ultimate Multisite Integration")
6. Yabela indima ye-**System Administrator**
7. Ngomhla wokuphelelwa:
   - Shiya kungenanto ukuba ufuna i-token ingaze iphelelwe
   - Okanye seta umhla othile wokuphelelwa ngenxa yeenjongo zokhuseleko
8. Cofa **Create**

Emva kokuyenza, **Access Token** yakho kunye ne-**Organization ID** ziya kuboniswa. **Zigcine ngokukhawuleza** kuba i-token iya kuboniswa kube kanye kuphela.

### 2. Fumana i-Organization ID Yakho

I-Organization ID iboniswa kwiphepha le-Access Tokens kwibhokisi yolwazi eluhlaza enelebhile ethi "Org ID: {your_id}".

I-Organization ID yi-UUID efomathwe ngolu hlobo: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Ungafumana kwakhona i-Organization ID yomthengi ngokuthi:
1. Yiya kwiphepha le-**Customers**
2. Cofa **Manage customer** kumthengi ofanelekileyo
3. Jonga i-URL - i-Organization ID ngoonobumba namanani asemva kwe-`/customers/`

### 3. Fumana i-Server ID Yakho

Ukufumana i-Server ID yakho (efunekayo kwimisebenzi yeedomain):

1. Kwi-Enhance Control Panel, yiya ku-**Servers**
2. Cofa kwiserver apho ufakelo lwakho lwe-WordPress lusebenza khona
3. I-Server ID (ifomathi ye-UUID) iya kubonakala kwi-URL okanye kwiinkcukacha zeseva
4. Kungenjalo, ungasebenzisa i-API ukudwelisa iiseva:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

I-ID yeseva ilandela ifomathi ye-UUID: `00000000-0000-0000-0000-000000000000`

### 4. Fumana i-API URL Yakho

I-API URL yakho yi-URL ye-Enhance Control Panel yakho enokongezwa kwe-`/api/`:

```
https://your-enhance-panel.com/api/
```

**Kubalulekile:** Indlela ye-`/api/` iyafuneka. Iimpazamo eziqhelekileyo ziquka:
- Ukusebenzisa idomain kuphela ngaphandle kwe-`/api/`
- Ukusebenzisa i-HTTP endaweni ye-HTTPS (i-HTTPS iyafuneka ngenxa yokhuseleko)

## Uqwalaselo

### Ii-Constant Ezifunekayo

Yongeza ezi constant zilandelayo kwifayile yakho ye-`wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Ukuseta nge-Integration Wizard

1. Kwi-admin yakho ye-WordPress, yiya ku-**Ultimate Multisite** > **Settings**
2. Yiya kwithebhu ye-**Integrations**
3. Fumana **Enhance Control Panel Integration** uze ucofe **Configuration**
4. I-wizard iya kukukhokela kuseto:
   - **Inyathelo 1:** Intshayelelo kunye nesishwankathelo seempawu
   - **Inyathelo 2:** Faka iinkcukacha zakho ze-API (Token, API URL, Server ID)
   - **Inyathelo 3:** Vavanya uqhagamshelo
   - **Inyathelo 4:** Hlola uze uvule

Ungakhetha uku:
- Vumela i-wizard ifake ii-constant kwifayile yakho ye-`wp-config.php` ngokuzenzekelayo
- Khuphela iinkcazelo zee-constant uze uzongeze ngesandla

## Uqwalaselo Olongezelelweyo lwe-WordPress

Ngokusekelwe kwingxelo yoluntu ([Ingxoxo #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), kusenokufuneka uqwalasele ezi setingi zongezelelweyo:

### Uqwalaselo lwe-.htaccess

Ukuba ufumana iingxaki ngokudityaniswa kwedomain:
1. Cima ifayile ye-Enhance `.htaccess` yoqobo
2. Yibuyisele ngefayile ye-WordPress Multisite `.htaccess` esemgangathweni

### Ii-Constant zeCookie

Yongeza ezi constant kwi-`wp-config.php` ukuqinisekisa ukuphathwa kweecookie ngokufanelekileyo kuzo zonke iidomain ezidityanisiweyo:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Isebenza Njani

### Xa iDomain Idityanisiwe

1. Umsebenzisi udibanisa idomain yesiko kwi-Ultimate Multisite (okanye isayithi entsha yenziwe kwimowudi yesubdomain)
2. Udityaniso luthumela isicelo se-POST kwi-API ye-Enhance: `/servers/{server_id}/domains`
3. Enhance yongeza idomain kuqwalaselo lweseva yakho
4. Xa i-DNS isombuluka iye kwiseva yakho, Enhance ibonelela ngokuzenzekelayo ngesatifikethi se-SSL nge-LetsEncrypt
5. Idomain iba iyasebenza nge-HTTPS

### Xa iDomain Isusiwe

1. Ukudityaniswa kwedomain kuyacinywa kwi-Ultimate Multisite
2. Udityaniso lubuza ku-Enhance ukufumana i-ID yedomain
3. Isicelo se-DELETE sithunyelwa ku: `/servers/{server_id}/domains/{domain_id}`
4. Enhance isusa idomain kuqwalaselo lweseva yakho

### Ukujonga i-DNS kunye ne-SSL

Ultimate Multisite iquka ukujonga kwe-DNS kunye ne-SSL okwakhelwe ngaphakathi:
- Ungaqwalasela isithuba sokujonga kwi-**Domain Mapping Settings** (okungagqibekanga: imizuzwana engama-300/imizuzu emi-5)
- Inkqubo iya kuqinisekisa ukusasazeka kwe-DNS phambi kokumakisha idomain njengesebenzayo
- Ukusebenza kwesatifikethi se-SSL kujongwa ngokuzenzekelayo
- Enhance iphatha ukubonelela nge-SSL ngokuzenzekelayo, ngoko uqwalaselo lwe-SSL ngesandla alufuneki

## Ukuqinisekisa Useto

### Vavanya uQhagamshelo

1. Kwi-Integration Wizard, sebenzisa inyathelo le-**Test Connection**
2. I-plugin iza kuzama ukudwelisa ii-domain kwi-server yakho
3. Umyalezo wempumelelo uqinisekisa:
   - Iinkcukacha ze-API zichanekile
   - I-API URL iyafikeleleka
   - I-Server ID iyasebenza
   - Iimvume zisetiwe ngokufanelekileyo

### Emva kokuMapha i-Domain

1. Mapha i-domain yovavanyo kwi-Ultimate Multisite
2. Jonga iilogi ze-Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Qinisekisa kwi-Enhance Control Panel ukuba i-domain yongeziwe:
   - Yiya ku-**Servers** > **Your Server** > **Domains**
   - I-domain entsha kufuneka ivele kuluhlu
4. Xa i-DNS sele isasazekile, qinisekisa ukuba i-SSL ibonelelwa ngokuzenzekelayo

## Ukusombulula iingxaki

### Iingxaki zoQhagamshelwano lwe-API

**Impazamo: "Failed to connect to Enhance API"**
- Qinisekisa ukuba `WU_ENHANCE_API_URL` iquka `/api/` ekupheleni
- Qinisekisa ukuba usebenzisa i-HTTPS, hayi i-HTTP
- Jonga ukuba ipaneli ye-Enhance iyafikeleleka kwi-WordPress server yakho
- Qinisekisa ukuba akukho mithetho ye-firewall evalela uqhagamshelwano

**Impazamo: "Enhance API Token not found"**
- Qinisekisa ukuba `WU_ENHANCE_API_TOKEN` ichaziwe kwi-`wp-config.php`
- Qinisekisa ukuba i-token ayicinywanga okanye ayiphelelwanga lixesha kwi-Enhance
- Jonga iimpazamo zokuchwetheza kwixabiso le-token

**Impazamo: "Server ID is not configured"**
- Qinisekisa ukuba `WU_ENHANCE_SERVER_ID` ichaziwe kwi-`wp-config.php`
- Qinisekisa ukuba i-Server ID ikwifomathi ye-UUID esebenzayo
- Qinisekisa ukuba i-server ikhona kwipaneli yakho ye-Enhance

### I-Domain Ayongexwanga

**Jonga iilogi:**
1. Yiya ku-**Ultimate Multisite** > **Logs**
2. Hluza nge-**integration-enhance**
3. Khangela imiyalezo yeempazamo ebonisa ingxaki

**Izizathu eziqhelekileyo:**
- Ifomathi yegama le-domain ayisebenzi
- I-domain sele ikhona kwi-Enhance
- Iimvume ze-API azonelanga (qinisekisa ukuba i-token inendima ye-System Administrator)
- I-Server ID ayihambelani ne-server yokwenene kwi-Enhance

### Iingxaki zeSatifikethi se-SSL

**I-SSL ayibonelelwa:**
- Qinisekisa ukuba i-DNS ikhomba kwidilesi ye-IP ye-server yakho
- Jonga ukuba i-domain isonjululwa ngokuchanekileyo: `nslookup yourdomain.com`
- I-Enhance ifuna ukuba i-DNS isonjululwe phambi kokuba ibonelele nge-SSL
- Ukubonelelwa kwe-SSL kudla ngokuthatha imizuzu emi-5-10 emva kokusasazeka kwe-DNS
- Jonga iilogi ze-Enhance Control Panel ngeempazamo ezikhethekileyo ze-SSL

**Ukusombulula iingxaki ze-SSL ngesandla kwi-Enhance:**
1. Yiya ku-**Servers** > **Your Server** > **Domains**
2. Fumana i-domain yakho uze ujonge imeko yayo ye-SSL
3. Ungaqalisa ukubonelelwa kwe-SSL ngesandla ukuba kuyimfuneko

### Isithuba soHlolo lwe-DNS

Ukuba ii-domain okanye izatifikethi ze-SSL zithatha ixesha elide kakhulu ukuvuseleleka:
1. Yiya ku-**Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Fumana useto lwe-**DNS Check Interval**
3. Lungisa ukusuka kwixabiso elingagqibekanga le-300 imizuzwana ukuya kwixabiso elisezantsi (ubuncinane: 10 imizuzwana)
4. **Qaphela:** Izithuba ezisezantsi zithetha uhlolo oluqhelekileyo ngakumbi kodwa nomthwalo ophezulu kwi-server

### Iimpazamo zoNgqinisiso

**Iimpazamo ze-HTTP 401/403:**
- Phinda uvelise i-API token yakho kwi-Enhance
- Qinisekisa ukuba i-token inendima ye-**System Administrator**
- Jonga ukuba i-token ayiphelelwanga lixesha
- Qinisekisa ukuba usebenzisa i-Organization ID echanekileyo (nangona idla ngokungafuneki kwi-URL)

### Uhlalutyo lweeLogi

Vumela ukulogwa okuneenkcukacha:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Emva koko jonga iilogi apha:
- Iilogi ze-Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Ilogi ye-debug ye-WordPress: `wp-content/debug.log`
- Iilogi zepaneli ye-Enhance: Ziyafumaneka kujongano lolawulo lwe-Enhance

## Isalathiso se-API

### Ungqinisiso
Zonke izicelo ze-API zisebenzisa ungqinisiso lwe-Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Ii-Endpoint eziQhelekileyo eziSetyenzisiweyo

**Dwelisa ii-Server:**
```
GET /servers
```

**Dwelisa ii-Domain kwi-Server:**
```
GET /servers/{server_id}/domains
```

**Yongeza i-Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Cima i-Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Amaxwebhu apheleleyo e-API
Amaxwebhu apheleleyo e-API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Ezona ndlela zilungileyo

### Ukhuseleko
- **Ungaze ufake ii-API token kwi-version control**
- Gcina ii-token kwi-`wp-config.php` ekufuneka ikhutshelwe ngaphandle kwi-Git
- Sebenzisa ii-token ezineemvume ezifanelekileyo (System Administrator kudibaniso olupheleleyo)
- Seta imihla yokuphelelwa kwe-token kwiimeko zemveliso
- Tshintsha ii-token rhoqo

### Ukusebenza
- Sebenzisa isithuba sohlolo lwe-DNS esingagqibekanga (300 imizuzwana) ukunqanda iifowuni ze-API ezigqithisileyo
- Beka iliso kwizibonelelo ze-Enhance server xa uqhuba imisebenzi ye-domain kumlinganiselo omkhulu
- Cinga ngokusasaza amaxesha okongeza ii-domain ukuba umapha ii-domain ezininzi ngaxeshanye

### Ukubeka iliso
- Jonga rhoqo iilogi ze-Ultimate Multisite ngeempazamo zodibaniso
- Seta ukubeka iliso kokongezwa kwe-domain okusilelayo
- Qinisekisa ukuba izatifikethi ze-SSL zibonelelwa ngokuchanekileyo
- Gcina iliso kumthamo we-Enhance server kunye nemida ye-domain

## Izixhobo ezongezelelweyo

- **Amaxwebhu asemthethweni e-Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Amaxwebhu e-Enhance API:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Iforam yoLuntu ye-Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Ingxoxo ye-GitHub:** [Issue #265 - Amacebiso oDibaniso lwe-Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Isikhokelo sokuMapha ii-Domain se-Ultimate Multisite:** Bona iphepha le-wiki "Indlela yokuQwalasela i-Domain Mapping v2"

## Inkxaso

Ukuba uhlangabezana neengxaki:
1. Jonga icandelo lokuSombulula iingxaki elingentla
2. Phonononga iilogi ze-Ultimate Multisite
3. Thetha ne-[GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Qhagamshelana nenkxaso ye-Enhance ngeengxaki ezikhethekileyo zepaneli
5. Yenza ingxoxo entsha enee-logi zeempazamo ezineenkcukacha ukuze ufumane uncedo kuluntu

## Amanqaku

- Olu dibaniso luphatha ii-aliases ze-domain kuphela; Enhance ilawula i-SSL ngokuzenzekelayo
- Udibaniso luxhasa zombini ii-mappings ze-domain ezenzelwe umsebenzisi kunye neesayithi ezisekelwe kwi-subdomain
- Ukudalwa okuzenzekelayo kwe-www subdomain kunokuqwalaselwa kwiisetingi ze-Domain Mapping
- Enhance okwangoku ixhasa uqwalaselo lwe-Apache (LiteSpeed Enterprise iyafumaneka)
- Ukususwa kwe-domain kwi-Ultimate Multisite kuya kususa i-domain kwi-Enhance kodwa kusenokungazicimi izatifikethi ze-SSL ezinxulumeneyo ngoko nangoko
