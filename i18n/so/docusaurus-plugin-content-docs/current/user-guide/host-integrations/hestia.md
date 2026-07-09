---
title: Isdhaafinta Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Iskuulka Control Panel Integration {#hestia-control-panel-integration}

Tani hagitaanka wuxuu sharaxayaa sida aad u dejisayso isku-dhafka Ultimate Multisite iyo Hestia si loo hubiyo in domain-yada la qorsheeyay ee shirkaddaada ay si toos ah ugu ku dhex jiraan (oo la soo daro iyo la saarmo) sidii Aliases oo Web Domain ah Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Qoraalka REST API-ga rasmiga ah: https://hestiacp.com/docs/server-administration/rest-api.html

## Waa Maxay Waxa Ay Samaynayso {#what-it-does}
- Marka domain la qorsheeyo Ultimate Multisite, isku-dhafka wuxuu u socdaa Hestia API si uu u fuliyo:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Marka la saaro qorshaha domain-ka, wuxuu fuliyaa:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Waxaa laga heli karaa in la ku daro/la saaro alias-ka `www.` iyadoo ku xiran dejintaada "Auto-create www subdomain" ee Dejinta Domain-ka.

## Shuruudaha Muhiimka ah (Prerequisites) {#prerequisites}
- Web Domain Hestia oo jira oo hore u tilmaamaya warqadda WordPress-kaaga. Isku-dhafka wuxuu ku xiran doonaa aliases domain-kaas asaasiga ah.
- Helidda API-ga Hestia waa la iibsaday (enabled). Waxaad isku dhafsan kartaa password ama hash/token API-ga.

Waxaad arki kartaa qoraalka REST API-ga Hestia si aad u furto helitaanka API iyo faahfaahinta isku dhafka:
https://hestiacp.com/docs/server-administration/rest-api.html

## Dejinta (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Bixi qiimaha soo socda:

- `WU_HESTIA_API_URL` (wajib ah)
  - Goobta API endpoint-ka, inta caadi ahaan waa `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (wajib ah)
  - Isticmaalka Hestia ee loo isticmaalo amarrada API (intaa badanaa tahay `admin`).
- `WU_HESTIA_API_PASSWORD` ama `WU_HESTIA_API_HASH` (hal ka mid ah)
  - Doorasho habka aqoonsiga: erayga sirta ama API hash/token.
- `WU_HESTIA_ACCOUNT` (wajib ah)
  - Account-ka (milkiilaha) Web Domain-ka Hestia; tani waa qaybta ugu horreysa ee CLI-ga.
- `WU_HESTIA_WEB_DOMAIN` (wajib ah)
  - Web Domain-ka jira ee Hestia oo ku shaqeeya WordPress-kaaga (aliases-ku waxaa lagu dhejin doonaa halkan).
- `WU_HESTIA_RESTART` (ilaa-wajib; default waa `yes`)
  - Ma rabtaa inaad dib u bilaawdo/la soo celiso adeegyada ka dib markii la beddelo aliases.

Waxaad u oggolaan kartaa in wizard-ka lagu dhex galo qaybtaas (constants) ee `wp-config.php`, ama aad si gacanta ah ugu qorto.

## Hubinta Dejinta {#verifying-setup}
- Tallaabada "Testing" ee wizard-ka, plugin-ku wuxuu ku wicayaa `v-list-web-domains <WU_HESTIA_ACCOUNT> json` iyadoo la isticmaalayo API. Jawaab sax ah waxay xaqiijinaysaa isku xirnaanta iyo aqoonsiga.
- Marka la beddelo domain, hubi Hestia: Web > base domain > Aliases. Waxaad arki doontaa alias-ka cusub oo lagu daray.

## Fikradaha & Talooyin {#notes--tips}
- Hubi in `WU_HESTIA_WEB_DOMAIN` uu hore u jiro oo `WU_HESTIA_ACCOUNT`-ka leeyahay.
- Haddii SSL loo baahan yahay, hubi shahaadada Hestia. Isku xirnaanta (integration) waxay hadda kaliya maamuli doonto aliases-ka.
- Plugin-ku sidoo kale wuxuu ku dari karaa/saarin karaa `www.<domain>` iyadoo ku xiran dejintaaga "www subdomain".

## Tusaale API Call (cURL) {#example-api-call-curl}
Waa tusaale guud (isbeddel deegaankaaga). U fiiri dukumentiga rasmiga si aad u hesho parameters-ka saxda ah.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ama hadd bi &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias la lagu dheg la)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Haddida (delete), isticmaal `cmd=v-delete-web-domain-alias` iyo si isku mid ah argadaas.

## Waxyaabaha La Sameeyay (Troubleshooting) {#troubleshooting}
- Khalad HTTP ka yimid API: hubi in `WU_HESTIA_API_URL` uu la heli karo oo ay ku jirto `/api`.
- Khaladka Xaqiijinta (Auth errors): hubi `WU_HESTIA_API_USER` iyo mid ka mid ah `WU_HESTIA_API_PASSWORD` ama `WU_HESTIA_API_HASH`.
- "Account/base domain la'aan" ee logs: hubi in `WU_HESTIA_ACCOUNT` iyo `WU_HESTIA_WEB_DOMAIN` ay ku hagaagsan yihiin oo shaqaynayaan Hestia.

## Tixraacyada (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
