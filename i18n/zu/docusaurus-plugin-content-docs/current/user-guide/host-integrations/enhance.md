---
title: Thuthukisa Ukuhlanganiswa Kwephaneli Yokulawula
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Thuthukisa Ukuhlanganiswa kwe-Control Panel

## Ukubuka konke
Enhance iyi-control panel yesimanje enikeza amandla anamandla okuzenzakalela nokuphatha ukusingathwa. Lokhu kuhlanganiswa kuvumela ukuvumelanisa izizinda ngokuzenzakalela nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite ne-Enhance Control Panel.

**Ingxoxo Ehlobene:** Bona [Ingxoxo ye-GitHub #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ukuze uthole amathiphu omphakathi nolwazi olwengeziwe.

## Izici
- Ukuvumelanisa izizinda ngokuzenzakalela lapho izizinda zifakwa imephu ku-Ultimate Multisite
- Ukuhlinzekwa kwezitifiketi ze-SSL ngokuzenzakalela nge-LetsEncrypt lapho i-DNS ixazulula
- Ukusekelwa kwe-subdomain kumanethiwekhi asebenza kumodi ye-subdomain
- Ukususwa kwesizinda lapho ukufakwa kumephu kususwa
- Ukuhlolwa kokuxhumeka ukuze kuqinisekiswe iziqinisekiso ze-API

## Izidingo

### Izidingo Zesistimu
- I-Enhance Control Panel ifakiwe futhi iyatholakala
- Ukufakwa kwe-WordPress Multisite kusingathwe ku-Enhance server noma kuxhunywe kuyo
- Iseva yewebhu ye-Apache (Enhance okwamanje isekela izilungiselelo ze-Apache; i-LiteSpeed Enterprise iyatholakala ngezindleko ezincishisiwe)

### Ukufinyelela kwe-API
Kufanele ube nokufinyelela komlawuli ku-Enhance Control Panel ukuze udale ama-token e-API.

## Ukuthola Iziqinisekiso Zakho ze-API

### 1. Dala i-API Token

1. Ngena ku-Enhance Control Panel yakho njengomlawuli
2. Chofoza ku-**Settings** kumenyu yokuzula
3. Zulazula uye ku-**Access Tokens**
4. Chofoza **Create Token**
5. Nikeza i-token igama elichazayo (isb., "Ultimate Multisite Integration")
6. Yabela indima ethi **System Administrator**
7. Kosuku lokuphelelwa yisikhathi:
   - Shiya kungenalutho uma ufuna i-token ingalokothi iphelelwe yisikhathi
   - Noma setha usuku oluthile lokuphelelwa yisikhathi ngezinjongo zokuphepha
8. Chofoza **Create**

Ngemuva kokudala, i-**Access Token** yakho ne-**Organization ID** kuzoboniswa. **Kugcine lokhu ngokushesha** njengoba i-token izoboniswa kanye kuphela.

### 2. Thola i-Organization ID Yakho

I-Organization ID iboniswa ekhasini le-Access Tokens ebhokisini lolwazi eliluhlaza okwesibhakabhaka elibhalwe "Org ID: {your_id}".

I-Organization ID iyi-UUID efomethwe kanje: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Ungathola futhi i-Organization ID yekhasimende ngokuthi:
1. Iya ekhasini elithi **Customers**
2. Chofoza **Manage customer** kukhasimende elifanele
3. Bheka i-URL - i-Organization ID izinhlamvu nezinombolo ezilandela `/customers/`

### 3. Thola i-Server ID Yakho

Ukuze uthole i-Server ID yakho (edingekayo emisebenzini yezizinda):

1. Ku-Enhance Control Panel, zulazula uye ku-**Servers**
2. Chofoza kuseva lapho ukufakwa kwakho kwe-WordPress kusebenza khona
3. I-Server ID (ifomethi ye-UUID) izobonakala ku-URL noma emininingwaneni yeseva
4. Kungenjalo, ungasebenzisa i-API ukubala amaseva:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

I-ID yeseva ilandela ifomethi ye-UUID: `00000000-0000-0000-0000-000000000000`

### 4. Thola i-API URL Yakho

I-API URL yakho iyi-URL ye-Enhance Control Panel yakho engezwe ngo-`/api/`:

```
https://your-enhance-panel.com/api/
```

**Kubalulekile:** Indlela ethi `/api/` iyadingeka. Amaphutha avamile afaka:
- Ukusebenzisa isizinda kuphela ngaphandle kuka-`/api/`
- Ukusebenzisa i-HTTP esikhundleni se-HTTPS (i-HTTPS iyadingeka ngokuphepha)

## Ukulungiselela

### Ama-Constants Adingekayo

Engeza ama-constants alandelayo kufayela lakho le-`wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Ukusetha nge-Integration Wizard

1. Ku-admin yakho ye-WordPress, iya ku-**Ultimate Multisite** > **Settings**
2. Zulazula uye kuthebhu ethi **Integrations**
3. Thola **Enhance Control Panel Integration** bese uchofoza **Configuration**
4. I-wizard izokuqondisa ekusetheni:
   - **Isinyathelo 1:** Isingeniso nokubuka konke kwezici
   - **Isinyathelo 2:** Faka iziqinisekiso zakho ze-API (Token, API URL, Server ID)
   - **Isinyathelo 3:** Hlola ukuxhumeka
   - **Isinyathelo 4:** Buyekeza futhi wenze kusebenze

Ungakhetha ukuthi:
- Uvumele i-wizard ifake ama-constants kufayela lakho le-`wp-config.php` ngokuzenzakalela
- Ukopishe izincazelo zama-constant futhi uzingeze mathupha

## Ukulungiselela Okungeziwe kwe-WordPress

Ngokusekelwe empendulweni yomphakathi ([Ingxoxo #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), kungase kudingeke ulungiselele lezi zilungiselelo ezengeziwe:

### Ukulungiselela kwe-.htaccess

Uma uhlangabezana nezinkinga ngokufakwa kumephu kwezizinda:
1. Susa ifayela le-Enhance `.htaccess` lokuqala
2. Lifake esikhundleni ngefayela elijwayelekile le-WordPress Multisite `.htaccess`

### Ama-Constants ama-Cookie

Engeza lawa ma-constants ku-`wp-config.php` ukuze uqinisekise ukuphathwa okufanele kwama-cookie kuzo zonke izizinda ezifakwe imephu:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Indlela Esebenza Ngayo

### Lapho Isizinda Sifakwa Imephu

1. Umsebenzisi ufaka imephu yesizinda sangokwezifiso ku-Ultimate Multisite (noma isayithi elisha lidalwa kumodi ye-subdomain)
2. Ukuhlanganiswa kuthumela isicelo se-POST ku-API ye-Enhance: `/servers/{server_id}/domains`
3. Enhance yengeza isizinda ekulungiselelweni kweseva yakho
4. Lapho i-DNS ixazulula iye kuseva yakho, Enhance ihlinzeka ngokuzenzakalela isitifiketi se-SSL nge-LetsEncrypt
5. Isizinda sisebenza nge-HTTPS

### Lapho Isizinda Sisuswa

1. Ukufakwa kumephu kwesizinda kususwa ku-Ultimate Multisite
2. Ukuhlanganiswa kubuza i-Enhance ukuze kuthole i-ID yesizinda
3. Isicelo se-DELETE sithunyelwa ku-: `/servers/{server_id}/domains/{domain_id}`
4. Enhance isusa isizinda ekulungiselelweni kweseva yakho

### Ukuhlola i-DNS ne-SSL

Ultimate Multisite ihlanganisa ukuhlola kwe-DNS ne-SSL okwakhelwe ngaphakathi:
- Ungalungiselela isikhawu sokuhlola ku-**Domain Mapping Settings** (okuzenzakalelayo: imizuzwana engu-300/imizuzu engu-5)
- Isistimu izoqinisekisa ukusabalala kwe-DNS ngaphambi kokumaka isizinda njengesisebenzayo
- Ukufaneleka kwesitifiketi se-SSL kuhlolwa ngokuzenzakalela
- Enhance iphatha ukuhlinzekwa kwe-SSL ngokuzenzakalela, ngakho ukulungiselela i-SSL mathupha akudingeki

## Ukuqinisekisa Ukusetha

### Hlola Ukuxhumeka

1. Ku-Integration Wizard, sebenzisa isinyathelo se-**Test Connection**
2. I-plugin izozama ukubala ama-domain ku-server yakho
3. Umlayezo wempumelelo uqinisekisa ukuthi:
   - Imininingwane ye-API ilungile
   - I-API URL iyafinyeleleka
   - I-Server ID ivumelekile
   - Izimvume zisethwe kahle

### Ngemva Kokumapha I-domain

1. Mapha i-domain yokuhlola ku-Ultimate Multisite
2. Hlola amalogi e-Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Qinisekisa ku-Enhance Control Panel ukuthi i-domain yengeziwe:
   - Iya ku-**Servers** > **Your Server** > **Domains**
   - I-domain entsha kufanele ivele ohlwini
4. Uma i-DNS isisabalale, qinisekisa ukuthi i-SSL ihlinzekwa ngokuzenzakalelayo

## Ukuxazulula Izinkinga

### Izinkinga Zokuxhumeka kwe-API

**Iphutha: "Failed to connect to Enhance API"**
- Qinisekisa ukuthi `WU_ENHANCE_API_URL` ifaka `/api/` ekugcineni
- Qinisekisa ukuthi usebenzisa i-HTTPS, hhayi i-HTTP
- Hlola ukuthi iphaneli ye-Enhance iyafinyeleleka kusuka ku-WordPress server yakho
- Qinisekisa ukuthi ayikho imithetho ye-firewall evimba ukuxhumeka

**Iphutha: "Enhance API Token not found"**
- Qinisekisa ukuthi `WU_ENHANCE_API_TOKEN` ichaziwe ku-`wp-config.php`
- Qinisekisa ukuthi i-token ayisusiwe noma ayiphelelwe yisikhathi ku-Enhance
- Hlola amaphutha okubhala enanini le-token

**Iphutha: "Server ID is not configured"**
- Qinisekisa ukuthi `WU_ENHANCE_SERVER_ID` ichaziwe ku-`wp-config.php`
- Qinisekisa ukuthi i-Server ID iyifomethi ye-UUID evumelekile
- Qinisekisa ukuthi i-server ikhona kuphaneli yakho ye-Enhance

### I-domain Ayengezwanga

**Hlola amalogi:**
1. Iya ku-**Ultimate Multisite** > **Logs**
2. Hlunga nge-**integration-enhance**
3. Bheka imilayezo yamaphutha ekhombisa inkinga

**Izimbangela ezivamile:**
- Ifomethi yegama le-domain engavumelekile
- I-domain isivele ikhona ku-Enhance
- Izimvume ze-API ezinganele (qinisekisa ukuthi i-token inendima ye-System Administrator)
- I-Server ID ayifani ne-server yangempela ku-Enhance

### Izinkinga Zesitifiketi se-SSL

**I-SSL ayihlinzekwa:**
- Qinisekisa ukuthi i-DNS ikhomba ekhelini le-IP le-server yakho
- Hlola ukuthi i-domain ixazululeka kahle: `nslookup yourdomain.com`
- I-Enhance idinga ukuthi i-DNS ixazululeke ngaphambi kokuthi ikwazi ukuhlinzeka nge-SSL
- Ukuhlinzekwa kwe-SSL ngokuvamile kuthatha imizuzu engu-5-10 ngemva kokusabalala kwe-DNS
- Hlola amalogi e-Enhance Control Panel ukuze uthole amaphutha aqondene ne-SSL

**Ukuxazulula izinkinga ze-SSL mathupha ku-Enhance:**
1. Iya ku-**Servers** > **Your Server** > **Domains**
2. Thola i-domain yakho bese uhlola isimo sayo se-SSL
3. Ungaqalisa mathupha ukuhlinzekwa kwe-SSL uma kudingeka

### Isikhawu Sokuhlola i-DNS

Uma ama-domain noma izitifiketi ze-SSL kuthatha isikhathi eside kakhulu ukusebenza:
1. Iya ku-**Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Thola isilungiselelo se-**DNS Check Interval**
3. Lungisa kusuka kokuzenzakalelayo kwamasekhondi angu-300 uye enanini eliphansi (ubuncane: imizuzwana engu-10)
4. **Qaphela:** Izikhawu eziphansi zisho ukuhlolwa okuvame kakhulu kodwa umthwalo ophezulu ku-server

### Amaphutha Okuqinisekisa

**Amaphutha e-HTTP 401/403:**
- Khiqiza kabusha i-API token yakho ku-Enhance
- Qinisekisa ukuthi i-token inendima ye-**System Administrator**
- Hlola ukuthi i-token ayiphelelwe yisikhathi
- Qinisekisa ukuthi usebenzisa i-Organization ID efanele (nakuba ngokuvamile ingadingeki ku-URL)

### Ukuhlaziywa Kwamalogi

Vumela ukuloga okunemininingwane:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Bese uhlola amalogi ku-:
- Amalogi e-Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Ilogi yokulungisa amaphutha ye-WordPress: `wp-content/debug.log`
- Amalogi ephaneli ye-Enhance: Ayatholakala ku-interface yomlawuli ye-Enhance

## Ireferensi ye-API

### Ukuqinisekisa
Zonke izicelo ze-API zisebenzisa ukuqinisekisa kwe-Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Ama-endpoint Avamile Asetshenziswayo

**Bala Ama-server:**
```
GET /servers
```

**Bala Ama-domain ku-Server:**
```
GET /servers/{server_id}/domains
```

**Engeza I-domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Susa I-domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Imibhalo Egcwele ye-API
Imibhalo ephelele ye-API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Izindlela Ezingcono Kakhulu

### Ukuphepha
- **Ungalokothi ufake ama-API tokens ku-version control**
- Gcina ama-token ku-`wp-config.php` okufanele ingafakwa ku-Git
- Sebenzisa ama-token anezimvume ezifanele (System Administrator yokuhlanganisa okuphelele)
- Setha izinsuku zokuphelelwa yisikhathi kwama-token ezindaweni zokukhiqiza
- Shintshanisa ama-token ngezikhathi ezithile

### Ukusebenza
- Sebenzisa isikhawu sokuhlola i-DNS esizenzakalelayo (amasekhondi angu-300) ukuze ugweme izingcingo ze-API ezeqile
- Qapha izinsiza ze-Enhance server lapho usebenzisa imisebenzi ye-domain ngezinga elikhulu
- Cabangela ukusabalalisa ukwengezwa kwama-domain uma umapha ama-domain amaningi ngesikhathi esisodwa

### Ukuqapha
- Hlola njalo amalogi e-Ultimate Multisite ukuze uthole amaphutha okuhlanganisa
- Setha ukuqapha kokwengezwa kwama-domain okuhlulekile
- Qinisekisa ukuthi izitifiketi ze-SSL zihlinzekwa kahle
- Qapha umthamo we-Enhance server nemikhawulo yama-domain

## Izinsiza Ezengeziwe

- **Imibhalo Esemthethweni ye-Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Imibhalo ye-Enhance API:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Inkundla Yomphakathi ye-Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Ingxoxo ye-GitHub:** [Udaba #265 - Amathiphu Okuhlanganisa i-Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Umhlahlandlela Wokumapha Ama-domain we-Ultimate Multisite:** Bheka ikhasi le-wiki elithi "How to Configure Domain Mapping v2"

## Usekelo

Uma uhlangabezana nezinkinga:
1. Hlola isigaba Sokuxazulula Izinkinga ngenhla
2. Buyekeza amalogi e-Ultimate Multisite
3. Bheka [Izingxoxo ze-GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Xhumana nosekelo lwe-Enhance ngezinkinga eziqondene nephaneli
5. Dala ingxoxo entsha enamalogi amaphutha anemininingwane ukuze uthole usizo lomphakathi

## Amanothi

- Lokhu kuhlanganiswa kuphatha ama-domain alias kuphela; i-Enhance ilawula i-SSL ngokuzenzakalelayo
- Ukuhlanganiswa kusekela kokubili ukumepha ama-domain angokwezifiso kanye nama-site asekelwe kuma-subdomain
- Ukwakhiwa kwe-www subdomain ngokuzenzakalelayo kungalungiswa kuzilungiselelo ze-Domain Mapping
- I-Enhance okwamanje isekela izilungiselelo ze-Apache (i-LiteSpeed Enterprise iyatholakala)
- Ukususwa kwe-domain ku-Ultimate Multisite kuzosusa i-domain ku-Enhance kodwa kungase kungasusi izitifiketi ze-SSL ezihlobene ngokushesha
