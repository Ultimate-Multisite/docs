---
title: Ìṣepọ̀ Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Ìṣepọ̀ Cloudflare

## Àkótán {#overview}
Cloudflare jẹ́ nẹ́tíwọ́ọ̀kì ìfijiṣẹ akoonu (CDN) àti olupèsè ààbò tó gbajúmọ̀ tó ń ràn wẹ́ẹ̀bù lọ́wọ́ láti dáàbò bo ara wọn àti láti yára sí i. Ìṣepọ̀ yìí ń jẹ́ kí iṣakoso domain láàárín Ultimate Multisite àti Cloudflare ṣẹlẹ̀ laifọwọyi, pàápàá fún àwọn fifi sori multisite subdomain.

## Àwọn Ẹ̀ya {#features}
- Ṣíṣe subdomain laifọwọyi ní Cloudflare
- Àtilẹ́yìn subdomain tí a ṣe proxied
- Ìṣakoso àkọsílẹ̀ DNS
- Ìfihàn àkọsílẹ̀ DNS tó dára sí i nínú abojuto Ultimate Multisite

## Àwọn Ìbéèrè {#requirements}
Àwọn constants wọ̀nyí gbọ́dọ̀ jẹ́ ṣíṣe àtọ́ka nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò {#setup-instructions}

### 1. Gba Cloudflare API Key Rẹ {#1-get-your-cloudflare-api-key}

1. Wọlé sí Cloudflare dashboard rẹ
2. Lọ sí "My Profile" (tẹ imeeli rẹ ní igun òkè ọ̀tún)
3. Yan "API Tokens" láti inú àkójọ aṣàyàn
4. Ṣẹ̀dá API token tuntun pẹ̀lú àwọn ìyọ̀nda wọ̀nyí:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Ṣàdàkọ API token rẹ

### 2. Gba Zone ID Rẹ {#2-get-your-zone-id}

1. Nínú Cloudflare dashboard rẹ, yan domain tí o fẹ́ lò
2. Zone ID hàn nínú taabu "Overview", ní sidebar ọ̀tún lábẹ́ "API"
3. Ṣàdàkọ Zone ID náà

### 3. Ṣàfikún Constants sí wp-config.php {#3-add-constants-to-wp-configphp}

Ṣàfikún àwọn constants wọ̀nyí sí fáìlì `wp-config.php` rẹ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Mú Ìṣepọ̀ Náà Ṣiṣẹ́ {#4-enable-the-integration}

1. Nínú WordPress admin rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí taabu "Domain Mapping"
3. Yi lọ sísàlẹ̀ sí "Host Integrations"
4. Mú ìṣepọ̀ Cloudflare ṣiṣẹ́
5. Tẹ "Save Changes"

## Bí Ó Ṣe Ń Ṣiṣẹ́ {#how-it-works}

### Ìṣakoso Subdomain {#subdomain-management}

Nígbà tí a bá ṣẹ̀dá site tuntun nínú fifi sori multisite subdomain:

1. Ìṣepọ̀ náà fi ìbéèrè ránṣẹ́ sí API Cloudflare láti ṣàfikún àkọsílẹ̀ CNAME fún subdomain náà
2. A ṣètò subdomain náà láti jẹ́ proxied nípasẹ̀ Cloudflare ní aiyipada (a lè yí èyí padà pẹ̀lú filters)
3. Nígbà tí a bá pa site kan rẹ́, ìṣepọ̀ náà yóò yọ subdomain náà kúrò ní Cloudflare

### Ìfihàn Àkọsílẹ̀ DNS {#dns-record-display}

Ìṣepọ̀ náà ń mú ìfihàn àkọsílẹ̀ DNS nínú abojuto Ultimate Multisite dára sí i nípa:

1. Gbigba àwọn àkọsílẹ̀ DNS taara láti Cloudflare
2. Ìfihàn bóyá àwọn àkọsílẹ̀ jẹ́ proxied tàbí bẹ́ẹ̀ kọ́
3. Fífihàn àlàyé àfikún nípa àwọn àkọsílẹ̀ DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (tí a ń pè ní "Cloudflare for SaaS" tẹ́lẹ̀) jẹ́ ẹ̀ya Cloudflare tó ń gba àwọn oníbàárà rẹ láyè láti lo àwọn domain tiwọn pẹ̀lú SSL lórí nẹ́tíwọ́ọ̀kì multisite rẹ. Ó jẹ́ ọ̀nà tí a dámọ̀ràn fún àwọn fifi sori multisite tí a ṣe domain-mapped tí wọ́n ń lo Cloudflare, nítorí pé Cloudflare ń ṣakoso ìmújáde àti ìsọ̀tunṣe certificate SSL fún domain àdáni kọọkan laifọwọyi.

### Bí ó ṣe yàtọ̀ sí ìṣepọ̀ Cloudflare boṣewa {#how-it-differs-from-the-standard-cloudflare-integration}

| | Ìṣepọ̀ boṣewa | Cloudflare Custom Hostnames |
|---|---|---|
| **Ète** | Ń ṣẹ̀dá àwọn àkọsílẹ̀ DNS fún subdomains laifọwọyi | Ń jẹ́ kí àwọn domain àdáni (mapped) ṣiṣẹ́ pẹ̀lú SSL tí Cloudflare ń ṣakoso |
| **Ó dára jù fún** | Multisite subdomain | Multisite domain-mapped |
| **SSL** | A bójú tó lọ́tọ̀ | Cloudflare ń ṣakoso rẹ̀ laifọwọyi |

### Ṣíṣètò Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Nínú Cloudflare dashboard rẹ, ṣí zone fún domain àkọ́kọ́ rẹ.
2. Lọ sí **SSL/TLS > Custom Hostnames**.
3. Ṣàfikún fallback origin tí ń tọ́ka sí IP tàbí hostname server rẹ.
4. Fún domain oníbàárà kọọkan tí a ṣe mapped nínú Ultimate Multisite, ṣàfikún ìgbàwọlé Custom Hostname kan nínú Cloudflare. O lè ṣe ìgbésẹ̀ yìí laifọwọyi nípa lílo Cloudflare API.
5. Cloudflare ń mújáde àti tún àwọn certificate TLS ṣe fún hostname àdáni kọọkan laifọwọyi nígbà tí DNS oníbàárà bá ti tọ́ka sí nẹ́tíwọ́ọ̀kì rẹ.

Fún ìtọ́kasí API kíkún, wo [ìwé ìtọ́nisọ́nà Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Ìmúdójúìwọ̀n ọ̀rọ̀-ìmọ̀
Láti Ultimate Multisite v2.6.1, a ń tọ́ka sí ẹ̀ya yìí gẹ́gẹ́ bí **Cloudflare Custom Hostnames** nínú gbogbo àwọn settings àti labels plugin. Àwọn ẹya àtijọ́ lo orúkọ "Cloudflare for SaaS", èyí tí ó jẹ́ orúkọ ọja Cloudflare tó wà ní ìsàlẹ̀.
:::

## Àwọn Àkíyèsí Pàtàkì {#important-notes}

Láti àwọn ìmúdójúìwọ̀n Cloudflare tuntun, wildcard proxying ti wà fún gbogbo àwọn oníbàárà báyìí. Èyí túmọ̀ sí pé ìṣepọ̀ DNS Cloudflare boṣewa kò ṣe pàtàkì tó bẹ́ẹ̀ mọ́ fún àwọn fifi sori multisite subdomain bí ó ti rí tẹ́lẹ̀, nítorí o lè ṣètò àkọsílẹ̀ DNS wildcard nínú Cloudflare ní rọọrun.

## Ìṣàtúnṣe Ìṣòro {#troubleshooting}

### Àwọn Ìṣòro Ìsopọ̀ API {#api-connection-issues}
- Ṣàyẹ̀wò pé API token rẹ tọ́ àti pé ó ní àwọn ìyọ̀nda tó yẹ
- Ṣàyẹ̀wò pé Zone ID rẹ tọ́
- Rí dájú pé Account Cloudflare rẹ ní àwọn ìyọ̀nda tó yẹ

### A Kò Ṣàfikún Subdomain {#subdomain-not-added}
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe eyikeyi
- Ṣàyẹ̀wò pé a kò tíì ṣàfikún subdomain náà sí Cloudflare tẹ́lẹ̀
- Rí dájú pé plan Cloudflare rẹ ń ṣe àtilẹ́yìn fún iye àwọn àkọsílẹ̀ DNS tí o ń ṣẹ̀dá

### Àwọn Ìṣòro Proxying {#proxying-issues}
- Tí o kò bá fẹ́ kí subdomains jẹ́ proxied, o lè lo filter `wu_cloudflare_should_proxy`
- Díẹ̀ nínú àwọn ẹ̀ya lè má ṣiṣẹ́ dáadáa nígbà tí wọ́n bá jẹ́ proxied (fún àpẹẹrẹ, àwọn iṣẹ́ WordPress admin kan)
- Ronú nípa lílo Page Rules Cloudflare láti forúkọ kọjá cache fún àwọn ojúewé admin
