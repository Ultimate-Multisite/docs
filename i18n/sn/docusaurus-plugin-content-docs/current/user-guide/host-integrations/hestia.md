---
title: Kugadzirwa kweHestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integration neHestia Control Panel

Iyi ndiri kuunza iinguva yakawanda yekuti unenge uchigona kuita configuration kweUltimate Multisite Hestia integration. Izvi zvinobva kudzidzisa sei kuti domain dzine mapping mumapuro dzako dzinogadzirwa (mapped domains) dzichigadzirwa nekuti dzichagadzirwa (added) uye dzichakazvinarwa (removed) se Web Domain Aliases muHestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Izvi Zvinotora {#what-it-does}
- Kana domain yakagadzirwa (mapped) muUltimate Multisite, integration inokosha Hestia API kuti itire:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kana mapping ye domain ikadzidzwa (removed), inotire:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kuti unenge uita/kudzidzwa alias ya `www.` kana kuti usina, izvi zvinobva kudzidzisa zvinhu zvakakosha mumapuro ekugadzirisa (Domain Mapping settings) pane "Auto-create www subdomain" yako.

## Zvinhu Zvinoregererwa {#prerequisites}
- Domain Web dzine Hestia yakagara iyi uye inogadzirisa WordPress yako. Integration inozvaka aliases kune domain iyi.
- API access ya Hestia inenge yakagadzirwa. Unogona kuita authentication nekubata (password) kana nehash/token ya API.

Ongore Hestia REST API docs kuti uita API access uye zvinotora dziri sei:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Tsvaka izvi zvinhu:

- `WU_HESTIA_API_URL` (chii)
  - Base endpoint yaAPI, zvinhu zvakakosha ndiri `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (chii)
  - Hestia user inogona kuwedzera API commands (matambudziko anogona kuva `admin`).
- `WU_HESTIA_API_PASSWORD` kana `WU_HESTIA_API_HASH` (panguva panguva)
  - Chidzidzo chekuvaka authentication: password kana API hash/token.
- `WU_HESTIA_ACCOUNT` (chii)
  - Account (mune) weWeb Domain muHestia; iyi ndiri chii chinogona kuva chii chaCLI.
- `WU_HESTIA_WEB_DOMAIN` (chii)
  - Web Domain yakaiitika muHestia inosimbisa WordPress yako (aliases dzichakwanisa kuwedzera pano).
- `WU_HESTIA_RESTART` (panguva panguva; default `yes`)
  - Kuona kana kutaura services panguva kubatana aliases.

Unogona kunge kuita kuti wizard inenge inyira constants iyi mu `wp-config.php`, kana kuwedzera zvakanaka.

## Kuti Unzire Setup {#verifying-setup}
- Mu step ya “Testing” ye wizard, plugin inosimbisa `v-list-web-domains <WU_HESTIA_ACCOUNT> json` kupi API. Response ya success inokumbira kuti connectivity uye authentication dzakazotora zvakanaka.
- Panguva unowanikira domain, chii muHestia: Web > base domain > Aliases. Unogona kuona alias yakashandiswa.

## Zvinangwa neTips {#notes--tips}
- Kuona kuti `WU_HESTIA_WEB_DOMAIN` inenge yakaita nekuti inogara uye inogarawe ne `WU_HESTIA_ACCOUNT`.
- Kana SSL inoda, ndonga certificates muHestia. Integration iyi inosimbisa aliases chete nguva iyi.
- Plugin inogona kuwedzera/kudza `www.<domain>` kana kuti kudza zvakare nekuti unenge uri munzira yakaita "www subdomain" ya Domain Mapping yako.

## Example API Call (cURL) {#example-api-call-curl}
Panguva iwe, iye ndiri example inosimbisa (adjust kune environment yako). Rurimi rine official doc kuti parameters dzakakosha.

```sh
Kuti kuti, ndiri munhu anogona kuita iye.

Kutaiswa:
*   HTTP error kubva kune API: chireve kuti `WU_HESTIA_API_URL` inenge ine zvinhu uye inosanganisira `/api`.
*   Mavhuta ekuramba (Auth errors): chireve kuti `WU_HESTIA_API_USER` uye kana `WU_HESTIA_API_PASSWORD` kana `WU_HESTIA_API_HASH` ine zvinhu zvakakosha.
*   "Missing account/base domain" mumakore (logs): chireve kuti `WU_HESTIA_ACCOUNT` uye `WU_HESTIA_WEB_DOMAIN` zvinogona kuva yakasiya kana zviri kuitika mu Hestia.

## Zvinhu Zvinogone Kuti Zvisanisiwe (References)
*   Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
*   Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias

**Kutaiswa:**
Kuti utave kuita iye, unofanira kutamba ne `cmd=v-add-web-domain-alias` uye kutaura nemashoko anonyanya kunge kuita iye (args) anonyanya.

```bash
cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (kana &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias kuita iye)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Kuti utaiswa (delete), unofanira kutamba ne `cmd=v-delete-web-domain-alias` uye kutaura nemashoko anonyanya anonyanya.
