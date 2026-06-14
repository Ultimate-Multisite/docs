---
title: Integracija su Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integracija su Hestia Control Panel

Šis vadovas apibūdina, kaip nustatyti Ultimate Multisite Hestia integraciją, kad jūsų tinklo mapuoti domenai būtų automatiškai pridėti (ir pašalinti) kaip Web Domain Aliases (alias) v. Hestia.

- Hestia CLI referencija: / v-add-web-domain-alias / v-delete-web-domain-alias
- Oficiali REST API dokumentas: https://hestiacp.com/docs/server-administration/rest-api.html

## Kas tai padaro
- Kai domeną mapuojate Ultimate Multisite, integracija skatina Hestia API atlikti šias veiksmus:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kai pašalinate domenų mapavimą, ji atlieka šį veiksmą:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Jokiame atveju galima jokiame puslapyje pridėti/pašalinti alias „www.“, prieldant pagal jūsų nustatymus „Auto-create www subdomain“ (Automatinis `www` domenų subdomeno kūrimas`) Domenų mapavimo nustatymuose.

## Reikalavimai
- Eksistuoja jau egzistuojantis Hestia Web Domainas, kuris jau rodo į jūsų WordPress instalaciją. Integracija pridelės alias (alias) šiam pagrindiniam domenui.
- Įjungtas Hestia API prieiga. Jūs galite autentifikuotis naudojant paslaptį arba API hash/tokeną.

Pateikite Hestia REST API dokumentuose, kaip įveikti API prieigą ir autentifikavimo detales:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguravimas (Wizard → Integracijos → Hestia)
Įveskite šiuos vert.</

- `WU_HESTIA_API_URL` (reikalingas)
  - Pagrindinis API endpoint, tipicamente `https://jūsų-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (reikalingas)
  - Hestia vartotojas, naudojamas API komandoms (dažnai `admin`).
- `WU_HESTIA_API_PASSWORD` arba `WU_HESTIA_API_HASH` (labiausiai vieną)
  - Pasirinkite vieną autentifikavimo metodą: slaptažodį ar API hash/token.
- `WU_HESTIA_ACCOUNT` (reikalingas)
  - Web Domeno (nusiinys) paskyra Hestia; tai yra pirmasis argumentas CLI programos.
- `WU_HESTIA_WEB_DOMAIN` (reikalingas)
  - Esamas Hestia Web Domainas, kuris paslaugos jūsų WordPressui (aliavos bus priklausomai pridėtos čia).
- `WU_HESTIA_RESTART` (valikalis; pagrindinis vertimas `yes`)
  - Ar reikia atnaujinti/pakeisti paslaugas po aliasų keitimo.

Jūs galite leisti wizard įdėti šiuos konstantas į `wp-config.php`, arba nustatyti juos manuai.

## Nustatymų patikrinimas
- Wizardui „Testavimas“ etape, plėkštas skaliai `v-list-web-domains <WU_HESTIA_ACCOUNT> json` per API. Sėkmingas atsakymas patvirtina tinkamumo ir autentifikavimo.
- Po domenų nurodymo patikrinkite Hestia: Web > pagrindinis domenas > Aliasai. Jūs pamatysite naujo aliaso pridėto.

## Užduotys ir patarimai
- Įsitikinkite, kad `WU_HESTIA_WEB_DOMAIN` jau egzistuoja ir yra nusiinys `WU_HESTIA_ACCOUNT`.
- Jei reikalingas SSL, valdėkite sertifikatus Hestia. Ši integracija dabartiniam metu palaiko tik aliasus.
- Plėkštas gali pridėti/išimti `www.<domain>`, prieldant nuo jūsų Domenų Nurodymo „www subdomain“ nustatymų.

## API pavyzdys (cURL)
Štai konceptualinis pavyzdys (privaloma atitinkoti savo aplinkvę). Referuokite oficialiam dokumentui dėl tikslių parametrus.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (arba &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias, kurį, kurį pridėti)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Dėl pakeitimo (delete) naudokite `cmd=v-delete-web-domain-alias` ir tą pačią argumentus.

## Problemos atšalinimas
- API klaida HTTP: patikrinkite, ar `WU_HESTIA_API_URL` pasiekiama ir įskiria `/api`.
- Autentifikacijos klaidos: patvirtinkite `WU_HESTIA_API_USER` ir arba `WU_HESTIA_API_PASSWORD`, arba `WU_HESTIA_API_HASH`.
- „Trumpas/pagrindinis domenas trūksta“ logųje: užtikrinkite, kad `WU_HESTIA_ACCOUNT` ir `WU_HESTIA_WEB_DOMAIN` yra nustatyti ir galiojant Hestia.

## Referencijos
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referencijos (Aliasai): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
