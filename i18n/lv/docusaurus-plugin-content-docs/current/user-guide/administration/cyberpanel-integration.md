---
title: CyberPanel integrācija
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integrācija {#cyberpanel-integration}

Šis ceļvedis iepina, kā konfigurēt Ultimate Multisite CyberPanel integrāciju, lai automātiski pievienotu (un atņemtu) mapeotus domēnus jūsu tīklā kā virtuālos hostus CyberPanel, ar iespējamo auto-SSL sniegšanu ar Let's Encrypt.

## Kas tas dara {#what-it-does}

- Kad domēnu mapejums tiek veikts Ultimate Multisite, integrācija izmanto CyberPanel API, lai izveidotu virtuālo hosti šai domēnai.
- Kad domēna mapejums tiek atņemts, integrācija izmanto API, lai izslēgtu atbilstošo virtuālo hosti.
- Ja auto-SSL ir ieslēgts, integrācija spēk vai certificate sniegšanu Let's Encrypt tieši pēc virtuālo hosta izveidošanas.
- Iespējami pievieno/atņem `www.` aliasu atkarībā no jūsu "Auto-create www subdomain" iestatījuma Domānu Mapejumu iestatījumos.

## Priekšpalikumi {#prerequisites}

- Darboša CyberPanel instanca (ieteicams v2.3 vai jaunāka), kas pieejama no jūsu WordPress servera.
- Ievadīts vietnes, kurā jau ir sniegts jūsu WordPress tīkla galvenais roots. Integrācija pievieno jaunas virtuālos hostus šim serveram.
- CyberPanel API piekļuves atspējots. Autentifikācija izmanto jūsu CyberPanel admina lietotāja nosaukumu un paroli.
- Jūsu DNS reģistri mapeotus domēnu ir jau jāuztver uz jūsu servera IP adresi, pirms auto-SSL var sniegt pareizu sertifikātu.

## Prasības {#requirements}

Sejām konstanți jādefinē jūsu `wp-config.php` failā:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Iespējami, var definēt arī:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — izveid Let's Encrypt SSL pēc domēna izveidošanas
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Izmantojams sertifikāta kontaktinformācijai

## Iestatījumu instrukcijas

### 1. Iespējot CyberPanel API

1. Loginieties uz savu CyberPanel dashboard administratora kā lietotāju.
2. Dodieties uz **Security** > **SSL** un atcerieties, ka SSL ir aktīvs pašā CyberPanel interfeisā (nepieciešams drošu API zvanus veikt).
3. CyberPanel API ir pieejams defaultā adrese `https://your-server-ip:8090/api/`. Tā iespējuve nepieciešamības, lai to ieslēgtu — tā pēc defaulta ir ieslēgta administratori lietotājiem.

### 2. Pievienojiet konstantes `wp-config.php` failā

Pievienojiet šo konstantes savam `wp-config.php` failam pirms līniju `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Auto-SSL ieslēgšanai (ieteicams):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Iespējot integrāciju

1. Savukārt, savā WordPress tīkla administrātorā dodieties uz **Ultimate Multisite** > **Settings**.
2. Navigējiet uz tabulu **Domain Mapping**.
3. Scrolliet nedal, lai atrastu **Host Integrations**.
4. Iespējiet integrāciju **CyberPanel**.
5. Nospressiet **Save Changes**.

### 4. Apstiprināt savienojamību

Izmantojiet iedarbīto savienojamības pārbaudi, kas ir pieejams iestatījumu wizardā:

1. Pārliecinieties, ka dodieties uz **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Nospiediet **Test Connection**.
3. Sākums ziņojums apstiprina, ka plugin var sasniegt CyberPanel API un pareizi autenticēties.

## Kā tas darbojas

### Domenes mapišana (Domain Mapping)

Kad domen tiek mapets Ultimate Multisite:

1. Integrācija sūta `POST` pieprasījumu uz `/api/createWebsite` jūsu CyberPanel hosta.
2. CyberPanel izveido jaunu virtuālo hosti domēnam konfiguriētā pakota zem.
3. Dokumentu galvenais virsraksts (document root) tiek iestatīts, lai viņš norādītu uz jūsu WordPress tīkla galveno virsraksta direktoriju.
4. Kad domen mapešana tiek atbalsta, integrācija sauc `/api/deleteWebsite`, lai tīrītu virtuālo hosti.

### Auto-SSL

Kad `WU_CYBERPANEL_AUTO_SSL` ir `true`:

1. Virtuālā hosta izveidoto pēc tam, integrācija sauc `/api/issueSSL` domēnam.
2. CyberPanel pieprasīs Let's Encrypt sertifikātu lietojot ACME HTTP-01 izaicinājumu (challenge).
3. Sertifikāts automātiski atjaunojas CyberPanelam pirms samazināšanas termiņa beigām.

> **Svarīgi:** DNS ir jāpropagējas pilnībā uz jūsu servera IP adresi, pirms Let's Encrypt var apstiprināt domēnu. Ja SSL izdošana neiztur tieši pēc mapešanas, gaidiet DNS propagāciju un atkārtoti sākiet SSL-u izdošanu no CyberPanel dashboarda zem **SSL** > **Manage SSL**.

### www Subdomēns

Ja **Auto-create www subdomain** ir ieslēgts jūsu Domenes Mapišanas iestatījumos, integrācija arī izveido virtuālo hosta aliasu `www.<domain>` un, ja auto-SSL ir ieslēgts, izdo sertifikātu, kas apgrūmē gan galveno (apex) un www variantus.

### E-pasta priekšpasūtītāji (Email Forwarders)

Kad [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ir aktīva, CyberPanel var sniegt arī klientu e-pasta priekšdarītājus (email forwarders). Priekšdarītāji pārvērš ziņojumus no domēna adresi uz citu ienstu bez izveidotu pilnu paštas lauka, kas ir noderīgs piemēram, aliasiem kā `info@customer-domain.test` vai `support@customer-domain.test`.

Pirms, kad ierobežot priekšdarītājus klientiem:

1. Pārbaudiet, ka augšpusējie CyberPanel konstants ir konfiguriēti un savienojuma tests veiksmīgi.
2. Iespējini CyberPanel e-pasta sniedzēju ieviesties Emails addon iestatījumos.
3. Pārbaudiet, vai klientu domēns jau ir pieejams CyberPanelā pirms priekšdarītāja izveidošanas.
4. Izveidi tests priekšdarītāju un sūtiet ziņojumu caur to, pirms piedāvāt funkciju produktīvās plānām.

Ja priekšdarītāja izveide neiztur, vispirms pārbaudiet Ultimate Multisite aktivitātes logus, pēc tam konfirmiti CyberPanelā, ka avoti domēns ir pieejams un ka API lietotājam ir e-pasta pārvaldības atļaujas.

## Konfigūras referance

| Konstants | Nepieciešams | Default | Apraksts |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Jā | — | Pilna URL adrese jūsu CyberPanel instancei iestrukāt, piemēram, `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Jā | — | CyberPanel admin lietotāja vārds |
| `WU_CYBERPANEL_PASSWORD` | Jā | — | CyberPanel admin paraksts |
| `WU_CYBERPANEL_PACKAGE` | Jā | `Default` | CyberPanel hostings paka, kas jāpiešķir jauniem virtuālajiem hostiem |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Izveidot Let's Encrypt SSL sertifikātu pēc domēna izveidošanas |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | PHP versija jauniem virtuālajiem hostiem (musi atbilst versijai, kas instalēta CyberPanelā) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | Kontakta e-pasta adrese SSL sertifikāta reģistrācijai |

## Saviņi svarīgas noteikumi

CyberPanel API izmanto sessijas atļaujas tokeni autentifikācijai. Integrācija automātiski iegūst tokeni katrā API zvanījumā.
Jums CyberPanel administrācijas kontai jābūt ar tiesībām izveidot un dzēst vietnes.
CyberPanel pēc defaulta darbojas portā `8090`. Ja jūsu serveris izmanto firewalli, nodrošiniet, ka šis ports ir pieejams no WordPress lietotāja servera.
Integrācija nevadī DNS reģistrātus. Jums jāpazod domēna DNS uz savas servera IP adresi pirms domēna mapejumu Ultimate Multisite-ā.
Ja jūs izmantojat OpenLiteSpeed (OLS), pēc virtuālās hostu maiņas automātiski notiek mīklais restart. Nav nepieciešams manas iejaukšanās.

## Kļūdu likums

### API savienojumaปฏิejama
- Pārbaudiet, vai port `8090` ir atvērs jūsu servera firewalli.
- Confirmējiet, ka `WU_CYBERPANEL_HOST` vērtība ietver pareizu protokolu (`https://`) un portu.
- Pārbaudiet, vai jūsu CyberPanel SSL sertifikāts ir veidsīgs; pašapiedāvātajiem sertifikāti var izraisīt TLS pārbaudes kļūdas. Iestatiet `WU_CYBERPANEL_VERIFY_SSL` uz `false` tikai drošos privātās tīklas vidē.

### Autentifikācijas kļūdas
- Confirmējiet, ka jūsu `WU_CYBERPANEL_USERNAME` un `WU_CYBERPANEL_PASSWORD` ir pareizi, iekļaujoties tieši CyberPanelim.
- CyberPanel aizver kontus pēc atkārtotu neizlaides mēģinājumiem iekļauties. Pārbaudiet **Security** > **Brute Force Monitor** CyberPanelī, ja notiek aizveres.

### Domēna nav izveidota
- Pārbaudiet Ultimate Multisite aktivitātes logu (**Ultimate Multisite** > **Activity Logs**) API kļūdu ziņojumus.
- Confirmējiet, ka pakuģis, kas definēts `WU_CYBERPANEL_PACKAGE` var atrodas CyberPanelī (**Packages** > **List Packages**).
- Nodrošiniet, ka domēna nav jau reģistrēta vietnes CyberPanelī — duplikātās vietnes izveide atrod erroru.

### SSL sertifikāta neizdošana

* Apstipriniet, ka DNS ir pilnībā propagēts: `dig +short your-domain.com` atbilde jāatrod jūsu servera IP adrese.
* Let's Encrypt uzliec likumsanības (rate limits). Ja jūs laika gaitā izdoši vairākus sertifikātus vienam un tiem pašam domēniem, gaidiet pirms atkārtotas mēģinājuma.
* Pārbaudiet CyberPanel SSL logus sadaļā **Logs** > **Error Logs**, lai saņemtu sīkpiestumus par sertifikāta izdošanas neuzstādījumus.
* Kā aizvietojums, jūs varat manuāli izdoši SSL no CyberPanel: **SSL** > **Manage SSL** > izvēlieties domēnu > **Issue SSL**.

## Pēc referencēm

- CyberPanel API Dokumentācija: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL pārvaldība: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt likumsanības (Rate Limits): https://letsencrypt.org/docs/rate-limits/
