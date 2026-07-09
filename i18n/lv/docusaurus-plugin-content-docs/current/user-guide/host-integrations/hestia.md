---
title: Hestijas kontrolpanelas integrācija
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrācija ar Hestia kontroli paneļiem {#hestia-control-panel-integration}

Šis ceids iepina, kā konfigurēt Ultimate Multisite Hestia integrāciju, lai automātiski pievienotu (un atņemtu) jūsu tīklā mapejas domēnus kā Web Domain Aliases Hestia.

- Hestias CLI referance: v-add-web-domain-alias / v-delete-web-domain-alias
- Oficiālā REST API dokumentācija: https://hestiacp.com/docs/server-administration/rest-api.html

## Kā tas darbojas {#what-it-does}
- Kad domēns tiek mapets Ultimate Multisite, integrācija sauc Hestias API, lai izrādītu šo:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kad atņemiet domēna mapešanu, tas izrādīs:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Optiāli pievieno/atņem `www.` aliasu atkarībā no jūsu "Auto-create www subdomain" iestatījuma Domānu Mapešanas iestatījumos.

## Priekšpalikumi {#prerequisites}
- Uzstādīts Hestias Web Domain, kas jau uzrauga jūsu WordPress instalācijai. Integrācija pievienos aliasus šim pamata domēnam.
- Aktīva Hestias API piekļuve. Jūs varat autenticēties gan ar paroli, gan ar API hash/tokenu.

Par Hestias REST API dokumentāciju atrodiet informāciju par API piekļuves un autentifikācijas detaļām:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurācija (Wizard → Integrācijas → Hestia) {#configuration-wizard--integrations--hestia}
Sniedz šādus vērtus:

`WU_HESTIA_API_URL` (nepieciešs)
  - Pamata API galvenais punkts, parasti tas ir `https://your-hestia-host:8083/api/`.
`WU_HESTIA_API_USER` (nepieciešs)
  - Hestias lietotājs, kas tiek izmantots API komandām (bieži `admin`).
`WU_HESTIA_API_PASSWORD` vai `WU_HESTIA_API_HASH` (vies kāds viens)
  - Izvēlieties vienu autentifikācijas metodu: paroli vai API hash/token.
`WU_HESTIA_ACCOUNT` (nepieciešs)
  - Web domēna konts (uzņēmējs) Hestia; tas ir pirmais arguments CLI programmai.
`WU_HESTIA_WEB_DOMAIN` (nepieciešs)
  - Saviriktā Hestias Web domēna, kas apkalpo jūsu WordPressu (alias tiek pievienoti šeit).
`WU_HESTIA_RESTART` (vies kāds; default `yes`)
  - Vai atkārtot/pārslēgt pakalojumus pēc alias maiņas.

Jūs varat ļaut wizard ielikt šos konstantes `wp-config.php`-ā, vai definēt tos maniski.

## Iestatījumu pārbaude {#verifying-setup}
- Wizardā "Tests" solī plugin sauc API ar `<WU_HESTIA_ACCOUNT>`: `v-list-web-domains <WU_HESTIA_ACCOUNT> json`. veiksmēja atbilde apstiprina savienojamību un autentifikāciju.
- Domēnu mapešanās pēc domēna mapešanas pārbaudiet Hestia: Web > galvenais domēns > Aliases. Jums jāredz, ka ir pievienots jauns alias.

## Piezīmes un padomi {#notes--tips}
- Nodrošiniet, ka `WU_HESTIA_WEB_DOMAIN` jau ir savukta un īpašniecīga `<WU_HESTIA_ACCOUNT>` konts.
- Ja nepieciešams SSL sertifikāts, pārvaldiet sertifikātus Hestia. Šī integrācija pašlaik apstrādā tikai alias.
- Plugin var arī pievienot/tāskļot `www.<domain>`, atkarībā no jūsu Domēnu Mapešanas "www subdomain" iestatījuma.

## API saucums (cURL) {#example-api-call-curl}
Šeit ir koncepcijai piemērots piemērs (pārbaudiet savu vidi). Referējieties oficiālajā dokumentācijā par precīzēm parametrus.

Lai izmantotu, lai pievienotu vebdomēnu aliasu, jums ir jāizmanto šāds komanda:

```bash
cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (vai &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Lai izslēgtu aliasu, izmantojiet `cmd=v-delete-web-domain-alias` un tos pašus argumentus.

## Kļūdu likums (Troubleshooting) {#troubleshooting}
- API kļūda HTTP: pārliecinieties, ka `WU_HESTIA_API_URL` ir pieejama un ietver `/api`.
- Autentifikācijas kļūdas: apstipriniet `WU_HESTIA_API_USER` un vai `WU_HESTIA_API_PASSWORD`, vai arī `WU_HESTIA_API_HASH`.
- "Base domēnas/kontas trūkums" logos: pārliecinieties, ka `WU_HESTIA_ACCOUNT` un `WU_HESTIA_WEB_DOMAIN` ir noteikti un pareizi iestatīti Hestia.

## References {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referanse (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
