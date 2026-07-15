---
title: Udibaniso lwe-Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Udityaniso lwe-Cloudways

## Isishwankathelo {#overview}
Cloudways liqonga lokusingatha ilifu elilawulwayo elikuvumela ukuba uphumeze iisayithi ze-WordPress kubaboneleli belifu abohlukeneyo njenge-DigitalOcean, AWS, Google Cloud, nokunye. Olu dityaniso lwenza ukuvumelanisa kweedomain ngokuzenzekelayo kunye nolawulo lwezatifikethi ze-SSL phakathi kwe-Ultimate Multisite ne-Cloudways.

## Iimpawu {#features}
- Ukuvumelanisa kweedomain ngokuzenzekelayo
- Ulawulo lwezatifikethi ze-SSL
- Inkxaso yeedomain ezongezelelweyo
- Uqinisekiso lwe-DNS lwezatifikethi ze-SSL

## Iimfuno {#requirements}
Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho ye-`wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ngokuzikhethela, unokuchaza kwakhona:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Imiyalelo Yokumisela {#setup-instructions}

### 1. Fumana Iinkcukacha Zakho ze-Cloudways API {#1-get-your-cloudways-api-credentials}

1. Ngena kwi-dashboard yakho ye-Cloudways
2. Yiya ku-"Account" > "API Keys"
3. Yenza i-API key ukuba awukabinayo
4. Khuphela i-imeyile yakho ne-API key

### 2. Fumana ii-ID Zakho ze-Server ne-Application {#2-get-your-server-and-application-ids}

1. Kwi-dashboard yakho ye-Cloudways, yiya ku-"Servers"
2. Khetha i-server apho i-WordPress multisite yakho isingathwe khona
3. I-Server ID iyabonakala kwi-URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Yiya ku-"Applications" uze ukhethe i-WordPress application yakho
5. I-App ID iyabonakala kwi-URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Yongeza ii-Constants ku-wp-config.php {#3-add-constants-to-wp-configphp}

Yongeza ezi constants zilandelayo kwifayile yakho ye-`wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ukuba uneedomain **zangaphandle** ezongezelelweyo (ezingaphandle kwenethiwekhi yakho ye-multisite) ekufuneka zihlale zigcinwe kuluhlu lwe-aliases lwe-Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Musa ukubandakanya i-wildcard yenethiwekhi yakho
**Musa** ukongeza `*.your-network.com` (okanye nayiphi na ipateni ye-subdomain yenethiwekhi yakho) ku
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Jonga [Okubalulekileyo — ingxaki ye-wildcard SSL](#important--wildcard-ssl-pitfall)
ngezantsi ukuze ubone ukuba kutheni oku kuthintela ukukhutshwa kwezatifikethi ze-SSL zomqeshi ngamnye.
:::

### 4. Yenza Udityaniso Lusebenze {#4-enable-the-integration}

1. Kwi-WordPress admin yakho, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrola ezantsi ukuya ku-"Host Integrations"
4. Yenza udityaniso lwe-Cloudways lusebenze
5. Cofa "Save Changes"

## Indlela Esebenza Ngayo {#how-it-works}

### Ukuvumelanisa kweDomain {#domain-syncing}

Xa idomain imaphiwe kwi-Ultimate Multisite:

1. Udityaniso lufumana zonke iidomain ezimaphiweyo ngoku
2. Longeza idomain entsha kuluhlu (kunye nenguqulelo ye-www ukuba iyasebenza)
3. Luthumela uluhlu olupheleleyo ku-Cloudways nge-API
4. Cloudways ihlaziya ii-aliases zedomain ze-application yakho

Qaphela: I-Cloudways API ifuna ukuthumela uluhlu olupheleleyo lweedomain qho, hayi ukongeza okanye ukususa nje iidomain nganye.

### Ulawulo Lwezatifikethi ze-SSL {#ssl-certificate-management}

Emva kokuba iidomain zivumelanisiwe:

1. Udityaniso lujonga ukuba zeziphi iidomain ezineerekhodi ze-DNS ezisebenzayo ezikhomba kwi-server yakho
2. Luthumela isicelo ku-Cloudways sokufaka izatifikethi ze-Let's Encrypt SSL kwezo domain
3. Cloudways iphatha ukukhutshwa nokufakwa kwesatifikethi se-SSL

Udityaniso luhlala lucela izatifikethi ze-Let's Encrypt **eziqhelekileyo** (ezingezizo i-wildcard) ku
Cloudways. Ukuba ipateni ye-wildcard inikwe kwi-`WU_CLOUDWAYS_EXTRA_DOMAINS`, i
`*.` esekuqaleni iyasuswa phambi kwesicelo se-SSL — i-wildcard ngokwayo ayifakwa nanini na lolu
dityaniso. Ukusebenzisa isatifikethi se-wildcard ku-Cloudways kuya kufuneka usifake
ngesandla, kodwa ukwenza oko kuthintela ukukhutshwa kwe-Let's Encrypt kwidomain nganye yeedomain zesiko ezimaphiweyo
(jonga ingxaki engezantsi).

## Iidomain Ezongezelelweyo {#extra-domains}

I-constant `WU_CLOUDWAYS_EXTRA_DOMAINS` ikuvumela ukuba uchaze iidomain **zangaphandle**
ezongezelelweyo ekufuneka zihlale zigcinwe kuluhlu lwe-aliases lwe-application ye-Cloudways. Yisebenzisele:

- Iidomain zangaphandle ezingalawulwa yi-Ultimate Multisite (umz. isayithi eyahlukileyo yentengiso eyabelana nge-application enye ye-Cloudways)
- Iidomain ezipakiweyo okanye ze-staging ofuna zigcinwe kuluhlu lwe-aliases ze-application

**Musa** ukusebenzisa le constant kwi-subdomain wildcard yenethiwekhi yakho
(umz. `*.your-network.com`). Jonga ingxaki ye-wildcard SSL engezantsi.

## Okubalulekileyo — Ingxaki ye-Wildcard SSL {#important--wildcard-ssl-pitfall}

Impazamo eqhelekileyo xa kulandelwa ukumiselwa okungagqibekanga kwe-Cloudways kukongeza i-wildcard efana ne
`*.your-network.com` ku-`WU_CLOUDWAYS_EXTRA_DOMAINS`, okanye ukufaka ngesandla isatifikethi se-Cloudways
wildcard SSL saloo wildcard.

**Ukuba wenza oku, Cloudways iya kwala ukukhupha izatifikethi ze-Let's Encrypt zeedomain zesiko
zomqeshi ngamnye ezimaphiwa yi-Ultimate Multisite.** Cloudways itshintsha isatifikethi se
SSL esisebenzayo kwi-application qho, kwaye isatifikethi se-wildcard esele sikhona kwi
application sithintela ukukhutshwa kwe-Let's Encrypt kwidomain nganye oluxhomekeke kuko udityaniso.

### Ukumiselwa kwe-Cloudways SSL okucetyiswayo kwenethiwekhi ye-Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Kwithebhu ye-**SSL Certificate** ye-application ye-Cloudways, faka isatifikethi se-**standard
   Let's Encrypt certificate** esigubungela kuphela `your-network.com` kunye ne-`www.your-network.com`
   — **hayi** i-wildcard.
2. **Musa** ukubeka `*.your-network.com` (okanye nayiphi na ipateni ye-subdomain yenethiwekhi yakho) kwi
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Gcina loo constant yeedomain **zangaphandle** kuphela.
3. Yenza i-subdomain wildcard yomqeshi ngamnye kwinqanaba le-**DNS** kuphela (irekhodi ye-`A` ye
   `*.your-network.com` ekhomba kwi-IP ye-server yakho ye-Cloudways) ukuze iisayithi ezingaphantsi zifumaneke. I-SSL
   yeedomain zesiko ezimaphiweyo nganye ikhutshelwa ngokuzenzekelayo ludityaniso
   nge-Let's Encrypt.

Ukuba ii-domain zesiko zabaqeshi bakho zibambekile ngaphandle kwe-SSL, jonga ithebhu ye-SSL ye-Cloudways. Ukuba
isatifikethi se-wildcard siyasebenza apho, sisuse, uphinde ukhuphe isatifikethi esisemgangathweni se-Let's Encrypt
se-domain ephambili yenethiwekhi kuphela, kwaye ususe naluphi na ungeniso lwe-wildcard kwi
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Emva koko phinda uqalise imephu ye-domain (okanye ulinde elandelayo)
kwaye indibaniselwano iya kuqalisa ukukhupha izatifikethi ze-domain nganye kwakhona.

## Ukusombulula iingxaki {#troubleshooting}

### Iingxaki zonxibelelwano lwe-API {#api-connection-issues}
- Qinisekisa ukuba i-imeyile yakho kunye nesitshixo se-API zichanekile
- Jonga ukuba ii-ID zeseva kunye nezesicelo sakho zichanekile
- Qinisekisa ukuba i-Account yakho ye-Cloudways ineemvume eziyimfuneko

### Iingxaki zesatifikethi se-SSL {#ssl-certificate-issues}
- I-Cloudways ifuna ukuba ii-domain zibe neerekhodi ze-DNS ezisebenzayo ezikhomba kwiseva yakho ngaphambi kokukhupha izatifikethi ze-SSL
- Indibaniselwano iqinisekisa iirekhodi ze-DNS ngaphambi kokucela izatifikethi ze-SSL
- Ukuba izatifikethi ze-SSL azikhutshwa, jonga ukuba ii-domain zakho zikhomba ngokufanelekileyo kwidilesi ye-IP yeseva yakho
- **Ii-domain zesiko zomqeshi ngamnye zibambekile ngaphandle kwe-SSL?** Jonga ithebhu ye-SSL Certificate yesicelo se-Cloudways. Ukuba isatifikethi se-wildcard (esifakwe ngesandla, okanye esigubungela `*.your-network.com`) siyasebenza, i-Cloudways ayiyi kukhupha izatifikethi ze-Let's Encrypt zee-domain zesiko ezimephuweyo nganye nganye. Sitshintshe ngesatifikethi esisemgangathweni se-Let's Encrypt esigubungela kuphela i-domain ephambili yenethiwekhi (`your-network.com`, `www.your-network.com`) kwaye ususe naluphi na ungeniso lwe-wildcard kwi-`WU_CLOUDWAYS_EXTRA_DOMAINS`. Emva koko phinda uqalise imephu ye-domain (okanye ulinde elandelayo) kwaye indibaniselwano iya kucela izatifikethi ze-domain nganye.

### I-domain ayongezwanga {#domain-not-added}
- Jonga iilogi ze-Ultimate Multisite ukuba kukho nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba i-domain ayikongezwanga sele kwi-Cloudways
- Qinisekisa ukuba isicwangciso sakho se-Cloudways sixhasa inani lee-domain ozongezayo
