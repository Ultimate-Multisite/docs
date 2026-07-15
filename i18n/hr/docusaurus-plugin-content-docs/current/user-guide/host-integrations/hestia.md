---
title: Integracija Hestia Control Panela
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integracija s Hestia Control Panelom

Ovaj vodič objašnjava kako podesiti integraciju Ultimate Multisite Hestie tako da domeni koji su mapirani u vašoj mreži automatski dodaju (i uklanjaju) kao Web Domain Aliase u Hestii.

- Referenca za Hestia CLI: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Zvanični dokument REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Što to radi {#what-it-does}
- Kada se domen mapira u Ultimate Multisite, integracija poziva Hestia API da izvrši sledeće komande:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kada se ukloni mape domena, izvršava se:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalno dodaje/uklanja alias `www.` ovisno o vašoj postavci "Auto-create www subdomain" u podešavanjima mape domena.

## Preduslovi {#prerequisites}
- Postojeći Hestia Web Domain koji već pokazuje na vaš instalaciju WordPressa. Integracija će vezati alase za ovaj osnovni domen.
- Omogućeni pristup Hestia APIju. Možete se autentifikovati koristeći lozinku ili API hash/token.

Pogledajte Hestie dokumentaciju REST APIja za omogućavanje pristupa APIju i detalje autentifikacije:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguracija (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Dajte sledeće vrijednosti:

- `WU_HESTIA_API_URL` (obavezno)
  - Osnovni API endpoint, obično `https://vaš-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obavezno)
  - Hestia korisničko ime koje se koristi za API komande (često je `admin`).
- `WU_HESTIA_API_PASSWORD` ili `WU_HESTIA_API_HASH` (bareno jedan)
  - Izaberite jednu metodu autentifikacije: lozinku ili API hash/token.
- `WU_HESTIA_ACCOUNT` (obavezno)
  - Račun (vlasnik) Web Domena u Hestii; ovo je prvi argument za CLI.
- `WU_HESTIA_WEB_DOMAIN` (obavezno)
  - Postojeći Hestia Web Domain koji služi vaš WordPress (alias će se dodavati ovdje).
- `WU_HESTIA_RESTART` (opciono; podrazumijevano `yes`)
  - Da li želite ponovno pokrenuti/priložiti usluge nakon promjene aliasa.

Možete omogućiti da ovaj wizard ubaci ove konstante u `wp-config.php`, ili ih definirati ručno.

## Provjera postavki {#verifying-setup}
- U koraku "Testiranje" u wizardu, plugin poziva `v-list-web-domains <WU_HESTIA_ACCOUNT> json` putem API-ja. Ulazna poruka potvrđuje konekciju i autentifikaciju.
- Nakon mapiranja domena, provjerite u Hestii: Web > osnovni domen > Alias. Trebali biste vidjeti dodan novi alias.

## Napomene i savjeti {#notes--tips}
- Osigurajte da `WU_HESTIA_WEB_DOMAIN` već postoji i da ga poseduje `WU_HESTIA_ACCOUNT`.
- Ako je SSL potreban, upravljajte sertifikatima u Hestii. Ova integracija trenutno obrađuje samo aliasove.
- Plugin može dodati/ukloniti `www.<domain>` ovisno o vašoj postavci Domain Mappingu "www subdomain".

## Primjer API poziva (cURL) {#example-api-call-curl}
Ispod je konceptualni primjer (prilagodite svom okruženju). Pogledajte službenu dokumentaciju za točne parametre.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ili &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias za dodavanja)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Za brisanje koristite `cmd=v-delete-web-domain-alias` i iste argumente.

## Rješavanje problema (Troubleshooting) {#troubleshooting}
- HTTP greška od API-ja: provjerite da li je `WU_HESTIA_API_URL` dostupan i sadrži `/api`.
- Greške za autentifikaciju: potvrdite da su postavljeni `WU_HESTIA_API_USER` i ili `WU_HESTIA_API_PASSWORD` ili `WU_HESTIA_API_HASH`.
- "Missing account/base domain" u logovima: provjerite da li su `WU_HESTIA_ACCOUNT` i `WU_HESTIA_WEB_DOMAIN` postavljeni i validni u Hestii.

## Referanse {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referenca (Alias): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
