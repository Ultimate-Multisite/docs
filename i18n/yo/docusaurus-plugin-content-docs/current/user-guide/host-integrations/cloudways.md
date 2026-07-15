---
title: Ìṣepọ̀ Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Ìṣepọ̀ Cloudways

## Àkótán {#overview}
Cloudways jẹ́ pẹpẹ ìgbalejò cloud tí a ń ṣàkóso, tí ó jẹ́ kí o lè gbé àwọn site WordPress kalẹ̀ lórí onírúurú àwọn olupèsè cloud bíi DigitalOcean, AWS, Google Cloud, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ. Ìṣepọ̀ yìí ń mú kí ìmúdọ́gba orúkọ-àgbègbè aládáṣe àti ìṣàkóso iwe-ẹ̀rí SSL ṣiṣẹ́ láàárín Ultimate Multisite àti Cloudways.

## Àwọn Ẹ̀ya {#features}
- Ìmúdọ́gba orúkọ-àgbègbè aládáṣe
- Ìṣàkóso iwe-ẹ̀rí SSL
- Àtìlẹ́yìn fún àwọn orúkọ-àgbègbè àfikún
- Ìfọwọ́sí DNS fún àwọn iwe-ẹ̀rí SSL

## Àwọn Ìbéèrè {#requirements}
Àwọn constant wọ̀nyí gbọ́dọ̀ jẹ́ ṣíṣe àlàyé nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ní àṣàyàn, o tún lè ṣàlàyé:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò {#setup-instructions}

### 1. Gba Àwọn Ìwé-ẹ̀rí API Cloudways Rẹ {#1-get-your-cloudways-api-credentials}

1. Wọlé sí Dashboard Cloudways rẹ
2. Lọ sí "Account" > "Àwọn API Key"
3. Ṣẹ̀dá API key kan bí o kò bá tíì ní ọ̀kan
4. Da email rẹ àti API key rẹ kọ

### 2. Gba Àwọn ID Server àti Application Rẹ {#2-get-your-server-and-application-ids}

1. Nínú Dashboard Cloudways rẹ, lọ sí "Àwọn Server"
2. Yan server tí WordPress multisite rẹ wà lórí rẹ
3. Server ID hàn nínú URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Lọ sí "Àwọn Application" kí o sì yan application WordPress rẹ
5. App ID hàn nínú URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ṣàfikún Àwọn Constant sí wp-config.php {#3-add-constants-to-wp-configphp}

Ṣàfikún àwọn constant wọ̀nyí sí fáìlì `wp-config.php` rẹ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Bí o bá ní àwọn orúkọ-àgbègbè **ìta** míì (níta nẹ́tíwọ́ọ̀kì multisite rẹ) tí ó yẹ kí a máa pa mọ́ nígbà gbogbo lórí àtòkọ aliases Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Má ṣe fi wildcard nẹ́tíwọ́ọ̀kì tirẹ̀ kún un
Má **ṣe** ṣàfikún `*.your-network.com` (tàbí àpẹẹrẹ subdomain èyíkéyìí ti nẹ́tíwọ́ọ̀kì tirẹ̀) sí
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Wo [Pàtàkì — ìdẹkùn wildcard SSL](#important--wildcard-ssl-pitfall)
ní ìsàlẹ̀ fún ìdí tí èyí fi ń dí ìgbéjáde àwọn iwe-ẹ̀rí SSL fún tenant kọ̀ọ̀kan lọ́wọ́.
:::

### 4. Mú Ìṣepọ̀ náà ṣiṣẹ́ {#4-enable-the-integration}

1. Nínú admin WordPress rẹ, lọ sí Ultimate Multisite > Settings
2. Rìn lọ sí taabu "Ìṣàwòrán Orúkọ-àgbègbè"
3. Yí lọ sísàlẹ̀ sí "Àwọn Ìṣepọ̀ Host"
4. Mú ìṣepọ̀ Cloudways ṣiṣẹ́
5. Tẹ "Fi Àwọn Àyípadà Pamọ́"

## Bí Ó Ṣe Ń Ṣiṣẹ́ {#how-it-works}

### Ìmúdọ́gba Orúkọ-àgbègbè {#domain-syncing}

Nígbà tí a bá so orúkọ-àgbègbè kan mọ́ nínú Ultimate Multisite:

1. Ìṣepọ̀ náà gba gbogbo àwọn orúkọ-àgbègbè tí a ti so mọ́ lọ́wọ́lọ́wọ́
2. Ó ṣàfikún orúkọ-àgbègbè tuntun náà sí àtòkọ náà (pẹ̀lú ẹ̀yà www bí ó bá wúlò)
3. Ó fi gbogbo àtòkọ náà ránṣẹ́ sí Cloudways nípasẹ̀ API
4. Cloudways ṣe ìmúdójúìwọ̀n àwọn alias orúkọ-àgbègbè fún application rẹ

Àkíyèsí: API Cloudways ń béèrè pé kí a fi gbogbo àtòkọ àwọn orúkọ-àgbègbè ránṣẹ́ ní ìgbà kọ̀ọ̀kan, kì í ṣe fífi àwọn orúkọ-àgbègbè kọ̀ọ̀kan kún un tàbí yọ wọ́n kúrò nìkan.

### Ìṣàkóso Iwe-ẹ̀rí SSL {#ssl-certificate-management}

Lẹ́yìn tí a bá ti mú àwọn orúkọ-àgbègbè dọ́gba:

1. Ìṣepọ̀ náà ṣàyẹ̀wò àwọn orúkọ-àgbègbè tí ó ní àwọn record DNS tó pé tí ń tọ́ka sí server rẹ
2. Ó fi ìbéèrè ránṣẹ́ sí Cloudways láti fi àwọn iwe-ẹ̀rí Let's Encrypt SSL sílẹ̀ fún àwọn orúkọ-àgbègbè wọ̀nyẹn
3. Cloudways bójú tó ìgbéjáde àti fífi iwe-ẹ̀rí SSL sílẹ̀

Ìṣepọ̀ náà máa ń béèrè fún àwọn iwe-ẹ̀rí Let's Encrypt **standard** (tí kì í ṣe wildcard) láti
Cloudways nígbà gbogbo. Bí a bá pèsè àpẹẹrẹ wildcard nínú `WU_CLOUDWAYS_EXTRA_DOMAINS`, a máa yọ
`*.` tó wà ní ìbẹ̀rẹ̀ kúrò kí ìbéèrè SSL tó lọ — a kò fi wildcard fúnra rẹ̀ sílẹ̀ rárá nípasẹ̀
ìṣepọ̀ yìí. Láti lo iwe-ẹ̀rí wildcard lórí Cloudways, ìwọ yóò ní láti fi sílẹ̀
pẹ̀lú ọwọ́, ṣùgbọ́n ṣíṣe bẹ́ẹ̀ ń dí ìgbéjáde Let's Encrypt fún orúkọ-àgbègbè kọ̀ọ̀kan fún àwọn orúkọ-àgbègbè aṣa tí a so mọ́
(wo ìdẹkùn ní ìsàlẹ̀).

## Àwọn Orúkọ-àgbègbè Àfikún {#extra-domains}

Constant `WU_CLOUDWAYS_EXTRA_DOMAINS` jẹ́ kí o lè ṣàpèjúwe àwọn orúkọ-àgbègbè **ìta**
àfikún tí ó yẹ kí a máa pa mọ́ nígbà gbogbo lórí àtòkọ aliases application Cloudways. Lo o fún:

- Àwọn orúkọ-àgbègbè ìta tí Ultimate Multisite kò ṣàkóso (fún àpẹẹrẹ site marketing lọ́tọ̀ tí ń pín application Cloudways kan náà)
- Àwọn orúkọ-àgbègbè parked tàbí staging tí o fẹ́ kí a pa mọ́ lórí àtòkọ aliases application

Má **ṣe** lo constant yìí fún wildcard subdomain nẹ́tíwọ́ọ̀kì tirẹ
(fún àpẹẹrẹ `*.your-network.com`). Wo ìdẹkùn wildcard SSL ní ìsàlẹ̀.

## Pàtàkì — Ìdẹkùn Wildcard SSL {#important--wildcard-ssl-pitfall}

Àṣìṣe tí ó wọ́pọ̀ nígbà tí a bá ń tẹ̀lé ìṣètò àiyipada Cloudways ni láti ṣàfikún wildcard bíi
`*.your-network.com` sí `WU_CLOUDWAYS_EXTRA_DOMAINS`, tàbí láti fi iwe-ẹ̀rí SSL wildcard Cloudways
sílẹ̀ pẹ̀lú ọwọ́ fún wildcard yẹn.

**Bí o bá ṣe èyí, Cloudways yóò kọ̀ láti gbé àwọn iwe-ẹ̀rí Let's Encrypt jáde fún àwọn
orúkọ-àgbègbè aṣa tenant kọ̀ọ̀kan tí Ultimate Multisite ń so mọ́.** Cloudways máa ń rọ́pò
iwe-ẹ̀rí SSL tó ń ṣiṣẹ́ lórí application ní ìgbà kọ̀ọ̀kan, àti iwe-ẹ̀rí wildcard tó ti wà tẹ́lẹ̀ lórí
application náà ń dí ìgbéjáde Let's Encrypt fún orúkọ-àgbègbè kọ̀ọ̀kan tí ìṣepọ̀ náà gbára lé.

### Ìṣètò SSL Cloudways tí a dábàá fún nẹ́tíwọ́ọ̀kì Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Nínú taabu **Iwe-ẹ̀rí SSL** application Cloudways, fi **iwe-ẹ̀rí
   Let's Encrypt standard** sílẹ̀ tí ó bo `your-network.com` àti `www.your-network.com` nìkan
   — **kì í ṣe** wildcard.
2. Má **ṣe** fi `*.your-network.com` (tàbí àpẹẹrẹ subdomain èyíkéyìí ti nẹ́tíwọ́ọ̀kì tirẹ̀) sínú
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Fi constant yẹn pamọ́ fún àwọn orúkọ-àgbègbè **ìta** nìkan.
3. Ṣẹ̀dá wildcard subdomain tenant kọ̀ọ̀kan ní ipele **DNS** nìkan (record `A` kan fún
   `*.your-network.com` tó ń tọ́ka sí IP server Cloudways rẹ) kí àwọn subsite lè yanju. SSL
   fún àwọn orúkọ-àgbègbè aṣa tí a so mọ́ lọ́kọ̀ọ̀kan ni ìṣepọ̀ náà yóò gbé jáde aládáṣe
   nípasẹ̀ Let's Encrypt.

Ti àwọn domains àṣà ti àwọn tenants rẹ bá di láìní SSL, ṣàyẹ̀wò taabu Cloudways SSL. Tí
ẹ̀rí wildcard bá ń ṣiṣẹ́ níbẹ̀, yọ ọ́ kúrò, tún ṣe ìtẹ̀jáde ẹ̀rí Let's Encrypt
àtọkànwá fún domain nẹ́tíwọ́ọ̀kì pàtàkì nìkan, kí o sì yọ gbogbo àwọn àkọsílẹ̀ wildcard kúrò nínú
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Lẹ́yìn náà tún dá domain mapping kan bẹ̀rẹ̀ (tàbí dúró de èyí tó kàn)
ìṣepọ̀ náà yóò sì tún bẹ̀rẹ̀ sí í ṣe ìtẹ̀jáde ẹ̀rí fún domain kọ̀ọ̀kan.

## Ìṣàwárí ìṣòro {#troubleshooting}

### Àwọn ìṣòro ìsopọ̀ API {#api-connection-issues}
- Jẹ́rìí pé email rẹ àti API key rẹ tọ̀nà
- Ṣàyẹ̀wò pé server rẹ àti àwọn ID application rẹ tọ̀nà
- Rí dájú pé Account Cloudways rẹ ní àwọn ìyọ̀nda tó yẹ

### Àwọn ìṣòro ẹ̀rí SSL {#ssl-certificate-issues}
- Cloudways nílò kí domains ní àwọn àkọsílẹ̀ DNS tó wúlò tí ń tọ́ka sí server rẹ kí ó tó ṣe ìtẹ̀jáde àwọn ẹ̀rí SSL
- Ìṣepọ̀ náà ń jẹ́rìí àwọn àkọsílẹ̀ DNS kí ó tó béèrè àwọn ẹ̀rí SSL
- Tí a kò bá ń ṣe ìtẹ̀jáde àwọn ẹ̀rí SSL, ṣàyẹ̀wò pé domains rẹ ń tọ́ka dáadáa sí IP address server rẹ
- **Àwọn domains àṣà fún tenant kọ̀ọ̀kan di láìní SSL?** Ṣàyẹ̀wò taabu SSL Certificate application Cloudways. Tí ẹ̀rí wildcard kan (tí a fi sílẹ̀ pẹ̀lú ọwọ́, tàbí tí ó bo `*.your-network.com`) bá ń ṣiṣẹ́, Cloudways kò ní ṣe ìtẹ̀jáde àwọn ẹ̀rí Let's Encrypt fún àwọn domains àṣà tí a mapped lọ́kọ̀ọ̀kan. Rọ́pò rẹ̀ pẹ̀lú ẹ̀rí Let's Encrypt àtọkànwá tó bo domain nẹ́tíwọ́ọ̀kì pàtàkì nìkan (`your-network.com`, `www.your-network.com`) kí o sì yọ gbogbo àwọn àkọsílẹ̀ wildcard kúrò nínú `WU_CLOUDWAYS_EXTRA_DOMAINS`. Lẹ́yìn náà tún dá domain mapping kan bẹ̀rẹ̀ (tàbí dúró de èyí tó kàn) ìṣepọ̀ náà yóò sì béèrè àwọn ẹ̀rí fún domain kọ̀ọ̀kan.

### Domain kò fi kun {#domain-not-added}
- Ṣàyẹ̀wò àwọn logs Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe èyíkéyìí
- Jẹ́rìí pé domain náà kò tíì fi kun sí Cloudways tẹ́lẹ̀
- Rí dájú pé plan Cloudways rẹ ṣe àtìlẹ́yìn fún iye domains tí o ń fi kún
