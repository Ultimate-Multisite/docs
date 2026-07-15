---
title: Isdhexgalka CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Tani halkan waa sida aad u hagaajinayso isku-dhafka (integration) Ultimate Multisite CyberPanel si ay domain-yada aad ku xirto (mapped domains) si toos ah ugu ku darto (and remove) virtual hosts-ka CyberPanel, iyadoo la isticmaalayo SSL oo is-dhaafaya (auto-SSL provisioning) ee Let's Encrypt.

## Waa Maxay Waxa Aad Samaynaysaa {#what-it-does}

- Marka domain la xiro Ultimate Multisite-ka, isku-dhafku wuxuu u socdaa CyberPanel API si uu u abuuro virtual host-kaas.
- Marka la saaro xiritaanka domain-ka (domain mapping), isku-dhafku wuxuu u socdaa API si uu u fuliyo (delete) virtual host-ka la midka ah.
- Haddii auto-SSL la iifiyo, isku-dhafku wuxuu si degdeg ah u bilaabaa bixinta shahaadada Let's Encrypt ka dib markii virtual host-ka la abuuro.
- Waxaa laga beddeli karaa/la saari karaa alias-ka `www.` iyadoo ku xiran dejinta "Auto-create www subdomain" ee aad samaysay dejinta Domain Mapping.

## Shuruudaha Muhiimka ah (Prerequisites) {#prerequisites}

- CyberPanel socda oo la mid ah (v2.3 ama ka dhimis ah ayaa lagu talinayaa) oo laga heli karo server-ka WordPress-kaaga.
- Website jira oo ku yaalla CyberPanel kaas oo hore u adeegayo koobka asalka (root) ee network-ka WordPress-kaaga. Isku-dhafku wuxuu ku darsanayaa virtual hosts cusub server-kan.
- Helitaanka API-ga CyberPanel waa la iifiyay. Xaqiijinta (Authentication) waxaa lagu samayn doonaa username-ka iyo password-ka admin-kaaga CyberPanel.
- Waxyaabaha DNS-ka ah ee domain-yada la xiray waa inay hore u socda IP-ga server-kaaga ka hor inta aan auto-SSL-ku bixin karo shahaadad sax ah.

## Shuruudaha (Requirements) {#requirements}

Waxaa in lambarrada (constants) soo socda lagu qoro faylkaaga `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Waxaa laga beddeli karaa/la saari karaa:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Tilmaanta Waxyaabaha Lagu Dhisayo (Setup Instructions) {#setup-instructions}

### 1. Furista API-ga CyberPanel {#1-enable-the-cyberpanel-api}

1. Isku gal dashboard-kaaga CyberPanel oo ah maamulaha (administrator).
2. Tag **Security** > **SSL** oo hubi in SSL-ku uu shaqaynayo interface-ka CyberPanel-ka isha (wixii loo baahan yahay in la xiriirayo API-ga si loo helo xiriirro badbaado ah).
3. API-ga CyberPanel wuxuu ku jiraa `https://your-server-ip:8090/api/` iyadoo aan la baahnayn talaabooyin dheeri ah oo lagu furayo — hadda waa la furay (on) macmiilada maamulaha (admin users).

### 2. Ku dar Isticmaalayaasha (Constants) ee wp-config.php {#2-add-constants-to-wp-configphp}

Ku dar isticmaalayaasha soo socda faylkaaga `wp-config.php` ka hor safarka `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Si aad u furto auto-SSL (la talo leh):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Furista Isdhexgalka (Integration) {#3-enable-the-integration}

1. Maamulka shirkadda WordPress-kaaga (WordPress network admin), tag **Ultimate Multisite** > **Settings**.
2. Tag tab-ka **Domain Mapping**.
3. Hoos u soo saar **Host Integrations**.
4. Fur **CyberPanel** integration-ka.
5. Click **Save Changes** (Wax ka badbaadinta isbeddellada).

### 4. Hubinta Xiriirka (Verify Connectivity) {#4-verify-connectivity}

Isticmaal hubinta xiriirka ee ku jirta wizard-ka settings:

1. Tag **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Gujiir **Test Connection**.
3. Fariin ku guulaysasho ayaa xaqiijinaya in plugin-ka uu gaari karo API-ga CyberPanel oo si sax ah u aqoonsanayo.

## Sida Ay U Shaqeeyo {#how-it-works}

### Domain Mapping (Xiriirka Doonista) {#domain-mapping}

Marka domain la sameeyo Ultimate Multisite:

1. Isku xirka ayaa diraya request `POST` ah `/api/createWebsite` ku socda server-kaaga CyberPanel.
2. CyberPanel wuxuu abuuraa host cusub oo virtual (virtual host) doonista si ay u raacdo package-ka aad dejisay.
3. Goobta faylka asalka ah (document root) waxaa loo dejinaya inuu diiro goobta asalka shirkadda WordPress-kaaga.
4. Marka la saaro domain mapping-ka, isku xirka ayaa wicitaan ku samaynaya `/api/deleteWebsite` si loo nadiifiyo host-ka virtual-ka ah.

### Auto-SSL (SSL-ka Is-dhaafidda) {#auto-ssl}

Marka `WU_CYBERPANEL_AUTO_SSL` uu yahay `true`:

1. Marka la abuuro host-ka virtual-ka ah, isku xirka ayaa wicitaan ku samaynaya `/api/issueSSL` doonista.
2. CyberPanel wuxuu codsi qaadaya shahaadada Let's Encrypt iyadoo la isticmaalayo ACME HTTP-01 challenge.
3. Shahaadadu waxay si toos ah dib u soo celisaa (renew) CyberPanel ka hor inta aanay dhammaan.

> **Muhiim:** DNS-ka waa inuu si buuxda ugu gudbo IP-ga server-kaaga ka hor inta Let's Encrypt uu aqoonsado doonista. Haddii SSL-ku ku guuldarray isla markiiba ka dib marka la sameeyay mapping-ka, sug inaad DNS-ka u gudubto oo dib u bilaaw SSL-ka iyadoo la isticmaalayo dashboard-ka CyberPanel ee **SSL** > **Manage SSL**.

### www Subdomain (Subdomain-ka www) {#www-subdomain}

Haddii **Auto-create www subdomain** uu furan yahay dejinta Domain Mapping-kaaga, isku xirka wuxuu abuuraa sidoo kale alias host virtual ah oo loogu talagalay `www.<domain>` iyo marka Auto-SSL uu shaqeeyo, wuxuu siinayaa shahaadada ku habboon labada nooc (apex iyo www).

### Email Forwarders (Isdiiwaangeliyeya Email-ka) {#email-forwarders}

Markabka [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon-ka shaqada hadda ku jirta, CyberPanel sidoo kale wuxuu bixin karaa adeegga isbeddel email-ka macaamiisha (customer email forwarders). Forwarder-ku wuxuu u dirayaa fariimaha domain-ka laba meel oo aan la abuuri xog-bixiye (mailbox) oo dhammaystiran, taasoo faa'iido leh oo loogu talagalay alias-yada sida `info@customer-domain.test` ama `support@customer-domain.test`.

Ka hor intaadan u furin forwarders-ka macaamiisha:

1. Hubi in badankii CyberPanel ee kor ku jira ay si sax ah loo dejiyay isla markaana baaritaanka xiriirka uu guuleysto.
2. Fur adeegga email-ka CyberPanel ee dejinta addon-ka Emails.
3. Hubi in domain-ka macaamiisha horeba u jiro CyberPanel ka hor intaadan abuuri forwarder-ka.
4. Samee forwarder test ah oo dir fariin iyada ka dib intaadan bixinayso adeegga kuwo waaweyn (production plans).

Haddii habka sameynta forwarder-ku uu fashilmo, marka hore hubi logs-ka hawlgalka Ultimate Multisite, ka dibna hubi CyberPanel in domain-ka asalka ah uu jiro isla markaana isticmaalka API-ga email-management-ka haysato.

## Tixgelinta Dejinta (Configuration Reference) {#configuration-reference}

| Constant | Waxa loo baahan yahay | Default | Sharaxaad |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Haa | — | URL-ka buuxda ee CyberPanel-kaaga oo ay ku jirto port-ka, tusaale: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Haa | — | Username-ka admin-ka CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Haa | — | Password-ka admin-ka CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Haa | `Default` | Package-ka hosting-ka CyberPanel ee la siiyo virtual hosts cusub |
| `WU_CYBERPANEL_AUTO_SSL` | Maya | `true` | Wax soo saar shahaadada SSL Let's Encrypt ka dib marka domain-ka la abuuro |
| `WU_CYBERPANEL_PHP_VERSION` | Maya | `PHP 8.2` | Nooca PHP ee virtual hosts cusub (wuxuu isku raaciinayaa nooc la soo saaray CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Maya | — | Email-ka la xiriira in la diiwaangeliyo shahaadada SSL |

## Fiiro Muhiim ah {#important-notes}

API-ga CyberPanel waxay isticmaashaa sir-ka (token) ku saleysan xogta (session-based token authentication). Isku-dhafkaas wuxuu si toos ah u qaataa sir-ka markasta oo la wacdo API call.

Xisaabta admin-kaaga CyberPanel waa inay leedahay fursadaha lagu abuuro iyo la saxo website-yada (websites).

CyberPanel waxay ku shaqaysaa port `8090` si default ah. Haddii serverkaaga uu isticmaalo firewall, hubi in port-kanuu heli karo serverka application-ka WordPress.

Isku-dhafka ma maamulo diiwaanka DNS (DNS records). Waa inaad u tilmaashaa DNS-ka domain-kaada IP-ga serverkaaga ka hor intaadan ku qabsan domain-ka Ultimate Multisite.

Haddii aad isticmaalayso OpenLiteSpeed (OLS), dib-u-habaynta si qurux badan ayaa si toos ah loo bilaabaa markii la beddelo virtual host-yada. Ma baahna wax hagaajin oo gacanta lagu sameeyo.

## Waxyaabaha La Sameeyay (Troubleshooting) {#troubleshooting}

### API Connection Refused (Xiriirka API-ga Loo Diiday) {#api-connection-refused}

- Hubi in port `8090` uu furmay yahay firewall-ka serverkaaga.
- Xaqiiji in qiimaha `WU_CYBERPANEL_HOST` ay ku jiraan qaabka saxda ah (`https://`) iyo port-ka.
- Hubi in shahaadada SSL-ka CyberPanel-kaagu ay si sax ah u shaqeeyaan; shahaadada oo is-saaxda (self-signed certificates) waxay sababi karaan qalad TLS verification. U badbaadinta `WU_CYBERPANEL_VERIFY_SSL` noqo `false` kaliya deegaanno gaar ah oo la kalsoonaa.

### Authentication Errors (Qaladaadka Xaqiijinta) {#authentication-errors}

- Hubi in `WU_CYBERPANEL_USERNAME` iyo `WU_CYBERPANEL_PASSWORD` aad sax yihiin adigoo si toos ah u galaya CyberPanel.
- CyberPanel wuxuu xirayaa (locks) xisaabaha marka la isku dayo mararka badan in la galo. Hubi **Security** > **Brute Force Monitor** ee CyberPanel haddii ay xisaabaha la xirayso.

### Domain Not Created (Domain-ka Ma La Sameeynin) {#domain-not-created}

- Hubi diiwaanka hawlgalka Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) si aad u hesho fariimaha qaladka API-ga.
- Xaqiiji in package-ka lagu qeexay `WU_CYBERPANEL_PACKAGE` uu jiro CyberPanel-ka (**Packages** > **List Packages**).
- Hubi in domain-ku aysan weli diiwaangashan yahay website-ka CyberPanel-ka — abuura website cusub oo isku mid ah wuxuu soo celinayaa qalad.

### SSL Certificate Not Issued (Shahaadada SSL-ka Ma La Bixiyay) {#ssl-certificate-not-issued}

- Hubinta DNS-ka si buuxin: `dig +short your-domain.com` waa inuu soo celiyo IP-ga server-kaaga.
- Let's Encrypt waxay ku hayso xaddidda inta badan (rate limits). Haddii aad si dhow u soo saartay shahaaro badan oo isku mid ah domain-ka, sug ka hor intaadan dib u weerarin.
- Si aad u hubiso qaladkii la soo saaray shahaarada, fiiri logs-ka SSL ee CyberPanel iyadoo la isticmaalayo **Logs** > **Error Logs**.
- Sida tallaabo ugu dambeysa (fallback), waxaad si gacanta u samayn kartaa in aad shahaaro SSL-ka ku soo saarto CyberPanel: **SSL** > **Manage SSL** > dooro domain-ka > **Issue SSL**.

## Tixraacyada {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
