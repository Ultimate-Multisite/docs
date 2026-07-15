---
title: Kupanga Kufotokozera kwa Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Kufufu ya Kufunga na Control Panel ya Hestia

Iyi mwongozi uliyoona uliwezera kufunga Ultimate Multisite Hestia integration, kuliye kuongeza (na kuondoa) domains zilizopangwa katika mtandao wako kama Web Domain Aliases ndani ya Hestia.

- Kufaa CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Iyi Yoyopanga {#what-it-does}
- Lipo domain iliyopangwa katika Ultimate Multisite, integration inaita Hestia API ili ifanye hivi:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Wakati domain mapping inafutwa, inafanya hivi:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Inaweza kuongeza/kuondoa alias ya `www.` kulingana na mipangilio yako ya “Auto-create www subdomain” katika Domain Mapping settings.

## Vifaa vya Kwanza (Prerequisites) {#prerequisites}
- Lipo Hestia Web Domain iliyopo ambayo tayari inashikilia WordPress installation yako. Integration itachomeka aliases kwenye domain hii ya msingi.
- API access ya Hestia imewezeshwa. Unaweza kujitambulisha kwa kutumia nenosha au hash/token ya API.

Angalia REST API docs za Hestia ili kuwasha kufikia API na maelezo ya utambulisho:
https://hestiacp.com/docs/server-administration/rest-api.html

## Ufunguo (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Toa thamani zifuatazo:

- `WU_HESTIA_API_URL` (kufunika)
  - Kufunika ya mwisho wa API, kwa kawaida ni `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kufunika)
  - Hestia user inayotumika kwa amri za API (mara nyingi ni `admin`).
- `WU_HESTIA_API_PASSWORD` au `WU_HESTIA_API_HASH` (pafupisho moja)
  - Chagua njia moja ya kuingia: nenosiri au API hash/token.
- `WU_HESTIA_ACCOUNT` (kufunika)
  - Akaunti (mmiliki) ya Web Domain katika Hestia; hii ndiyo kiambatu cha kwanza kwa CLI.
- `WU_HESTIA_WEB_DOMAIN` (kufunika)
  - Web Domain iliyopo kwenye Hestia inayofanya kazi WordPress yako (aliases zitajumuishwa hapa).
- `WU_HESTIA_RESTART` (chaguo); kiwango cha msingi ni `yes`
  - Je, utaanzisha upya/ku-reload huduma baada ya kubadilisha aliases.

Unaweza kuruhusu wizard kuingiza constants hizi kwenye `wp-config.php`, au kuzifafanua mwenyewe.

## Kuangalia Maandalizi (Verifying Setup) {#verifying-setup}
- Katika hatua ya wizard "Testing", plugin inaita `v-list-web-domains <WU_HESTIA_ACCOUNT> json` kupitia API. Jibu la mafanikio linathibitisha muunganisho na uthibitishaji.
- Baada ya kuweka domain, angalia kwenye Hestia: Web > base domain > Aliases. Utapaswa kuona alias mpya imewekwa.

## Maelezo na Vidokezo (Notes & Tips) {#notes--tips}
- Hakikisha `WU_HESTIA_WEB_DOMAIN` tayari ipo na inamilikiwa na `WU_HESTIA_ACCOUNT`.
- Ikiwa SSL inahitajika, usimamisishe certificates kwenye Hestia. Muunganisho huu unafanya kazi aliases tu kwa sasa.
- Plugin inaweza pia kuongeza/kufuta `www.<domain>` kulingana na mipangilio yako ya "www subdomain" ya Domain Mapping.

## Mfano wa Kuita API (cURL) {#example-api-call-curl}
Hapa kuna mfano wa dhana (badilisha kwa mazingira yako). Tafadhali thamani za kina kwenye hati rasmi.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Kutya ku delete, genda `cmd=v-delete-web-domain-alias` ndi same args.

## Kukhala Mfundo (Troubleshooting) {#troubleshooting}
- HTTP error ku API: chonde ndikumbukira kuti `WU_HESTIA_API_URL` ikuti yomwe mungayendera ndi `/api`.
- Errors za Auth: chonde kumpatsa kuti `WU_HESTIA_API_USER` ndi `WU_HESTIA_API_PASSWORD` kapena `WU_HESTIA_API_HASH`.
- “Missing account/base domain” m'logs: chonde kudziwa kuti `WU_HESTIA_ACCOUNT` ndi `WU_HESTIA_WEB_DOMAIN` zikuyenera kukhala pansi ndi yomwe yomwe yomwe wokhala m'Hestia.

## Zomwe Mungayendera (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
