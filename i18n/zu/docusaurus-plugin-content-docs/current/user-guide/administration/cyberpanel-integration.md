---
title: Ukuhlanganiswa kwe-CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Ukuhlanganiswa kwe-CyberPanel {#cyberpanel-integration}

Lo mhlahlandlela uchaza indlela yokulungisa ukuhlanganiswa kwe-Ultimate Multisite CyberPanel ukuze izizinda ezimephwe kunethiwekhi yakho zengezwe ngokuzenzakalelayo (futhi zisuswe) njengabasingathi ababonakalayo ku-CyberPanel, ngokuhlinzekwa kwe-auto-SSL kokuzikhethela nge-Let's Encrypt.

## Lokho Ekwenzayo {#what-it-does}

- Lapho isizinda simephwa ku-Ultimate Multisite, ukuhlanganiswa kubiza i-CyberPanel API ukudala umsingathi obonakalayo waleso sizinda.
- Lapho ukumephwa kwesizinda kususwa, ukuhlanganiswa kubiza i-API ukususa umsingathi obonakalayo ohambisanayo.
- Lapho i-auto-SSL ivuliwe, ukuhlanganiswa kuqalisa ukukhishwa kwesitifiketi se-Let's Encrypt ngokushesha ngemva kokuba umsingathi obonakalayo edaliwe.
- Ngokuzikhethela kwengeza/kususa isiteketiso se-`www.` kuye ngesilungiselelo sakho esithi "Dala ngokuzenzakalelayo isizinda esingaphansi se-www" kuzilungiselelo Zokumepha Izizinda.

## Okudingekayo Ngaphambi Kokuqala {#prerequisites}

- I-CyberPanel instance esebenzayo (kunconywa i-v2.3 noma yakamuva) efinyeleleka kuseva yakho ye-WordPress.
- Iwebhusayithi ekhona ku-CyberPanel esivele isebenzela impande yenethiwekhi yakho ye-WordPress. Ukuhlanganiswa kunamathisela abasingathi ababonakalayo abasha kule seva.
- Ukufinyelela kwe-CyberPanel API kuvuliwe. Ukuqinisekisa kusebenzisa igama lakho lomsebenzisi lomphathi we-CyberPanel nephasiwedi.
- Amarekhodi akho e-DNS ezizinda ezimephwe kufanele asevele ekhomba ekhelini le-IP leseva yakho ngaphambi kokuthi i-auto-SSL ikwazi ukukhipha isitifiketi esivumelekile.

## Izimfuneko {#requirements}

Ama-constant alandelayo kufanele achazwe efayeleni lakho le-`wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ngokuzikhethela, ungachaza futhi:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Imiyalelo Yokusetha {#setup-instructions}

### 1. Vula i-CyberPanel API {#1-enable-the-cyberpanel-api}

1. Ngena ku-dashboard yakho ye-CyberPanel njengomlawuli.
2. Iya ku-**Ukuphepha** > **SSL** bese uqinisekisa ukuthi i-SSL iyasebenza kusixhumi esibonakalayo se-CyberPanel uqobo (kudingeka ukuze kube nezingcingo ze-API ezivikelekile).
3. I-CyberPanel API itholakala ku-`https://your-server-ip:8090/api/` ngokuzenzakalelayo. Azikho izinyathelo ezengeziwe ezidingekayo ukuyivula — ivuliwe ngokuzenzakalelayo kubasebenzisi abangabaphathi.

### 2. Engeza Ama-constant ku-wp-config.php {#2-add-constants-to-wp-configphp}

Engeza ama-constant alandelayo efayeleni lakho le-`wp-config.php` ngaphambi komugqa othi `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ukuze uvule i-auto-SSL (kunconywa):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Vula Ukuhlanganiswa {#3-enable-the-integration}

1. Ku-admin yenethiwekhi yakho ye-WordPress, iya ku-**Ultimate Multisite** > **Izilungiselelo**.
2. Zulazulela kuthebhu ethi **Ukumepha Izizinda**.
3. Skrolela phansi ku-**Ukuhlanganiswa Kwabasingathi**.
4. Vula ukuhlanganiswa kwe-**CyberPanel**.
5. Chofoza **Londoloza Izinguquko**.

### 4. Qinisekisa Ukuxhumeka {#4-verify-connectivity}

Sebenzisa ukuhlolwa kokuxhumeka okwakhelwe ngaphakathi ku-wizard yezilungiselelo:

1. Iya ku-**Ultimate Multisite** > **Izilungiselelo** > **Ukumepha Izizinda** > **Ukuhlanganiswa Kwabasingathi** > **CyberPanel**.
2. Chofoza **Hlola Ukuxhumeka**.
3. Umlayezo wempumelelo uqinisekisa ukuthi i-plugin ingafinyelela ku-CyberPanel API futhi iqinisekise kahle.

## Isebenza Kanjani {#how-it-works}

### Ukumepha Izizinda {#domain-mapping}

Lapho isizinda simephwa ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthumela isicelo se-`POST` ku-`/api/createWebsite` kumsingathi wakho we-CyberPanel.
2. I-CyberPanel idala umsingathi obonakalayo omusha wesizinda ngaphansi kwephakheji elilungisiwe.
3. Impande yedokhumenti isethwa ukuthi ikhomba kufolda yempande yenethiwekhi yakho ye-WordPress.
4. Lapho ukumephwa kwesizinda kususwa, ukuhlanganiswa kubiza i-`/api/deleteWebsite` ukuhlanza umsingathi obonakalayo.

### Auto-SSL {#auto-ssl}

Lapho `WU_CYBERPANEL_AUTO_SSL` iyi-`true`:

1. Ngemva kokuba umsingathi obonakalayo edaliwe, ukuhlanganiswa kubiza i-`/api/issueSSL` yesizinda.
2. I-CyberPanel icela isitifiketi se-Let's Encrypt isebenzisa inselele ye-ACME HTTP-01.
3. Isitifiketi sivuselelwa ngokuzenzakalelayo yi-CyberPanel ngaphambi kokuphelelwa yisikhathi.

> **Okubalulekile:** I-DNS kufanele isabalale ngokuphelele iye ekhelini le-IP leseva yakho ngaphambi kokuthi i-Let's Encrypt ikwazi ukuqinisekisa isizinda. Uma ukukhishwa kwe-SSL kwehluleka ngokushesha ngemva kokumepha, linda ukusabalala kwe-DNS bese uphinde uqalise i-SSL ku-dashboard ye-CyberPanel ngaphansi kokuthi **SSL** > **Phatha i-SSL**.

### Isizinda Esingaphansi se-www {#www-subdomain}

Uma **Dala ngokuzenzakalelayo isizinda esingaphansi se-www** kuvuliwe kuzilungiselelo zakho Zokumepha Izizinda, ukuhlanganiswa kudala futhi isiteketiso somsingathi obonakalayo se-`www.<domain>` futhi, lapho i-auto-SSL ivuliwe, kukhipha isitifiketi esimboza kokubili izinguqulo ze-apex ne-www.

### Abadluliseli Be-imeyili {#email-forwarders}

Lapho i-addon ethi [Ultimate Multisite: Ama-imeyili](../../addons/ultimate-multisite-emails/) isebenza, i-CyberPanel inganikeza futhi abadluliseli be-imeyili bamakhasimende. Abadluliseli baqondisa imilayezo isuka ekhelini lesizinda iye kwenye inbox ngaphandle kokudala ibhokisi leposi eligcwele, okuwusizo kwiziteketiso ezifana ne-`info@customer-domain.test` noma `support@customer-domain.test`.

Ngaphambi kokuvulela amakhasimende abadluliseli:

1. Qinisekisa ukuthi ama-constant e-CyberPanel angenhla alungisiwe nokuthi ukuhlolwa kokuxhumeka kuyaphumelela.
2. Vula umhlinzeki we-imeyili we-CyberPanel kuzilungiselelo ze-addon yama-imeyili.
3. Qinisekisa ukuthi isizinda sekhasimende sesivele sikhona ku-CyberPanel ngaphambi kokudala umdluliseli.
4. Dala umdluliseli wokuhlola bese uthumela umlayezo ngawo ngaphambi kokunikeza lesi sici kumapulani okukhiqiza.

Uma ukudalwa komdluliseli kwehluleka, hlola kuqala amalogi omsebenzi we-Ultimate Multisite, bese uqinisekisa ku-CyberPanel ukuthi isizinda somthombo sikhona nokuthi umsebenzisi we-API unezimvume zokuphatha i-imeyili.

## Ireferensi Yokulungisa {#configuration-reference}

| Constant | Kuyadingeka | Okuzenzakalelayo | Incazelo |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yebo | — | I-URL ephelele eya ku-CyberPanel instance yakho okuhlanganisa ne-port, isb. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yebo | — | Igama lomsebenzisi lomphathi we-CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yebo | — | Iphasiwedi yomphathi we-CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yebo | `Default` | Iphakheji lokubamba le-CyberPanel elizokwabelwa abasingathi ababonakalayo abasha |
| `WU_CYBERPANEL_AUTO_SSL` | Cha | `true` | Khipha isitifiketi se-Let's Encrypt SSL ngemva kokudalwa kwesizinda |
| `WU_CYBERPANEL_PHP_VERSION` | Cha | `PHP 8.2` | Inguqulo ye-PHP yabasingathi ababonakalayo abasha (kufanele ifane nenguqulo efakiwe ku-CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Cha | — | I-imeyili yokuxhumana yokubhaliswa kwesitifiketi se-SSL |

## Amanothi Abalulekile {#important-notes}

- I-API ye-CyberPanel isebenzisa ukuqinisekisa okusekelwe ku-token yeseshini. Ukuhlanganiswa kuphatha ukutholwa kwe-token ngokuzenzakalelayo kukho konke ukubizwa kwe-API.
- I-Account yakho yomphathi we-CyberPanel kufanele ibe nezimvume zokudala nokususa amawebhusayithi.
- I-CyberPanel isebenza ku-port `8090` ngokuzenzakalelayo. Uma iseva yakho isebenzisa i-firewall, qinisekisa ukuthi le port iyafinyeleleka kuseva yohlelo lokusebenza lwe-WordPress.
- Ukuhlanganiswa akuphathi amarekhodi e-DNS. Kufanele ukhombise i-DNS yesizinda ekhelini le-IP leseva yakho ngaphambi kokumepha isizinda ku-Ultimate Multisite.
- Uma usebenzisa i-OpenLiteSpeed (OLS), ukuqalisa kabusha okuthambile kuqalwa ngokuzenzakalelayo ngemva kwezinguquko zomsingathi obonakalayo. Akudingeki ukungenelela ngesandla.

## Ukuxazulula Izinkinga {#troubleshooting}

### Ukuxhumeka kwe-API Kunqatshiwe {#api-connection-refused}

- Qinisekisa ukuthi i-port `8090` ivuliwe ku-firewall yeseva yakho.
- Qinisekisa ukuthi inani le-`WU_CYBERPANEL_HOST` lifaka iphrothokholi efanele (`https://`) ne-port.
- Hlola ukuthi isitifiketi sakho se-CyberPanel SSL sivumelekile; izitifiketi ezisayinwe ngokwazo zingabangela ukwehluleka kokuqinisekisa kwe-TLS. Setha i-`WU_CYBERPANEL_VERIFY_SSL` ibe `false` kuphela ezindaweni zenethiwekhi yangasese ezithembekile.

### Amaphutha Okuqinisekisa {#authentication-errors}

- Qinisekisa ukuthi i-`WU_CYBERPANEL_USERNAME` yakho ne-`WU_CYBERPANEL_PASSWORD` zilungile ngokungena ngqo ku-CyberPanel.
- I-CyberPanel ikhiya ama-Account ngemva kwemizamo eminingi yokungena ehlulekile. Hlola **Ukuphepha** > **Brute Force Monitor** ku-CyberPanel uma kwenzeka ukuvalelwa ngaphandle.

### Isizinda Asidalwanga {#domain-not-created}

- Hlola ilogi yomsebenzi ye-Ultimate Multisite (**Ultimate Multisite** > **Amalogi Omsebenzi**) ukuze uthole imilayezo yamaphutha e-API.
- Qinisekisa ukuthi iphakheji elichazwe ku-`WU_CYBERPANEL_PACKAGE` likhona ku-CyberPanel (**Amaphakheji** > **Uhlu Lwamaphakheji**).
- Qinisekisa ukuthi isizinda asikabhaliswa kakade njengewebhusayithi ku-CyberPanel — ukudalwa kwewebhusayithi eyimpinda kubuyisa iphutha.

### Isitifiketi se-SSL Asikhishiwe {#ssl-certificate-not-issued}

- Qinisekisa ukuthi i-DNS isisabalele ngokuphelele: `dig +short your-domain.com` kufanele ibuyise i-IP yeseva yakho.
- I-Let's Encrypt iphoqelela imikhawulo yezinga. Uma usanda kukhipha izitifiketi eziningana zesizinda esifanayo, linda ngaphambi kokuzama futhi.
- Hlola amalogi e-CyberPanel SSL ngaphansi kokuthi **Amalogi** > **Amalogi Amaphutha** ukuze uthole imininingwane yokwehluleka kokukhishwa kwesitifiketi.
- Njengenye indlela, ungakhipha i-SSL ngesandla ku-CyberPanel: **SSL** > **Phatha i-SSL** > khetha isizinda > **Khipha i-SSL**.

## Izinkomba {#references}

- Imibhalo ye-CyberPanel API: https://docs.cyberpanel.net/docs/category/api
- Ukuphathwa kwe-CyberPanel SSL: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Imikhawulo Yezinga ye-Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
