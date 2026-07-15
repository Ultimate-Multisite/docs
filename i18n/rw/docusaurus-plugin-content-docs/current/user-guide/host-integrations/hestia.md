---
title: Urugero rwo gukoresha Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Uburyo mu Gukoresha Control Panel

Iyi gicerwa ni igice cyo gutangira uko ugufata (configure) uburyo bwo gukoresha Ultimate Multisite Hestia integration kugira ngo domain dzishobora kuba zishobora kuboneka muri urugero rwawe (mapped domains) zizera zikurikiranwa (and removed) nk'ibyo mu Hestia.

- Uburyo bwo gukoresha Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokemba ry'API y'igihugu cy'ingenzi (Official REST API doc): https://hestiacp.com/docs/server-administration/rest-api.html

## Icyo Kiyeza {#what-it-does}
- Iyo domain ikoreshwa mu Ultimate Multisite, integration itera ku Hestia API kugira ngo yikoreshe:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Iyo gukoresha domain mapping kigero cyangwa kigarwa, ikoreshwa:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Mu gihe cy'ubwujubi (optionally), igice cyo www. kirwa/kugera (adds/removes the `www.` alias) kigero cyangwa kigarwa, kugira ngo yitandukanye n'ibyo ugiye mu "Auto-create www subdomain" setting muri Domain Mapping settings yawe.

## Icyo Kugaragaza (Prerequisites) {#prerequisites}
- Uburyo bwo gukoresha Hestia Web Domain yakiriye kandi yitera ku WordPress yawe. Integration izakoresha aliases kuri domain iyihe.
- Gukoresha API y'Hestia. Uzi kukwibuka (authenticate) uburyo bwawe bishobora kuba ari uburyo bwo gukoresha password cyangwa API hash/token.

Bona dokemba ry'API ya Hestia kugira ngo wumve uburyo bwo gukoresha API n'ibyo uzi kukwibuka:
https://hestiacp.com/docs/server-administration/rest-api.html

## Gukoresha (Configuration) (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Gufata ibi byo:

- `WU_HESTIA_API_URL` (uri ya API ya Hestia, ikoreshwa kwa ajili ya kuwasiliana na seva, kwa kawaida ni `https://your-hestia-host:8083/api/`).
- `WU_HESTIA_API_USER` (Jina la mtumiaji linalotumika kwa amri za API (mara nyingi huwa ni `admin`)).
- `WU_HESTIA_API_PASSWORD` au `WU_HESTIA_API_HASH` (Chagua njia moja ya kuthibitisha: neno la siri au API hash/token).
- `WU_HESTIA_ACCOUNT` (Hesabu (mmiliki) ya Web Domain katika Hestia; hii ndiyo kiambatu cha kwanza kwa CLI).
- `WU_HESTIA_WEB_DOMAIN` (Web Domain iliyopo kwenye Hestia inayotumika kwa WordPress yako (aliases zitajumuishwa hapa)).
- `WU_HESTIA_RESTART` (Hiari; kiwango cha msingi ni `yes`).
  - Je, unataka kuanzisha upya/ku-reload huduma baada ya kubadilisha aliases.

Unaweza kuruhusu wizard kuingiza hizi constants kwenye `wp-config.php`, au kuzifafanua mwenyewe.

## Kuthibitisha Setup (Verifying Setup) {#verifying-setup}
- Katika hatua ya "Testing" ya wizard, plugin inatumia API kwa kutumia `v-list-web-domains <WU_HESTIA_ACCOUNT> json`. Jibu la mafanikio linaonyesha muunganisho na uthibitishaji umefanyika vizuri.
- Baada ya kuweka alias (mapping), zingatia Hestia: Web > domain ya msingi > Aliases. Utapaswa kuona alias mpya imewekwa hapo.

## Maelezo na Vidokezo (Notes & Tips) {#notes--tips}
- Hakikisha `WU_HESTIA_WEB_DOMAIN` tayari ipo na inamilikiwa na `WU_HESTIA_ACCOUNT`.
- Ikiwa unahitaji SSL, usimamisishe vyeti (certificates) kwenye Hestia. Kwa sasa, muunganisho huu unafanya kazi tu kwa aliases.
- Plugin inaweza pia kuongeza/kufuta `www.<domain>` kulingana na mipangilio yako ya "www subdomain" katika Domain Mapping.

## Mfano wa Kuita API (cURL) {#example-api-call-curl}
Hapa kuna mfano wa dhana (badilisha kulingana na mazingira yako). Tafadhali thamani kwa maelezo rasmi.

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

Kugera, kugabanya (delete), gukoresha `cmd=v-delete-web-domain-alias` kandi uburyo nko mu gihe cyo gukoresha amagambo atandukanye.

## Gukora Icyemezo (Troubleshooting) {#troubleshooting}
- HTTP error ku API: gusubiza ko `WU_HESTIA_API_URL` igaragaza umwihariko kandi igaragaza `/api`.
- Erori z'Ubwishuri (Auth errors): gushyira mu mategeko ko `WU_HESTIA_API_USER` na yawe `WU_HESTIA_API_PASSWORD` cyangwa `WU_HESTIA_API_HASH`.
- "Missing account/base domain" mu logs: guhagarara ko `WU_HESTIA_ACCOUNT` n'i `WU_HESTIA_WEB_DOMAIN` yashyiramo kandi yari yiza mu Hestia.

## Amakuru (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
