---
title: Fampidirana Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Fandahana ny Fampidirana ao amin'ny Control Panel Hestia {#hestia-control-panel-integration}

Ity toromarika ity dia manazava ny fomba fanaovana "configuration" an'ny integration Ultimate Multisite Hestia mba hampidirana (sy hamoahana) ho aliases Web Domain ireo domain voafidy ao amin'ny tambajotra iainanao.

- Fandrefesana CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokam-barotra API ofisialy: https://hestiacp.com/docs/server-administration/rest-api.html

## Inona no ataony {#what-it-does}
- Rehefa voafidy (mapped) ny domain ao amin'ny Ultimate Multisite, dia mitondra antso an'ny Hestia API izy mba hanao:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Rehefa esorina ny fandefasana domain (domain mapping), dia miatrika izany izy:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Manampy/mamoaka raha ilaina ny alias `www.` arakaraka ny fepetra "Auto-create www subdomain" ao amin'ny Domain Mapping settings anao.

## Fepetra takiana (Prerequisites) {#prerequisites}
- Web Domain Hestia efa misy izay manondro mivantana ny installation WordPress anao. Ny integration dia hampiditra aliases eo amin'ity domain fototra ity.
- Azo ampiasaina ny API Hestia. Afaka mamaritra (authenticate) ianao amin'ny alalan'ny teny an-tsipiriany (password) na amin'ny alalan'ny API hash/token.

Jereo ny dokam-barotra REST API an'i Hestia mba hampandehanana ny fidirana amin'ny API sy ny antsipiriany momba ny famaritra:
https://hestiacp.com/docs/server-administration/rest-api.html

## Fandaharana (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Omeo ireo sandan'ny fampidirana manaraka:

- `WU_HESTIA_API_URL` (ilaina)
  - Ny lalan'ny API endpoint fototra, matetika dia `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (ilaina)
  - Mpamokatra Hestia ampiasaina ho an'ny baiko API (matetika dia `admin`).
- `WU_HESTIA_API_PASSWORD` na `WU_HESTIA_API_HASH` (indray)
  - Mifidiana fomba fanamarinana iray: teny anarana na API hash/token.
- `WU_HESTIA_ACCOUNT` (ilaina)
  - Ny kaonty (tompon'andraikitra) an'ny Web Domain ao Hestia; ity no voalohany amin'ny CLI.
- `WU_HESTIA_WEB_DOMAIN` (ilaina)
  - Ny Web Domain efa misy ao Hestia izay manome WordPress anao (izay hifandray dia atokona eto).
- `WU_HESTIA_RESTART` (safidy; ny valin-teny fototra dia `yes`)
  - Raha hamerenana/hanavao ny serivisy ve aorian'ny fanovana alias.

Afaka mamela ny wizard hampiditra ireo constants ireo ao amin'ny `wp-config.php`, na afaka manasongadina azy ireo manokana ianao.

## Fanamarinana ny Fandrafetana {#verifying-setup}
- Ao anatin'ny dingana “Testing” an'ny wizard, ny plugin dia mitondra `v-list-web-domains <WU_HESTIA_ACCOUNT> json` amin'ny alalan'ny API. Ny valin-teny fahombiazana dia manamarina ny fifandraisana sy ny fanamarinana.
- Aorian'ny fametrahana domain iray, jereo ao Hestia: Web > ny domain fototra > Aliases. Tokony hahita ny alias vaovao nampiana.

## Fanamarihana sy Torohevitra {#notes--tips}
- Ataovy antoka fa misy efa misy ny `WU_HESTIA_WEB_DOMAIN` ary an'ny `WU_HESTIA_ACCOUNT`.
- Raha ilaina ny SSL, dia dia mitantana ireo sertifika ao Hestia. Ity fampifandraisana ity dia mitantana alias ihany amin'izao fotoana izao.
- Mety hanampy na hamoaka ny `www.<domain>` arakaraka ny fandikana anao momba ny Domain Mapping “www subdomain”.

## Ohatra Fandaharana API (cURL) {#example-api-call-curl}
Ity ohatra teo aloha ity (tsara ho an'ny tontolo iainanao). Jereo ny dokamanta ofisialy ho an'ny fepetra marina.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (na &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias hoviana)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Ho an-tsiarina, ampiasao ny `cmd=v-delete-web-domain-alias` sy mitovy amin'ireo arguments ireo.

## Fandresena olana (Troubleshooting) {#troubleshooting}
- HTTP error avy amin'ny API: jereo raha azo itroka ny `WU_HESTIA_API_URL` ary misy `/api`.
- Olana momba ny fidirana (Auth errors): avereno fa marina ny `WU_HESTIA_API_USER` sy na `WU_HESTIA_API_PASSWORD` na `WU_HESTIA_API_HASH`.
- "Missing account/base domain" ao amin'ny logs: antsoy fa voafetra sy marina ny `WU_HESTIA_ACCOUNT` sy `WU_HESTIA_WEB_DOMAIN` tao amin'ny Hestia.

## Fanampiny (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Fampahafantarana ny Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
