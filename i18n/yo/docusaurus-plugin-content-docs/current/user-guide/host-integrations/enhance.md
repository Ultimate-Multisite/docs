---
title: Mú ìṣepọ̀ pánẹ́ẹ̀lì ìṣàkóso dara sí
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Mu Iṣepọ Control Panel Dara Si

## Akopọ
Enhance jẹ control panel igbalode kan ti o pese adaṣe alejo gbigba alagbara ati awọn agbara iṣakoso. Iṣepọ yii n jẹ ki amuṣiṣẹpọ domain laifọwọyi ati iṣakoso iwe-ẹri SSL ṣee ṣe laarin Ultimate Multisite ati Enhance Control Panel.

**Ìjíròrò Tó Jọmọ:** Wo [Ìjíròrò GitHub #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) fun awọn imọran agbegbe ati alaye afikun.

## Awọn Ẹya
- Amuṣiṣẹpọ domain laifọwọyi nigbati a ba ṣe maapu awọn domain ninu Ultimate Multisite
- Pipese iwe-ẹri SSL laifọwọyi nipasẹ LetsEncrypt nigbati DNS ba yanju
- Atilẹyin subdomain fun awọn nẹtiwọọki ti n ṣiṣẹ ni ipo subdomain
- Yiyọ domain kuro nigbati a ba pa awọn maapu rẹ
- Idanwo asopọ lati jẹrisi awọn iwe-ẹri API

## Awọn Ohun Tí A Nilo

### Awọn Ohun Tí Eto Nilo
- Enhance Control Panel ti fi sori ẹrọ ati ti o ṣee wọle si
- Fifi sori WordPress Multisite ti a gbalejo lori tabi ti a so mọ olupin Enhance
- Olupin wẹẹbu Apache (Enhance lọwọlọwọ ṣe atilẹyin awọn iṣeto Apache; LiteSpeed Enterprise wa ni iye owo ti a dinku)

### Wiwọle API
O gbọdọ ni wiwọle alakoso si Enhance Control Panel lati ṣẹda awọn token API.

## Gbigba Awọn Iwe-ẹri API Rẹ

### 1. Ṣẹda API Token Kan

1. Wọle si Enhance Control Panel rẹ gẹgẹ bi alakoso
2. Tẹ **Settings** ninu akojọ lilọ kiri
3. Lọ si **Access Tokens**
4. Tẹ **Create Token**
5. Fun token naa ni orukọ apejuwe (fun apẹẹrẹ, "Iṣepọ Ultimate Multisite")
6. Yan ipa **System Administrator**
7. Fun ọjọ ipari:
   - Fi silẹ ni ofo ti o ba fẹ ki token naa ma pari rara
   - Tabi ṣeto ọjọ ipari kan pato fun idi aabo
8. Tẹ **Create**

Lẹhin ẹda, **Access Token** ati **Organization ID** rẹ yoo han. **Fi iwọnyi pamọ lẹsẹkẹsẹ** nitori token naa yoo han lẹẹkan ṣoṣo.

### 2. Gba Organization ID Rẹ

Organization ID han lori oju-iwe Access Tokens ninu apoti alaye buluu ti a samisi "Org ID: {your_id}".

Organization ID jẹ UUID ti a ṣe ni ọna bii: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

O tun le wa Organization ID ti onibara nipa:
1. Lọ si oju-iwe **Customers**
2. Tẹ **Manage customer** fun onibara ti o yẹ
3. Wo URL naa - Organization ID ni awọn ohun kikọ alphanumeric lẹhin `/customers/`

### 3. Gba Server ID Rẹ

Lati wa Server ID rẹ (ti a nilo fun awọn iṣẹ domain):

1. Ninu Enhance Control Panel, lọ si **Servers**
2. Tẹ olupin nibiti fifi sori WordPress rẹ ti n ṣiṣẹ
3. Server ID (ọna UUID) yoo han ninu URL tabi awọn alaye olupin
4. Ni ọna miiran, o le lo API lati ṣe atokọ awọn olupin:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID tẹle ọna UUID: `00000000-0000-0000-0000-000000000000`

### 4. Gba API URL Rẹ

API URL rẹ ni URL Enhance Control Panel rẹ pẹlu `/api/` ti a fi kun un:

```
https://your-enhance-panel.com/api/
```

**Pataki:** Ọna `/api/` jẹ dandan. Awọn aṣiṣe ti o wọpọ pẹlu:
- Lilo domain nikan laisi `/api/`
- Lilo HTTP dipo HTTPS (HTTPS jẹ dandan fun aabo)

## Iṣeto

### Awọn Constant Tí A Nilo

Fi awọn constant atẹle kun faili `wp-config.php` rẹ:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Eto Nipasẹ Integration Wizard

1. Ninu admin WordPress rẹ, lọ si **Ultimate Multisite** > **Settings**
2. Lọ si taabu **Integrations**
3. Wa **Iṣepọ Enhance Control Panel** ki o tẹ **Configuration**
4. Wizard naa yoo dari ọ kọja eto naa:
   - **Igbesẹ 1:** Ifihan ati akopọ ẹya
   - **Igbesẹ 2:** Tẹ awọn iwe-ẹri API rẹ sii (Token, API URL, Server ID)
   - **Igbesẹ 3:** Ṣe idanwo asopọ naa
   - **Igbesẹ 4:** Ṣayẹwo ki o mu ṣiṣẹ

O le yan lati:
- Jẹ ki wizard naa fi awọn constant naa sinu faili `wp-config.php` rẹ laifọwọyi
- Daakọ awọn itumọ constant ki o fi wọn kun pẹlu ọwọ

## Iṣeto WordPress Afikun

Da lori esi agbegbe ([Ìjíròrò #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), o le nilo lati ṣeto awọn eto afikun wọnyi:

### Iṣeto .htaccess

Ti o ba ni awọn iṣoro pẹlu maapu domain:
1. Pa faili Enhance `.htaccess` atilẹba rẹ
2. Rọpo rẹ pẹlu faili WordPress Multisite `.htaccess` boṣewa

### Awọn Constant Cookie

Fi awọn constant wọnyi kun `wp-config.php` lati rii daju iṣakoso cookie to pe kọja awọn domain ti a ṣe maapu:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Bii Ó Ṣe Nṣiṣẹ

### Nigbati A Ba Ṣe Maapu Domain Kan

1. Olumulo kan ṣe maapu domain aṣa kan ninu Ultimate Multisite (tabi a ṣẹda site tuntun ni ipo subdomain)
2. Iṣepọ naa fi ibeere POST ranṣẹ si API Enhance: `/servers/{server_id}/domains`
3. Enhance fi domain naa kun iṣeto olupin rẹ
4. Nigbati DNS ba yanju si olupin rẹ, Enhance pese iwe-ẹri SSL laifọwọyi nipasẹ LetsEncrypt
5. Domain naa di lọwọ pẹlu HTTPS

### Nigbati A Ba Yọ Domain Kan Kuro

1. A pa maapu domain kan ninu Ultimate Multisite
2. Iṣepọ naa beere lọwọ Enhance lati wa ID ti domain naa
3. A fi ibeere DELETE ranṣẹ si: `/servers/{server_id}/domains/{domain_id}`
4. Enhance yọ domain naa kuro ninu iṣeto olupin rẹ

### Ṣiṣayẹwo DNS ati SSL

Ultimate Multisite pẹlu iṣayẹwo DNS ati SSL ti a kọ sinu rẹ:
- O le ṣeto aarin akoko ayẹwo ninu **Domain Mapping Settings** (aiyipada: 300 aaya/iṣẹju 5)
- Eto naa yoo jẹrisi itankale DNS ṣaaju ki o to samisi domain kan bi lọwọ
- A n ṣayẹwo iwulo iwe-ẹri SSL laifọwọyi
- Enhance n ṣakoso pipese SSL laifọwọyi, nitorina iṣeto SSL pẹlu ọwọ ko nilo

## Jẹrisi Eto

### Ṣe Idanwo Asopọ naa

1. Nínú Aṣàkóso Ìṣepọ̀, lo ìgbésẹ̀ **Dán Ìsopọ̀ Wò**
2. Plugin náà yóò gbìyànjú láti ṣe àtòjọ àwọn domain lórí server rẹ
3. Ìfiránṣẹ́ àṣeyọrí jẹ́rìí pé:
   - Àwọn ẹ̀rí API tọ̀nà
   - API URL ṣeé wọlé sí
   - Server ID wúlò
   - A ṣètò àwọn ìyọ̀nda dáadáa

### Lẹ́yìn Ṣíṣe Mapping Domain Kan

1. Ṣe mapping domain ìdánwò kan nínú Ultimate Multisite
2. Ṣàyẹ̀wò àwọn log Ultimate Multisite (**Ultimate Multisite** > **Àwọn Log** > **integration-enhance**)
3. Ṣàrídájú nínú Enhance Control Panel pé a ti fi domain náà kún:
   - Lọ sí **Àwọn Server** > **Server Rẹ** > **Àwọn Domain**
   - Domain tuntun náà yẹ kí ó hàn nínú àtòjọ
4. Nígbà tí DNS bá ti tan ká, ṣàrídájú pé a pèsè SSL láìfọwọ́ṣe

## Yíyanjú Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API

**Àṣìṣe: "Kùnà láti sopọ̀ mọ́ Enhance API"**
- Ṣàrídájú pé `WU_ENHANCE_API_URL` ní `/api/` ní òpin
- Rí dájú pé o ń lo HTTPS, kì í ṣe HTTP
- Ṣàyẹ̀wò pé pánẹ́ẹ̀lì Enhance ṣeé wọlé sí láti server WordPress rẹ
- Ṣàrídájú pé kò sí àwọn òfin firewall tí ń dènà ìsopọ̀ náà

**Àṣìṣe: "A kò rí Enhance API Token"**
- Rí dájú pé a ti ṣàlàyé `WU_ENHANCE_API_TOKEN` nínú `wp-config.php`
- Ṣàrídájú pé token náà kò tíì jẹ́ píparẹ́ tàbí parí àsìkò nínú Enhance
- Ṣàyẹ̀wò àwọn àṣìṣe ìkọ̀wé nínú iye token náà

**Àṣìṣe: "A kò tíì ṣètò Server ID"**
- Ṣàrídájú pé a ti ṣàlàyé `WU_ENHANCE_SERVER_ID` nínú `wp-config.php`
- Rí dájú pé Server ID jẹ́ fọ́ọ̀mù UUID tó wúlò
- Jẹ́rìí pé server náà wà nínú pánẹ́ẹ̀lì Enhance rẹ

### A Kò Fi Domain Kún

**Ṣàyẹ̀wò àwọn log:**
1. Lọ sí **Ultimate Multisite** > **Àwọn Log**
2. Ṣe àlẹmọ́ nípasẹ̀ **integration-enhance**
3. Wá àwọn ìfiránṣẹ́ àṣìṣe tí ń tọ́ka sí ìṣòro náà

**Àwọn okunfa tó wọ́pọ̀:**
- Fọ́ọ̀mù orúkọ domain tí kò wúlò
- Domain ti wà tẹ́lẹ̀ nínú Enhance
- Àwọn ìyọ̀nda API kò tó (rí dájú pé token ní ipa System Administrator)
- Server ID kò bá server gangan nínú Enhance mu

### Àwọn Ìṣòro Ìwé-ẹ̀rí SSL

**SSL kò ń pèsè:**
- Ṣàrídájú pé DNS ń tọ́ka sí àdírẹ́sì IP server rẹ
- Ṣàyẹ̀wò pé domain náà ń túmọ̀ dáadáa: `nslookup yourdomain.com`
- Enhance nílò kí DNS túmọ̀ kí ó tó lè pèsè SSL
- Pípèsè SSL máa ń gba ìṣẹ́jú 5-10 lẹ́yìn títan DNS ká
- Ṣàyẹ̀wò àwọn log Enhance Control Panel fún àwọn àṣìṣe pàtó sí SSL

**Yíyanjú ìṣòro SSL pẹ̀lú ọwọ́ nínú Enhance:**
1. Lọ sí **Àwọn Server** > **Server Rẹ** > **Àwọn Domain**
2. Wá domain rẹ kí o sì ṣàyẹ̀wò ipò SSL rẹ
3. O lè fi ọwọ́ bẹ̀rẹ̀ pípèsè SSL bí ó bá ṣe pàtàkì

### Àárín Àkókò Ṣíṣàyẹ̀wò DNS

Bí àwọn domain tàbí àwọn ìwé-ẹ̀rí SSL bá ń gba àkókò púpọ̀ jù láti ṣiṣẹ́:
1. Lọ sí **Ultimate Multisite** > **Àwọn Ètò** > **Domain Mapping**
2. Wá ètò **Àárín Àkókò Ṣíṣàyẹ̀wò DNS**
3. Ṣàtúnṣe láti aiyipada ìṣẹ́jú-àáyá 300 sí iye kékeré (ó kéré jù: ìṣẹ́jú-àáyá 10)
4. **Àkíyèsí:** Àwọn àárín àkókò kékeré túmọ̀ sí àwọn àyẹ̀wò loorekoore síi ṣùgbọ́n ẹrù server tó ga síi

### Àwọn Àṣìṣe Ìjẹ́rìísí

**Àwọn àṣìṣe HTTP 401/403:**
- Ṣẹ̀dá token API rẹ tuntun nínú Enhance
- Ṣàrídájú pé token náà ní ipa **System Administrator**
- Ṣàyẹ̀wò pé token náà kò tíì parí àsìkò
- Rí dájú pé o ń lo Organization ID tó tọ́ (bí ó tilẹ̀ jẹ́ pé kì í sábà jẹ́ dandan nínú URL)

### Ìtúpalẹ̀ Log

Mú logging alálàyé ṣiṣẹ́:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Lẹ́yìn náà ṣàyẹ̀wò àwọn log ní:
- Àwọn log Ultimate Multisite: **Ultimate Multisite** > **Àwọn Log**
- Log ìṣàwárí-àṣìṣe WordPress: `wp-content/debug.log`
- Àwọn log pánẹ́ẹ̀lì Enhance: Ó wà nínú ojú ìṣàkóso Enhance

## Ìtọ́kasí API

### Ìjẹ́rìísí
Gbogbo àwọn ìbéèrè API lo ìjẹ́rìísí bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Àwọn Endpoint Tí A Máa Ń Lo

**Ṣe Àtòjọ Àwọn Server:**
```
GET /servers
```

**Ṣe Àtòjọ Àwọn Domain lórí Server Kan:**
```
GET /servers/{server_id}/domains
```

**Fi Domain Kan Kún:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Pa Domain Kan Rẹ́:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Ìwé API Kíkún
Ìwé API pípé: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Àwọn Ìlànà Tó Dára Jù

### Ààbò
- **Má ṣe fi àwọn token API sí version control láé**
- Fi àwọn token pamọ́ sínú `wp-config.php` tí ó yẹ kí a yọ kúrò nínú Git
- Lo àwọn token pẹ̀lú àwọn ìyọ̀nda tó yẹ (System Administrator fún ìṣepọ̀ kíkún)
- Ṣètò àwọn ọjọ́ ìparí token fún àwọn ayíká production
- Yí àwọn token padà nígbà dé ìgbà

### Ìṣiṣẹ́
- Lo àárín àkókò ṣíṣàyẹ̀wò DNS aiyipada (ìṣẹ́jú-àáyá 300) láti yàgò fún àwọn ìpè API tó pọ̀ jù
- Ṣọ́ àwọn ohun àmúṣọrọ̀ server Enhance nígbà tí o bá ń ṣiṣẹ́ àwọn iṣẹ́ domain alásekálẹ̀ ńlá
- Ronú láti ṣe fífi àwọn domain kún ní ìpele bí o bá ń ṣe mapping ọ̀pọ̀ domain lẹ́ẹ̀kan ṣoṣo

### Ìṣọ́
- Máa ṣàyẹ̀wò àwọn log Ultimate Multisite déédéé fún àwọn àṣìṣe ìṣepọ̀
- Ṣètò ìṣọ́ fún fífi domain kún tí ó kùnà
- Ṣàrídájú pé àwọn ìwé-ẹ̀rí SSL ń pèsè dáadáa
- Máa ṣọ́ agbára server Enhance àti àwọn ààlà domain

## Àwọn Ohun Èlò Àfikún

- **Ìwé Àṣẹ Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Ìwé API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Àgbègbè Ìfọ̀rọ̀wérọ̀ Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Ìjíròrò GitHub:** [Ìṣòro #265 - Àwọn Ìmọ̀ràn Ìṣepọ̀ Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ìtọ́nisọ́nà Domain Mapping Ultimate Multisite:** Wo ojúewé wiki "Bí a ṣe lè Ṣètò Domain Mapping v2"

## Àtìlẹ́yìn

Bí o bá pàdé àwọn ìṣòro:
1. Ṣàyẹ̀wò apá Yíyanjú Ìṣòro lókè
2. Ṣàgbéyẹ̀wò àwọn log Ultimate Multisite
3. Kan sí àwọn [Ìjíròrò GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kàn sí àtìlẹ́yìn Enhance fún àwọn ìṣòro pàtó sí pánẹ́ẹ̀lì
5. Ṣẹ̀dá ìjíròrò tuntun pẹ̀lú àwọn log àṣìṣe alálàyé fún ìrànlọ́wọ́ àgbègbè

## Àwọn Àkíyèsí

- Ìṣepọ̀ yìí ń bójú tó domain aliases nìkan; Enhance ń ṣàkóso SSL laifọwọ́yi
- Ìṣepọ̀ náà ṣe àtìlẹ́yìn fún custom domain mappings àti àwọn site tí a dá lórí subdomain
- Ṣíṣe www subdomain laifọwọ́yi lè jẹ́tò nínú àwọn ètò Domain Mapping
- Enhance ń ṣe àtìlẹ́yìn fún àwọn ìṣètò Apache lọ́wọ́lọ́wọ́ (LiteSpeed Enterprise wà)
- Yíyọ domain kúrò nínú Ultimate Multisite yóò yọ domain náà kúrò nínú Enhance ṣùgbọ́n ó lè má pa àwọn SSL certificates tó ní í ṣe pẹ̀lú rẹ̀ rẹ́ lẹ́sẹ̀kẹsẹ
