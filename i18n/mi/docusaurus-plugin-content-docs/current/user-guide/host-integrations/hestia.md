---
title: Whakawhanaungatanga Panel Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Whakawhanaungatanga me te Control Panel o Hestia {#hestia-control-panel-integration}

Ko tēnei whakatairanga e whakamārama ana i te ara hei whakauru i te Ultimate Multisite Hestia, ko te whakamahi i āhuatanga domain (domain) i ngā wāhi o te wāhi ahau (network) kia te pakihihia (automatically added) me te whakatū (removed) katoa mōnaohanga web (Web Domain Aliases) i Hestia.

- Whakawāhi CLI o Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumati REST API ofi: https://hestiacp.com/docs/server-administration/rest-api.html

## He aha ia tino mahi? {#what-it-does}
- I roto i te wā e pakihihia (mapped) i Ultimate Multisite, ka whai te whakamahi (integration) ki te Hestia API kia whakamaoritia:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- I roto i te wā e whakatū (removed) te pakihihia domain, ka whakamaoritia ia:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- E taea ai te whai/whakatū te alias `www.` i runga i te setting "Auto-create www subdomain" o koe i Domain Mapping settings.

## Ngā mea e tika ana (Prerequisites) {#prerequisites}
- He Web Domain Hestia e pai anō, e pakihihia ki tō WordPress installation. Ka whai te whakamahi (integration) i ngā aliases ki tēnei domain mōrero (base domain).
- Whakawhanaungatanga API o Hestia e pai ana. He taea ai koe te whakamaoritia (authenticate) mā te password, hena API hash/token.

Patu i dokumati REST API o Hestia mō te whakatau i access API me ngā whakamahi whakawhanaungatanga:
https://hestiacp.com/docs/server-administration/rest-api.html

## Whakawāhi (Configuration) (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Whakaahua ngā mōhio nei:

- `WU_HESTIA_API_URL` (whānau) (required)
  - Te whakataki API base, i roto i te awhi, he tino pai ahau: `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (whānau) (required)
  - He user Hestia e whakamahia mō ngā amara API (he tino whai ake, he tino pai ahau): `admin`.
- `WU_HESTIA_API_PASSWORD` heta i `WU_HESTIA_API_HASH` (whānau) (at least one)
  - Whakarite te wahi whakamahi authentication: password heta API hash/token.
- `WU_HESTIA_ACCOUNT` (whānau) (required)
  - Te account (te tino whaiako) o te Web Domain i Hestia; ko te whakamāramatanga tūroa (first argument) ki te CLI.
- `WU_HESTIA_WEB_DOMAIN` (whānau) (required)
  - Te Web Domain e pai anō i Hestia e whaiako ai i tō WordPress (ko ko atu alias e whae ake ana i tēnei).
- `WU_HESTIA_RESTART` (whānau) (optional; default `yes`)
  - He aha te whakamāramatanga mō te whakamarama/restarting o ngā services i runga i te pēke alias.

Ko koe e taea ai te whaiaro i ko mga constant heera i `wp-config.php`, he tino pai ahau, ko koe e taea ai te whakaaro ana i ahau manuia (manually).

## Whakawātea Te Setup {#verifying-setup}
- I te pēke “Testing” o te wizard, ko te plugin e whai whakamahi `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via the API. He whaiaro response e tino pai ahau i te konei he tino pai ahau (connectivity) me authentication.
- I taiao i te domain, he whakačaka i Hestia: Web > te base domain > Aliases. Ko koe e taea ai te whakaaro ana i ko alias hou e pēnei.

## Ngā Tohutohu Me Whakawātea {#notes--tips}
- Kia tiaki i te `WU_HESTIA_WEB_DOMAIN` he tino pai ahau me he tino whaiako o `WU_HESTIA_ACCOUNT`.
- Ko te SSL (security) e pēnei, kia whakamaoritia ngā certificates i Hestia. He tino pai ahau i te integration ko e whae ake ana alias naku.
- Ko te plugin e taea ai te whae ake/whakamutunga `www.<domain>` i runga i tō setting Domain Mapping “www subdomain”.

## Whakare Tapu API Call (cURL) {#example-api-call-curl}
He tino pai ahau he mea whakamāramatanga (conceptual example) ko (adjust to your environment). Kia whaiaro te doc manual mō ngā parameters tika.

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

Mō te whakatika (delete), whakamahi `cmd=v-delete-web-domain-alias` me ngā samea i roto.

## Whakamārama (Troubleshooting) {#troubleshooting}
- HTTP error mai API: kia whakaoti ko `WU_HESTIA_API_URL` he tino tika ana me te whai i `/api`.
- Errors o Auth: kiawhakatika ko `WU_HESTIA_API_USER` me te `WU_HESTIA_API_PASSWORD` (me te `WU_HESTIA_API_HASH`) e tika ana.
- "Missing account/base domain" i ngā logs: kiawhakatika ko `WU_HESTIA_ACCOUNT` me `WU_HESTIA_WEB_DOMAIN` he tino tika ana me whakamahia ana i Hestia.

## Whakawātea (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
