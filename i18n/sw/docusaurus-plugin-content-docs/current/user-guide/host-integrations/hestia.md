---
title: Ujumuishaji wa Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Kuunganisha na Hestia Control Panel

Mwongozo huu unaeleza jinsi ya kusanidi uunganisho wa Ultimate Multisite na Hestia ili domain zilizounganishwa kwenye mtandao wako ziongezwe (na kuondolewa) kiotomatiki kama Web Domain Aliases kwenye Hestia.

- Marejeo ya Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Nyaraka rasmi za REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Inafanya Nini
- Domain inapounganishwa kwenye Ultimate Multisite, uunganisho huu unaita Hestia API kuendesha:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Uunganisho wa domain unapoondolewa, inaendesha:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kwa hiari huongeza/kuondoa alias ya `www.` kulingana na mipangilio yako ya "Auto-create www subdomain" kwenye mipangilio ya Domain Mapping.

## Mahitaji ya Awali
- Web Domain ya Hestia iliyopo tayari inayoelekeza kwenye usakinishaji wako wa WordPress. Uunganisho huu utaambatanisha aliases kwenye domain hii ya msingi.
- Ufikiaji wa Hestia API umewashwa. Unaweza kuthibitisha kwa kutumia nenosiri au API hash/token.

Angalia nyaraka za REST API za Hestia kwa kuwasha ufikiaji wa API na maelezo ya uthibitishaji:
https://hestiacp.com/docs/server-administration/rest-api.html

## Usanidi (Wizard → Integrations → Hestia)
Weka thamani zifuatazo:

- `WU_HESTIA_API_URL` (lazima)
  - Mwisho wa API ya msingi, kwa kawaida `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (lazima)
  - Mtumiaji wa Hestia anayetumika kwa amri za API (mara nyingi `admin`).
- `WU_HESTIA_API_PASSWORD` au `WU_HESTIA_API_HASH` (angalau moja)
  - Chagua njia moja ya uthibitishaji: nenosiri au API hash/token.
- `WU_HESTIA_ACCOUNT` (lazima)
  - Akaunti (mmiliki) ya Web Domain kwenye Hestia; hii ndiyo hoja ya kwanza kwa CLI.
- `WU_HESTIA_WEB_DOMAIN` (lazima)
  - Web Domain ya Hestia iliyopo inayohudumia WordPress yako (aliases zitaambatanishwa hapa).
- `WU_HESTIA_RESTART` (hiari; chaguo-msingi `yes`)
  - Iwe kuanzisha upya/kupakia upya huduma baada ya mabadiliko ya alias.

Unaweza kuruhusu wizard kuingiza constants hizi kwenye `wp-config.php`, au uzifafanue mwenyewe.

## Kuthibitisha Usanidi
- Katika hatua ya "Testing" ya wizard, plugin inaita `v-list-web-domains <WU_HESTIA_ACCOUNT> json` kupitia API. Jibu la mafanikio linathibitisha muunganisho na uthibitishaji.
- Baada ya kuunganisha domain, angalia kwenye Hestia: Web > domain ya msingi > Aliases. Unapaswa kuona alias mpya imeongezwa.

## Vidokezo na Ushauri
- Hakikisha `WU_HESTIA_WEB_DOMAIN` ipo tayari na inamilikiwa na `WU_HESTIA_ACCOUNT`.
- Ikiwa SSL inahitajika, simamia vyeti kwenye Hestia. Uunganisho huu kwa sasa unashughulikia aliases pekee.
- Plugin inaweza pia kuongeza/kuondoa `www.<domain>` kulingana na mipangilio yako ya "www subdomain" kwenye Domain Mapping.

## Mfano wa API Call (cURL)
Hapa chini ni mfano wa dhana (rekebisha kulingana na mazingira yako). Rejea nyaraka rasmi kwa vigezo halisi.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (au &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias ya kuongeza)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Kwa kufuta, tumia `cmd=v-delete-web-domain-alias` na hoja sawa.

## Utatuzi wa Matatizo
- Hitilafu ya HTTP kutoka API: thibitisha `WU_HESTIA_API_URL` inaweza kufikiwa na inajumuisha `/api`.
- Hitilafu za uthibitishaji: thibitisha `WU_HESTIA_API_USER` na ama `WU_HESTIA_API_PASSWORD` au `WU_HESTIA_API_HASH`.
- "Missing account/base domain" kwenye kumbukumbu: hakikisha `WU_HESTIA_ACCOUNT` na `WU_HESTIA_WEB_DOMAIN` zimewekwa na ni halali kwenye Hestia.

## Marejeo
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Marejeo ya Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
