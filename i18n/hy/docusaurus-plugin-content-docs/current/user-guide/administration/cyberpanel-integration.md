---
title: CyberPanel ինտեգրում
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Ինտեգրում

Այս ուղեցույց բացատրում է, թե ինչպես կարելի է կազմաձևել Ultimate Multisite CyberPanel ინտեգրումը՝ համապատասխան տիրույթները (mapped domains) ձեր ցանցում ավտոմատ կերպով ավելացնելու (և հեռացնելու) որպես virtual host-եր CyberPanel-ում, ընդ որում՝ օպցիոնալ auto-SSL առաջարկման միջոցով Let's Encrypt-ից։

## Ինչ է անում այն

- Երբ Ultimate Multisite-ում տիրույթը կապվում է (mapped), ინտեգրումը կանչում է CyberPanel API-ին՝ այդ տիրույթի համար virtual host ստեղծելու։
- Երբ տիրույթի կապը հեռացվում է, ინտեգրումը API-ին կանչում է համապատասխան virtual host-ը ջնջելու համար։
- Երբ auto-SSL-ը 켜ված է (enabled), ინտեգրումը virtual host ստեղծելու անմիջական հետո առաջարկում է Let's Encrypt վկայագիր տրամադրելը։
- Ըստ Domain Mapping-ի կարգավորման մեջ «Auto-create www subdomain» (www ենթատիրույթի ավտոմացված ստեղծում) կարգավորման, օպցիոնալ է ավելացնել/հեռացնել `www.` անունը։

## Նախապայմաններ

- Գործող CyberPanel instance (խորհուրդ է տրվում v2.3 կամ ավելի)՝ հասանելի ձեր WordPress սերվերից։
- CyberPanel-ում գոյություն ունեցող වෙබ් այցելությանը, որը արդեն ծառայում է ձեր WordPress ցանցի արմատային տեղը (root)։ Інտեգրումը նոր virtual host-եր կկապի այդ սերվերի հետ։
- CyberPanel API-ի մուտքի թույլատրելի լինելը։ Հաստատումը օգտագործում է ձեր CyberPanel ադմինիստրատորի անունը և գաղտնաբառը։
- Կապված տիրույթների համար ձեր DNS գրանցումները պետք է արդեն ուղղվեն ձեր սերվերի IP հասցեին, որպեսզի auto-SSL-ը կարողանա վավեր վկայագիր տրամադրել։

## Պահանջներ

Ձեր `wp-config.php` ֆայլում պետք է սահմանվեն հետևյալ հաստատունները (constants).

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ընդհանուր առմամբ, կարող եք նաև սահմանել.

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Սխալի դեֆոլտը՝ true — տիրույթ ստեղծելուց հետո Let's Encrypt SSL-ը ապահովել
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Դեֆոլտը՝ PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL վկայության համար կոնտակտիվ է

## Կառուցման ինստրուկումներ (Setup Instructions)

### 1. Թողեք CyberPanel API-ը աշխատեն
1. Մուտք գործեք ձեր CyberPanel տախտակի վիճակագրով (dashboard) որպես ադմինիստրատոր։
2. Գնացեք **Security** > **SSL** և համոզվեք, որ SSL-ը ակտիվ է CyberPanel միջավայրում (պահանջվում է API կանչերի համար անվտանգության համար)։
3. CyberPanel API-ը սովորաբար հասանելի է `https://your-server-ip:8090/api/`-ում։ Այն ակտիվ է դեֆոլտով ադմինիստրատորների համար, որևէ լրացուցիչ քայլ անելու կարիք չկա։

### 2. Ավելացրեք հաստատունները wp-config.php-ում
Ահա հետևյալ հաստատունները տեղադրեք ձեր `wp-config.php` ֆայլի մեջ՝ `/* That's all, stop editing! */`-ից առաջ.

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ինչպես ակտիվացնել ավտո-SSL-ը (խորհուրդ է տրվում).

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Անկախացրեք ինտեգրումը (Enable the Integration)
1. Ձեր WordPress ցանցի ադմինից գնացեք **Ultimate Multisite** > **Settings**։
2. Գնացեք **Domain Mapping** տաբին։
3. Կսկսեք ներքև և գտեք **Host Integrations**-ը։
4. Անկախացրեք **CyberPanel** ինտեգրումը (integration)։
5. Սեղմեք **Save Changes**-ի վրա։

### 4. Հաստատեք կապը (Verify Connectivity)
Օգտագործեք կարգավորման գործիքի ներկառուցված կապի ստուգումը (connection test):

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**-ին գնացեք։
2. Կտուպեք **Test Connection**-ի վրա։
3. Հաջողության հաղորդագրությունը հաստատում է, որ պլագինը կարող է հասնել CyberPanel API-ի և ճիշտ մուտք գործել։

## Ինչպես է այն աշխատում

### Դոմենային քարտեզագրում (Domain Mapping)

Երբ Ultimate Multisite-ում դոմենը քարտեզագրվում է.

1. Ինտեգրացիան ուղարկում է `POST` հայտարարություն `/api/createWebsite`-ին՝ ձեր CyberPanel հոස්ի վրա։
2. CyberPanel-ը ստեղծում է նոր վիրտուալ հոස් (virtual host) տվյալ դոմենի համար կոնֆիգուրացված փաթեթի ներքո։
3. Դոկumentային արմատը (document root) սահմանվում է՝ ուղղված ձեր WordPress-ի ցանցային արմատային թղթապանակին։
4. Երբ դոմենային քարտեզագրումը հեռացվում է, ինտեգրացիան կանչում է `/api/deleteWebsite`-ին՝ վիրտուալ հոսը մաքրելու համար։

### Ավտո-SSL (Auto-SSL)

Եթե `WU_CYBERPANEL_AUTO_SSL`-ը դրված է որպես `true`.

1. Վիրտուալ հոսը ստեղծելուց հետո, ինտեգրացիան կանչում է `/api/issueSSL`՝ տվյալ դոմենի համար։
2. CyberPanel-ը խնդրում է Let's Encrypt վկայագիր (certificate) ACME HTTP-01 մարտահրավերով։
3. Վկայագիրը ավտոմատ թարմացվում է CyberPanel-ի կողմից վավերականության ժամկետից առաջ։

> **Կարևոր է.** Let's Encrypt-ը կարող է վավերացնել դոմենը միայն այն բանից հետո, երբ DNS-ը լիովին տարածվում է ձեր սերվերի IP հասցեին։ Եթե SSL-ի տրամադրումը անմիջապես քարտեզագրելուց հետո ձախողվի, սպասեք DNS-ի տարածվելուն և նորից գործարկեք SSL-ը CyberPanel-ի վահանայով՝ **SSL** > **Manage SSL** բաժնում։

### www ենթադիր (Subdomain)

Եթե ձեր Domain Mapping-ի կարգավորումներում ակտիվացված է **Auto-create www subdomain**-ը, ինտեգրացիան ստեղծում է նաև վիրտուալ հոսի անուն (alias) `www.<domain>`-ի համար և, երբ ավտո-SSL-ը միացված է, տրամադրում է վկայագիր, որը ընդգրկում է ինչպես դոմենի գլխավոր տարբերակը (apex), այնպես էլ www տարբերակները։

### Էլ-փոխանցողներ (Email Forwarders)

Երբ [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ավելացումը ակտիվ է, CyberPanel-ը կարող է նաև մատուցել հաճախորդների էլ․ փոխանցման (email forwarders) ծառայություններ։ Forwarder-ները ուղարկում են հաղորդագրությունները մի տիրույթից մյուս մուտքի՝ առանց ամբողջական փոստային հաշիվ ստեղծելու, ինչը շատ հարմար է այնպիսի ալիազների համար, ինչպես `info@customer-domain.test` կամ `support@customer-domain.test`։

Հաճախորդների համար forwarder-ներ ապահովելուց առաջ՝

1. Հաստատեք վերևում նշված CyberPanel հաստատունները (constants) կարգավորված են և կապի ստուգումը հաջող է։
2. Թողարկեք CyberPanel-ի email provider-ը Emails addon-ի կարգավորումներում։
3. Հաստատեք, որ հաճախորդի տիրույթը արդեն գոյություն ունի CyberPanel-ում՝ forwarder ստեղծելուց առաջ։
4. Ստեղծեք փորձնական forwarder և ուղարկեք հաղորդագրություն դրա միջով, որից հետո առաջարկեք այս հնարավորությունը production պլանների համար։

Եթե forwarder-ի ստեղծումը ձախողվի, նախ ստուգեք Ultimate Multisite-ի ակտիվության գրանցամատյաները (activity logs), ապա CyberPanel-ում հաստատեք, որ աղբյուր տիրույթը գոյություն ունի և API օգտվողին ունի էլ․ կառավարման թույլտվություններ։

## Կարգավորման Հղումներ (Configuration Reference)

| Constant | Անհրաժեշտ | Սխալ값 (Default) | Նկարագրություն |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Այո | — | Ձեր CyberPanel հաստատման ամբողջ URL-ը, ներառյալ պորտը, օրինակ՝ `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Այո | — | CyberPanel ադմինի անունը (username) |
| `WU_CYBERPANEL_PASSWORD` | Այո | — | CyberPanel ադմինի գաղտնաբառը (password) |
| `WU_CYBERPANEL_PACKAGE` | Այո | `Default` | CyberPanel հաստատման փաթեթը, որը վերագրվում է նոր virtual hosts-ին |
| `WU_CYBERPANEL_AUTO_SSL` | Ոչ | `true` | Տիրույթ ստեղծելուց հետո Let's Encrypt SSL վկայագիր տրամադրում |
| `WU_CYBERPANEL_PHP_VERSION` | Ոչ | `PHP 8.2` | Նոր virtual hosts-ի համար PHP տարբերակը (պետք է համապատասխանի CyberPanel-ում տեղադրված տարբերակին) |
| `WU_CYBERPANEL_EMAIL` | Ոչ | — | SSL վկայագրման համար կոնտակտային էլ․ հասցե |

## Կարևոր Նշումներ (Important Notes)

CyberPanel-ի API-ը սեփականության վրա հիմնված տոկենային ինտենտիֆիկացիա է։ Ինտեգրումը ավտոմատ կերպով մշակում է տոկենի ստացումը յուրաքանչյուր API զանգի ժամանակ։
- Ձեր CyberPanel ադմին գործունեության հաշվին պետք է լինեն իրավունքներ կայքեր ստեղծելու և ջնջելու համար։
- CyberPanel-ը սովորաբար աշխատում է `8090` պորտի վրա։ Եթե ձեր սերվերը օգտագործում է արտաքին պատնեշ, համոզվեք, որ այս պորտը մուտքի է բաց WordPress-ի կայքային սերվերից։
- Ինտեգրումը DNS գրանցումները չի կառավարում։ Ձեզ անհրաժեշտ է տիրույթի DNS-ը ուղղել ձեր սերվերի IP հասցեին՝ Ultimate Multisite-ում տիրույթը քարտեզագրելուց առաջ։
- Եթե օգտագործում եք OpenLiteSpeed (OLS), վիրտուալ հոստիի փոփոխությունից հետո ավտոմատ կերպով ստեղծվում է գրավական վերաբերյալ վերանայում։ Համար ձեռնարկային միջամտության կարիք չկա։

## Խնդիրների լուծում (Troubleshooting)

### API-ի կապը մերժվում է (API Connection Refused)

- Ստուգեք, որ `8090` պորտը բաց է ձեր սերվերի պատնեշում։
- Հաստատեք, որ `WU_CYBERPANEL_HOST` արժեքը ներառում է ճիշտ պրոտոկոլը (`https://`) և պորտը։
- Ստուգեք, թե արդյոք ձեր CyberPanel SSL վկայականը վավեր է. ինքնագործված (self-signed) վկայականները կարող են առաջացնել TLS ստուգման խնդիրներ։ `WU_CYBERPANEL_VERIFY_SSL`-ը դրեք `false` միայն վստահելի մասնավոր ցանցային միջավայրերում։

### Ինտենտիֆիկացիայի սխալներ (Authentication Errors)

- Հաստատեք, որ ձեր `WU_CYBERPANEL_USERNAME`-ը և `WU_CYBERPANEL_PASSWORD`-ը ճիշտ են՝ ուղղակի մուտք գործելով CyberPanel։
- CyberPanel-ը փակում է հաշիվները կրկնվող ձախողված մուտքագրման փորձերի հետ։ Եթե տեղի է ունենում բռնագազրոյական (lockouts), ստուգեք **Security** > **Brute Force Monitor**-ը CyberPanel-ում։

### Տիրույթը չի ստեղծվել (Domain Not Created)

- Ստուգեք Ultimate Multisite-ի գործունեության աղբող סיփականներում (**Ultimate Multisite** > **Activity Logs**) API սխալների հաղորդագրությունները։
- Հաստատեք, որ `WU_CYBERPANEL_PACKAGE`-ով սահմանված փաթուցը գոյություն ունի CyberPanel-ում (**Packages** > **List Packages**):
- Ապահովեք, որ տիրույթը արդեն չի գրանցվել կայքի որպես վեբсайт CyberPanel-ում. կրկնվող կայք ստեղծելը սխալ է տալիս։

### SSL Վկայական չի տրամադրվում (SSL Certificate Not Issued)

DNS-ը լիովին տարածվել է արդյոք․ `dig +short your-domain.com` հրամանը պետք է վերադարձնի ձեր սերվերի IP-ն։
Let's Encrypt-ը կիրառում է արագության սահմանափակումներ (rate limits)։ Եթե դուք վերջերս նույն տիրույթի համար մի քանի վկայական (certificates) եք տրամադրել, սպասեք, մինչև կփորձեք նորից։
Վկայականի տրամադրման ձախողումների մասին մանրամասները ստուգեք **Logs** > **Error Logs**-ում CyberPanel-ի ներքո։
Եթե դա չի աշխատում, որպես պահպանվող տարբերակ (fallback), կարող եք ձեռքով SSL տրամադրել CyberPanel-ից. **SSL** > **Manage SSL** > ընտրեք տիրույթը > **Issue SSL**։

## Հղումներ

- CyberPanel API Փաստաթուղթում: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Կառավարում: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Արագության Սահմանափակումներ: https://letsencrypt.org/docs/rate-limits/
