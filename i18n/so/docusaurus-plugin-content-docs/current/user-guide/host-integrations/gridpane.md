---
title: Isdhaafidda GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Isku-dhaafinta GridPane

## Aragtida {#overview}
GridPane waa dashboard gaar ah oo loogu talagalay xog-soo-saarka WordPress ee miisaaniyadda badan. Isku-dhaafintani waxay kuu oggolaanaysaa isku-dubbaridda domain-ka iyo maamulka shahaadada SSL-ka (SSL certificate management) inta badan ka dhexe oo u dhexeeya Ultimate Multisite iyo GridPane.

## Faahfaahinta {#features}
- Isku-dubbaridda automatic ee domain-ka
- Maamulka shahaadada SSL-ka
- Hababka automatic ee dejinta sunka SUNRISE (constant)

## Shuruudaha {#requirements}
Waa inuu isbeddelladan lagu qoraa faylkaaga `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'api_key_ada_aad');
define('WU_GRIDPANE_SERVER_ID', 'server_id_ga_aad_hayso');
define('WU_GRIDPANE_APP_ID', 'site_id_ga_aad_hayso');
```

## Tilmaamaha Dejinta {#setup-instructions}

### 1. Hel Isticmaalayaasha API-kaaga GridPane (API Credentials) {#1-get-your-gridpane-api-credentials}

1. Ku gal dashboard-kaaga GridPane.
2. Tag "Settings" > "API".
3. Haddii aadan haysan hal, samee api key oo soo saar.
4. Copy api key-gaaga.

### 2. Hel ID-yada Server-ka iyo Website-kaaga {#2-get-your-server-and-site-ids}

1. Dashboard-kaaga GridPane, tag "Servers".
2. Dooro server-ka uu ku yaallo WordPress multisite-kaaga.
3. Qabso Server ID (oo si faahfaahsan u aragta URL-ka ama bogga faahfaahinta server-ka).
4. Tag "Sites" oo dooro website-kaaga WordPress.
5. Qabso Site ID (oo si faahfaahsan u aragta URL-ka ama bogga faahfaahinta website-ka).

### 3. Ku dar Constants-ka faylka wp-config.php {#3-add-constants-to-wp-configphp}

Ku dar constants-kan `wp-config.php` ee aad qortay:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'api_key_ada_aad');
define('WU_GRIDPANE_SERVER_ID', 'server_id_ga_aad_hayso');
define('WU_GRIDPANE_APP_ID', 'site_id_ga_aad_hayso');
```

### 4. Fur Isticmaalka (Enable the Integration) {#4-enable-the-integration}

1. Admin-ka WordPress-kaaga, tag Ultimate Multisite > Settings.
2. Tag tab-ka "Domain Mapping".
3. Hoos u soo saar "Host Integrations".
4. Fur isku-dhaafinta GridPane (Enable the GridPane integration).
5. Click "Save Changes" (Waxaad samaynaysaa isbeddellada).

## Sidee U Shaqayso? {#how-it-works}

Marka domain la isku-dubbaro Ultimate Multisite:

1. Iskuulka (integration) wuxuu codsi u diraya API-ga GridPane si uu magaca domainka ugu dariyo website-kaaga.
2. GridPane waxay si toos ah u maamushaa inuu SSL certificate-ka ku samaynayo.
3. Marka la saaro xiriirka domainka (domain mapping), iskuulka wuxuu ka saari doonaa domainka GridPane-ka.

Iskuulkaas wuxuu sidoo kale si toos ah u maamushaa dejinta SUNRISE constant-ka ku jira faylka wp-config.php, kaas oo loo baahan yahay in xiriirka domainka si sax ah uu shaqeeyo.

## Maareynta SUNRISE Constant-ka {#sunrise-constant-management}

Mid ka mid ah waxyaabaha gaarka ah ee iskuulka GridPane-ka ah waa inuu si toos ah u soo celiyo (reverts) SUNRISE constant-ka ku jira wp-config.php si looga fogaado isku dhafka (conflicts) nidaamka xiriirka domainka ee GridPane. Tani waxay hubisaa in labada nidaam ay si wanaagsan u shaqeeyaan iyadoo aan la lahayn dhibaatooyin.

## Xallinta Dhibaatooyinka (Troubleshooting) {#troubleshooting}

### Dhibaatooyinka Xiriirka API-ga {#api-connection-issues}
- Hubi in furaha API-kaaga (API key) uu sax yahay.
- Hubi in ID-ga serverka iyo website-kaagu ay sax yihiin.
- Hubi in kooxda (account) GridPane-kaaga ay leedahay fursadaha (permissions) ee loo baahan yahay.

### Dhibaatooyinka SSL Certificate-ka {#ssl-certificate-issues}
- GridPane waxay qaadan kartaa wakhti si ay u bixiso SSL certificate-yada.
- Hubi in domain-kaagu si sax ah ugu tilmaamayo IP address-ka serverkaaga.
- Hubi dejinta SSL-ka ee GridPane-kaaga website-kaaga.

### Domainka Aan La Bixin (Domain Not Added) {#domain-not-added}
- Hubi logs-ka Ultimate Multisite-ka wax walba oo qalad ah ka soo baxay.
- Hubi in domainkaas hadda aan la bixinayn GridPane-ka.
- Hubi in diiwaanka DNS-ka domainkaaga si sax ah loo dejiyay (configured).
