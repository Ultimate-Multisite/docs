---
title: Integracija Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integracija s Hestia Control Panelom

Ta vodič pojasnjuje, kako konfigurirati integracijo Ultimate Multisite Hestia tako, da se domena, ki so na vaših omrežjih mapirane, samodejno dodajo (in odstranjujajo) kot Web Domain Aliase v Hestio.

- Referenca za Hestia CLI: / v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API dokumentacija: https://hestiacp.com/docs/server-administration/rest-api.html

## Kaj to naredi
- Ko je domena mapirana v Ultimate Multisite, integracija poziva Hestia API in izvršča:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ko se odstrani mapiranje domene, izvršča:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalno dodaja/odstranja alias `www.` v skladu z vašim nastavitvami "Auto-create www subdomain" v nastavitvah Mapiranja domen.

## Predhodni podatki
- Obstajajoča Hestia Web Domain, ki že usmerja na vaš WordPress inštaliran domene. Integracija bo aliase pripisala tej osnovni domeni.
- Omogočen dostop do Hestia API. Lahko se autentifikirate z iskanjem (password) ali s API hash/tokenom.

Za omogočanje dostopa do API in podrobnosti za autentifikacijo, glede na dokumentacijo Hestie:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguracija (Wizard → Integrations → Hestia)
Pridate naslednje vrednosti:

- `WU_HESTIA_API_URL` (obvezno)
  - Osnovna API endpoint, običajno je `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obvezno)
  - Hestia uporabniško za API komande (často je `admin`).
- `WU_HESTIA_API_PASSWORD` ali `WU_HESTIA_API_HASH` (vsaj en)
  - Izberite en način avtorizacije: geslo ali API hash/token.
- `WU_HESTIA_ACCOUNT` (obvezno)
  - Račun (lastnik) Web Domenja v Hestii; to je prvi argument za CLI.
- `WU_HESTIA_WEB_DOMAIN` (obvezno)
  - Obstajajoči Hestia Web Domain, ki služi vaš WordPress (aliasi se bodo tukaj pripisali).
- `WU_HESTIA_RESTART` (opcionalen; domnevalna vrednost `yes`)
  - Ali želite ponovno začenjati/reload servise po spremembi aliase.

Iščete lahko, da te wizard vstavil te konstante v `wp-config.php`, ali jih definirate ručno.

## Preverjanje postavitve
- Na koraku wizardja "Testiranje" plugin povzroči klic `v-list-web-domains <WU_HESTIA_ACCOUNT> json` preko API-ja. Uspešen odgovor potrjuje povezavo in avtorizacijo.
- Po mapiranju domena preverite v Hestii: Web > osnovni domen > Aliasi. Treba videti novo dodan aliase.

## Opombe in nasvete
- Preverite, da obstaja `WU_HESTIA_WEB_DOMAIN` in ga lastnik je `WU_HESTIA_ACCOUNT`.
- Če je SSL nujno, upravljajte sertifikate v Hestii. Ta integracija trenutno obravnava le aliase.
- Plugin lahko na podlagi nastavitve Mapiranja Domen (Domain Mapping) "www subdomain" tudi dodaja/odstranja `www.<domain>`.

## Primer API klica (cURL)
Spodaj je konceptualni primer (prilagodite ga vašemu okolju). Za natančne parametre se pozivajte na uradno dokumentacijo.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ali &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias za dodati)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Za brisanje uporabite `cmd=v-delete-web-domain-alias` in iste parametre.

## Reševanje težav
- HTTP napaka iz API: preverite, da je `WU_HESTIA_API_URL` dostopna in vključuje `/api`.
- Napake z avtorizacijo (Auth errors): potrdite, da so pravilno postavljeni `WU_HESTIA_API_USER` in bodisi `WU_HESTIA_API_PASSWORD` ali `WU_HESTIA_API_HASH`.
- "Missing account/base domain" v logih: preverite, da sta `WU_HESTIA_ACCOUNT` in `WU_HESTIA_WEB_DOMAIN` postavljena in validna v Hestii.

## Reference
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referenca za Hestia CLI (Aliase): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
