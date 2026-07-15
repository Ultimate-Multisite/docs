---
title: Ìṣepọ̀ CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Ìṣepọ̀ CyberPanel

Ìtọ́nisọ́nà yìí ṣàlàyé bí a ṣe lè ṣètò ìṣepọ̀ Ultimate Multisite CyberPanel kí àwọn domain tí a ṣe mapping sí nẹ́tíwọ́ọ̀kì rẹ lè jẹ́ fífi kún un (àti yíyọ kúrò) laifọwọyi gẹ́gẹ́ bí virtual hosts ní CyberPanel, pẹ̀lú ìpèsè auto-SSL aṣayan nípasẹ̀ Let's Encrypt.

## Ohun Tí Ó Ṣe {#what-it-does}

- Nígbà tí a bá ṣe mapping domain kan ní Ultimate Multisite, ìṣepọ̀ náà máa pe CyberPanel API láti dá virtual host fún domain náà.
- Nígbà tí a bá yọ domain mapping kan kúrò, ìṣepọ̀ náà máa pe API láti pa virtual host tó bá a mu rẹ́.
- Nígbà tí auto-SSL bá ṣiṣẹ́, ìṣepọ̀ náà máa bẹ̀rẹ̀ fífúnni ní certificate Let's Encrypt lẹ́sẹ̀kẹsẹ̀ lẹ́yìn tí a bá dá virtual host náà.
- Ó lè tún fi/kúrò alias `www.` da lori eto "Ṣẹ̀dá www subdomain laifọwọyi" rẹ nínú àwọn eto Domain Mapping.

## Àwọn Ohun Tó Ní Láti Wà Tẹ́lẹ̀ {#prerequisites}

- CyberPanel instance tó ń ṣiṣẹ́ (v2.3 tàbí tuntun jù bẹ́ẹ̀ lọ ni a dámọ̀ràn) tí server WordPress rẹ lè dé.
- Website tó ti wà tẹ́lẹ̀ ní CyberPanel tí ó ti ń sin root nẹ́tíwọ́ọ̀kì WordPress rẹ. Ìṣepọ̀ náà so àwọn virtual hosts tuntun mọ́ server yìí.
- Ìráyè sí CyberPanel API ṣiṣẹ́. Ìjẹ́rìí lo orúkọ olumulo admin àti password CyberPanel rẹ.
- Àwọn DNS records rẹ fún àwọn domain tí a ṣe mapping gbọ́dọ̀ ti tọ́ka sí IP address server rẹ ṣáájú kí auto-SSL tó lè fúnni ní certificate tó péye.

## Àwọn Ìbéèrè {#requirements}

Àwọn constant wọ̀nyí gbọ́dọ̀ jẹ́ ṣíṣe àlàyé nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Gẹ́gẹ́ bí aṣayan, o tún lè ṣe àlàyé:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò {#setup-instructions}

### 1. Mú CyberPanel API ṣiṣẹ́ {#1-enable-the-cyberpanel-api}

1. Wọlé sí dashboard CyberPanel rẹ gẹ́gẹ́ bí alákóso.
2. Lọ sí **Security** > **SSL** kí o sì jẹ́rìí pé SSL ń ṣiṣẹ́ lórí interface CyberPanel fúnra rẹ (ó ṣe pàtàkì fún àwọn ìpe API tó ní ààbò).
3. CyberPanel API wà ní `https://your-server-ip:8090/api/` gẹ́gẹ́ bí àìyípadà. Kò sí ìgbésẹ̀ mìíràn tó yẹ kí o ṣe láti mú un ṣiṣẹ́ — ó ti wà ní mímú ṣiṣẹ́ gẹ́gẹ́ bí àìyípadà fún àwọn olumulo admin.

### 2. Fi Àwọn Constant kún wp-config.php {#2-add-constants-to-wp-configphp}

Fi àwọn constant wọ̀nyí kún fáìlì `wp-config.php` rẹ ṣáájú laini `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Láti mú auto-SSL ṣiṣẹ́ (a dámọ̀ràn):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Mú Ìṣepọ̀ Náà Ṣiṣẹ́ {#3-enable-the-integration}

1. Nínú admin nẹ́tíwọ́ọ̀kì WordPress rẹ, lọ sí **Ultimate Multisite** > **Settings**.
2. Lọ sí taabu **Domain Mapping**.
3. Yi lọ sísàlẹ̀ sí **Host Integrations**.
4. Mú ìṣepọ̀ **CyberPanel** ṣiṣẹ́.
5. Tẹ **Save Changes**.

### 4. Jẹ́rìí Ìsopọ̀ {#4-verify-connectivity}

Lo ìdánwò ìsopọ̀ tó wà nínú wizard àwọn eto:

1. Lọ sí **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Tẹ **Test Connection**.
3. Ìfiránṣẹ́ àṣeyọrí jẹ́rìí pé plugin náà lè dé CyberPanel API kí ó sì ṣe ìjẹ́rìí dáadáa.

## Bí Ó Ṣe Ń Ṣiṣẹ́ {#how-it-works}

### Domain Mapping {#domain-mapping}

Nígbà tí a bá ṣe mapping domain kan ní Ultimate Multisite:

1. Ìṣepọ̀ náà fi ìbéèrè `POST` ránṣẹ́ sí `/api/createWebsite` lórí host CyberPanel rẹ.
2. CyberPanel dá virtual host tuntun fún domain náà lábẹ́ package tí a ṣètò.
3. A ṣètò document root láti tọ́ka sí directory root nẹ́tíwọ́ọ̀kì WordPress rẹ.
4. Nígbà tí a bá yọ domain mapping náà kúrò, ìṣepọ̀ náà pe `/api/deleteWebsite` láti nu virtual host náà kúrò.

### Auto-SSL {#auto-ssl}

Nígbà tí `WU_CYBERPANEL_AUTO_SSL` bá jẹ́ `true`:

1. Lẹ́yìn tí a bá dá virtual host náà, ìṣepọ̀ náà pe `/api/issueSSL` fún domain náà.
2. CyberPanel bẹ̀rẹ̀ ìbéèrè certificate Let's Encrypt nípa lílo ACME HTTP-01 challenge.
3. CyberPanel máa tún certificate náà ṣe laifọwọyi ṣáájú kí ó tó parí àkókò.

> **Pàtàkì:** DNS gbọ́dọ̀ ti tan káàkiri pátápátá sí IP address server rẹ ṣáájú kí Let's Encrypt tó lè ṣàyẹ̀wò domain náà. Bí fífúnni ní SSL bá kùnà lẹ́sẹ̀kẹsẹ̀ lẹ́yìn mapping, dúró de kí DNS tan káàkiri, kí o sì tún bẹ̀rẹ̀ SSL láti dashboard CyberPanel lábẹ́ **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Bí **Ṣẹ̀dá www subdomain laifọwọyi** bá ṣiṣẹ́ nínú àwọn eto Domain Mapping rẹ, ìṣepọ̀ náà tún máa dá alias virtual host fún `www.<domain>` àti, nígbà tí auto-SSL bá wà ní mímú ṣiṣẹ́, ó máa fúnni ní certificate tó bo apex àti àwọn àyípadà www méjèèjì.

### Àwọn Email Forwarders {#email-forwarders}

Nígbà tí addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) bá ṣiṣẹ́, CyberPanel tún lè pèsè àwọn email forwarders fún oníbàárà. Àwọn forwarders ń darí àwọn ìfiránṣẹ́ láti address domain kan sí inbox mìíràn láì dá mailbox kíkún, èyí tó wúlò fún àwọn alias bíi `info@customer-domain.test` tàbí `support@customer-domain.test`.

Ṣáájú kí o tó mú forwarders ṣiṣẹ́ fún àwọn oníbàárà:

1. Jẹ́rìí pé àwọn constant CyberPanel lókè ti ṣètò àti pé ìdánwò ìsopọ̀ kọjá.
2. Mú provider email CyberPanel ṣiṣẹ́ nínú àwọn eto addon Emails.
3. Jẹ́rìí pé domain oníbàárà náà ti wà ní CyberPanel ṣáájú kí o tó dá forwarder.
4. Dá forwarder ìdánwò kan kí o sì fi ìfiránṣẹ́ ránṣẹ́ nípasẹ̀ rẹ ṣáájú kí o tó pèsè ẹya náà lórí àwọn plan production.

Bí ṣíṣẹ̀dá forwarder bá kùnà, kọ́kọ́ ṣàyẹ̀wò àwọn activity logs Ultimate Multisite, lẹ́yìn náà jẹ́rìí ní CyberPanel pé domain orísun náà wà àti pé olumulo API ní àwọn àṣẹ ìṣàkóso email.

## Ìtọ́kasí Ìṣètò {#configuration-reference}

| Constant | Tó ṣe pàtàkì | Àìyípadà | Àpèjúwe |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Bẹ́ẹ̀ni | — | URL kíkún sí CyberPanel instance rẹ pẹ̀lú port, f.a. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Bẹ́ẹ̀ni | — | Orúkọ olumulo admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Bẹ́ẹ̀ni | — | Password admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Bẹ́ẹ̀ni | `Default` | Package hosting CyberPanel láti fi sí àwọn virtual hosts tuntun |
| `WU_CYBERPANEL_AUTO_SSL` | Rárá | `true` | Fúnni ní certificate SSL Let's Encrypt lẹ́yìn ṣíṣẹ̀dá domain |
| `WU_CYBERPANEL_PHP_VERSION` | Rárá | `PHP 8.2` | Ẹ̀yà PHP fún àwọn virtual hosts tuntun (gbọdọ̀ bá ẹ̀yà tí a fi sí CyberPanel mu) |
| `WU_CYBERPANEL_EMAIL` | Rárá | — | Email ìkànìyàn fún ìforúkọsílẹ̀ certificate SSL |

## Àwọn Àkíyèsí Pàtàkì {#important-notes}

- API CyberPanel ń lo ìjẹ́rìí token tó dá lórí session. Ìṣepọ̀ náà ń bójú tó gbígba token laifọwọyi lórí ìpe API kọ̀ọ̀kan.
- Account admin CyberPanel rẹ gbọ́dọ̀ ní àwọn àṣẹ láti dá àti pa àwọn websites.
- CyberPanel ń ṣiṣẹ́ lórí port `8090` gẹ́gẹ́ bí àìyípadà. Bí server rẹ bá ń lo firewall, rí i dájú pé port yìí ṣeé dé láti server application WordPress.
- Ìṣepọ̀ náà kì í ṣàkóso àwọn DNS records. O gbọ́dọ̀ tọ́ka DNS domain sí IP address server rẹ ṣáájú kí o tó ṣe mapping domain náà ní Ultimate Multisite.
- Bí o bá lo OpenLiteSpeed (OLS), graceful restart máa bẹ̀rẹ̀ laifọwọyi lẹ́yìn àwọn ìyípadà virtual host. Kò sí ìdásí ọwọ́ tó nílò.

## Yíyanjú Ìṣòro {#troubleshooting}

### Ìsopọ̀ API Kò Gba {#api-connection-refused}

- Jẹ́rìí pé port `8090` ṣí nínú firewall server rẹ.
- Jẹ́rìí pé iye `WU_CYBERPANEL_HOST` ní protocol tó tọ́ (`https://`) àti port.
- Ṣàyẹ̀wò pé certificate SSL CyberPanel rẹ péye; àwọn certificate self-signed lè fa ìkùnà ìjẹ́rìí TLS. Ṣètò `WU_CYBERPANEL_VERIFY_SSL` sí `false` nínú àwọn ayíká nẹ́tíwọ́ọ̀kì aládàáni tó ní ìgbẹ́kẹ̀lé nìkan.

### Àwọn Àṣìṣe Ìjẹ́rìí {#authentication-errors}

- Jẹ́rìí pé `WU_CYBERPANEL_USERNAME` àti `WU_CYBERPANEL_PASSWORD` rẹ tọ́ nípa wíwọlé sí CyberPanel taara.
- CyberPanel máa ti àwọn account lẹ́yìn ìgbìyànjú wọlé tó kùnà léraléra. Ṣàyẹ̀wò **Security** > **Brute Force Monitor** ní CyberPanel bí ìtìpa bá ṣẹlẹ̀.

### A Kò Dá Domain {#domain-not-created}

- Ṣàyẹ̀wò activity log Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) fún àwọn ìfiránṣẹ́ àṣìṣe API.
- Jẹ́rìí pé package tí a ṣàlàyé nínú `WU_CYBERPANEL_PACKAGE` wà ní CyberPanel (**Packages** > **List Packages**).
- Rí i dájú pé domain náà kò tíì jẹ́ fíforúkọsílẹ̀ gẹ́gẹ́ bí website ní CyberPanel — ṣíṣẹ̀dá website àdàkọ máa dá àṣìṣe padà.

### A Kò Fúnni Ní Certificate SSL {#ssl-certificate-not-issued}

- Jẹ́rìí pé DNS ti tan káàkiri pátápátá: `dig +short your-domain.com` yẹ kí ó dá IP server rẹ padà.
- Let's Encrypt ń fi àwọn rate limits múlẹ̀. Bí o bá ti fúnni ní àwọn certificate púpọ̀ láìpẹ́ fún domain kan náà, dúró ṣáájú kí o tó tún gbìyànjú.
- Ṣàyẹ̀wò àwọn log SSL CyberPanel lábẹ́ **Logs** > **Error Logs** fún àwọn àlàyé lórí ìkùnà fífúnni ní certificate.
- Gẹ́gẹ́ bí ìpamọ́, o lè fúnni ní SSL pẹ̀lú ọwọ́ láti CyberPanel: **SSL** > **Manage SSL** > yan domain náà > **Issue SSL**.

## Àwọn Ìtọ́kasí {#references}

- Ìwé Ìtọ́nisọ́nà CyberPanel API: https://docs.cyberpanel.net/docs/category/api
- Ìṣàkóso SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Àwọn Rate Limits Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
