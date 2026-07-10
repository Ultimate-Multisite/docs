---
title: Udibaniso lwe-CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Udibaniso lweCyberPanel {#cyberpanel-integration}

Esi sikhokelo sichaza indlela yokumisela udibaniso lweUltimate Multisite CyberPanel ukuze ii-domain ezimaphwe kwinethiwekhi yakho zongezwe ngokuzenzekelayo (kwaye zisuswe) njengee-virtual host kwiCyberPanel, ngokubonelelwa kwe-auto-SSL ngokuzikhethela ngeLet's Encrypt.

## Into Oluyenzayo {#what-it-does}

- Xa i-domain imaphwe kwiUltimate Multisite, udibaniso lubiza iCyberPanel API ukudala i-virtual host yaloo domain.
- Xa imephu ye-domain isusiwe, udibaniso lubiza i-API ukucima i-virtual host ehambelanayo.
- Xa i-auto-SSL yenziwe yasebenza, udibaniso luqalisa ukukhutshwa kwesatifikethi seLet's Encrypt ngoko nangoko emva kokuba i-virtual host idaliwe.
- Ngokuzikhethela longeza/lisuse i-alias ye-`www.` ngokuxhomekeke kuseto lwakho lwe-"Yenza ngokuzenzekelayo i-www subdomain" kwiisetingi zeDomain Mapping.

## Izinto Ezifunekayo Kwangaphambili {#prerequisites}

- I-instance yeCyberPanel esebenzayo (v2.3 okanye kamva kuyacetyiswa) efikelelekayo kwiseva yakho yeWordPress.
- Iwebhusayithi ekhoyo kwiCyberPanel esele isebenzela ingcambu yenethiwekhi yakho yeWordPress. Udibaniso luncamathelisa ii-virtual host ezintsha kule seva.
- Ufikelelo lweCyberPanel API luvuliwe. Uqinisekiso lusebenzisa igama lomsebenzisi lomlawuli ne-password yakho yeCyberPanel.
- Iirekhodi zakho zeDNS zee-domain ezimaphwe kufuneka sele zikhomba kwidilesi ye-IP yeseva yakho ngaphambi kokuba i-auto-SSL ikhuphe isatifikethi esisebenzayo.

## Iimfuno {#requirements}

Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho ye-`wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ngokuzikhethela, unokuchaza kwakhona:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Imiyalelo Yokuseta {#setup-instructions}

### 1. Vula iCyberPanel API {#1-enable-the-cyberpanel-api}

1. Ngena kwi-CyberPanel dashboard yakho njengomlawuli.
2. Yiya ku-**Ukhuseleko** > **SSL** uze uqinisekise ukuba i-SSL iyasebenza kwi-interface yeCyberPanel ngokwayo (iyafuneka kwiifowuni ze-API ezikhuselekileyo).
3. I-CyberPanel API ifumaneka ku-`https://your-server-ip:8090/api/` ngokungagqibekanga. Akukho manyathelo ongezelelweyo afunekayo ukuyivula — ivuliwe ngokungagqibekanga kubasebenzisi abangabalawuli.

### 2. Yongeza iiConstants kwi-wp-config.php {#2-add-constants-to-wp-configphp}

Yongeza ezi constants zilandelayo kwifayile yakho ye-`wp-config.php` ngaphambi komgca we-`/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ukuvula i-auto-SSL (kuyacetyiswa):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Vula Udibaniso {#3-enable-the-integration}

1. Kulawulo lwenethiwekhi yakho yeWordPress, yiya ku-**Ultimate Multisite** > **Iisetingi**.
2. Hamba uye kwithebhu ye-**Domain Mapping**.
3. Skrolela ezantsi ku-**Udibaniso LweHost**.
4. Vula udibaniso lwe-**CyberPanel**.
5. Cofa **Gcina Utshintsho**.

### 4. Qinisekisa Uqhagamshelwano {#4-verify-connectivity}

Sebenzisa uvavanyo loqhagamshelwano olwakhelweyo kwi-wizard yeesetingi:

1. Yiya ku-**Ultimate Multisite** > **Iisetingi** > **Domain Mapping** > **Udibaniso LweHost** > **CyberPanel**.
2. Cofa **Vavanya Uqhagamshelwano**.
3. Umyalezo wempumelelo uqinisekisa ukuba i-plugin inokufikelela kwiCyberPanel API kwaye iqinisekise ngokuchanekileyo.

## Indlela Esebenza Ngayo {#how-it-works}

### Domain Mapping {#domain-mapping}

Xa i-domain imaphwe kwiUltimate Multisite:

1. Udibaniso luthumela isicelo se-`POST` ku-`/api/createWebsite` kwi-host yakho yeCyberPanel.
2. ICyberPanel idala i-virtual host entsha ye-domain phantsi kwepackage emiselweyo.
3. Ingcambu yoxwebhu isetwa ukuba ikhombise kwidirectory yengcambu yenethiwekhi yakho yeWordPress.
4. Xa imephu ye-domain isusiwe, udibaniso lubiza u-`/api/deleteWebsite` ukucoca i-virtual host.

### Auto-SSL {#auto-ssl}

Xa `WU_CYBERPANEL_AUTO_SSL` iyi-`true`:

1. Emva kokuba i-virtual host idaliwe, udibaniso lubiza u-`/api/issueSSL` ye-domain.
2. ICyberPanel icela isatifikethi seLet's Encrypt isebenzisa umngeni we-ACME HTTP-01.
3. Isatifikethi sihlaziywa ngokuzenzekelayo yiCyberPanel ngaphambi kokuphelelwa lixesha.

> **Kubalulekile:** I-DNS kufuneka isasazeke ngokupheleleyo kwidilesi ye-IP yeseva yakho ngaphambi kokuba iLet's Encrypt iqinisekise i-domain. Ukuba ukukhutshwa kwe-SSL kuyasilela ngoko nangoko emva kokumapha, linda ukusasazeka kweDNS uze uphinde uqalise i-SSL kwi-CyberPanel dashboard phantsi kwe-**SSL** > **Lawula i-SSL**.

### www Subdomain {#www-subdomain}

Ukuba **Yenza ngokuzenzekelayo i-www subdomain** ivuliwe kwiisetingi zakho zeDomain Mapping, udibaniso lukwadala i-alias ye-virtual host ye-`www.<domain>` kwaye, xa i-auto-SSL ivuliwe, lukhupha isatifikethi esigubungela zombini i-apex neenguqulelo ze-www.

### Izithumeli Ze-imeyile {#email-forwarders}

Xa i-addon ye-[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) isebenza, iCyberPanel inokubonelela ngezithumeli ze-imeyile zabathengi. Izithumeli zihambisa imiyalezo ukusuka kwidilesi ye-domain ukuya kwenye i-inbox ngaphandle kokudala i-mailbox epheleleyo, nto leyo iluncedo kwii-alias ezifana ne-`info@customer-domain.test` okanye `support@customer-domain.test`.

Ngaphambi kokuvulela abathengi izithumeli:

1. Qinisekisa ukuba ii-constants zeCyberPanel ezingentla ziqwalaselwe kwaye uvavanyo loqhagamshelwano luyaphumelela.
2. Vula umboneleli we-imeyile weCyberPanel kwiisetingi ze-addon yeEmails.
3. Qinisekisa ukuba i-domain yomthengi sele ikhona kwiCyberPanel ngaphambi kokudala isithumeli.
4. Dala isithumeli sovavanyo uze uthumele umyalezo ngaso ngaphambi kokunikezela ngeli nqaku kwiiplan zemveliso.

Ukuba ukudalwa kwesithumeli kuyasilela, jonga kuqala iilog zomsebenzi zeUltimate Multisite, emva koko uqinisekise kwiCyberPanel ukuba i-domain yomthombo ikhona kwaye umsebenzisi we-API uneemvume zolawulo lwe-imeyile.

## Isalathiso Soqwalaselo {#configuration-reference}

| Constant | Iyafuneka | Okungagqibekanga | Inkcazelo |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ewe | — | I-URL epheleleyo kwi-instance yakho yeCyberPanel kuquka i-port, umz. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ewe | — | Igama lomsebenzisi lomlawuli weCyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ewe | — | I-password yomlawuli weCyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ewe | `Default` | Ipackage yokusingatha yeCyberPanel eza kunikwa ii-virtual host ezintsha |
| `WU_CYBERPANEL_AUTO_SSL` | Hayi | `true` | Khupha isatifikethi se-SSL seLet's Encrypt emva kokudalwa kwe-domain |
| `WU_CYBERPANEL_PHP_VERSION` | Hayi | `PHP 8.2` | Uhlobo lwePHP lwee-virtual host ezintsha (kufuneka luhambelane nohlobo olufakiweyo kwiCyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Hayi | — | I-imeyile yoqhagamshelwano yobhaliso lwesatifikethi se-SSL |

## Amanqaku Abalulekileyo {#important-notes}

- I-API yeCyberPanel isebenzisa uqinisekiso lwe-token olusekelwe kwiseshoni. Udibaniso luphatha ukufunyanwa kwe-token ngokuzenzekelayo kwifowuni nganye ye-API.
- I-akhawunti yakho yomlawuli weCyberPanel kufuneka ibe neemvume zokudala nokucima iiwebhusayithi.
- ICyberPanel isebenza kwi-port `8090` ngokungagqibekanga. Ukuba iseva yakho isebenzisa i-firewall, qinisekisa ukuba le port iyafikeleleka kwiseva yesicelo seWordPress.
- Udibaniso alulawuli iirekhodi zeDNS. Kufuneka ukhombise i-DNS ye-domain kwidilesi ye-IP yeseva yakho ngaphambi kokumapha i-domain kwiUltimate Multisite.
- Ukuba usebenzisa i-OpenLiteSpeed (OLS), ukuqaliswa kwakhona okuthambileyo kuqalisa ngokuzenzekelayo emva kotshintsho lwe-virtual host. Akukho kungenelela ngesandla kufunekayo.

## Ukusombulula Iingxaki {#troubleshooting}

### Uqhagamshelwano lwe-API Lwaliwe {#api-connection-refused}

- Qinisekisa ukuba i-port `8090` ivuliwe kwi-firewall yeseva yakho.
- Qinisekisa ukuba ixabiso le-`WU_CYBERPANEL_HOST` libandakanya iprotocol echanekileyo (`https://`) kunye ne-port.
- Jonga ukuba isatifikethi sakho se-SSL seCyberPanel siyasebenza; izatifikethi ezizityikityileyo zinokubangela ukusilela kokuqinisekisa kweTLS. Seta `WU_CYBERPANEL_VERIFY_SSL` ku-`false` kuphela kwiimeko zenethiwekhi yabucala ethembekileyo.

### Iimpazamo Zokuqinisekisa {#authentication-errors}

- Qinisekisa ukuba `WU_CYBERPANEL_USERNAME` kunye ne-`WU_CYBERPANEL_PASSWORD` zakho zichanekile ngokungena ngqo kwiCyberPanel.
- ICyberPanel ivala ii-akhawunti emva kwemizamo emininzi yokungena engaphumelelanga. Jonga **Ukhuseleko** > **Isilawuli seBrute Force** kwiCyberPanel ukuba ukuvalwa kuyenzeka.

### I-Domain Ayidalwanga {#domain-not-created}

- Jonga ilog yomsebenzi yeUltimate Multisite (**Ultimate Multisite** > **Iilog Zomsebenzi**) ngemiyalezo yeempazamo ze-API.
- Qinisekisa ukuba ipackage echazwe ku-`WU_CYBERPANEL_PACKAGE` ikhona kwiCyberPanel (**Iipackage** > **Uluhlu LweePackage**).
- Qinisekisa ukuba i-domain ayikabhaliswa kakade njengewebhusayithi kwiCyberPanel — ukudalwa kwewebhusayithi ephindwe kabini kubuyisa impazamo.

### Isatifikethi se-SSL Asikhutshwanga {#ssl-certificate-not-issued}

- Qinisekisa ukuba iDNS isasazeke ngokupheleleyo: `dig +short your-domain.com` kufuneka ibuyise i-IP yeseva yakho.
- ILet's Encrypt inyanzelisa imida yesantya. Ukuba kutshanje ukhuphe izatifikethi ezininzi ze-domain enye, linda ngaphambi kokuzama kwakhona.
- Jonga iilog ze-SSL zeCyberPanel phantsi kwe-**Iilog** > **Iilog Zeempazamo** ukuze ufumane iinkcukacha zokusilela kokukhutshwa kwesatifikethi.
- Njengendlela yokubuyela emva, unokukhupha i-SSL ngesandla kwiCyberPanel: **SSL** > **Lawula i-SSL** > khetha i-domain > **Khupha i-SSL**.

## Iimbekiselo {#references}

- Amaxwebhu eCyberPanel API: https://docs.cyberpanel.net/docs/category/api
- Ulawulo lweCyberPanel SSL: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Imida Yesantya yeLet's Encrypt: https://letsencrypt.org/docs/rate-limits/
